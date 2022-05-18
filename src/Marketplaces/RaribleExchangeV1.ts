import { Buy as RaribleExchangeV1Buy } from "../../generated/RaribleExchangeV1/RaribleExchangeV1";
import { Punk } from "../../generated/schema";

import { WRAPPED_PUNK_ADDRESS, BIGINT_ONE, BIGINT_ZERO } from "../constant";

import { getOrCreateAccount, getOrCreateSale } from "../helpers/entityHelper";
import { calculateAverage, getContractAddress } from "../utils";

export function handleExchangeV1Buy(event: RaribleExchangeV1Buy): void {
  //RaribleExchangeV1 Contract - Track WRAPPEDPUNK SALE
  /**
     * ROOT ISSUE:  Punk 509 was sold while wrapped.
          https://cryptopunks.app/cryptopunks/accountinfo?account=0x0eb9a7ff5cbf719251989caf1599c1270eafb531
  
            example:
              - https://etherscan.io/tx/0x51583622e0dcfda43c6481ba073eb1bbd6b7f3ef98c28d3564918491344d8ce3#eventlog
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
    let fromAccount = getOrCreateAccount(event.params.owner);
    let toAccount = getOrCreateAccount(event.params.buyer);
    let punk = Punk.load(event.params.buyTokenId.toString())!;
    let sale = getOrCreateSale(
      event.params.owner,
      event.params.buyTokenId.toString(),
      event
    );

    sale.amount = event.params.buyValue;
    sale.to = event.params.buyer.toHexString();

    //Update fromAccount aggregates
    fromAccount.numberOfSales = fromAccount.numberOfSales.plus(BIGINT_ONE);
    fromAccount.totalEarned = fromAccount.totalEarned.plus(
      event.params.buyValue
    );

    //Update toAccount aggregates
    toAccount.totalSpent = toAccount.totalSpent.plus(event.params.buyValue);
    toAccount.numberOfPurchases = toAccount.numberOfPurchases.plus(BIGINT_ONE);

    //We only calculate average sale price if there are more than 0 sales so we don't divide by 0
    if (toAccount.numberOfPurchases != BIGINT_ZERO) {
      toAccount.averageAmountSpent = calculateAverage(
        toAccount.totalSpent,
        toAccount.numberOfPurchases
      );
    }

    //Update punk aggregates
    punk.totalAmountSpentOnPunk = punk.totalAmountSpentOnPunk.plus(
      event.params.buyValue
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
  }
}
