import { BigInt, Address, Bytes, log } from "@graphprotocol/graph-ts";
import {
  Assign as Assigned,
  PunkTransfer,
  PunkOffered,
  PunkBidEntered,
  PunkBidWithdrawn,
  PunkBought,
  PunkNoLongerForSale,
} from "../generated/cryptopunks/cryptopunks";

import {
  Transfer as WrappedPunkTransfer,
  ProxyRegistered,
} from "../generated/WrappedPunks/WrappedPunks";

import { getTrait } from "./traits";

import {
  Account,
  BidCreated,
  Punk,
  Trait,
  BidRemoved,
  AskCreated,
  AskRemoved,
  MetaData,
  UserProxy,
} from "../generated/schema";

import { ZERO_ADDRESS, WRAPPED_PUNK_ADDRESS } from "./constant";
import {
  getOrCreateAccount,
  getOrCreateMetadata,
  getOrCreateAssign,
  getOrCreateSale,
  getOrCreateTransfer,
} from "./helpers/entityHelper";

import {
  getOrCreateCryptoPunkContract,
  getOrCreateWrappedPunkContract,
} from "../src/helpers/contractHelper";

import {
  getOrCreateWrap,
  getOrCreateUnWrap,
} from "../src/helpers/wrapAndUnwrap";

import {
  getOrCreateAsk,
  getOrCreateAskCreated,
  getOrCreateAskRemoved,
} from "./helpers/askHelpers";

import {
  getOrCreateBid,
  getOrCreateBidCreated,
  getOrCreateBidRemoved,
} from "../src/helpers/bidHelpers";

export function handleAssign(event: Assigned): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);

  let trait = getTrait(event.params.punkIndex.toI32());

  let account = getOrCreateAccount(event.params.to);
  let metadata = getOrCreateMetadata(event.params.punkIndex, event);
  let contract = getOrCreateCryptoPunkContract(event.address);

  // Assign is always the first event that actually creates the punk
  let punk = new Punk(event.params.punkIndex.toString());
  punk.wrapped = false;
  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.to.toHexString();

  let assign = getOrCreateAssign(
    event.params.punkIndex,
    punk as Punk,
    event.params.to,
    metadata as MetaData,
    event
  );

  if (trait !== null) {
    let traits = new Array<string>();
    let type = Trait.load(trait.type);
    if (!type) {
      type = new Trait(trait.type);
      type.type = "TYPE";
      type.numberOfNfts = BigInt.fromI32(0);
    }

    type.numberOfNfts = type.numberOfNfts.plus(BigInt.fromI32(1));
    type.save();
    traits.push(type.id);

    for (let i = 0; i < trait.accessories.length; i++) {
      let accessoryName = trait.accessories[i];
      let acessoryId = accessoryName.split(" ").join("-");
      let accessory = Trait.load(acessoryId);

      if (accessory == null) {
        accessory = new Trait(acessoryId);
        accessory.type = "ACCESSORY";
        accessory.numberOfNfts = BigInt.fromI32(0);
      }
      accessory.numberOfNfts = accessory.numberOfNfts.plus(BigInt.fromI32(1));
      accessory.save();
      traits.push(accessory.id);
    }

    metadata.traits = traits;
  }

  account.numberOfPunksOwned = account.numberOfPunksOwned.plus(
    BigInt.fromI32(1)
  );

  contract.totalSupply = contract.totalSupply.plus(BigInt.fromI32(1));

  account.save();
  assign.save();
  contract.save();
  metadata.save();
  punk.save();
}

