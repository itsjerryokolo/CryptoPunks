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
import {
  ProxyRegistered,
  Transfer as WrappedPunkTransfer,
} from "../../generated/WrappedPunks/WrappedPunks";
import {
  handleAssign,
  handleProxyRegistered,
  handlePunkTransfer,
  handleWrappedPunkTransfer,
  WRAPPED_PUNK_ADDRESS,
  ZERO_ADDRESS,
} from "../../src/mapping";

const OWNER1 = "0x6f4a2d3a4f47f9c647d86c929755593911ee91ec";
const OWNER2 = "0xc36817163b7eaef25234e1d18adbfa52105ae510";
const PROXY2 = "0x674578060c0f07146BcC86D12B8a2efA1e819C38";

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

createMockedFunction(
  Address.fromString(WRAPPED_PUNK_ADDRESS),
  "symbol",
  "symbol():(string)"
).returns([ethereum.Value.fromString("WPUNKS")]);

createMockedFunction(
  Address.fromString(WRAPPED_PUNK_ADDRESS),
  "name",
  "name():(string)"
).returns([ethereum.Value.fromString("Wrapped Cryptopunks")]);

createMockedFunction(
  Address.fromString(WRAPPED_PUNK_ADDRESS),
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

function createPunkTransferEvent(
  from: Address,
  to: Address,
  punkIndex: i32,
  blockNumber: i32 = 2
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
    createBlock(blockNumber),
    mockEvent.transaction,
    parameters
  );

  return transferEvent;
}

function createWrappedPunkTransfer(
  from: Address,
  to: Address,
  tokenId: i32,
  blockNumber: i32 = 2
): WrappedPunkTransfer {
  let mockEvent = newMockEvent();

  let parameters = new Array<ethereum.EventParam>();

  parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  );
  parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  );
  parameters.push(
    new ethereum.EventParam("tokenId", ethereum.Value.fromI32(tokenId))
  );

  let transferEvent = new WrappedPunkTransfer(
    Address.fromString(WRAPPED_PUNK_ADDRESS),
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    createBlock(blockNumber),
    mockEvent.transaction,
    parameters
  );

  return transferEvent;
}

function createProxyRegisteredEvent(
  user: Address,
  proxy: Address
): ProxyRegistered {
  let mockEvent = newMockEvent();

  let parameters = new Array<ethereum.EventParam>();

  parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  );
  parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  );

  let proxyRegisteredEvent = new ProxyRegistered(
    Address.fromString(WRAPPED_PUNK_ADDRESS),
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    createBlock(3),
    mockEvent.transaction,
    parameters
  );

  return proxyRegisteredEvent;
}

test("test handleAssign", () => {
  let assignEvent = createAssign(Address.fromString(OWNER1), 1);
  handleAssign(assignEvent);
  assert.fieldEquals("Account", OWNER1, "numberOfPunksOwned", "1");
});

test("test Transfer", () => {
  let transferEvent = createPunkTransferEvent(
    Address.fromString(OWNER1),
    Address.fromString(OWNER2),
    1
  );
  handlePunkTransfer(transferEvent);
  assert.fieldEquals("Account", OWNER1, "numberOfPunksOwned", "0");
  assert.fieldEquals("Account", OWNER2, "numberOfPunksOwned", "1");
  logStore();
});

/**
 * Example: https://etherscan.io/tx/0x83f2c4b428b2ee5cf0c317fe72bb39716ca2e4d93597b3d80a8a2e60aa698d22
 * 1. registerProxy
 * 2. send Punk to Proxy
 * 3.1 transfer Punk from Proxy to wrapped punks
 * 3.2 transfer WrappedPunk from 0x0 to owner
 * Owner: 0xb4cf0f5f2ffed445ca804898654366316d0a779a
 * User Proxy: 0x674578060c0f07146BcC86D12B8a2efA1e819C38
 *
 */
test("testWrap", () => {
  handleProxyRegistered(
    createProxyRegisteredEvent(
      Address.fromString(OWNER2),
      Address.fromString(PROXY2)
    )
  );
  handlePunkTransfer(
    createPunkTransferEvent(
      Address.fromString(OWNER2),
      Address.fromString(PROXY2),
      1,
      4
    )
  );
  handlePunkTransfer(
    createPunkTransferEvent(
      Address.fromString(PROXY2),
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      1,
      5
    )
  );
  handleWrappedPunkTransfer(
    createWrappedPunkTransfer(
      Address.fromString(ZERO_ADDRESS),
      Address.fromString(OWNER2),
      1,
      5
    )
  );
  assert.fieldEquals("Account", OWNER2, "numberOfPunksOwned", "1");
  assert.fieldEquals(
    "Account",
    WRAPPED_PUNK_ADDRESS,
    "numberOfPunksOwned",
    "0"
  );
  logStore();
});

test("testWrappedTransfer", () => {});
test("testUnwrap", () => {});
