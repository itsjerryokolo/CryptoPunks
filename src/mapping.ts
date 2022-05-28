import { Address, log } from "@graphprotocol/graph-ts";
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
import {
  ZERO_ADDRESS,
  WRAPPED_PUNK_ADDRESS,
  BIGINT_ONE,
  BIGINT_ZERO,
} from "./constant";
import {
  getOrCreateAccount,
  updateAccountHoldings,
} from "../src/helpers/accountHelper";
import { createMetadata } from "./helpers/metadataHelper";
import { getOrCreateTransfer } from "./helpers/transferHelper";
import { getOrCreateAssign } from "./helpers/assignHelper";
import {
  calculateAverage,
  getOwnerFromCToken,
  getOrCreateCToken,
} from "./utils";
import { updatePunkSaleAggregates } from "../src/helpers/punkHelper";
import {
  getOrCreateCryptoPunkContract,
  getOrCreateWrappedPunkContract,
  updateContractAggregates,
} from "../src/helpers/contractHelper";

import { createWrap, createUnwrap } from "../src/helpers/wrapAndUnwrap";
import { getOrCreateSale } from "./helpers/saleHelper";

import {
  createAskCreated,
  createAskRemoved,
  getOrCreateAsk,
} from "./helpers/askHelpers";

import {
  getOrCreateBid,
  createBidCreated,
  createBidRemoved,
  updateOldBid,
  getBidIdforReferenceFromCToken,
} from "../src/helpers/bidHelpers";
import { updateSale } from "./helpers/saleHelper";
import { updateAccountAggregates } from "./helpers/accountHelper";
import { createPunk } from "./helpers/punkHelper";

export function handleAssign(event: Assigned): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);
  // This event fires when the user claims a Punk

  let trait = getTrait(event.params.punkIndex.toI32());
  let tokenId = event.params.punkIndex;
  let account = getOrCreateAccount(event.params.to);
  let metadata = createMetadata(tokenId);
  let contract = getOrCreateCryptoPunkContract(event.address);

  //Assign is always the first EVENTS that actually creates the punk
  let punk = createPunk(tokenId, event.params.to);
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
      type.numberOfNfts = BIGINT_ZERO;
    }

    type.numberOfNfts = type.numberOfNfts.plus(BIGINT_ONE);
    type.save();
    traits.push(type.id);

    for (let i = 0; i < trait.accessories.length; i++) {
      let accessoryName = trait.accessories[i];
      let acessoryId = accessoryName.split(" ").join("-");
      let accessory = Trait.load(acessoryId);

      if (accessory == null) {
        accessory = new Trait(acessoryId);
        accessory.type = "ACCESSORY";
        accessory.numberOfNfts = BIGINT_ZERO;
      }
      accessory.numberOfNfts = accessory.numberOfNfts.plus(BIGINT_ONE);
      accessory.save();
      traits.push(accessory.id);
    }

    metadata.traits = traits;
  }

  //Update account punk holdings
  account.numberOfPunksOwned = account.numberOfPunksOwned.plus(BIGINT_ONE);
  account.numberOfPunksAssigned = account.numberOfPunksAssigned.plus(
    BIGINT_ONE
  );

  //Write
  account.save();
  assign.save();
  contract.save();
  metadata.save();
  punk.save();
}

