import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { BidCreated, BidRemoved, Bid, Punk } from "../../generated/schema";

export function getOrCreateBid(
  fromAddress: string,
  punkIndex: Punk,
  event: ethereum.Event
): Bid {
  let bidId = fromAddress + "-" + punkIndex.id;
  let oldBidId = punkIndex.currentBid;

  let bid = Bid.load(bidId);

  // if (!bid) {
  //   bid = new Bid(bidId);
  //   bid.open = true;
  // } else {
  //   if (needed) {
  //     let archiveBid = new Bid(
  //       bidId +
  //         //Hash of new event
  //         event.transaction.hash.toHexString() +
  //         "-" +
  //         event.logIndex.toString()
  //     );
  //     archiveBid.merge([bid]);
  //     archiveBid.save();
  //   }
  //   bid.open = true;
  // }

  if (oldBidId !== null) {
    bid = new Bid(
      oldBidId
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.logIndex.toString())
    );
    bid.open = true;
  } else {
    bid = new Bid(bidId);
    bid.open = true;
  }

  bid.nft = punkIndex.id;
  bid.from = fromAddress;
  bid.offerType = "BID";
  bid.save();

  return bid as Bid;
}

export function createBidCreated(
  punkIndex: BigInt,
  fromAddress: string,
  event: ethereum.Event
): BidCreated {
  let bidCreated = new BidCreated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );

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

export function createBidRemoved(
  punkIndex: BigInt,
  fromAddress: string,
  event: ethereum.Event
): BidRemoved {
  let bidRemoved = new BidRemoved(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );

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
