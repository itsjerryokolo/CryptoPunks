import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { BidCreated, BidRemoved, Bid, Punk } from "../../generated/schema";
import { getGlobalId } from "../utils";
import { getOrCreateCToken } from "./entityHelper";

export function getOrCreateBid(
  fromAddress: string,
  event: ethereum.Event
): Bid {
  let bidId = getGlobalId(event).concat("-BID"); // -BID, To prevent conflict with interfaces with same ID
  let bid = Bid.load(bidId); //Should not be null
  if (!bid) {
    bid = new Bid(bidId);
    bid.from = fromAddress;
    bid.offerType = "BID";
    bid.open = true;
    bid.save(); //We have a new Bid entity in the store incase we need the ID elsewhere
  }

  //bid.created = "" // non-nullable, needs to be the id of createBidCreated in same handler
  //nft - needs to be updated from somewhere else
  //amount: BigInt! - needs to be updated from somewhere else
  //bid.removed = "" //needs to be the id of createBidRemoved in same handler

  bid.save();

  return bid as Bid;
}

export function updateOldBid(
  lastestBidId: string //call getLatestBidFromPunk() / getLatestBidFromCToken() depending on handler
): Bid {
  //Update Old Bid or State of Bid
  let toUpdateLatestBidId = lastestBidId;
  let oldBid = Bid.load(toUpdateLatestBidId)!;
  oldBid.open = false;
  oldBid.save();

  return oldBid as Bid;
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

export function getLatestBidfromPunk(punk: Punk): string {
  //Get latest BidID from Punk
  let latestId = punk.currentBid;
  if (latestId === null) {
    let id = punk.id;
    return id;
  } else {
    return latestId;
  }
}

export function getLatestBidFromCToken(event: ethereum.Event): string {
  //Load cToken which contains recent bidId
  let cToken = getOrCreateCToken(event);
  let acceptedBids = cToken.transfers;

  if (acceptedBids === null) {
    acceptedBids = [];
  }
  let latestBidId = acceptedBids[acceptedBids.length - 1];
  return latestBidId as string;
}
