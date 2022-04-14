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

import {
  Punk,
  Trait,
  MetaData,
  UserProxy,
  Ask,
  Bid,
} from "../generated/schema";

import { ZERO_ADDRESS, WRAPPED_PUNK_ADDRESS } from "./constant";
import {
  getOrCreateAccount,
  createMetadata,
  getOrCreateAssign,
  getOrCreateSale,
  getOrCreateCToken,
} from "./helpers/entityHelper";

import { getOrCreateTransfer } from "./helpers/transferHelper";

import { getOwnerFromCToken } from "./utils";

import {
  getOrCreateCryptoPunkContract,
  getOrCreateWrappedPunkContract,
} from "../src/helpers/contractHelper";

import { createWrap, createUnwrap } from "../src/helpers/wrapAndUnwrap";

import {
  createAskCreated,
  createAskRemoved,
  getOrCreateAsk,
  updateOldAsk,
} from "./helpers/askHelpers";

import {
  getOrCreateBid,
  createBidCreated,
  createBidRemoved,
  updateOldBid,
  getBidIdforReferenceFromCToken,
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

  //Write
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
    // so we can compare/reference them against other events with their globalID(logIndex -1) //acceptBidForPunk() //acceptAskForPunk()
    // so we can track owners in CToken
    let cToken = getOrCreateCToken(event);

    //Update fields
    cToken.from = event.params.from.toHexString();
    cToken.to = event.params.to.toHexString();
    cToken.owner = event.params.to.toHexString();
    cToken.amount = event.params.value;

    //Write
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

  punk.currentAsk = ask.id;
  punk.currentAskCreated = askCreated.id; //Update the currentAsk for the punk in Punk entity for future reference

  //Write
  ask.save();
  punk.save();
  askCreated.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  // This event first only fires when a bid is created

  //Actions:
  //createBidCreatedEVENT
  //create Bid - The higher level product of the event
  //create relationship between Bid and BidCreated
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
  bid.from = account.id;
  bid.created = bidCreated.id;

  //Create relationship with Bid
  bidCreated.bid = bid.id;
  bidCreated.amount = event.params.value;

  punk.currentBid = bid.id;
  punk.currentBidCreated = bidCreated.id; //Update the currentBid for the punk in Punk entity for future reference

  //Write
  bid.save();
  punk.save();
  account.save();
  bidCreated.save();
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  /** 
    This event first only fires when a bid is removed

  Actions:
    - createBidRemovedEVENT
    - create Bid or Load it, and close the BID - The higher level product of the event
    - create relationship between Bid and BidRemoved
  */
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

  //Load Old Bid and close it
  let oldBidId = punk.currentBid;
  if (oldBidId !== null) {
    let oldBid = Bid.load(oldBidId.toString())!;
    //summon currentBidCreated from Punk entity to provide creation EVENT on the bid that was removed
    oldBid.created = punk.currentBidCreated;
    oldBid.from = fromAccount.id;
    oldBid.open = false;

    //Create relationship between the old Bid and BidRemoved to provide information on  the bid what was withdrawn/removed
    oldBid.removed = bidRemoved.id;

    //Create relationship with Bid
    bidRemoved.bid = oldBid.id;

    oldBid.save();
  }
  //Update Punk fields with current bid removal EVENT so we can reference them elsewhere
  punk.currentBidRemoved = bidRemoved.id;

  //Write
  punk.save();
  fromAccount.save();
  bidRemoved.save();
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  log.debug("handlePunkNoLongerForSale", []);
  /**
   - This event fires when the owner removes their ask
   - Also fires when the owner's Ask is accepted which removes their ask and creates a SaleEVENT
   - SaleEvent is a regular PunkBoughtEVENT which we already captured in handlePunkBought()

    Actions 
    - createAskRemovedEVENT
    - close Old Ask
  */
  let punk = Punk.load(event.params.punkIndex.toString())!;
  let askRemoved = createAskRemoved(event.params.punkIndex, event);

  /**
     Update Punk Entity
     Update the currentAskRemoved for the punk in Punk entity for future reference
       e.g (When a bid is accepted, we close the Ask with the right relationship to AskRemoved, so we can reference this field from the Punk entity elsewhere)
  */
  punk.currentAskRemoved = askRemoved.id;

  //Load old Ask of Punk and Close it
  let oldAskId = punk.currentAsk;
  if (oldAskId !== null) {
    let oldAsk = Ask.load(oldAskId.toString())!;
    //Create relationship with AskRemoved
    oldAsk.removed = askRemoved.id;

    //Create relationship between the OldAsk with AskCreated by summoning creation EVENT from Punk entity to provide information on creation EVENT
    oldAsk.created = punk.currentAskCreated;

    //Create relationship between the OldAsk and the current AskRemoved to record removal
    askRemoved.ask = oldAsk.id;

    //Update OldAsk fields
    oldAsk.nft = punk.id;
    oldAsk.open = false;
    oldAsk.from = event.transaction.from.toHexString();
    oldAsk.save();
  }

  //Write
  punk.save();
  askRemoved.save();
}

