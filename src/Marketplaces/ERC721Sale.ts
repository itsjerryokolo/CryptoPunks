import { Address } from "@graphprotocol/graph-ts";
import { Punk } from "../../generated/schema";
import { Buy as ERC721Sale } from "../../generated/ERC721Sale/ERC721Sale";
import { getContractAddress, calculateAverage } from "../utils";
import { getOrCreateAccount, getOrCreateSale } from "../helpers/entityHelper";
import { getOrCreateWrappedPunkContract } from "../helpers/contractHelper";
import { BIGINT_ONE, BIGINT_ZERO, WRAPPED_PUNK_ADDRESS } from "../constant";

export function handleBuy(event: ERC721Sale): void {
  //ERC721Sale Contract - Track WRAPPEDPUNK SALE
  /**
     * ROOT ISSUE:  Punk 4216 was sold while wrapped.
          https://cryptopunks.app/cryptopunks/accountinfo?account=0x0c8e854729144ab6405939819f461764647f52ed
  
            This is an example of a sale that occurs before a punk is unwrapped.
              - https://etherscan.io/tx/0xae3fc4123415e985850f9d41dc162a84c0b6a976ead1deedecf0c2bad66685e2#eventlog
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
    let contract = getOrCreateWrappedPunkContract(
      Address.fromString(wrappedPunkContractAddress)
    );
    let fromAccount = getOrCreateAccount(event.params.seller);
    let toAccount = getOrCreateAccount(event.params.buyer);
    let punk = Punk.load(event.params.tokenId.toString())!;
    let sale = getOrCreateSale(
      event.params.seller,
      event.params.tokenId.toString(),
      event
    );

    sale.amount = event.params.price;
    sale.to = event.params.buyer.toHexString();

    //Update fromAccount aggregates
    fromAccount.numberOfSales = fromAccount.numberOfSales.plus(BIGINT_ONE);
    fromAccount.totalEarned = fromAccount.totalEarned.plus(event.params.price);

    //Update toAccount aggregates
    toAccount.totalSpent = toAccount.totalSpent.plus(event.params.price);
    toAccount.numberOfPurchases = toAccount.numberOfPurchases.plus(BIGINT_ONE);

    //We only calculate average sale price if there are more than 0 sales so we don't divide by 0
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
