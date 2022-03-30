import { ethereum } from "@graphprotocol/graph-ts";
import { CToken } from "../generated/schema";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}

export function getLatestOwnerFromCToken(ctoken: CToken): string {
  let owners = ctoken.owners;
  if (owners !== null) {
    return owners[owners.length - 1];
  } else {
    owners = new Array<string>();
    return owners[owners.length - 1];
  }
}
