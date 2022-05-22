import { getOrCreateCToken } from "./helpers/entityHelper";

export function handleTransfer(event: Transfer): void {
  let cToken = getOrCreateCToken(event.params.tokenId);
  cToken.owner = event.params.to;
  cToken.save();
}
