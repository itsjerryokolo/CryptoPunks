import { Address, Bytes, BigInt, log, ethereum } from "@graphprotocol/graph-ts";
import {
  Account,
  Assign,
  Punk,
  MetaData,
  Contract,
  Transfer,
} from "../generated/schema";
import {
  TOKEN_URI,
  CONTRACT_URI,
  IMAGE_URI,
  ZERO_ADDRESS,
  WRAPPED_PUNK_ADDRESS,
  CRYPTOPUNKS_ADDRESS,
} from "./constant";

import { cryptopunks } from "../generated/cryptopunks/cryptopunks";
import { WrappedPunks } from "../generated/WrappedPunks/WrappedPunks";

export function getOrCreateAccount(address: Address): Account {
  let id = address.toHexString();
  let account = Account.load(id);

  if (!account) {
    account = new Account(id);
    account.numberOfPunksOwned = BigInt.fromI32(0);
  }

  return account as Account;
}

// export function fillEvent(
//   event: ethereum.Event,
//   account: Account,
//   contract: Contract,
//   nft: Punk,
//   entityType: string // "ASSIGN" | "TRANSFER"
// ): Assign | Transfer {
//   let id =
//     event.transaction.hash.toHexString() +
//     "-" +
//     event.logIndex.toString() +
//     "-" +
//     entityType;

//   let entity;
//   if (entityType == "ASSIGN") {
//     entity = new Assign(id);
//   } else if (entityType == "TRANSFER") {
//     entity = new Transfer(id);
//   }

//   entity.to = account.id;
//   entity.nft = nft.id;
//   entity.timestamp = event.block.timestamp;
//   entity.blockNumber = event.block.number;
//   entity.txHash = event.transaction.hash;
//   entity.blockHash = event.block.hash;
//   entity.contract = contract.id;
//   entity.type = entityType;

//   entity.save();

//   return entity;
// }

export function getOrCreateAssign(
  id: Bytes,
  punkId: BigInt,
  account: Address
): Assign {
  let event: ethereum.Event;
  let assign = Assign.load(
    id
      .toHexString()
      .concat("-")
      .concat(event.logIndex.toString())
      .concat("-")
      .concat("ASSIGN")
  );

  if (!assign) {
    assign = new Assign(
      id
        .toHexString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("ASSIGN")
    );
  }
  assign.to = account.toHexString();
  assign.nft = punkId.toString();
  assign.timestamp = event.block.timestamp;
  assign.contract = event.address.toHexString();
  assign.blockNumber = event.block.number;
  assign.txHash = event.transaction.hash;
  assign.blockHash = event.block.hash;
  assign.type = "ASSIGN";
  assign.save();

  return assign as Assign;
}

export function getOrCreatePunk(id: BigInt, account: Address): Punk {
  let event: ethereum.Event;
  let punk = Punk.load(id.toString());
  if (!punk) {
    punk = new Punk(id.toString());
  }
  punk.wrapped = false;
  punk.tokenId = id;
  punk.assignedTo = account.toHexString();
  punk.transferedTo = account.toHexString();
  punk.owner = account.toHexString();
  punk.metadata = id
    .toString()
    .concat("-")
    .concat(event.logIndex.toString())
    .concat("-")
    .concat("METADATA");
  punk.wrapped = false;
  punk.save();

  return punk as Punk;
}

export function getOrCreateMetadata(punkId: BigInt): MetaData {
  let event: ethereum.Event;
  let metadata = MetaData.load(
    punkId
      .toString()
      .concat("-")
      .concat(event.logIndex.toString())
      .concat("-")
      .concat("METADATA")
  );

  if (!metadata) {
    metadata = new MetaData(
      punkId
        .toString()
        .concat("-")
        .concat(event.logIndex.toString())
        .concat("-")
        .concat("METADATA")
    );

    metadata.traits = new Array<string>();
  }
  metadata.tokenURI = TOKEN_URI.concat(punkId.toString());
  metadata.tokenId = punkId;
  metadata.punk = punkId.toString();
  metadata.contractURI = CONTRACT_URI;
  metadata.imageURI = IMAGE_URI.concat(punkId.toString()).concat(".png");

  metadata.save();

  return metadata as MetaData;
}

export function getOrCreateCryptoPunkContract(address: Address): Contract {
  let id = address.toHexString();
  let contract = Contract.load(id);
  let cryptopunk = cryptopunks.bind(address);

  if (!contract) {
    contract = new Contract(id);
    contract.totalAmountTraded = BigInt.fromI32(0);
    contract.totalSales = BigInt.fromI32(0);

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

    let totalSupplyCall = cryptopunk.try_totalSupply();
    if (!totalSupplyCall.reverted) {
      contract.totalSupply = totalSupplyCall.value;
    } else {
      log.warning("totalSupplyCall Reverted", []);
    }

    contract.save();
  }

  return contract as Contract;
}

export function getOrCreateWrappedPunkContract(address: Address): Contract {
  let id = address.toHexString();
  let contract = Contract.load(id);
  let wrappedPunks = WrappedPunks.bind(address);

  if (!contract) {
    contract = new Contract(id);
    contract.totalAmountTraded = BigInt.fromI32(0);
    contract.totalSales = BigInt.fromI32(0);

    let symbolCall = wrappedPunks.try_symbol();
    if (!symbolCall.reverted) {
      contract.symbol = symbolCall.value;
    } else {
      log.warning("symbolCall Reverted", []);
    }

    let nameCall = wrappedPunks.try_name();
    if (!nameCall.reverted) {
      contract.name = nameCall.value;
    } else {
      log.warning("nameCall Reverted", []);
    }

    let totalSupplyCall = wrappedPunks.try_totalSupply();
    if (!totalSupplyCall.reverted) {
      contract.totalSupply = totalSupplyCall.value;
    } else {
      log.warning("totalSupplyCall Reverted", []);
    }

    contract.save();
  }

  return contract as Contract;
}
