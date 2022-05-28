import { Address } from "@graphprotocol/graph-ts";
import { Buy as RaribleExchangeV1Buy } from "../../generated/RaribleExchangeV1/RaribleExchangeV1";
import { Punk } from "../../generated/schema";
import { WRAPPED_PUNK_ADDRESS } from "../constant";
import { getOrCreateSale } from "../helpers/saleHelper";
import {
  getOrCreateAccount,
  updateAccountAggregates,
} from "../helpers/accountHelper";
import {
  getOrCreateWrappedPunkContract,
  updateContractAggregates,
} from "../helpers/contractHelper";
import { updatePunkSaleAggregates } from "../../src/helpers/punkHelper";

import { updateSale } from "../helpers/saleHelper";
import { getContractAddress } from "../utils";

export function handleExchangeV1Buy(event: RaribleExchangeV1Buy): void {
  //RaribleExchangeV1 Contract - Track WRAPPEDPUNK SALE
  /**
     * ROOT ISSUE:  Punk 509 was sold while wrapped.
          https://cryptopunks.app/cryptopunks/accountinfo?account=0x0eb9a7ff5cbf719251989caf1599c1270eafb531
  
        - Example:
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
    let price = event.params.buyValue;
    let buyer = event.params.buyer;
    let seller = event.params.owner;
    let tokenId = event.params.buyTokenId.toString();

    let contract = getOrCreateWrappedPunkContract(
      Address.fromString(wrappedPunkContractAddress)
    );
    let fromAccount = getOrCreateAccount(seller);
    let toAccount = getOrCreateAccount(buyer);
    let punk = Punk.load(tokenId)!;
    let sale = getOrCreateSale(seller, tokenId, event);

    updateSale(sale, price, buyer);
    updateContractAggregates(contract, price);
    updateAccountAggregates(fromAccount, toAccount, price);
    updatePunkSaleAggregates(punk, price);

    //Write
    toAccount.save();
    fromAccount.save();
    sale.save();
    contract.save();
    punk.save();
  }
}
