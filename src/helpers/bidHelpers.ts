import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { BidCreated, BidRemoved, Bid } from "../../generated/schema";

export function getOrCreateBid(
  account: Address,
  bidRemoved: BidRemoved,
  bidCreated: BidCreated,
  nft: BigInt,
  event: ethereum.Event
): Bid {
  let bid = Bid.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BID"
  );

  if (!bid) {
    bid = new Bid(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "BID"
    );
    bid.open = true;
  }
  bid.nft = nft.toString();
  bid.from = account.toHexString();
  bid.created = bidCreated.id;
  bid.offerType = "BID";
  bid.removed = bidRemoved.id;
  bid.save();

  return bid as Bid;
}

export function getOrCreateBidCreated(
  fromAddress: Address,
  nft: BigInt,
  event: ethereum.Event
): BidCreated {
  let bidCreated = BidCreated.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BIDCREATED"
  );

  if (!bidCreated) {
    bidCreated = new BidCreated(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "BIDCREATED"
    );
  }
  bidCreated.type = "BID_CREATED";
  bidCreated.nft = nft.toString();
  bidCreated.from = fromAddress.toHexString();
  bidCreated.timestamp = event.block.timestamp;
  bidCreated.blockNumber = event.block.number;
  bidCreated.txHash = event.transaction.hash;
  bidCreated.blockHash = event.block.hash;
  bidCreated.contract = event.address.toHexString();
  bidCreated.save();

  return bidCreated as BidCreated;
}

export function getOrCreateBidRemoved(
  fromAddress: Address,
  bidCreated: BidCreated,
  nft: BigInt,
  event: ethereum.Event
): BidRemoved {
  let bidRemoved = BidRemoved.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BIDREMOVED"
  );

  if (!bidRemoved) {
    bidRemoved = new BidRemoved(
      event.transaction.hash
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("BIDREMOVED")
    );
  }

  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = fromAddress.toHexString();
  bidRemoved.contract = event.address.toHexString();
  bidRemoved.nft = nft.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";
  bidRemoved.save();

  return bidRemoved as BidRemoved;
}
