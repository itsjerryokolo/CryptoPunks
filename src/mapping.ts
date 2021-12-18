import {
  BigInt,
  Address,
  Bytes,
  log,
  BigDecimal,
  ByteArray,
} from "@graphprotocol/graph-ts";
import {
  cryptopunks,
  Assign as Assigned,
  PunkTransfer,
  PunkOffered,
  PunkBidEntered,
  PunkBidWithdrawn,
  PunkBought,
  PunkNoLongerForSale,
  cryptopunks__punkBidsResult,
} from "../generated/cryptopunks/cryptopunks";

import {
  WrappedPunks,
  Approval,
  Transfer as WrappedPunkTransfer,
  ProxyRegistered,
} from "../generated/WrappedPunks/WrappedPunks";

import { getTrait } from "./traits";

import {
  Ask,
  Account,
  Assign,
  Transfer,
  BidCreated,
  Punk,
  Sale,
  Trait,
  BidRemoved,
  AskCreated,
  AskRemoved,
  Contract,
  MetaData,
  Bid,
  Wrap,
  Unwrap,
  UserProxy,
} from "../generated/schema";

import {
  TOKEN_URI,
  ZERO_ADDRESS,
  IMAGE_URI,
  WRAPPED_PUNK_ADDRESS,
  CONTRACT_URI,
} from "./constant";
import {
  getOrCreateCryptoPunkContract,
  getOrCreateAccount,
  getOrCreateWrappedPunkContract,
  getOrCreateMetadata,
  getOrCreateAssign,
  getOrCreatePunk,
  getOrCreateWrap,
  getOrCreateUnWrap,
  getOrCreateSale,
  getOrCreateAsk,
  getOrCreateAskCreated,
  getOrCreateAskRemoved,
  getOrCreateTransfer,
  getOrCreateBid,
} from "./helper";

