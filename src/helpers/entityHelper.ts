import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  Account,
  Assign,
  Punk,
  MetaData,
  Transfer,
  CToken,
  Sale,
} from "../../generated/schema";
import { TOKEN_URI, CONTRACT_URI, IMAGE_URI } from "../constant";
import { getGlobalId } from "../utills";

export function getOrCreateAccount(address: Address): Account {
  let id = address.toHexString();
  let account = Account.load(id);

  if (!account) {
    account = new Account(id);
    account.numberOfPunksOwned = BigInt.fromI32(0);
    account.save();
  }

  return account as Account;
}

export function getOrCreateAssign(
  punkIndex: BigInt,
  toAccount: Address,
  punk: Punk,
  metadata: MetaData,
  event: ethereum.Event
): Assign {
  let assign = Assign.load(getGlobalId(event));

  if (!assign) {
    assign = new Assign(getGlobalId(event));
  }
  assign.to = toAccount.toHexString();
  assign.nft = punkIndex.toString();
  assign.timestamp = event.block.timestamp;
  assign.contract = event.address.toHexString();
  assign.blockNumber = event.block.number;
  assign.txHash = event.transaction.hash;
  assign.blockHash = event.block.hash;
  punk.metadata = metadata.id;
  punk.assignedTo = toAccount.toHexString();
  punk.transferedTo = toAccount.toHexString();
  assign.type = "ASSIGN";
  assign.save();

  return assign as Assign;
}

export function createMetadata(punkId: BigInt): MetaData {
  let metadata = new MetaData(punkId.toString());
  metadata.tokenURI = TOKEN_URI.concat(punkId.toString());
  metadata.contractURI = CONTRACT_URI;
  metadata.tokenId = punkId;
  metadata.punk = punkId.toString();
  metadata.contractURI = CONTRACT_URI;
  metadata.imageURI = IMAGE_URI.concat(punkId.toString()).concat(".png");

  metadata.traits = new Array<string>();

  metadata.save();

  return metadata as MetaData;
}

export function getOrCreateSale(
  toAddress: Address,
  fromAddress: Address,
  punk: BigInt,
  event: ethereum.Event
): Sale {
  let sale = Sale.load(getGlobalId(event).concat("-SALE"));

  if (!sale) {
    sale = new Sale(getGlobalId(event).concat("-SALE"));
    sale.contract = event.address.toHexString();
    sale.timestamp = event.block.timestamp;
    sale.blockNumber = event.block.number;
    sale.txHash = event.transaction.hash;
    sale.blockHash = event.block.hash;
    sale.type = "SALE";
  }

  sale.to = toAddress.toHexString();
  sale.from = fromAddress.toHexString();
  sale.nft = punk.toString();

  sale.save();
  return sale as Sale;
}

export function getOrCreateCToken(globalId: string): CToken {
  let cToken = CToken.load(globalId);
  if (!cToken) {
    cToken = new CToken(globalId);
    cToken.save();
  }
  return cToken as CToken;
}
