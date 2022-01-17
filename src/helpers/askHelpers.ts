import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Account, Ask, AskRemoved, AskCreated } from "../../generated/schema";

export function getOrCreateAsk(
  askRemoved: AskRemoved,
  askCreated: AskCreated,
  nft: BigInt,
  event: ethereum.Event
): Ask {
  let ask = Ask.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASK"
  );

  if (!ask) {
    ask = new Ask(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASK"
    );
    ask.open = true;
  }
  ask.nft = nft.toString();
  ask.created = askCreated.id;
  ask.offerType = "ASK";
  ask.removed = askRemoved.id;
  ask.save();

  return ask as Ask;
}

export function getOrCreateAskCreated(
  nft: BigInt,
  event: ethereum.Event
): AskCreated {
  let askCreated = AskCreated.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASKCREATED"
  );

  if (!askCreated) {
    askCreated = new AskCreated(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKCREATED"
    );
  }
  askCreated.type = "ASK_CREATED";
  askCreated.nft = nft.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHash = event.block.hash;
  askCreated.contract = event.address.toHexString();
  askCreated.save();

  return askCreated as AskCreated;
}

export function getOrCreateAskRemoved(
  nft: BigInt,
  event: ethereum.Event
): AskRemoved {
  let askRemoved = AskRemoved.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASKREMOVED"
  );

  if (!askRemoved) {
    askRemoved = new AskRemoved(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKREMOVED"
    );
  }
  askRemoved.type = "ASK_REMOVED";
  askRemoved.nft = nft.toString();
  askRemoved.timestamp = event.block.timestamp;
  askRemoved.blockNumber = event.block.number;
  askRemoved.txHash = event.transaction.hash;
  askRemoved.blockHash = event.block.hash;
  askRemoved.contract = event.address.toHexString();
  askRemoved.save();

  return askRemoved as AskRemoved;
}
