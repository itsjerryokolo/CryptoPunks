import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { BidCreated, BidRemoved, Bid } from "../../generated/schema";

export function getOrCreateBid(
  fromAddress: string,
  punkIndex: BigInt,
  needed: boolean,
  event: ethereum.Event
): Bid {
  let bidId = fromAddress + "-" + punkIndex.toString();

  let bid = Bid.load(bidId);

  if (!bid) {
    bid = new Bid(bidId);
    bid.open = true;
  } else {
    if (needed) {
      let archiveBid = new Bid(
        bidId +
          //Hash of new event
          event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString()
      );
      archiveBid.merge([bid]);
      archiveBid.save();
    }
    bid.open = true;
  }

  bid.nft = punkIndex.toString();
  bid.from = fromAddress;
  bid.offerType = "BID";
  bid.save();

  return bid as Bid;
}

export function getOrCreateBidCreated(
  fromAddress: string,
  punkIndex: BigInt,
  needed: boolean,
  event: ethereum.Event
): BidCreated {
  let bidCreatedId = fromAddress + "-" + punkIndex.toString();

  let bidCreated = BidCreated.load(bidCreatedId);

  if (!bidCreated) {
    bidCreated = new BidCreated(bidCreatedId);
  } else {
    if (needed) {
      let archiveBidCreated = new BidCreated(
        bidCreatedId +
          //Hash of new event
          event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString()
      );
      archiveBidCreated.merge([bidCreated]);
      archiveBidCreated.save();
    }
  }

  bidCreated.type = "BID_CREATED";
  bidCreated.nft = punkIndex.toString();
  bidCreated.from = fromAddress;
  bidCreated.timestamp = event.block.timestamp;
  bidCreated.blockNumber = event.block.number;
  bidCreated.txHash = event.transaction.hash;
  bidCreated.blockHash = event.block.hash;
  bidCreated.contract = event.address.toHexString();
  bidCreated.save();

  return bidCreated as BidCreated;
}

export function getOrCreateBidRemoved(
  fromAddress: string,
  punkIndex: BigInt,
  needed: boolean,
  event: ethereum.Event
): BidRemoved {
  let bidRemovedId = fromAddress + "-" + punkIndex.toString();

  let bidRemoved = BidRemoved.load(bidRemovedId);

  if (!bidRemoved) {
    bidRemoved = new BidRemoved(bidRemovedId);
  } else {
    if (needed) {
      let archiveBidRemoved = new BidRemoved(
        bidRemovedId +
          //Hash of new event
          event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString()
      );
      archiveBidRemoved.merge([bidRemoved]);
      archiveBidRemoved.save();
    }
  }

  bidRemoved.from = fromAddress;
  bidRemoved.contract = event.address.toHexString();
  bidRemoved.nft = punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";
  bidRemoved.save();

  return bidRemoved as BidRemoved;
}
