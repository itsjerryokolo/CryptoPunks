import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  Account,
  Assign,
  Punk,
  MetaData,
  Transfer,
  Sale,
} from "../../generated/schema";
import { TOKEN_URI, CONTRACT_URI, IMAGE_URI } from "../constant";

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
  let assign = Assign.load(
    toAccount
      .toHexString()
      .concat("-")
      .concat(punkIndex.toString())
      .concat("-")
      .concat(event.logIndex.toString())
  );

  if (!assign) {
    assign = new Assign(
      toAccount
        .toHexString()
        .concat("-")
        .concat(punkIndex.toString())
        .concat("-")
        .concat(event.logIndex.toString())
    );
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

export function getOrCreateMetadata(
  punkId: BigInt,
  event: ethereum.Event
): MetaData {
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
    metadata.tokenURI = TOKEN_URI.concat(punkId.toString());
    metadata.contractURI = CONTRACT_URI;
    metadata.tokenId = punkId;
    metadata.punk = punkId.toString();
    metadata.contractURI = CONTRACT_URI;
    metadata.imageURI = IMAGE_URI.concat(punkId.toString()).concat(".png");

    metadata.traits = new Array<string>();

    metadata.save();
  }

  return metadata as MetaData;
}

export function getOrCreateSale(
  toAddress: Address,
  fromAddress: Address,
  punk: BigInt,
  event: ethereum.Event
): Sale {
  let sale = Sale.load(fromAddress.toHexString() + "-" + punk.toString());

  if (!sale) {
    sale = new Sale(fromAddress.toHexString() + "-" + punk.toString());
  }

  sale.to = toAddress.toHexString();
  sale.from = fromAddress.toHexString();
  sale.contract = event.address.toHexString();
  sale.nft = punk.toString();
  sale.timestamp = event.block.timestamp;
  sale.blockNumber = event.block.number;
  sale.txHash = event.transaction.hash;
  sale.blockHash = event.block.hash;
  sale.type = "SALE";

  sale.save();
  return sale as Sale;
}

export function getOrCreateTransfer(
  fromAddress: Address,
  toAddress: Address,
  punk: BigInt,
  event: ethereum.Event,
  entityType: string
): Transfer {
  let transfer = Transfer.load(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );

  if (!transfer) {
    transfer = new Transfer(
      event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
    );
  }

  transfer.from = fromAddress.toHexString();
  transfer.to = toAddress.toHexString();
  transfer.contract = event.address.toHexString();
  transfer.nft = punk.toString();
  transfer.timestamp = event.block.timestamp;
  transfer.blockNumber = event.block.number;
  transfer.txHash = event.transaction.hash;
  transfer.blockHash = event.block.hash;
  transfer.type = "TRANSFER";

  transfer.save();
  return transfer as Transfer;
}