export function handlePunkBought(event: PunkBought): void {
  /**
     - Catch acceptBidForPunk(), BidAccepted
     - cToken Transfer_EVENT fires then PunkBought_EVENT (2 Events)
        e.g https://etherscan.io/tx/0x23d6e24628dabf4fa92fa93630e5fa6f679fac75071aab38d7e307a3c0f4a3ca#eventlog
   */

  if (event.params.toAddress.toHexString() == ZERO_ADDRESS) {
    /**
    Actions:
      - createBidRemovedEvent
      - close Old Bid since it has been accepted
      - close Old Ask since it has been sold
      - createSaleEvent
    */

    let punk = Punk.load(event.params.punkIndex.toString())!;
    let contract = getOrCreateCryptoPunkContract(event.address);
    let fromAccount = getOrCreateAccount(event.params.fromAddress);

    //Create new BidRemovedEvent
    let bidRemoved = createBidRemoved(
      event.params.punkIndex,
      event.params.fromAddress.toHexString(),
      event
    );

    /**
      - Load OldBid from cToken by comparing their ID, and loading it with the difference between their logIndex,
        then close the bid with updateOldBid() since we only know about this bidAcceptedEVENT from this event
    */
    let oldBid = updateOldBid(
      fromAccount.id,
      getBidIdforReferenceFromCToken(event)
    );

    //Update Old bid fields with new state in the same transaction to close it
    oldBid.removed = bidRemoved.id;
    oldBid.from = fromAccount.id;
    oldBid.created = punk.currentBidCreated;
    oldBid.open = false;
    oldBid.nft = punk.id;

    /**
      - Load oldAsk from Punk, close it and create relationship with AskRemoved,
        summon currentAskCreated & currentAskRemoved from punk, and then close it since Bid has been accepted & Offer is closed
    */
    let oldAskId = punk.currentAsk;
    if (oldAskId !== null) {
      let oldAsk = Ask.load(oldAskId.toString())!;
      oldAsk.removed = punk.currentAskRemoved; //current askRemoved can be gotten from the punk which we closed in PunkNoLongerForSale
      oldAsk.open = false;
      oldAsk.created = punk.currentAskCreated;
      oldAsk.from = fromAccount.id;

      //Write
      oldAsk.save();
    }

    //Update Punk entity
    punk.purchasedBy = getOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID
    punk.owner = getOwnerFromCToken(event);
    punk.currentBidRemoved = bidRemoved.id; //Save the current BidRemoved for future reference

    //Create relationship with OldBid
    bidRemoved.bid = oldBid.id;

    //Create new SaleEVENT
    let sale = getOrCreateSale(
      event.params.fromAddress,
      event.params.punkIndex.toString(),
      event
    );
    //Update Sale fields
    sale.to = getOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID
    sale.amount = event.params.value;

    //Update tradeValues
    contract.totalAmountTraded = contract.totalAmountTraded.plus(
      event.params.value
    );
    contract.totalSales = contract.totalSales.plus(BigInt.fromI32(1));

    //Update account
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );
    //We get the true owner from CToken and increment their holdings
    let toAccount = getOrCreateAccount(
      Address.fromString(getOwnerFromCToken(event))
    );
    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    //Write
    contract.save();
    bidRemoved.save();
    punk.save();
    oldBid.save();
    sale.save();
    toAccount.save();
    fromAccount.save();
  } else {
    log.debug("handlePunkBought", []);

    /** 
    Regular PunkBought - This also implicitly captures AskAccepted for Punk which is updated in PunkNoLongerForSaleEVENT (Close Ask)
      e.g https://etherscan.io/tx/0x0004ba250b29b0e2cda2e882c8bf5a14e7d2133e63bf0334fb1f44c716ccb187#eventlog

    Actions:
     - createSaleEvent
     - close Old Bid
     - close Old Ask since it has been sold
    */
    let punk = Punk.load(event.params.punkIndex.toString())!;
    let contract = getOrCreateCryptoPunkContract(event.address);
    let toAccount = getOrCreateAccount(event.params.toAddress);
    let fromAccount = getOrCreateAccount(event.params.fromAddress);

    //Create Sale Event
    let sale = getOrCreateSale(event.params.fromAddress, punk.id, event);
    //Update Sale fields
    sale.amount = event.params.value;
    sale.to = event.params.toAddress.toHexString();

    /**
      Close oldBid since Punk has a new owner after SaleEvent, or PunkOfferAccepted which fires PunkNoLongerForSaleEVENT
      load the correct Bid ID from Punk entity and close it
    */
    let oldBidId = punk.currentBid;
    if (oldBidId !== null) {
      let oldBid = Bid.load(oldBidId.toString())!;
      oldBid.created = punk.currentBidCreated;
      oldBid.from = fromAccount.id;
      oldBid.open = false;
      oldBid.save();
    }

    //Close oldAsk anytime a saleEvent occurs
    let oldAskId = punk.currentAsk;
    if (oldAskId !== null) {
      let oldAsk = Ask.load(oldAskId.toString())!;
      //Create a relationship between OldAsk and currentAskRemoved to provide information on the Ask that was removed
      oldAsk.removed = punk.currentAskRemoved; //current askRemoved can be gotten from the punk which we closed in PunkNoLongerForSale
      oldAsk.open = false;
      //Summon currentAskCreated from punk to update Ask with askCreation information
      oldAsk.created = punk.currentAskCreated; //current askCreated can be gotten from the punk which we opened in PunkOffered
      oldAsk.from = fromAccount.id;

      //Write
      oldAsk.save();
    }

    //Update Punk entity
    punk.purchasedBy = toAccount.id;
    punk.owner = toAccount.id;

    //Update trade values
    contract.totalAmountTraded = contract.totalAmountTraded.plus(
      event.params.value
    );
    contract.totalSales = contract.totalSales.plus(BigInt.fromI32(1));

    // buyPunk() does not emit a PunkTransfer event, so we need to keep track

    //Update account punk holdings
    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );

    //Write
    punk.save();
    fromAccount.save();
    toAccount.save();
    contract.save();
    sale.save();
  }
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

    //Write
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

    //Write
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

    //Write
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
