import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { AskRemoved, AskCreated } from "../../generated/schema";
import { getGlobalId } from "../utills";

export function createAskCreated(
  punkIndex: BigInt,
  event: ethereum.Event
): AskCreated {
  let askCreatedId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString())
    .concat("-ASK_CREATED");

  let askCreated = new AskCreated(askCreatedId);

  askCreated.type = "ASK_CREATED";
  askCreated.nft = punkIndex.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHash = event.block.hash;
  askCreated.contract = event.address.toHexString();
  askCreated.save();

  return askCreated as AskCreated;
}

export function createAskRemoved(
  punkIndex: BigInt,
  event: ethereum.Event
): AskRemoved {
  let askRemoved = new AskRemoved(getGlobalId(event).concat("-ASK_REMOVED"));

  askRemoved.type = "ASK_REMOVED";
  askRemoved.nft = punkIndex.toString();
  askRemoved.timestamp = event.block.timestamp;
  askRemoved.blockNumber = event.block.number;
  askRemoved.txHash = event.transaction.hash;
  askRemoved.blockHash = event.block.hash;
  askRemoved.contract = event.address.toHexString();
  askRemoved.save();

  return askRemoved as AskRemoved;
}
