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

import { CryptopunksMetadata } from "../generated/cryptopunks/CryptopunksMetadata";

import {
  WrappedPunks,
  Approval,
  Transfer as WrappedPunkTransfer,
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
} from "../generated/schema";

let TOKEN_URI = "https://www.larvalabs.com/cryptopunks/details/";
let CONTRACT_URI = "https://www.larvalabs.com/cryptopunks";
let IMAGE_URI = "https://www.larvalabs.com/public/images/cryptopunks/punk";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const WRAPPED_PUNK_ADDRESS =
  "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6";

export function handleAssign(event: Assigned): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);

  let trait = getTrait(event.params.punkIndex.toI32());

  let assign = Assign.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "ASSIGN"
  );
  let metadata = MetaData.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "METADATA"
  );
  let account = Account.load(event.params.to.toHexString());
  let cryptopunk = cryptopunks.bind(event.address);
  let contract = Contract.load(event.address.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString());

  if (!assign) {
    assign = new Assign(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASSIGN"
    );
  }
  if (!account) {
    account = new Account(event.params.to.toHexString());
    account.numberOfPunksOwned = BigInt.fromI32(0);
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (!metadata) {
    metadata = new MetaData(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "METADATA"
    );
    metadata.traits = new Array<string>();
  }

  if (!contract) {
    contract = new Contract(event.address.toHexString());

    let symbolCall = cryptopunk.try_symbol();
    if (!symbolCall.reverted) {
      contract.symbol = symbolCall.value;
    } else {
      log.warning("symbolCall Reverted", []);
    }

    let nameCall = cryptopunk.try_name();
    if (!nameCall.reverted) {
      contract.name = nameCall.value;
    } else {
      log.warning("nameCall Reverted", []);
    }

    let imageHashCall = cryptopunk.try_imageHash();
    if (!imageHashCall.reverted) {
      contract.imageHash = imageHashCall.value;
    } else {
      log.warning("imageHashCall Reverted", []);
    }
  }

  let totalSupplyCall = cryptopunk.try_totalSupply();
  if (!totalSupplyCall.reverted) {
    contract.totalSupply = totalSupplyCall.value;
  } else {
    log.warning("totalSupplyCall Reverted", []);
  }

  assign.to = account.id;
  assign.nft = event.params.punkIndex.toString();
  assign.timestamp = event.block.timestamp;
  assign.blockNumber = event.block.number;
  assign.txHash = event.transaction.hash;
  assign.blockHash = event.block.hash;
  assign.contract = contract.id;
  assign.type = "ASSIGN";

  metadata.tokenURI = TOKEN_URI.concat(event.params.punkIndex.toString());
  metadata.tokenId = event.params.punkIndex;
  metadata.punk = punk.id;
  metadata.contractURI = CONTRACT_URI;
  metadata.imageURI = IMAGE_URI.concat(
    event.params.punkIndex.toString()
  ).concat(".png");

  punk.assignedTo = account.id;
  punk.transferedTo = account.id;
  punk.tokenId = event.params.punkIndex;
  punk.owner = account.id;
  punk.metadata = metadata.id;
  punk.wrapped = false;

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

  account.save();
  assign.save();
  contract.save();
  metadata.save();
  punk.save();
}

