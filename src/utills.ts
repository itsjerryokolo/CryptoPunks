import { ethereum } from "@graphprotocol/graph-ts";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}
