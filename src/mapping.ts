import { BigInt, Address, log } from "@graphprotocol/graph-ts";
import {
  Assign as Assigned,
  PunkTransfer,
  PunkOffered,
  PunkBidEntered,
  PunkBidWithdrawn,
  PunkBought,
  PunkNoLongerForSale,
  Transfer as cTokenTransfer,
} from "../generated/cryptopunks/cryptopunks";

import {
  Transfer as WrappedPunkTransfer,
  ProxyRegistered,
} from "../generated/WrappedPunks/WrappedPunks";

import { getTrait } from "./traits";

import { Punk, Trait, MetaData, UserProxy, Ask } from "../generated/schema";

import { ZERO_ADDRESS, WRAPPED_PUNK_ADDRESS } from "./constant";
import {
  getOrCreateAccount,
  createMetadata,
  getOrCreateAssign,
  getOrCreateSale,
  getOrCreateCToken,
} from "./helpers/entityHelper";

import { getOrCreateTransfer } from "./helpers/transferHelper";

import { getLatestOwnerFromCToken } from "./utils";

import {
  getOrCreateCryptoPunkContract,
  getOrCreateWrappedPunkContract,
} from "../src/helpers/contractHelper";

import { createWrap, createUnwrap } from "../src/helpers/wrapAndUnwrap";

import {
  createAskCreated,
  createAskRemoved,
  getOrCreateAsk,
} from "./helpers/askHelpers";

import {
  getOrCreateBid,
  createBidCreated,
  createBidRemoved,
  getLatestBidFromCToken,
  updateOldBid,
} from "../src/helpers/bidHelpers";

export function handleAssign(event: Assigned): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);

  let trait = getTrait(event.params.punkIndex.toI32());

  let account = getOrCreateAccount(event.params.to);
  let metadata = createMetadata(event.params.punkIndex);
  let contract = getOrCreateCryptoPunkContract(event.address);

  // Assign is always the first event that actually creates the punk
  let punk = new Punk(event.params.punkIndex.toString());
  punk.wrapped = false;
  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.to.toHexString();

  let assign = getOrCreateAssign(
    event.params.punkIndex,
    event.params.to,
    punk as Punk,
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

export function handleTransfer(event: cTokenTransfer): void {
  //We ignore transfers to ZERO_ADDRESS
  //acceptBidforPunk(): https://etherscan.io/tx/0x23d6e24628dabf4fa92fa93630e5fa6f679fac75071aab38d7e307a3c0f4a3ca#eventlog

  if (event.params.to.toHexString() != ZERO_ADDRESS) {
    let fromAccount = getOrCreateAccount(event.params.from);
    let toAccount = getOrCreateAccount(event.params.to);
    //The event {Transfer, PunkBought} will receive its correct logIndex if they are in same transaction (txHash)

    //Create a CToken entity to store the cTokenTransferIds
    // so we can compare/reference them against other events with their globalID(logIndex -1) //acceptBidForPunk()
    // so we can track owners in CToken
    let cToken = getOrCreateCToken(event);

    //Update fields
    cToken.from = event.params.from.toHexString();
    cToken.to = event.params.to.toHexString();
    cToken.owner = event.params.to.toHexString();
    cToken.amount = event.params.value;
    cToken.bidId = cToken.id;

    cToken.save();
    toAccount.save();
    fromAccount.save();
  }
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

    let transfer = getOrCreateTransfer(event.params.punkIndex, event); //TODO: Update remaining transfer fields, use schema as reference
    transfer.from = fromAccount.id;
    transfer.to = toAccount.id;

    //Update number of punks owned
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

    let punk = Punk.load(event.params.punkIndex.toString())!;
    punk.wrapped = true;

    punk.save();
  } else if (event.params.from.toHexString() == WRAPPED_PUNK_ADDRESS) {
    // Burn/Unwrap
    log.debug("Unwrapped detected. From: {}, punk: {}", [
      event.params.from.toHexString(),
      event.params.punkIndex.toString(),
    ]);

    let punk = Punk.load(event.params.punkIndex.toString())!;
    punk.wrapped = false;

    punk.save();
  }
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered: PunkIndex {}, toAddress: {}, hash: {}", [
    event.params.punkIndex.toString(),
    event.params.toAddress.toHexString(),
    event.transaction.hash.toHexString(),
  ]);

  let punk = Punk.load(event.params.punkIndex.toString())!;

  let askCreated = createAskCreated(event.params.punkIndex, event);
  askCreated.from = punk.owner;
  askCreated.amount = event.params.minValue;

  let ask = getOrCreateAsk(punk.owner, event);
  //Update Ask fields
  ask.from = punk.owner;
  ask.nft = punk.id;
  ask.amount = event.params.minValue;
  ask.created = askCreated.id;

  punk.currentAsk = ask.id; //Update the currentAsk for the punk in Punk entity for future reference

  ask.save();
  punk.save();
  askCreated.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  /**
   * first step: Create BidEvent //Record the event
   * second step: Create the bid //The product of the event
   *
   */
  log.debug("handlePunkBidCreatedEntered", []);

  let bidCreated = createBidCreated(
    event.params.punkIndex,
    event.params.fromAddress.toHexString(),
    event
  );
  let punk = Punk.load(event.params.punkIndex.toString())!;
  let account = getOrCreateAccount(event.params.fromAddress);

  let bid = getOrCreateBid(event.params.fromAddress.toHexString(), event);
  //Update bid fields
  bid.amount = event.params.value;
  bid.nft = punk.id;
  bid.created = bidCreated.id;

  //Create relationship with Bid
  bidCreated.bid = bid.id;
  bidCreated.amount = event.params.value;

  punk.currentBid = bid.id; //Update the currentBid for the punk in Punk entity for future reference

  bid.save();
  punk.save();
  account.save();
  bidCreated.save();
}
/**
 * first step: Create WithdrawnEvent
 * second step: Record Bid as closed
 */
