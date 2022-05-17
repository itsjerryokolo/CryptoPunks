import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { CToken } from "../generated/schema";
import { BIGINT_ONE } from "./constant";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}

export function getOwnerFromCToken(event: ethereum.Event): string {
  let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE);
  let id = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(cTokenLogIndex.toString());

  let cToken = CToken.load(id);
  if (!cToken) {
    cToken = new CToken(id);
    cToken.blockNumber = event.block.number;
    cToken.referenceId = cToken.id;
    cToken.blockHash = event.block.hash;
    cToken.txHash = event.transaction.hash;
    cToken.timestamp = event.block.timestamp;
    cToken.save();
  }

  let owner = cToken.owner;

  return owner;
}

export function getHashFromCToken(event: ethereum.Event): string {
  let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE);
  let id = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(cTokenLogIndex.toString());

  let cToken = CToken.load(id)!;
  let txHash = cToken.txHash.toHexString();
  return txHash;
}
export function calculateAverage(totalAmount: BigInt, qty: BigInt): BigInt {
  let average = totalAmount.div(qty);
  return average;
}
