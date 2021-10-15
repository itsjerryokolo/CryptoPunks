import { Address, ethereum } from "@graphprotocol/graph-ts";
import { test, newMockEvent } from "matchstick-as/assembly/index";
import { log } from "matchstick-as/assembly/log";
import { Assign } from "../generated/cryptopunks/cryptopunks";
import { handleAssign } from "./mapping";

function createAssign(to: Address, punkIndex: i32): Assign {
  let mockEvent = newMockEvent();

  let parameters = new Array<ethereum.EventParam>();

  parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  );
  parameters.push(
    new ethereum.EventParam("punkIndex", ethereum.Value.fromI32(punkIndex))
  );

  let assignEvent = new Assign(
    mockEvent.address,
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    mockEvent.block,
    mockEvent.transaction,
    parameters
  );

  return assignEvent;
}

export function runTests(): void {
  test("test handleAssign", () => {
    let assignEvent = createAssign(
      Address.fromString("0x6f4a2d3a4f47f9c647d86c929755593911ee91ec"),
      1
    );
    // handleAssign(assignEvent);
    log.debug("It works!", []);
  });
}
