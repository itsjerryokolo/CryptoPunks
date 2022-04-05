import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { BidCreated, BidRemoved, Bid, CToken } from "../../generated/schema";
import { getGlobalId } from "../utils";

//Update the state of the last Bid
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

  //bid.created = "" // non-nullable, needs to be the id of createBidCreated in same handler ***DONE
  //nft - needs to be updated from somewhere else ***DONE
  //amount: BigInt! - needs to be updated from somewhere else ***DONE
  //bid.removed = "" //needs to be the id of createBidRemoved in same handler ***DONE
  //bid.open = false;

  return bid as Bid;
}

//Update the state of the last Bid using helper function
export function updateOldBid(
  fromAddress: string,
  latestBidIdFromReferenceId: string //getIdforReferenceFromCToken()
): Bid {
  //Update Old Bid or State of Bid
  let oldBidId = latestBidIdFromReferenceId;
  let oldBid = Bid.load(oldBidId.concat("-BID"));
  if (!oldBid) {
    oldBid = new Bid(oldBidId.concat("-BID"));
    oldBid.from = fromAddress;
    oldBid.offerType = "BID";
    oldBid.open = true;
    oldBid.save();
  }

  return oldBid as Bid;
}

//Record a new BidCreated EVENT anytime we observe one
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

//Record a new BidRemoved event anytime we observe one
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

export function getIdforReferenceFromCToken(event: ethereum.Event): string {
  //Load cToken which contains recent bidId
  //The TransferEvent fires first, then the PunkBoughtEvent for BIDACCEPTED
  //The TransferEvent fires first, PunkNoLongerForSale, then the PunkBoughtEvent for ASKACCEPTED
  //To load the cToken entity, which contains the referenceID in referenceId, into the PunkBought/PunkNoLongerForSale eventHandler, it will be the logIndex - 1
  let cTokenLogIndex = event.logIndex.minus(BigInt.fromI32(1));

  //This ID will always be the eventID following the new event (PunkBought) in the same Transaction
  let cToken = CToken.load(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(cTokenLogIndex.toString())
  )!;

  //Summon the cToken bidID
  let referenceId = cToken.referenceId;

  //returns the ID of the bid so we can update the bid with values not in that cTokenTransfer event, but in the (PunkBought) event
  return referenceId as string;
}