export function handleTransfer(event: cTokenTransfer): void {
  /**
    We ignore transfers to ZERO_ADDRESS
    We want to track acceptBidforPunk():
      e.g: https://etherscan.io/tx/0x23d6e24628dabf4fa92fa93630e5fa6f679fac75071aab38d7e307a3c0f4a3ca#eventlog
    These events {cTokenTransferEVENT, PunkBoughtEVENT} will receive their correct logIndex if they are in same transaction (txHash)
  */
  if (event.params.to.toHexString() != ZERO_ADDRESS) {
    let fromAccount = getOrCreateAccount(event.params.from);
    let toAccount = getOrCreateAccount(event.params.to);

    /**
    Create a CToken entity to store the cTokenTransferIds
      so we can compare/reference them against other events with their globalID(logIndex -1) //acceptBidForPunk() //acceptAskForPunk(),
      so we can track owners in CToken
    */
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
  let sender = event.params.from;
  let receiver = event.params.to;
  let tokenId = event.params.punkIndex.toString();

  let fromProxy = UserProxy.load(sender.toHexString());
  let toProxy = UserProxy.load(receiver.toHexString());

  if (toProxy !== null) {
    log.debug("PunkTransfer to proxy detected toProxy: {} ", [toProxy.id]);
    return;
  } else if (
    receiver.toHexString() != WRAPPED_PUNK_ADDRESS &&
    sender.toHexString() != WRAPPED_PUNK_ADDRESS
  ) {
    log.debug("Regular punk transfer check: {} ", [tokenId]);

    let toAccount = getOrCreateAccount(event.params.to);
    let fromAccount = getOrCreateAccount(event.params.from);
    let punk = Punk.load(tokenId)!;

    punk.numberOfTransfers = punk.numberOfTransfers.plus(BIGINT_ONE);

    let transfer = getOrCreateTransfer(event.params.punkIndex, event); //TODO: Update remaining transfer fields, use schema as reference
    transfer.from = fromAccount.id;
    transfer.to = toAccount.id;

    updateAccountHoldings(toAccount, fromAccount);
    toAccount.numberOfTransfers = toAccount.numberOfTransfers.plus(BIGINT_ONE);
    fromAccount.numberOfTransfers = fromAccount.numberOfTransfers.plus(
      BIGINT_ONE
    );

    //Capture punk transfers and owners if not transfered to WRAPPED PUNK ADDRESS
    punk.owner = toAccount.id;

    //Write
    transfer.save();
    toAccount.save();
    fromAccount.save();
    punk.save();
  } else if (
    fromProxy !== null &&
    sender.toHexString() == fromProxy.id &&
    receiver.toHexString() == WRAPPED_PUNK_ADDRESS
  ) {
    log.info("Wrap detected of punk: {} ", [tokenId]);

    let punk = Punk.load(tokenId)!;
    punk.wrapped = true;

    punk.save();
  } else if (sender.toHexString() == WRAPPED_PUNK_ADDRESS) {
    //Burn/Unwrap
    log.debug("Unwrapped detected. From: {}, punk: {}", [
      sender.toHexString(),
      tokenId,
    ]);

    let punk = Punk.load(event.params.punkIndex.toString())!;
    punk.wrapped = false;

    //Write
    punk.save();
  }
}

export function handlePunkOffered(event: PunkOffered): void {
  /**
    Actions:
       - createAskCreatedEVENT
       - create Ask - The higher level product of the event
       - create relationship between Ask and AskCreated to provide information on creation EVENT
  */

  let punk = Punk.load(event.params.punkIndex.toString())!;
  let askCreated = createAskCreated(event.params.punkIndex, event);

  //We close the old Ask anytime a new Ask is created
  let oldAskId = punk.currentAsk;

  if (oldAskId !== null) {
    log.debug("Old askId: {}", [punk.currentAsk!]);

    let oldAsk = Ask.load(oldAskId)!;
    oldAsk.nft = punk.id;
    oldAsk.open = false;
    oldAsk.save();
  }

  let ask = getOrCreateAsk(punk.owner, event);
  //Update Ask fields
  ask.nft = punk.id;
  ask.from = punk.owner;
  ask.amount = event.params.minValue;
  ask.created = askCreated.id;
  ask.open = true;

  askCreated.ask = ask.id;
  askCreated.from = punk.owner;
  askCreated.amount = event.params.minValue;

  punk.currentAskCreated = askCreated.id;
  punk.currentAsk = ask.id; //Update the currentAsk for the punk in Punk entity for future reference

  //Write
  askCreated.save();
  punk.save();
  ask.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  /**
    This event first only fires when a bid is created
    
    Actions:
       - createBidCreatedEVENT
       - create Bid - The higher level product of the event
       - create relationship between Bid and BidCreated to provide information on creation EVENT
  */
  log.debug("handlePunkBidCreatedEntered", []);

  let bidCreated = createBidCreated(
    event.params.punkIndex,
    event.params.fromAddress.toHexString(),
    event
  );
  let punk = Punk.load(event.params.punkIndex.toString())!;
  let account = getOrCreateAccount(event.params.fromAddress);

  //We close the old bid anytime a new Bid is created
  let oldBidId = punk.currentBid;
  if (oldBidId !== null) {
    let oldBid = Bid.load(oldBidId)!;
    oldBid.open = false;
    oldBid.save();
  }
  let bid = getOrCreateBid(event.params.fromAddress.toHexString(), event);
  //Update bid fields
  bid.amount = event.params.value;
  bid.nft = punk.id;
  bid.from = account.id;
  bid.created = bidCreated.id;

  punk.currentBid = bid.id;

  bidCreated.bid = bid.id; //Create relationship with Bid
  bidCreated.amount = event.params.value;

  punk.currentBidCreated = bidCreated.id; //Update the currentBid for the punk in Punk entity for future reference

  //Write
  punk.save();
  account.save();
  bid.save();
  bidCreated.save();
}
export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  /** 
    This event only fires when a bid is removed

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

    //Create relationship between the old Bid and BidRemoved to provide information on the bid what was withdrawn/removed
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

  //Load old Ask of Punk and Close it
  let oldAskId = punk.currentAsk;
  if (oldAskId !== null) {
    let oldAsk = Ask.load(oldAskId.toString())!;
    //Create relationship with AskRemoved
    oldAsk.removed = askRemoved.id;

    //Create relationship between the OldAsk with AskCreated by summoning creation EVENT from Punk entity to provide information on creation EVENT
    oldAsk.created = punk.currentAskCreated;

    //Create relationship between the OldAsk and the current AskRemoved to provide information on removal EVENT
    askRemoved.ask = oldAsk.id;

    //Update OldAsk fields
    oldAsk.nft = punk.id;
    oldAsk.open = false;
    oldAsk.from = event.transaction.from.toHexString();
    oldAsk.save();
  } else {
    //https://cryptopunks.app/cryptopunks/details/2158
    //This is a weird case where an offer can be withdrawn before it's created

    let ask = getOrCreateAsk(punk.owner, event);
    ask.nft = punk.id;
    ask.open = false;
    ask.from = punk.owner;
    ask.removed = askRemoved.id;

    //Amount is 0 because this field is non-nullable & this basically initializes the field so it doesn't fail.
    //Also, this event doesn't emit the amount.

    ask.amount = BIGINT_ZERO;
    askRemoved.amount = BIGINT_ZERO;
    askRemoved.ask = ask.id;

    ask.save();
  }

  punk.currentAskRemoved = askRemoved.id;

  //Write
  askRemoved.save();
  punk.save();
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
      - update aggregates for Account and Punk
    */
    let tokenId = event.params.punkIndex;

    let punk = Punk.load(tokenId.toString())!;
    let contract = getOrCreateCryptoPunkContract(event.address);
    let fromAccount = getOrCreateAccount(event.params.fromAddress);

    //Create new BidRemovedEvent
    let bidRemoved = createBidRemoved(
      tokenId,
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
    oldBid.amount = event.params.value;
    oldBid.created = punk.currentBidCreated;
    oldBid.open = false;
    oldBid.nft = punk.id;

    //Create relationship with OldBid
    bidRemoved.bid = oldBid.id;

    bidRemoved.save();
    oldBid.save();
    /**
      - Load oldAsk from Punk, close it and create relationship with AskRemoved,
        summon currentAskCreated & currentAskRemoved from punk, and then close it since Bid has been accepted & Offer is closed
    */
    let oldAskId = punk.currentAsk;
    if (oldAskId !== null) {
      let oldAsk = Ask.load(oldAskId.toString())!;
      oldAsk.removed = punk.currentAskRemoved; //current askRemoved can be gotten from the punk which we closed in PunkNoLongerForSale
      oldAsk.open = false;
      oldAsk.amount = event.params.value;
      oldAsk.created = punk.currentAskCreated;
      oldAsk.from = fromAccount.id;

      //Write
      oldAsk.save();
    }

    //Create new SaleEVENT
    let sale = getOrCreateSale(
      event.params.fromAddress,
      tokenId.toString(),
      event
    );
    //Update Sale fields
    sale.to = getOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID

    //We get the true owner from CToken and increment their holdings
    let toAccount = getOrCreateAccount(
      Address.fromString(getOwnerFromCToken(event))
    );

    //Summon currentBid and update the sale amount from the acceptedBid which was created transactions ago.
    let oldPunkBidId = punk.currentBid;
    if (oldPunkBidId !== null) {
      let oldPunkBid = Bid.load(oldPunkBidId.toString())!;
      sale.amount = oldPunkBid.amount;
      toAccount.totalSpent = toAccount.totalSpent.plus(oldPunkBid.amount);
      fromAccount.totalEarned = fromAccount.totalEarned.plus(oldPunkBid.amount);
      punk.totalAmountSpentOnPunk = punk.totalAmountSpentOnPunk.plus(
        oldPunkBid.amount
      );
      contract.totalAmountTraded = contract.totalAmountTraded.plus(
        oldBid.amount
      );
    }

    //Update Punk entity
    punk.purchasedBy = getOwnerFromCToken(event); //Get the current owner from the cTokenTRANSFER event using the same globalID
    punk.owner = getOwnerFromCToken(event);
    punk.currentBidRemoved = bidRemoved.id; //Save the current BidRemoved for future reference
    punk.numberOfSales = punk.numberOfSales.plus(BIGINT_ONE); //Increment number of sales

    //We only want to calculate the average if the punk has been sold at least once
    if (punk.numberOfSales != BIGINT_ZERO) {
      punk.averageSalePrice = calculateAverage(
        punk.totalAmountSpentOnPunk,
        punk.numberOfSales
      );
    }

    //Update tradeValues
    contract.totalSales = contract.totalSales.plus(BIGINT_ONE);

    updateAccountHoldings(toAccount, fromAccount);
    fromAccount.numberOfSales = fromAccount.numberOfSales.plus(BIGINT_ONE);
    toAccount.numberOfPurchases = toAccount.numberOfPurchases.plus(BIGINT_ONE);
    if (toAccount.numberOfPurchases != BIGINT_ZERO) {
      toAccount.averageAmountSpent = calculateAverage(
        toAccount.totalSpent,
        toAccount.numberOfPurchases
      );
    }

    //Write
    contract.save();
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

      buyPunk() does not emit a PunkTransfer event, so we need to keep track

      Actions:
      - createSaleEvent
      - close Old Bid
      - close Old Ask since it has been sold
    */

    let price = event.params.value;
    let tokenId = event.params.punkIndex.toString();
    let seller = event.params.fromAddress;
    let buyer = event.params.toAddress;

    let punk = Punk.load(tokenId)!;
    let contract = getOrCreateCryptoPunkContract(event.address);
    let toAccount = getOrCreateAccount(buyer);
    let fromAccount = getOrCreateAccount(seller);

    //Create Sale Event
    let sale = getOrCreateSale(seller, punk.id, event);
    updateSale(sale, price, buyer);

    /**
      Close oldBid since Punk has a new owner after SaleEvent, or PunkOfferAccepted which fires PunkNoLongerForSaleEVENT
      Load the correct Bid ID from Punk entity and close it
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

      //Summon currentAskCreated from Punk entity to update Old Ask with askCreation information
      oldAsk.created = punk.currentAskCreated; //we opened the Punk in PunkOffered() and saved the currentAskCreated to a field in the Punk entity

      oldAsk.from = fromAccount.id;

      //Write
      oldAsk.save();
    }

    //Update Punk entity
    punk.purchasedBy = toAccount.id;
    punk.owner = toAccount.id;

    updatePunkSaleAggregates(punk, price);
    updateContractAggregates(contract, price);
    updateAccountHoldings(toAccount, fromAccount);
    updateAccountAggregates(fromAccount, toAccount, price);

    //Write
    punk.save();
    fromAccount.save();
    toAccount.save();
    contract.save();
    sale.save();
  }
}

//This function is called for three events: Mint (Wrap), Burn (Unwrap) and Transfer
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

    contract.totalSupply = contract.totalSupply.plus(BIGINT_ONE);

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

    contract.totalSupply = contract.totalSupply.minus(BIGINT_ONE);

    //Write
    unWrap.save();
  } else {
    //Wrapped Punk Transfer
    //We do not want to save a transfer for wrapped punk mints/burns
    let transfer = getOrCreateTransfer(event.params.tokenId, event);
    let toAccount = getOrCreateAccount(event.params.to);
    let fromAccount = getOrCreateAccount(event.params.from);
    let punk = Punk.load(event.params.tokenId.toString())!;

    //We create a cToken Entity here to store IDs for future comparison
    let cToken = getOrCreateCToken(event);
    cToken.from = event.params.from.toHexString();
    cToken.to = event.params.to.toHexString();
    cToken.owner = event.params.to.toHexString();
    cToken.punkId = event.params.tokenId.toString();

    //We need the contract address to filter our transactions from Other marketplace(OpenSea, ERC721Sale) sales
    cToken.referenceId = event.address.toHexString();

    updateAccountHoldings(toAccount, fromAccount);
    punk.owner = toAccount.id;
    punk.numberOfTransfers = punk.numberOfTransfers.plus(BIGINT_ONE);

    //Write
    fromAccount.save();
    toAccount.save();
    transfer.save();
    cToken.save();
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
