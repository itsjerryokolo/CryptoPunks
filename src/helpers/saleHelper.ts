import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts";
import { Sale } from "../../generated/schema";
import { getGlobalId } from "../utils";

export function getOrCreateSale(
  fromAddress: Address,
  punk: string,
  event: ethereum.Event
): Sale {
  let sale = Sale.load(getGlobalId(event).concat("-SALE"));

  if (!sale) {
    sale = new Sale(getGlobalId(event).concat("-SALE"));
    sale.contract = event.address.toHexString();
    sale.timestamp = event.block.timestamp;
    sale.blockNumber = event.block.number;
    sale.txHash = event.transaction.hash;
    sale.blockHash = event.block.hash;
    sale.type = "SALE";
  }
  /**
      Find out where to properly update this field
        sale.to = toAddress.toHexString(); ***DONE
    */
  sale.from = fromAddress.toHexString();
  sale.nft = punk.toString();

  sale.save();
  return sale as Sale;
}

export function updateSale(sale: Sale, price: BigInt, seller: Address): void {
  sale.amount = price;
  sale.to = seller.toHexString();
}
