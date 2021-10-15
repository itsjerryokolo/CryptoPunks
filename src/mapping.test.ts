import { Address, ethereum } from "@graphprotocol/graph-ts";
import {
  test,
  newMockEvent,
  createMockedFunction,
} from "matchstick-as/assembly/index";
import { log } from "matchstick-as/assembly/log";
import { Assign } from "../generated/cryptopunks/cryptopunks";
import { handleAssign } from "./mapping";

const CRYPTOPUNKS_ADDRESS = Address.fromString(
  "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
);

createMockedFunction(
  CRYPTOPUNKS_ADDRESS,
  "symbol",
  "symbol():(string)"
).returns([ethereum.Value.fromString("Ͼ")]);

createMockedFunction(CRYPTOPUNKS_ADDRESS, "name", "name():(string)").returns([
  ethereum.Value.fromString("CryptoPunks"),
]);

createMockedFunction(
  CRYPTOPUNKS_ADDRESS,
  "imageHash",
  "imageHash():(string)"
).returns([
  ethereum.Value.fromString(
    "ac39af4793119ee46bbff351d8cb6b5f23da60222126add4268e261199a2921b"
  ),
]);

createMockedFunction(
  CRYPTOPUNKS_ADDRESS,
  "totalSupply",
  "totalSupply():(uint256)"
).returns([ethereum.Value.fromI32(1)]);

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
    CRYPTOPUNKS_ADDRESS,
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
    handleAssign(assignEvent);
    log.debug("It works!", []);
  });
}
