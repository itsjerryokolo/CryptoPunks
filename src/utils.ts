import { ethereum } from "@graphprotocol/graph-ts";
import { CToken } from "../generated/schema";
import { getOrCreateCToken } from "./helpers/entityHelper";
import { getOrCreateCTokenTransfer } from "./helpers/transferHelper";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}

export function getLatestOwnerFromCToken(
  ctoken: CToken,
  event: ethereum.Event
): string {
  //Load entities, if they have the same globalID, it will return the the correct event
  let transfer = getOrCreateCTokenTransfer(event);
  let cToken = getOrCreateCToken(event);

  //Check if both events are the same
  if (transfer.id === cToken.id) {
    let owners = ctoken.owners;
    if (owners !== null) {
      return owners[owners.length - 1];
    } else {
      owners = new Array<string>();
      return owners[owners.length - 1];
    }
  }
}