export function handlePunkTransfer(event: PunkTransfer): void {
  log.debug("handlePunkTransfer from: {} to: {}", [
    event.params.from.toHexString(),
    event.params.to.toHexString(),
  ]);
  let fromProxy = UserProxy.load(event.params.from.toHexString());
  let toProxy = UserProxy.load(event.params.to.toHexString());

  if (toProxy !== null) {
    log.debug("PunkTransfer to proxy detected toProxy: {} ", [toProxy.id]);
    return;
  } else if (
    event.params.to.toHexString() != WRAPPED_PUNK_ADDRESS &&
    event.params.from.toHexString() != WRAPPED_PUNK_ADDRESS
  ) {
    log.debug("Regular punk transfer check: {} ", [
      event.params.punkIndex.toString(),
    ]);

    let toAccount = getOrCreateAccount(event.params.to);
    let fromAccount = getOrCreateAccount(event.params.from);
    let punk = Punk.load(event.params.punkIndex.toString())!;

    let transfer = getOrCreateTransfer(
      event.params.from,
      event.params.to,
      event.params.punkIndex,
      event,
      "TRANSFER"
    );

    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );

    // Capture punk transfers and owners if not transfered to WRAPPED PUNK ADDRESS
    punk.owner = toAccount.id;

    transfer.save();
    toAccount.save();
    fromAccount.save();
    punk.save();
  } else if (
    fromProxy !== null &&
    event.params.from.toHexString() == fromProxy.id &&
    event.params.to.toHexString() == WRAPPED_PUNK_ADDRESS
  ) {
    log.info("Wrap detected of punk: {} ", [event.params.punkIndex.toString()]);
    let wrap = getOrCreateWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      Address.fromString(fromProxy.user),
      event.params.punkIndex,
      event
    );

    let punk = Punk.load(event.params.punkIndex.toString())!;
    punk.wrapped = true;

    punk.save();
    wrap.save();
  } else if (event.params.from.toHexString() == WRAPPED_PUNK_ADDRESS) {
    // Burn/Unwrap
    log.debug("Unwrapt detected. From: {}, punk: {}", [
      event.params.from.toHexString(),
      event.params.punkIndex.toString(),
    ]);

    let punk = Punk.load(event.params.punkIndex.toString())!;

    let unWrap = getOrCreateUnWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.to,
      event.params.punkIndex,
      event
    );

    punk.wrapped = false;

    punk.save();
    unWrap.save();
  }
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered: PunkIndex {}, toAddress: {}, hash: {}", [
    event.params.punkIndex.toString(),
    event.params.toAddress.toHexString(),
    event.transaction.hash.toHexString(),
  ]);

  let askCreated = getOrCreateAskCreated(event.params.punkIndex, event);
  let askRemoved = getOrCreateAskRemoved(event.params.punkIndex, event);

  let punk = Punk.load(event.params.punkIndex.toString())!;
  let ask = getOrCreateAsk(
    askRemoved as AskRemoved,
    askCreated as AskCreated,
    event.params.punkIndex,
    event
  );

  //event.params.to currently emits to 0x0(ZERO_ADDRESS) and doesn't emit msg.sender
  //The previous owner remains the owner
  ask.from = punk.owner;
  askCreated.from = punk.owner;
  ask.amount = event.params.minValue;
  askCreated.amount = event.params.minValue;

  //Ask created to another account. offerPunkForSaleToAddress()
  if (event.params.toAddress.toHexString() != ZERO_ADDRESS) {
    let askCreated = getOrCreateAskCreated(event.params.punkIndex, event);
    let askRemoved = getOrCreateAskRemoved(event.params.punkIndex, event);
    let account = getOrCreateAccount(event.params.toAddress);
    let punk = Punk.load(event.params.punkIndex.toString())!;
    let ask = getOrCreateAsk(
      askRemoved as AskRemoved,
      askCreated as AskCreated,
      event.params.punkIndex,
      event
    );

    //The previous owner remains the owner
    ask.from = punk.owner;
    askCreated.from = punk.owner;
    askCreated.to = account.id;
    askCreated.amount = event.params.minValue;
    ask.amount = event.params.minValue;

    ask.save();
    punk.save();
    account.save();
    askRemoved.save();
    askCreated.save();
  }

  ask.save();
  punk.save();
  askRemoved.save();
  askCreated.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  log.debug("handlePunkBidCreatedEntered", []);

  let bidCreated = getOrCreateBidCreated(
    event.params.fromAddress,
    event.params.punkIndex,
    event
  );

  let bidRemoved = getOrCreateBidRemoved(
    event.params.fromAddress,
    bidCreated as BidCreated,
    event.params.punkIndex,
    event
  );

  let punk = Punk.load(event.params.punkIndex.toString())!;
  let account = getOrCreateAccount(event.params.fromAddress);

  let bid = getOrCreateBid(
    event.params.fromAddress,
    bidRemoved as BidRemoved,
    bidCreated as BidCreated,
    event.params.punkIndex,
    event
  );

  bid.amount = event.params.value;
  bidRemoved.amount = event.params.value;
  bidCreated.amount = event.params.value;

  bid.save();
  punk.save();
  account.save();
  bidRemoved.save();
  bidCreated.save();
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  log.debug("handlePunkBidCreatedWithdrawn", []);

  let bidCreated = getOrCreateBidCreated(
    event.params.fromAddress,
    event.params.punkIndex,
    event
  );

  let bidRemoved = getOrCreateBidRemoved(
    event.params.fromAddress,
    bidCreated as BidCreated,
    event.params.punkIndex,
    event
  );
  let account = getOrCreateAccount(event.params.fromAddress);
  let punk = Punk.load(event.params.punkIndex.toString())!;

  bidRemoved.amount = event.params.value;

  punk.save();
  account.save();
  bidRemoved.save();
  bidCreated.save();
}

