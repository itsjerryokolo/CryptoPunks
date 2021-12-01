import { Address, Bytes, BigInt, log, ethereum } from "@graphprotocol/graph-ts";
import { Account, Assign, Punk, MetaData, Contract } from "../generated/schema";
import {
  TOKEN_URI,
  CONTRACT_URI,
  IMAGE_URI,
  ZERO_ADDRESS,
  WRAPPED_PUNK_ADDRESS,
} from "./constant";

import { cryptopunks } from "../generated/cryptopunks/cryptopunks";

export function getOrCreateAccount(address: Address): Account {
  let account = Account.load(address.toHex());

  if (!account) {
    account = new Account(address.toHexString());
    account.numberOfPunksOwned = BigInt.fromI32(0);
  }
  account.numberOfPunksOwned = account.numberOfPunksOwned.plus(
    BigInt.fromI32(1)
  );

  account.save();

  return account as Account;
}

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

export function getOrCreateContract(): Contract {
  let event: ethereum.Event;
  let contract = Contract.load(event.address.toHexString());
  if (!contract) {
    contract = new Contract(event.address.toHexString());
  }
  let cryptopunk = cryptopunks.bind(event.address);

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

  return contract as Contract;
}
