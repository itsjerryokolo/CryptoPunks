import { Assign, MetaData, Punk } from "../../generated/schema";
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { getGlobalId } from "../utils";

export function getOrCreateAssign(
  punkIndex: BigInt,
  toAccount: Address,
  punk: Punk,
  metadata: MetaData,
  event: ethereum.Event
): Assign {
  let assign = Assign.load(getGlobalId(event));

  if (!assign) {
    assign = new Assign(getGlobalId(event));
  }
  assign.to = toAccount.toHexString();
  assign.nft = punkIndex.toString();
  assign.timestamp = event.block.timestamp;
  assign.contract = event.address.toHexString();
  assign.blockNumber = event.block.number;
  assign.txHash = event.transaction.hash;
  assign.blockHash = event.block.hash;
  punk.metadata = metadata.id;
  punk.assignedTo = toAccount.toHexString();
  punk.transferedTo = toAccount.toHexString();
  assign.type = "ASSIGN";
  assign.save();

  return assign as Assign;
}
