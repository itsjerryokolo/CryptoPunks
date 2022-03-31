import { ethereum } from "@graphprotocol/graph-ts";
import { getOrCreateCToken } from "./helpers/entityHelper";
import { getOrCreateCTokenTransfer } from "./helpers/transferHelper";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}

export function getLatestOwnerFromCToken(event: ethereum.Event): string {
  //Load entities, if they have the same globalID, it will return the the correct event
  let transfer = getOrCreateCTokenTransfer(event);
  let cToken = getOrCreateCToken(event);

  let owners = cToken.owners;
  if (!owners) {
    owners = new Array<string>();
    owners.push(owners[owners.length - 1]);
    cToken.owners = owners; //Push new owner from Transfer entity since CTokenTransfer has the correct owner
  }
  let id = owners[owners.length - 1];
  cToken.save();

  return id;
}
