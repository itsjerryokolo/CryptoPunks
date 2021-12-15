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

    let transfer = Transfer.load(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "TRANSFER"
    );

    let toAccount = getOrCreateAccount(event.params.to);
    let fromAccount = getOrCreateAccount(event.params.from);
    let punk = getOrCreatePunk(event.params.punkIndex, event.params.to);

    if (!transfer) {
      transfer = new Transfer(
        event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString() +
          "-" +
          "TRANSFER"
      );
    }

    transfer.type = "TRANSFER";
    transfer.contract = event.address.toHexString();
    transfer.to = event.params.to.toHexString();
    transfer.from = event.params.from.toHexString();

    transfer.nft = event.params.punkIndex.toString();
    transfer.timestamp = event.block.timestamp;
    transfer.blockNumber = event.block.number;
    transfer.txHash = event.transaction.hash;
    transfer.blockHash = event.block.hash;
    transfer.contract = event.address.toHexString();

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

    let unWrap = Unwrap.load(
      WRAPPED_PUNK_ADDRESS.toString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("UNWRAP")
    );

    if (!unWrap) {
      unWrap = new Unwrap(
        WRAPPED_PUNK_ADDRESS.toString()
          .concat("-")
          .concat(event.logIndex.toString())
          .concat("-")
          .concat("UNWRAP")
      );
    }

    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    unWrap.from = event.params.from.toHexString();
    unWrap.to = toAccount.id;
    unWrap.type = "UNWRAP";
    unWrap.timestamp = event.block.timestamp;
    unWrap.nft = event.params.punkIndex.toString();
    unWrap.blockNumber = event.block.number;
    unWrap.blockHash = event.block.hash;
    unWrap.txHash = event.transaction.hash;

    punk.save();
    toAccount.save();
    unWrap.save();
  }
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered", []);

  let askCreated = AskCreated.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASKCREATED"
  );
  let askRemoved = AskRemoved.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASKREMOVED"
  );
  let ask = Ask.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASK"
  );
  let punk = getOrCreatePunk(event.params.punkIndex, event.params.toAddress);
  let account = getOrCreateAccount(event.params.toAddress);

  if (!askCreated) {
    askCreated = new AskCreated(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKCREATED"
    );
  }

  if (!ask) {
    ask = new Ask(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASK"
    );
  }
  if (!askRemoved) {
    askRemoved = new AskRemoved(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKREMOVED"
    );
  }
  ask.from = account.id;
  if (!ask) {
    ask.open = true;
  }
  ask.nft = event.params.punkIndex.toString();
  ask.from = account.id;
  ask.created = askCreated.id;
  ask.offerType = "ASK";
  ask.removed = askRemoved.id;
  ask.amount = event.params.minValue;

  askCreated.type = "ASK_CREATED";
  askCreated.amount = event.params.minValue;
  askCreated.from = account.id;
  askCreated.to = event.params.toAddress.toHexString();
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHash = event.block.hash;
  askCreated.contract = event.address.toHexString();

  ask.save();
  punk.save();
  account.save();
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
  let bid = Bid.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BID"
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

  if (!bid) {
    bid = new Bid(
      event.transaction.hash
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("BID")
    );
  }

  if (!bid) {
    bid.open = true;
  }
  bid.nft = event.params.punkIndex.toString();
  bid.created = bidCreated.id;
  bid.removed = bidRemoved.id;
  bid.from = account.id;
  bid.nft = event.params.punkIndex.toString();
  bid.offerType = "BID";
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

  let sale = Sale.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "SALE"
  );
  let punk = getOrCreatePunk(event.params.punkIndex, event.params.toAddress);
  let contract = getOrCreateCryptoPunkContract(event.address);
  let toAccount = getOrCreateAccount(event.params.toAddress);
  let fromAccount = getOrCreateAccount(event.params.fromAddress);

  if (!sale) {
    sale = new Sale(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "SALE"
    );
  }

  sale.amount = event.params.value;
  sale.to = event.params.toAddress.toHexString();
  sale.from = event.params.fromAddress.toHexString();
  sale.contract = contract.id;
  sale.nft = event.params.punkIndex.toString();
  sale.timestamp = event.block.timestamp;
  sale.blockNumber = event.block.number;
  sale.txHash = event.transaction.hash;
  sale.blockHash = event.block.hash;
  sale.type = "SALE";

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

  let askRemoved = AskRemoved.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASKREMOVED"
  );
  let askCreated = AskCreated.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASKCREATED"
  );
  let punk = Punk.load(event.params.punkIndex.toString());

  if (!askCreated) {
    askCreated = new AskCreated(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKCREATED"
    );
  }
  if (!askRemoved) {
    askRemoved = new AskRemoved(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKREMOVED"
    );
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
  }

  askCreated.contract = event.address.toHexString();
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHash = event.block.hash;
  askCreated.type = "ASK_CREATED";

  askRemoved.ask = askCreated.id;
  askRemoved.contract = event.address.toHexString();
  askRemoved.nft = event.params.punkIndex.toString();
  askRemoved.timestamp = event.block.timestamp;
  askRemoved.blockNumber = event.block.number;
  askRemoved.txHash = event.transaction.hash;
  askRemoved.blockHash = event.block.hash;
  askRemoved.type = "ASK_REMOVED";

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
    let transfer = Transfer.load(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "WRAPPEDPUNKTRANSFER"
    );

    if (!transfer) {
      transfer = new Transfer(
        event.transaction.hash.toHexString() +
          "-" +
          event.logIndex.toString() +
          "-" +
          "WRAPPEDPUNKTRANSFER"
      );
    }

    transfer.type = "TRANSFER";

    transfer.contract = contract.id;
    transfer.to = event.params.to.toHexString();
    transfer.from = event.params.from.toHexString();

    transfer.nft = event.params.tokenId.toString();
    transfer.timestamp = event.block.timestamp;
    transfer.blockNumber = event.block.number;
    transfer.txHash = event.transaction.hash;
    transfer.blockHash = event.block.hash;
    transfer.contract = contract.id;
    transfer.save();

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