export function handleAssign(event: Assigned): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);

  let trait = getTrait(event.params.punkIndex.toI32());

  let account = getOrCreateAccount(event.params.to);
  let metadata = getOrCreateMetadata(event.params.punkIndex, event);
  let contract = getOrCreateCryptoPunkContract(event.address);
  let punk = getOrCreatePunk(event.params.punkIndex, event.params.to);

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
  log.debug("handlePunkTransfer", []);
  let fromIsProxy = UserProxy.load(event.params.from.toHexString());
  let toIsProxy = UserProxy.load(event.params.to.toHexString());

  if (fromIsProxy !== null || toIsProxy !== null) {
    log.debug("PunkTransfer with proxy detected fromProxy: {} toProxy: {} ", [
      fromIsProxy !== null ? event.params.from.toHexString() : "false",
      toIsProxy !== null ? event.params.to.toHexString() : "false",
    ]);
    return;
  }

  if (
    event.params.to.toHexString() !== WRAPPED_PUNK_ADDRESS ||
    event.params.from.toHexString() !== WRAPPED_PUNK_ADDRESS
  ) {
    // Regular PunkTransfer

    let toAccount = getOrCreateAccount(event.params.to);
    let fromAccount = getOrCreateAccount(event.params.from);
    let punk = getOrCreatePunk(event.params.punkIndex, event.params.to);

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

    //Capture punk transfers and owners if not transfered to WRAPPED PUNK ADDRESS
    //punk.owner = toAccount.id;

    transfer.save();
    toAccount.save();
    fromAccount.save();
    punk.save();
  } else if (event.params.to.toHexString() == WRAPPED_PUNK_ADDRESS) {
    // Mint/Wrap
    let wrap = getOrCreateWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.punkIndex,
      event
    );

    let fromAccount = getOrCreateAccount(event.params.from);
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );

    wrap.save();
    fromAccount.save();
  } else if (event.params.from.toHexString() == WRAPPED_PUNK_ADDRESS) {
    // Burn/Unwrap

    let punk = getOrCreatePunk(event.params.punkIndex, event.params.to);
    let toAccount = getOrCreateAccount(event.params.to);

    let unWrap = getOrCreateUnWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.to,
      event.params.punkIndex,
      event
    );

    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    punk.save();
    toAccount.save();
    unWrap.save();
  }
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered", []);

  let askCreated = getOrCreateAskCreated(event.params.punkIndex, event);
  let askRemoved = getOrCreateAskRemoved(event.params.punkIndex, event);

  let punk = getOrCreatePunk(event.params.punkIndex, event.params.toAddress);
  let account = getOrCreateAccount(event.params.toAddress);
  let ask = getOrCreateAsk(
    account as Account,
    askRemoved as AskRemoved,
    askCreated as AskCreated,
    event.params.punkIndex,
    event
  );

  if (!ask) {
    ask.open = true;
  }

  ask.amount = event.params.minValue;
  askCreated.from = account.id;
  askCreated.to = event.params.toAddress.toHexString();

  ask.save();
  punk.save();
  account.save();
  askRemoved.save();
  askCreated.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  log.debug("handlePunkBidCreatedEntered", []);

  let bidCreated = BidCreated.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BIDCREATED"
  );

  let account = getOrCreateAccount(event.params.fromAddress);
  let bidRemoved = BidRemoved.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BIDREMOVED"
  );

  let punk = getOrCreatePunk(event.params.punkIndex, event.params.fromAddress);

  if (!bidCreated) {
    bidCreated = new BidCreated(
      event.transaction.hash
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("BIDCREATED")
    );
  }
  if (!bidRemoved) {
    bidRemoved = new BidRemoved(
      event.transaction.hash
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("BIDREMOVED")
    );
  }
  let bid = getOrCreateBid(
    event.params.fromAddress,
    bidRemoved as BidRemoved,
    bidCreated as BidCreated,
    event.params.punkIndex,
    event
  );

  bid.amount = event.params.value;

  bidRemoved.bid = bidCreated.id;
  bidRemoved.amount = event.params.value;
  bidRemoved.from = account.id;
  bidRemoved.contract = event.address.toHexString();
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";

  bidCreated.amount = event.params.value;
  bidCreated.from = account.id;
  bidCreated.contract = event.address.toHexString();
  bidCreated.nft = event.params.punkIndex.toString();
  bidCreated.timestamp = event.block.timestamp;
  bidCreated.blockNumber = event.block.number;
  bidCreated.txHash = event.transaction.hash;
  bidCreated.blockHash = event.block.hash;
  bidCreated.type = "BID_CREATED";

  bid.save();
  punk.save();
  account.save();
  bidRemoved.save();
  bidCreated.save();
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  log.debug("handlePunkBidCreatedWithdrawn", []);

  let bidRemoved = BidRemoved.load(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(event.logIndex.toString())
      .concat("-")
      .concat("BIDREMOVED")
  );
  let bidCreated = BidCreated.load(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(event.logIndex.toString())
      .concat("-")
      .concat("BIDCREATED")
  );
  let account = getOrCreateAccount(event.params.fromAddress);
  let punk = getOrCreatePunk(event.params.punkIndex, event.params.fromAddress);

  if (!bidRemoved) {
    bidRemoved = new BidRemoved(
      event.transaction.hash
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("BIDREMOVED")
    );
  }
  if (!bidCreated) {
    bidCreated = new BidCreated(
      event.transaction.hash
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("BIDCREATED")
    );
  }

  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = account.id;
  bidRemoved.contract = event.address.toHexString();
  bidRemoved.amount = event.params.value;
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";

  bidCreated.nft = event.params.punkIndex.toString();
  bidCreated.timestamp = event.block.timestamp;
  bidCreated.blockNumber = event.block.number;
  bidCreated.txHash = event.transaction.hash;
  bidCreated.blockHash = event.block.hash;
  bidCreated.type = "BID_CREATED";

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
  let punk = getOrCreatePunk(event.params.punkIndex, event.params.toAddress);
  let contract = getOrCreateCryptoPunkContract(event.address);
  let toAccount = getOrCreateAccount(event.params.toAddress);
  let fromAccount = getOrCreateAccount(event.params.fromAddress);

  sale.amount = event.params.value;

  contract.totalAmountTraded = contract.totalAmountTraded.plus(
    event.params.value
  );
  contract.totalSales = contract.totalSales.plus(BigInt.fromI32(1));

  toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
    BigInt.fromI32(1)
  );

  fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
    BigInt.fromI32(1)
  );

  punk.purchasedBy = toAccount.id;

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
  let punk = Punk.load(event.params.punkIndex.toString());

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
  log.info("handleWrappedPunksTransfer tokenId: {} to: {}", [
    event.params.tokenId.toString(),
    event.params.to.toHexString(),
  ]);

  let punk = Punk.load(event.params.tokenId.toString());
  if (!punk) {
    punk = new Punk(event.params.tokenId.toString());
  }

  let contract = getOrCreateWrappedPunkContract(event.address);

  if (event.params.from.toHexString() == ZERO_ADDRESS) {
    // A wrapped punk is minted (wrapped)
    let wrap = getOrCreateWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.tokenId,
      event
    );

    let toAccount = getOrCreateAccount(event.params.to);

    contract.totalSupply = contract.totalSupply.plus(BigInt.fromI32(1));
    punk.owner = toAccount.id;

    wrap.to = event.params.to.toHexString();

    wrap.save();
    toAccount.save();
    punk.save();
  } else if (event.params.to.toHexString() == ZERO_ADDRESS) {
    // A wrapped punk is burned (unwrapped)
    let unWrap = getOrCreateUnWrap(
      Address.fromString(WRAPPED_PUNK_ADDRESS),
      event.params.from,
      event.params.to,
      event.params.tokenId,
      event
    );

    let fromAccount = getOrCreateAccount(event.params.from);

    contract.totalSupply = contract.totalSupply.minus(BigInt.fromI32(1));

    unWrap.save();
    fromAccount.save();
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

    // There is always a from account, since they were assigned
    let fromAccount = getOrCreateAccount(event.params.from);

    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );
    fromAccount.save();
    transfer.save();
  }

  contract.save();
  punk.save();
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
