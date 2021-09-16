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
} from "../generated/schema";

let TOKEN_URI = "https://www.larvalabs.com/cryptopunks/details/";
let CONTRACT_URI = "https://www.larvalabs.com/cryptopunks";
let IMAGE_URI = "https://www.larvalabs.com/public/images/cryptopunks/punk";
let ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function handleAssign(event: Assigned): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);

  let trait = getTrait(event.params.punkIndex.toI32());

  // if (!trait) {
  //   log.info("Punk {}, traits: none", [event.params.punkIndex.toString()]);
  // } else {
  //   log.info("Punk {}, traits: {}", [
  //     event.params.punkIndex.toString(),
  //     trait.accessories.join(", "),
  //   ]);
  // }

  let assign = Assign.load(event.params.punkIndex.toString() + "-" + "ASSIGN");
  let metadata = MetaData.load(
    event.params.punkIndex.toString() + "-" + "METADATA"
  );
  let account = Account.load(event.params.to.toHexString());
  let cryptopunk = cryptopunks.bind(event.address);
  let contract = Contract.load(event.address.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");

  if (!assign) {
    assign = new Assign(event.params.punkIndex.toString() + "-" + "ASSIGN");
  }
  if (!account) {
    account = new Account(event.params.to.toHexString());
    account.numberOfPunksOwned = BigInt.fromI32(1);
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (metadata == null) {
    metadata = new MetaData(
      event.params.punkIndex.toString() + "-" + "METADATA"
    );
    metadata.traits = new Array<string>();
  }

  if (contract == null) {
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

    let allPunksAssignedCall = cryptopunk.try_allPunksAssigned();
    if (!allPunksAssignedCall.reverted) {
      contract.allPunksAssigned = allPunksAssignedCall.value;
    } else {
      log.warning("allPunkAssignedCall Reverted", []);
    }

    let totalSupplyCall = cryptopunk.try_totalSupply();
    if (!totalSupplyCall.reverted) {
      contract.totalSupply = totalSupplyCall.value;
    } else {
      log.warning("totalSupplyCall Reverted", []);
    }
  }

  assign.to = account.id;
  assign.nft = event.params.punkIndex.toString();
  assign.punksRemainingToAssign = cryptopunk.punksRemainingToAssign();
  assign.timestamp = event.block.timestamp;
  assign.blockNumber = event.block.number;
  assign.txHash = event.transaction.hash;
  assign.blockHhash = event.block.hash;
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
  account.save();
  assign.save();
  contract.save();
  metadata.save();
  punk.save();
}

export function handlePunkTransfer(event: PunkTransfer): void {
  log.debug("handlePunkTransfer", []);

  let transfer = Transfer.load(
    event.params.punkIndex.toString() + "-" + "TRANSFER"
  );
  let toAccount = Account.load(event.params.to.toHexString());
  // There is always a from account, since they were assigned
  let fromAccount = Account.load(event.params.from.toHexString())!;
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK")!;
  let contract = new Contract(event.address.toHexString());

  if (!transfer) {
    transfer = new Transfer(
      event.params.punkIndex.toString() + "-" + "TRANSFER"
    );
  }
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

  transfer.type = "TRANSFER";

  transfer.contract = contract.id;
  transfer.to = event.params.to.toHexString();
  transfer.from = event.params.from.toHexString();

  transfer.nft = event.params.punkIndex.toString();
  transfer.timestamp = event.block.timestamp;
  transfer.blockNumber = event.block.number;
  transfer.txHash = event.transaction.hash;
  transfer.blockHhash = event.block.hash;
  transfer.contract = contract.id;

  transfer.save();
  toAccount.save();
  fromAccount.save();
  punk.save();
  contract.save();
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered", []);

  let askCreated = AskCreated.load(
    event.params.punkIndex.toString() + "-" + "ASKCREATED"
  );
  let askRemoved = AskRemoved.load(
    event.params.punkIndex.toString() + "-" + "ASKREMOVED"
  );
  let ask = Ask.load(event.params.punkIndex.toString() + "-" + "ASK");
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");
  let contract = new Contract(event.address.toHexString());
  let account = Account.load(event.params.toAddress.toHexString());

  if (!askCreated) {
    askCreated = new AskCreated(
      event.params.punkIndex.toString() + "-" + "ASKCREATED"
    );
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (!account) {
    account = new Account(event.params.toAddress.toHexString());
  }
  if (!ask) {
    ask = new Ask(event.params.punkIndex.toString() + "-" + "ASK");
  }
  if (!askRemoved) {
    askRemoved = new AskRemoved(
      event.params.punkIndex.toString() + "-" + "ASKREMOVED"
    );
  }
  ask.from = account.id;
  if (!ask) {
    ask.open = true;
  }
  ask.nft = event.params.punkIndex.toString();
  ask.created = askCreated.id;
  ask.removed = askRemoved.id;
  askCreated.type = "ASK_CREATED";

  askCreated.amount = event.params.minValue;
  askCreated.from = account.id;
  askCreated.to = event.params.toAddress.toHexString();
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHhash = event.block.hash;
  askCreated.contract = contract.id;

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.toAddress.toHexString();

  punk.save();
  account.save();
  askCreated.save();
  contract.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  log.debug("handlePunkBidCreatedEntered", []);

  let bidCreated = BidCreated.load(
    event.params.punkIndex.toString() + "-" + "BIDCREATED"
  );
  let bid = Bid.load(event.params.punkIndex.toString() + "-" + "BID");
  let account = Account.load(event.params.fromAddress.toHexString());
  let contract = new Contract(event.address.toHexString());
  let bidRemoved = BidRemoved.load(
    event.params.punkIndex.toString() + "-" + "BIDREMOVED"
  );
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");

  if (!bidCreated) {
    bidCreated = new BidCreated(
      event.params.punkIndex.toString() + "-" + "BIDCREATED"
    );
  }
  if (!bidRemoved) {
    bidRemoved = new BidRemoved(
      event.params.punkIndex.toString() + "-" + "BIDREMOVED"
    );
  }

  if (!account) {
    account = new Account(event.params.fromAddress.toHexString());
  }

  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (!bid) {
    bid = new Bid(event.params.punkIndex.toString() + "-" + "BID");
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

  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = account.id;
  bidRemoved.contract = contract.id;
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHhash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";

  bidCreated.amount = event.params.value;
  bidCreated.from = account.id;
  bidCreated.contract = contract.id;
  bidCreated.nft = event.params.punkIndex.toString();
  bidCreated.timestamp = event.block.timestamp;
  bidCreated.blockNumber = event.block.number;
  bidCreated.txHash = event.transaction.hash;
  bidCreated.blockHhash = event.block.hash;
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
    event.params.punkIndex.toString() + "-" + "BIDREMOVED"
  );
  let bidCreated = BidCreated.load(
    event.params.punkIndex.toString() + "-" + "BIDCREATED"
  );
  let account = Account.load(event.params.fromAddress.toHexString());
  let contract = new Contract(event.address.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");

  if (!bidRemoved) {
    bidRemoved = new BidRemoved(
      event.params.punkIndex.toString() + "-" + "BIDREMOVED"
    );
  }
  if (!bidCreated) {
    bidCreated = new BidCreated(
      event.params.punkIndex.toString() + "-" + "BIDCREATED"
    );
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (!account) {
    account = new Account(event.params.fromAddress.toHexString());
  }

  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = account.id;
  bidRemoved.contract = contract.id;
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp;
  bidRemoved.blockNumber = event.block.number;
  bidRemoved.txHash = event.transaction.hash;
  bidRemoved.blockHhash = event.block.hash;
  bidRemoved.type = "BID_REMOVED";

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.fromAddress.toHexString();

  punk.save();
  contract.save();
  bidRemoved.save();
  bidCreated.save();
  contract.save();
}

export function handlePunkBought(event: PunkBought): void {
  log.debug("handlePunkBought", []);

  let sale = Sale.load(event.params.punkIndex.toString() + "-" + "SALE");
  let account = Account.load(event.params.toAddress.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");
  let contract = new Contract(event.address.toHexString());

  if (!sale) {
    sale = new Sale(event.params.punkIndex.toString() + "-" + "SALE");
    contract.totalAmountTraded = BigInt.fromI32(0);
    contract.totalSales = BigInt.fromI32(0);
  }
  if (!account) {
    account = new Account(event.params.toAddress.toHexString());
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }

  sale.amount = event.params.value;
  sale.to = event.params.toAddress.toHexString();
  sale.amount = event.params.value;
  sale.from = event.params.fromAddress.toHexString();
  sale.contract = contract.id;
  sale.nft = event.params.punkIndex.toString();
  sale.timestamp = event.block.timestamp;
  sale.blockNumber = event.block.number;
  sale.txHash = event.transaction.hash;
  sale.blockHhash = event.block.hash;
  sale.type = "SALE";

  contract.totalAmountTraded = contract.totalAmountTraded.plus(
    event.params.value
  );
  contract.totalSales = contract.totalSales.plus(BigInt.fromI32(1));

  punk.purchasedBy = account.id;

  punk.tokenId = event.params.punkIndex;
  punk.owner = event.params.toAddress.toHexString();

  punk.save();
  account.save();
  contract.save();
  sale.save();
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  log.debug("handlePunkNoLongerForSale", []);

  let askRemoved = AskRemoved.load(
    event.params.punkIndex.toString() + "-" + "ASKREMOVED"
  );
  let askCreated = AskCreated.load(
    event.params.punkIndex.toString() + "-" + "ASKCREATED"
  );
  let contract = new Contract(event.address.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");

  if (!askCreated) {
    askCreated = new AskCreated(
      event.params.punkIndex.toString() + "-" + "ASKCREATED"
    );
  }
  if (!askRemoved) {
    askRemoved = new AskRemoved(
      event.params.punkIndex.toString() + "-" + "ASKREMOVED"
    );
  }
  if (!punk) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }

  askCreated.contract = contract.id;
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp;
  askCreated.blockNumber = event.block.number;
  askCreated.txHash = event.transaction.hash;
  askCreated.blockHhash = event.block.hash;
  askCreated.type = "ASK_CREATED";

  askRemoved.ask = askCreated.id;
  askRemoved.contract = contract.id;
  askRemoved.nft = event.params.punkIndex.toString();
  askRemoved.timestamp = event.block.timestamp;
  askRemoved.blockNumber = event.block.number;
  askRemoved.txHash = event.transaction.hash;
  askRemoved.blockHhash = event.block.hash;
  askRemoved.type = "ASK_REMOVED";

  punk.tokenId = event.params.punkIndex;

  punk.save();
  askCreated.save();
  askRemoved.save();
  contract.save();
}

export function handleWrappedPunkTransfer(event: WrappedPunkTransfer): void {
  log.info("handleWrappedPunksTransfer tokenId: {} to: {}", [
    event.params.tokenId.toString(),
    event.params.to.toHexString(),
  ]);

  let punk = Punk.load(event.params.tokenId.toString() + "-" + "PUNK")!;

  let toAccount = Account.load(event.params.to.toHexString());
  // There is always a from account, since they were assigned
  let fromAccount = Account.load(event.params.from.toHexString())!;

  let wrappedPunkContract = WrappedPunks.bind(event.address);
  let contract = Contract.load(event.address.toHexString());

  if (toAccount == null) {
    toAccount = new Account(event.params.to.toHexString());
    toAccount.numberOfPunksOwned = BigInt.fromI32(0);
  }

  toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(
    BigInt.fromI32(1)
  );

  fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
    BigInt.fromI32(1)
  );

  if (contract == null) {
    contract = new Contract(event.address.toHexString());
    let symbolCall = wrappedPunkContract.try_symbol();
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

  let totalSupplyCall = wrappedPunkContract.try_totalSupply();
  if (!totalSupplyCall.reverted) {
    contract.totalSupply = totalSupplyCall.value;
  } else {
    log.warning("totalSupplyCall Reverted", []);
  }

  contract.save();

  // A wrapped punk is minted (wrapped)
  if (event.params.from.toHexString() == ZERO_ADDRESS) {
    punk.wrapped = true;
    punk.save();
    return;
  }

  // A wrapped punk is burned (unwrapped)
  if (event.params.to.toHexString() == ZERO_ADDRESS) {
    punk.wrapped = false;
    punk.save();
    return;
  }

  // We do not want to save a transfer for wrapped punk mints/burns
  let transfer = Transfer.load(
    event.params.tokenId.toString() + "-" + "TRANSFER"
  );

  if (transfer == null) {
    transfer = new Transfer(event.params.tokenId.toString() + "-" + "TRANSFER");
  }

  transfer.type = "TRANSFER";

  transfer.contract = contract.id;
  transfer.to = event.params.to.toHexString();
  transfer.from = event.params.from.toHexString();

  transfer.nft = event.params.tokenId.toString();
  transfer.timestamp = event.block.timestamp;
  transfer.blockNumber = event.block.number;
  transfer.txHash = event.transaction.hash;
  transfer.blockHhash = event.block.hash;
  transfer.contract = contract.id;

  transfer.save();
  toAccount.save();
  fromAccount.save();
  punk.save();
}
