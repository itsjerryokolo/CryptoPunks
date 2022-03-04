import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Account, Ask, AskRemoved, AskCreated } from "../../generated/schema";

export function getOrCreateAsk(
  fromAddress: string,
  punkIndex: BigInt,
  needed: boolean,
  event: ethereum.Event
): Ask {
  let askId = fromAddress + "-" + punkIndex.toString();

  let ask = Ask.load(askId);

  if (!ask) {
    ask = new Ask(askId);
    ask.open = true;
  } else {
    if (needed) {
      let archiveAsk = new Ask(
        askId +
          //Hash of new event
          event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString()
      );
      archiveAsk.merge([ask]);
      archiveAsk.save();
    }
    ask.open = true;
  }
  ask.nft = punkIndex.toString();
  ask.offerType = "ASK";
  ask.save();

  return ask as Ask;
}

export function getOrCreateAskCreated(
  fromAddress: string,
  punkIndex: BigInt,
  needed: boolean,
  event: ethereum.Event
): AskCreated {
  let askCreatedId = fromAddress + "-" + punkIndex.toString();

  let askCreated = AskCreated.load(askCreatedId);

  if (!askCreated) {
    askCreated = new AskCreated(askCreatedId);
  } else {
    if (needed) {
      let archiveaskCreated = new AskCreated(
        askCreatedId +
          //Hash of new event
          event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString()
      );
      archiveaskCreated.merge([askCreated]);
      archiveaskCreated.save();
    }
  }
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

export function getOrCreateAskRemoved(
  fromAddress: string,
  punkIndex: BigInt,
  needed: boolean,
  event: ethereum.Event
): AskRemoved {
  let askRemovedId = fromAddress + "-" + punkIndex.toString();

  let askRemoved = AskRemoved.load(askRemovedId);

  if (!askRemoved) {
    askRemoved = new AskRemoved(askRemovedId);
  } else {
    if (needed) {
      let archiveAskRemoved = new AskRemoved(
        askRemovedId +
          //Hash of new event
          event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString()
      );
      archiveAskRemoved.merge([askRemoved]);
      archiveAskRemoved.save();
    }
  }
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
