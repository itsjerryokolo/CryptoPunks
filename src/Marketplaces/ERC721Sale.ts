import { Address } from "@graphprotocol/graph-ts";
import { Punk } from "../../generated/schema";
import { Buy as ERC721Sale } from "../../generated/ERC721Sale/ERC721Sale";
import { getContractAddress } from "../utils";
import { updatePunkSaleAggregates } from "../../src/helpers/punkHelper";

import {
  getOrCreateAccount,
  updateAccountAggregates,
} from "../helpers/accountHelper";
import {
  getOrCreateWrappedPunkContract,
  updateContractAggregates,
} from "../helpers/contractHelper";
import { getOrCreateSale } from "../helpers/saleHelper";
import { updateSale } from "../helpers/saleHelper";
import { WRAPPED_PUNK_ADDRESS } from "../constant";

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
    let price = event.params.price;
    let buyer = event.params.buyer;
    let seller = event.params.seller;
    let tokenId = event.params.tokenId.toString();

    let contract = getOrCreateWrappedPunkContract(
      Address.fromString(wrappedPunkContractAddress)
    );
    let fromAccount = getOrCreateAccount(seller);
    let toAccount = getOrCreateAccount(buyer);
    let punk = Punk.load(tokenId)!;
    let sale = getOrCreateSale(seller, tokenId, event);

    updateSale(sale, price, buyer);
    updateAccountAggregates(fromAccount, toAccount, price);
    updateContractAggregates(contract, price);
    updatePunkSaleAggregates(punk, price);

    toAccount.save();
    fromAccount.save();
    sale.save();
    punk.save();
    contract.save();
  }
}