export function handlePunkTransfer(event: PunkTransfer): void {
  log.debug("handlePunkTransfer", []);

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

    let toAccount = Account.load(event.params.to.toHexString());
    // There is always a from account, since they were assigned
    let fromAccount = Account.load(event.params.from.toHexString())!;
    let punk = Punk.load(event.params.punkIndex.toString());

    if (!punk) {
      punk = new Punk(event.params.punkIndex.toString());
    }
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

    if (!toAccount) {
      toAccount = new Account(event.params.to.toHexString());
      toAccount.numberOfPunksOwned = BigInt.fromI32(0);
    }

    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );

    //Capture punk transfers and owners if not transfered to WRAPPED PUNK ADDRESS
    punk.owner = toAccount.id;

    transfer.save();
    toAccount.save();
    fromAccount.save();
    punk.save();
  } else if (event.params.to.toHexString() == WRAPPED_PUNK_ADDRESS) {
    // Mint/Wrap
    let wrap = Wrap.load(
      WRAPPED_PUNK_ADDRESS.toString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("WRAP")
    );

    if (!wrap) {
      wrap = new Wrap(
        WRAPPED_PUNK_ADDRESS.toString()
          .concat("-")
          .concat(event.logIndex.toString())
          .concat("-")
          .concat("WRAP")
      );
    }

    let fromAccount = Account.load(event.params.from.toHexString())!;
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );

    wrap.from = fromAccount.id;
    wrap.type = "WRAP";
    wrap.timestamp = event.block.timestamp;
    wrap.nft = event.params.punkIndex.toString();
    wrap.blockNumber = event.block.number;
    wrap.blockHash = event.block.hash;
    wrap.txHash = event.transaction.hash;

    wrap.save();
    fromAccount.save();
  } else if (event.params.from.toHexString() == WRAPPED_PUNK_ADDRESS) {
    // Burn/Unwrap

    let punk = Punk.load(event.params.punkIndex.toString())!;
    let toAccount = Account.load(event.params.to.toHexString());
    if (!toAccount) {
      toAccount = new Account(event.params.to.toHexString());
      toAccount.numberOfPunksOwned = BigInt.fromI32(0);
    }

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

    punk.owner = toAccount.id;
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
  let punk = Punk.load(event.params.punkIndex.toString());
  let contract = new Contract(event.address.toHexString());
  let account = Account.load(event.params.toAddress.toHexString());

  if (!askCreated) {
    askCreated = new AskCreated(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "ASKCREATED"
    );
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (!account) {
    account = new Account(event.params.toAddress.toHexString());
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
  askCreated.contract = contract.id;

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.toAddress.toHexString();

  ask.save();
  punk.save();
  account.save();
  askCreated.save();
  contract.save();
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
  let account = Account.load(event.params.fromAddress.toHexString());
  let contract = new Contract(event.address.toHexString());
  let bidRemoved = BidRemoved.load(
    event.transaction.hash.toHexString() +
      "-" +
      event.logIndex.toString() +
      "-" +
      "BIDREMOVED"
  );
  let punk = Punk.load(event.params.punkIndex.toString());

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

  if (!account) {
    account = new Account(event.params.fromAddress.toHexString());
  }

  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
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
  bidRemoved.contract = contract.id;
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";

  bidCreated.amount = event.params.value;
  bidCreated.from = account.id;
  bidCreated.contract = contract.id;
  bidCreated.nft = event.params.punkIndex.toString();
  bidCreated.timestamp = event.block.timestamp;
  bidCreated.blockNumber = event.block.number;
  bidCreated.txHash = event.transaction.hash;
  bidCreated.blockHash = event.block.hash;
  bidCreated.type = "BID_CREATED";

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.fromAddress.toHexString();

  bid.save();
  punk.save();
  account.save();
  bidRemoved.save();
  contract.save();
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
  let account = Account.load(event.params.fromAddress.toHexString());
  let contract = new Contract(event.address.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString());

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
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (!account) {
    account = new Account(event.params.fromAddress.toHexString());
  }

  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = account.id;
  bidRemoved.contract = contract.id;
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

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.fromAddress.toHexString();

  punk.save();
  contract.save();
  account.save();
  bidRemoved.save();
  bidCreated.save();
  contract.save();
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
  let punk = Punk.load(event.params.punkIndex.toString());
  let contract = new Contract(event.address.toHexString());
  let toAccount = Account.load(event.params.toAddress.toHexString());
  // There is always a from account, since they were assigned
  let fromAccount = Account.load(event.params.fromAddress.toHexString())!;

  if (!sale) {
    sale = new Sale(
      event.transaction.hash.toHexString() +
        "-" +
        event.logIndex.toString() +
        "-" +
        "SALE"
    );
    contract.totalAmountTraded = BigInt.fromI32(0);
    contract.totalSales = BigInt.fromI32(0);
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString());
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

  if (!toAccount) {
    toAccount = new Account(event.params.toAddress.toHexString());
    toAccount.numberOfPunksOwned = BigInt.fromI32(0);
  }

  toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
    BigInt.fromI32(1)
  );

  fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
    BigInt.fromI32(1)
  );

  punk.purchasedBy = toAccount.id;

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.toAddress.toHexString();

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
  let contract = new Contract(event.address.toHexString());
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

  askCreated.contract = contract.id;
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHash = event.block.hash;
  askCreated.type = "ASK_CREATED";

  askRemoved.ask = askCreated.id;
  askRemoved.contract = contract.id;
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
  contract.save();
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

  let wrappedPunkContract = WrappedPunks.bind(event.address);
  let contract = Contract.load(event.address.toHexString());

  if (!contract) {
    contract = new Contract(event.address.toHexString());
    let symbolCall = wrappedPunkContract.try_symbol();
    contract.totalSupply = BigInt.fromI32(0);

    if (!symbolCall.reverted) {
      contract.symbol = symbolCall.value;
    } else {
      log.warning("symbolCall Reverted", []);
    }

    let nameCall = wrappedPunkContract.try_name();
    if (!nameCall.reverted) {
      contract.name = nameCall.value;
    } else {
      log.warning("nameCall Reverted", []);
    }
  }

  if (event.params.from.toHexString() == ZERO_ADDRESS) {
    // A wrapped punk is minted (wrapped)

    let wrap = Wrap.load(
      WRAPPED_PUNK_ADDRESS.toString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("WRAP")
    );

    if (!wrap) {
      wrap = new Wrap(
        WRAPPED_PUNK_ADDRESS.toString()
          .concat("-")
          .concat(event.logIndex.toString())
          .concat("-")
          .concat("WRAP")
      );
    }

    let toAccount = Account.load(event.params.to.toHexString());
    if (!toAccount) {
      toAccount = new Account(event.params.to.toHexString());
      toAccount.numberOfPunksOwned = BigInt.fromI32(0);
    }
    toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    wrap.from = event.params.from.toHexString();
    wrap.to = toAccount.id;
    wrap.type = "WRAP";
    wrap.timestamp = event.block.timestamp;
    wrap.nft = event.params.tokenId.toString();
    wrap.blockNumber = event.block.number;
    wrap.blockHash = event.block.hash;
    wrap.txHash = event.transaction.hash;

    contract.totalSupply = contract.totalSupply.plus(BigInt.fromI32(1));
    punk.owner = toAccount.id;

    wrap.save();
    toAccount.save();
    punk.save();
  } else if (event.params.to.toHexString() == ZERO_ADDRESS) {
    // A wrapped punk is burned (unwrapped)
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

    let fromAccount = Account.load(event.params.from.toHexString());
    if (!fromAccount) {
      fromAccount = new Account(event.params.to.toHexString());
      fromAccount.numberOfPunksOwned = BigInt.fromI32(0);
    }
    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.plus(
      BigInt.fromI32(1)
    );

    unWrap.from = event.params.from.toHexString();
    unWrap.to = fromAccount.id;
    unWrap.type = "UNWRAP";
    unWrap.timestamp = event.block.timestamp;
    unWrap.nft = event.params.tokenId.toString();
    unWrap.blockNumber = event.block.number;
    unWrap.blockHash = event.block.hash;
    unWrap.txHash = event.transaction.hash;

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
    let fromAccount = Account.load(event.params.from.toHexString());
    if (!fromAccount) {
      fromAccount = new Account(event.params.to.toHexString());
      fromAccount.numberOfPunksOwned = BigInt.fromI32(0);
    }

    fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
      BigInt.fromI32(1)
    );
    fromAccount.save();
    transfer.save();
  }

  contract.save();
  punk.save();
}
