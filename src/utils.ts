import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { CToken } from "../generated/schema";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}

export function getCurrentOwnerFromCToken(event: ethereum.Event): string {
  let cTokenLogIndex = event.logIndex.minus(BigInt.fromI32(1));

  let cToken = CToken.load(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(cTokenLogIndex.toString())
  )!;
  let owner = cToken.owner;

  return owner;
}

export function getPreviousOwnerFromCToken(event: ethereum.Event): string {
  let cTokenLogIndex = event.logIndex.minus(BigInt.fromI32(1));

  let cToken = CToken.load(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(cTokenLogIndex.toString())
  )!;
  let previousOwner = cToken.from;

  return previousOwner;
}