export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  log.debug("handlePunkBidCreatedWithdrawn", []);

  let fromAccount = getOrCreateAccount(event.params.fromAddress);
  let punk = Punk.load(event.params.punkIndex.toString())!;

  //Record a BidRemoved event
  let bidRemoved = createBidRemoved(
    event.params.punkIndex,
    event.params.fromAddress.toHexString(),
    event
  );
  bidRemoved.amount = event.params.value;
  bidRemoved.nft = punk.id;

  //Create a Bid or Load it and close it
  let bid = getOrCreateBid(event.params.fromAddress.toHexString(), event);
  //Update Bid fields
  bid.amount = event.params.value;
  bid.open = false;
  bid.nft = punk.id;
  bid.removed = bidRemoved.id;

  //Create relationship with Bid
  bidRemoved.bid = bid.id;

  punk.save();
  bid.save();
  fromAccount.save();
  bidRemoved.save();
}

/*
  step one: Create a SaleEvent
  step two: We need to close bid when bid accepted, PunkBought
*/
export function handlePunkBought(event: PunkBought): void {
  //Catch acceptBidForPunk()
  if (event.params.toAddress.toHexString() == ZERO_ADDRESS) {
    //BidAccepted - createBidRemovedEvent
    //              createAskRemovedEvent
    //            - close Old Ask
    //            - close Old Bid
    //PunkBought - createSaleEvent
    //cToken Transfer_EVENT fires then PunkBought_EVENT (2 Events)
    //e.g https://etherscan.io/tx/0x23d6e24628dabf4fa92fa93630e5fa6f679fac75071aab38d7e307a3c0f4a3ca#eventlog

    //Regular PunkBought
    //https://etherscan.io/tx/0x0004ba250b29b0e2cda2e882c8bf5a14e7d2133e63bf0334fb1f44c716ccb187#eventlog

    let punk = Punk.load(event.params.punkIndex.toString())!;
    let contract = getOrCreateCryptoPunkContract(event.address);
    let fromAccount = getOrCreateAccount(event.params.fromAddress);

    //Create new BidRemovedEvent
    let bidRemoved = createBidRemoved(
      event.params.punkIndex,
      event.params.fromAddress.toHexString(),
      event
    );
    //Create new AskRemovedEvent
    let askRemoved = createAskRemoved(event.params.punkIndex, event);

    //Update Ask status of Punk
    let ask = getOrCreateAsk(event.params.fromAddress.toHexString(), event);
    //Update Ask fields
    ask.removed = askRemoved.id;
    ask.open = false;
    ask.nft = punk.id;

    //Update Old bid from cTokenTRANSFER to close it
    let oldBid = updateOldBid(fromAccount.id, getLatestBidFromCToken(event));

    //Update Old bid fields with new state
    oldBid.removed = bidRemoved.id;
    oldBid.open = false;
    oldBid.nft = punk.id;

    //Create relationship with OldBid
    //Create relationship with Ask
    bidRemoved.bid = oldBid.id;
    askRemoved.ask = ask.id;

    //Update Sale status of Punk
    let sale = getOrCreateSale(
      event.params.fromAddress,
      event.params.punkIndex.toString(),
      event
    );
    //Update Sale fields
    sale.to = getLatestOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID
    sale.amount = event.params.value;

    //Update Punk entity
    punk.purchasedBy = getLatestOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID
    punk.owner = getLatestOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID

    //Update tradeValues
    contract.totalAmountTraded = contract.totalAmountTraded.plus(
      event.params.value
    );
    contract.totalSales = contract.totalSales.plus(BigInt.fromI32(1));

    //Update account
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );
    //We get the true owner from CTokenTRANSFER event and decrement their holdings
    let toAccount = getOrCreateAccount(
      Address.fromString(getLatestOwnerFromCToken(event))
    );
    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    contract.save();
    bidRemoved.save();
    askRemoved.save();
    punk.save();
    ask.save();
    oldBid.save();
    sale.save();
    toAccount.save();
    fromAccount.save();
  } else {
    log.debug("handlePunkBought", []);
    //Regular PunkBought

    let punk = Punk.load(event.params.punkIndex.toString())!;
    let contract = getOrCreateCryptoPunkContract(event.address);
    let toAccount = getOrCreateAccount(event.params.toAddress);
    let fromAccount = getOrCreateAccount(event.params.fromAddress);

    //Create new AskRemoved
    let askRemoved = createAskRemoved(event.params.punkIndex, event);
    //Create new BidRemoved
    let bidRemoved = createBidRemoved(
      event.params.punkIndex,
      event.params.fromAddress.toHexString(),
      event
    );

    //Create Sale Event
    let sale = getOrCreateSale(event.params.fromAddress, punk.id, event);
    //Update sale fields
    sale.amount = event.params.value;
    sale.to = event.params.toAddress.toHexString();

    //Create or load Bid of Punk and Close it
    let bid = getOrCreateBid(event.params.fromAddress.toHexString(), event);
    //Update Bids fields
    bid.removed = bidRemoved.id;
    bid.open = false;
    bid.nft = punk.id;

    //Create or load Ask of Punk and Close it
    let ask = getOrCreateAsk(event.params.fromAddress.toHexString(), event);
    //Update Ask fields
    ask.removed = askRemoved.id;
    ask.open = false;
    ask.nft = punk.id;

    //Update Punk entity
    punk.purchasedBy = toAccount.id;
    punk.owner = toAccount.id;

    //Create relationship with Bid
    //Create relationship with Ask
    bidRemoved.bid = bid.id;
    askRemoved.ask = ask.id;

    //Update trade values
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

    ask.save();
    askRemoved.save();
    punk.save();
    fromAccount.save();
    bid.save();
    bidRemoved.save();
    toAccount.save();
    contract.save();
    sale.save();
  }
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  log.debug("handlePunkNoLongerForSale", []);

  let askRemoved = createAskRemoved(event.params.punkIndex, event);
  let punk = Punk.load(event.params.punkIndex.toString())!;
  let ask = getOrCreateAsk(punk.owner, event);
  //Update Ask fields
  ask.removed = askRemoved.id;
  ask.open = false;
  ask.nft = punk.id;

  askRemoved.ask = ask.id;

  punk.save();
  askRemoved.save();
  ask.save();
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
    let wrap = createWrap(
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
    let unWrap = createUnwrap(
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
    let transfer = getOrCreateTransfer(event.params.tokenId, event);
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