export function handlePunkBought(event: PunkBought): void {
  log.debug("handlePunkBought", []);

  let sale = getOrCreateSale(
    event.params.toAddress,
    event.params.fromAddress,
    event.params.punkIndex,
    event
  );
  let punk = Punk.load(event.params.punkIndex.toString())!;
  let contract = getOrCreateCryptoPunkContract(event.address);
  let toAccount = getOrCreateAccount(event.params.toAddress);
  let fromAccount = getOrCreateAccount(event.params.fromAddress);

  sale.amount = event.params.value;

  contract.totalAmountTraded = contract.totalAmountTraded.plus(
    event.params.value
  );
  contract.totalSales = contract.totalSales.plus(BigInt.fromI32(1));

  // Note: buyPunk() does not emit a PunkTransfer event, so we need to keep track
  toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
    BigInt.fromI32(1)
  );

  fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
    BigInt.fromI32(1)
  );

  punk.purchasedBy = toAccount.id;
  punk.owner = toAccount.id;

  punk.save();
  fromAccount.save();
  toAccount.save();
  contract.save();
  sale.save();
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  log.debug("handlePunkNoLongerForSale", []);

  let askRemoved = getOrCreateAskRemoved(event.params.punkIndex, event);
  let askCreated = getOrCreateAskCreated(event.params.punkIndex, event);
  let punk = Punk.load(event.params.punkIndex.toString())!;

  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
  }

  askRemoved.ask = askCreated.id;

  punk.tokenId = event.params.punkIndex;

  punk.save();
  askCreated.save();
  askRemoved.save();
}

// This function is called for three events: Mint (Wrap), Burn (Unwrap) and Transfer
export function handleWrappedPunkTransfer(event: WrappedPunkTransfer): void {
  log.info("handleWrappedPunksTransfer tokenId: {} from: {} to: {}", [
    event.params.tokenId.toString(),
    event.params.from.toHexString(),
    event.params.to.toHexString(),
  ]);

  let contract = getOrCreateWrappedPunkContract(event.address);

  if (event.params.from.toHexString() == ZERO_ADDRESS) {
    // A wrapped punk is minted (wrapped)
    let wrap = getOrCreateWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.tokenId,
      event
    );

    contract.totalSupply = contract.totalSupply.plus(BigInt.fromI32(1));

    wrap.to = event.params.to.toHexString();
    wrap.save();
  } else if (event.params.to.toHexString() == ZERO_ADDRESS) {
    // A wrapped punk is burned (unwrapped)
    let unWrap = getOrCreateUnWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.to,
      event.params.tokenId,
      event
    );

    contract.totalSupply = contract.totalSupply.minus(BigInt.fromI32(1));

    unWrap.save();
  } else {
    // Wrapped Punk Transfer

    // We do not want to save a transfer for wrapped punk mints/burns
    let transfer = getOrCreateTransfer(
      event.params.from,
      event.params.to,
      event.params.tokenId,
      event,
      "WRAPPEDPUNKTRANSFER"
    );

    let toAccount = getOrCreateAccount(event.params.to);
    let fromAccount = getOrCreateAccount(event.params.from);
    let punk = Punk.load(event.params.tokenId.toString())!;

    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );
    punk.owner = toAccount.id;

    fromAccount.save();
    toAccount.save();
    transfer.save();
    punk.save();
  }

  contract.save();
}

export function handleProxyRegistered(event: ProxyRegistered): void {
  let userProxy = new UserProxy(event.params.proxy.toHexString());
  userProxy.user = event.params.user.toHexString();
  userProxy.timestamp = event.block.timestamp;
  userProxy.txHash = event.transaction.hash;
  userProxy.blockNumber = event.block.number;
  userProxy.blockHash = event.block.hash;
  userProxy.save();
}
