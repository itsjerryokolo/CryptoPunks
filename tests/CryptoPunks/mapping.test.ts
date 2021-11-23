import { BigInt, Address, ethereum } from "@graphprotocol/graph-ts";
import {
  assert,
  test,
  newMockEvent,
  createMockedFunction,
} from "matchstick-as/assembly/index";
import { log } from "matchstick-as/assembly/log";
import { logStore } from "matchstick-as/assembly/store";
import {
  Assign,
  PunkTransfer,
  Transfer,
} from "../../generated/cryptopunks/cryptopunks";
import { handleAssign, handlePunkTransfer } from "../../src/mapping";

const OWNER1 = "0x6f4a2d3a4f47f9c647d86c929755593911ee91ec";
const OWNER2 = "0xc36817163b7eaef25234e1d18adbfa52105ae510";

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

function createBlock(number: i32): ethereum.Block {
  let mockEvent = newMockEvent();

  let block = mockEvent.block;
  block.number = BigInt.fromI32(number);
  return block;
}

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
    createBlock(1),
    mockEvent.transaction,
    parameters
  );

  return assignEvent;
}

function createTransfer(
  from: Address,
  to: Address,
  punkIndex: i32
): PunkTransfer {
  let mockEvent = newMockEvent();

  let parameters = new Array<ethereum.EventParam>();

  parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  );
  parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  );
  parameters.push(
    new ethereum.EventParam("punkIndex", ethereum.Value.fromI32(punkIndex))
  );

  let transferEvent = new PunkTransfer(
    CRYPTOPUNKS_ADDRESS,
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    createBlock(2),
    mockEvent.transaction,
    parameters
  );

  return transferEvent;
}

test("test handleAssign", () => {
  let assignEvent = createAssign(Address.fromString(OWNER1), 1);
  handleAssign(assignEvent);
  assert.fieldEquals("Account", OWNER1, "numberOfPunksOwned", "1");
});

test("test Transfer", () => {
  let transferEvent = createTransfer(
    Address.fromString(OWNER1),
    Address.fromString(OWNER2),
    1
  );
  handlePunkTransfer(transferEvent);
  assert.fieldEquals("Account", OWNER1, "numberOfPunksOwned", "0");
  assert.fieldEquals("Account", OWNER2, "numberOfPunksOwned", "1");
  logStore();
});

test("testWrap", () => {});
test("testWrappedTransfer", () => {});
test("testUnwrap", () => {});
