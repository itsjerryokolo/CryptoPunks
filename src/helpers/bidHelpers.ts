import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  BidCreated,
  BidRemoved,
  CToken,
  Bid,
  Punk,
} from "../../generated/schema";
import { getGlobalId } from "../utils";
import { getOrCreateCToken } from "./entityHelper";

export function getOrCreateBid(
  fromAddress: string,
  event: ethereum.Event
): Bid {
  let bidId = getGlobalId(event).concat("-BID"); // -BID, To prevent conflict with interfaces with same ID
  let bid = Bid.load(bidId);
  if (!bid) {
    bid = new Bid(bidId);
    bid.from = fromAddress;
    bid.open = true;
    bid.save(); //We have a new Bid entity in the store incase we need the ID elsewhere
  }

  //bid.created = "" // non-nullable, needs to be the id of createBidCreated in same handler
  //nft - needs to be updated from somewhere else
  //amount: BigInt! - needs to be updated from somewhere else
  //bid.removed = "" //needs to be the id of createBidRemoved in same handler

  bid.offerType = "BID";
  bid.save();

  return bid as Bid;
}

export function createBidCreated(
  punkIndex: BigInt,
  fromAddress: string,
  event: ethereum.Event
): BidCreated {
  let bidCreated = new BidCreated(getGlobalId(event).concat("-BID_CREATED"));

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
  let bidRemoved = new BidRemoved(getGlobalId(event).concat("-BID_REMOVED"));

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

export function getLatestBidId(
  punk: Punk | null,
  event: ethereum.Event
): string {
  //get Global ID to compare with other entities in the same Event type
  //Load cToken which contains recent bidId
  let cToken = getOrCreateCToken(event);

  //Get latest BidID from Punk entity
  let latestId = punk.currentBid;

  //If Punk not found as argument(null), get ID of acceptedBids from cToken entity
  if (latestId === null) {
    let acceptedBids = cToken.transfers;

    //ensure that there is at least one acceptedBid
    if (acceptedBids === null) {
      acceptedBids = [];
    }
    if (acceptedBids !== null) {
      let lastestBidId = acceptedBids[acceptedBids.length - 1];
      return lastestBidId as string;
    }
  }
  //Punk exist as argument so we can get the current bid from $lastestId
  if (latestId !== null) {
    return latestId as string;
  }
}
