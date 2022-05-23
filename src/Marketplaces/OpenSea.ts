import { Address } from "@graphprotocol/graph-ts";
import { OrdersMatched } from "../../generated/Opensea/Opensea";
import { Punk } from "../../generated/schema";
import { WRAPPED_PUNK_ADDRESS, BIGINT_ONE, BIGINT_ZERO } from "../constant";
import { getOrCreateAccount, getOrCreateSale } from "../helpers/entityHelper";
import { getOrCreateWrappedPunkContract } from "../helpers/contractHelper";
import {
  calculateAverage,
  getContractAddress,
  getPunkId,
  getMakerAddress,
} from "../utils";

export function handleOpenSeaSale(event: OrdersMatched): void {
  //OpenSea Contract - Track WRAPPEDPUNK sale
  /**
     * ROOT ISSUE:  Punk 7443 was sold on Opensea while wrapped.
       Account: https://cryptopunks.app/cryptopunks/accountinfo?account=0x0eb9a7ff5cbf719251989caf1599c1270eafb531
        - Example:
            - https://etherscan.io/tx/0xac6acdca9aeb00238ff885dcd4e697afd1cfa8ba75ef69622f786b96f8d164cf#eventlog
        - We want to capture this so we can calculate average prices & update other aggregates both for punk & account
    */

  let wrappedPunkContractAddress = getContractAddress(event);

  /**
   * We filter out wrappedPunk transactions by ensuring
   *    - both events occur in the same transaction
   *    - it's the wrappedPunk contract address that emitted it
   */
  if (
    wrappedPunkContractAddress !== null &&
    wrappedPunkContractAddress == WRAPPED_PUNK_ADDRESS
  ) {
    //We get the tokenId from the Transfer event because OrderMatched doesn't emit it.
    let tokenId = getPunkId(event);

    //All the operations below wouldn't make sense without the punkId, so we ensure it exists.
    if (tokenId !== null) {
      //Regular WrappedPunk Sale

      let contract = getOrCreateWrappedPunkContract(
        Address.fromString(wrappedPunkContractAddress)
      );
      let fromAccount = getOrCreateAccount(event.params.maker);
      let toAccount = getOrCreateAccount(event.params.taker);
      let punk = Punk.load(tokenId)!;
      let sale = getOrCreateSale(event.params.taker, tokenId, event);

      sale.amount = event.params.price;
      sale.to = event.params.taker.toHexString();

      //Update fromAccount aggregates
      fromAccount.numberOfSales = fromAccount.numberOfSales.plus(BIGINT_ONE);
      fromAccount.totalEarned = fromAccount.totalEarned.plus(
        event.params.price
      );

      //Update toAccount aggregates
      toAccount.totalSpent = toAccount.totalSpent.plus(event.params.price);
      toAccount.numberOfPurchases = toAccount.numberOfPurchases.plus(
        BIGINT_ONE
      );

      //We only calculate average amount spent if there are more than 0 purchases so we don't divide by 0
      if (toAccount.numberOfPurchases != BIGINT_ZERO) {
        toAccount.averageAmountSpent = calculateAverage(
          toAccount.totalSpent,
          toAccount.numberOfPurchases
        );
      }

      //Update contract aggregates
      contract.totalSales = contract.totalSales.plus(BIGINT_ONE);
      contract.totalAmountTraded = contract.totalAmountTraded.plus(
        event.params.price
      );

      /**
       * A wrappedPunk bid can be accepted on OpenSea.
       * We want to capture this sale.
       *      - The major difference between this and a regular sale is that
       *          - the maker becomes the buyer --> (toAccount)
       *          - the taker becomes the seller --> (fromAccount)
       *    Example: https://etherscan.io/tx/0x0e44a5eb1d553ab2daacf43fd50bcd73f030e739de009368a9f2897150e1215d#eventlog
       */

      // Getting the maker address from the toAccount in the wrappedPunk transfer event confirms that the maker is the buyer
      // because in the OrderMatched event, the maker is the seller.
      let makerAddress = getMakerAddress(event);
      if (
        makerAddress !== null &&
        makerAddress == event.params.maker.toHexString()
      ) {
        let sale = getOrCreateSale(event.params.maker, tokenId, event);

        let fromAccount = getOrCreateAccount(event.params.taker);
        let toAccount = getOrCreateAccount(event.params.maker);

        sale.amount = event.params.price;
        sale.to = event.params.maker.toHexString();

        //Update toAccount aggregates
        toAccount.numberOfSales = fromAccount.numberOfSales.plus(BIGINT_ONE);
        toAccount.totalEarned = fromAccount.totalEarned.plus(
          event.params.price
        );

        //Update fromAccount aggregates
        fromAccount.totalSpent = toAccount.totalSpent.plus(event.params.price);
        fromAccount.numberOfPurchases = toAccount.numberOfPurchases.plus(
          BIGINT_ONE
        );
        //We only calculate average amount spent if there are more than 0 purchases so we don't divide by 0
        if (fromAccount.numberOfPurchases != BIGINT_ZERO) {
          fromAccount.averageAmountSpent = calculateAverage(
            fromAccount.totalSpent,
            fromAccount.numberOfPurchases
          );
        }
        sale.save();
        toAccount.save();
        fromAccount.save();
      }

      //Update punk aggregates
      punk.totalAmountSpentOnPunk = punk.totalAmountSpentOnPunk.plus(
        event.params.price
      );

      //We only calculate average sale price if there are more than 0 sales so we don't divide by 0
      if (punk.numberOfSales != BIGINT_ZERO) {
        punk.averageSalePrice = calculateAverage(
          punk.totalAmountSpentOnPunk,
          punk.numberOfSales
        );
      }

      toAccount.save();
      fromAccount.save();
      sale.save();
      punk.save();
      contract.save();
    }
  }
}
