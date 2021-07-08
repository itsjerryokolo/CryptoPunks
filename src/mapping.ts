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
  Assign,
  Transfer,
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
  ApprovalForAll,
  OwnershipTransferred,
  Paused,
  ProxyRegistered,
  Transfer as WrappedPunkTransfer,
  Unpaused,
} from "../generated/WrappedPunks/WrappedPunks";

import { getTrait } from "./traits";

import {
  cTokenTransferEvent,
  Account,
  AssignEvent,
  PunkTransferEvent,
  Punk,
  Transaction,
  NotForSaleEvent,
  cToken,
  OfferEvent,
  BidEvent,
  WithdrawnBid,
  Contract,
  SaleEvent,
  WrappedPunk,
} from "../generated/schema";

export function handleAssign(event: Assign): void {
  log.info("handleAssign {}", [event.params.punkIndex.toString()]);

  let trait = getTrait(event.params.punkIndex.toI32());

  if (trait == null) {
    log.info("Punk {}, traits: none", [event.params.punkIndex.toString()]);
  } else {
    log.info("Punk {}, traits: {}", [
      event.params.punkIndex.toString(),
      trait.accessories.join(", "),
    ]);
  }

  let assign = AssignEvent.load(event.params.punkIndex.toHexString());
  let account = Account.load(event.params.to.toHexString());
  let remainingPunks = cryptopunks.bind(event.address);
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let offer = OfferEvent.load(event.params.punkIndex.toString());
  let punk = Punk.load(event.params.punkIndex.toString());
  let ctransfer = PunkTransferEvent.load(event.params.punkIndex.toString());
  let bid = BidEvent.load(event.params.punkIndex.toString());

  if (assign == null) {
    assign = new AssignEvent(event.params.punkIndex.toString());
  }
  if (ctransfer == null) {
    ctransfer = new PunkTransferEvent(event.params.punkIndex.toString());
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString());
  }
  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  assign.assignedTo = account.id;
  assign.transaction = transaction.id;
  assign.punk = event.params.punkIndex.toHexString();
  assign.punksRemainingToAssign = remainingPunks.punksRemainingToAssign();

  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.assigned = assign.id;

  bid.account = account.id;
  bid.transaction = transaction.id;

  offer.offeredBy = account.id;
  offer.transaction = transaction.id;
  offer.punkOfferedForSale = event.params.punkIndex.toHexString();

  punk.assignedTo = account.id;
  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()

  punk.account = account.id;
  if (trait != null) {
    punk.type = trait.type;
    punk.accessories = trait.accessories;
  }

  ctransfer.ownedBy = account.id;
  ctransfer.transaction = transaction.id;

  account.save();
  assign.save();
  offer.save();
  ctransfer.save();
  transaction.save();
}

export function handleTransfer(event: Transfer): void {
  log.debug("handleTransfer", []);

  let ctransfer = cTokenTransferEvent.load(event.params.to.toHexString());
  let account = new Account(event.params.to.toHexString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let punk = cryptopunks.bind(event.address);
  let contract = new Contract(event.params.from.toHexString());
  let ctoken = new cToken(event.params.to.toHexString());

  if (ctransfer == null) {
    ctransfer = new cTokenTransferEvent(event.params.from.toHexString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  ctransfer.ownedBy = account.id;
  ctransfer.ctoken = ctoken.id;
  ctransfer.transferedFrom = event.params.from;
  ctransfer.transferedTo = event.params.to;
  ctransfer.amountTransfered = event.params.value;
  ctransfer.transaction = transaction.id;

  ctoken.contract = contract.id;

  contract.allPunksAssigned = punk.allPunksAssigned();
  contract.symbol = punk.symbol();
  contract.totalSupply = punk.totalSupply();
  contract.imageHash = punk.imageHash();
  contract.name = punk._name;
  contract.address = punk._address;

  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.ctoken = ctransfer.id;

  ctoken.save();
  account.save();
  contract.save();
  transaction.save();
  ctransfer.save();
}

export function handlePunkTransfer(event: PunkTransfer): void {
  log.debug("handlePunkTransfer", []);

  let punkTransfer = PunkTransferEvent.load(event.params.punkIndex.toString());
  let account = Account.load(event.params.to.toHexString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let offer = OfferEvent.load(event.params.punkIndex.toString());
  let punk = Punk.load(event.params.punkIndex.toString());
  let bid = BidEvent.load(event.params.punkIndex.toString());

  if (punkTransfer == null) {
    punkTransfer = new PunkTransferEvent(event.params.punkIndex.toString());
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString());
  }
  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  punkTransfer.punk = punk.id;
  punkTransfer.sender = event.params.from;
  punkTransfer.receiver = event.params.to;
  punkTransfer.ownedBy = account.id;
  punkTransfer.transaction = transaction.id;

  bid.account = account.id;
  bid.transaction = transaction.id;

  offer.offeredBy = account.id;
  offer.transaction = transaction.id;
  offer.punkOfferedForSale = punk.id;

  punk.transferedTo = account.id;
  punk.account = account.id;
  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()


  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.punkTransfers = punk.id;

  punk.save();
  account.save();
  bid.save();
  offer.save();
  punkTransfer.save();
  transaction.save();
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered", []);

  let offer = OfferEvent.load(event.params.punkIndex.toString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString());
  let account = Account.load(event.params.toAddress.toHexString());
  let bid = BidEvent.load(event.params.punkIndex.toString());

  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (account == null) {
    account = new Account(event.params.toAddress.toHexString());
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString());
  }

  offer.amountOffered = event.params.minValue;
  offer.offeredBy = account.id;
  offer.punkOfferedForSale = punk.id;
  offer.transaction = transaction.id;

  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()



  bid.account = account.id;
  bid.transaction = transaction.id;

  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.offer = punk.id;

  punk.save();
  account.save();
  offer.save();
  bid.save();
  transaction.save();
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  log.debug("handlePunkBidEntered", []);

  let bid = BidEvent.load(event.params.punkIndex.toString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let bidwithdrawn = WithdrawnBid.load(event.params.punkIndex.toString());
  let punk = Punk.load(event.params.punkIndex.toString());

  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString());
  }
  if (bidwithdrawn == null) {
    bidwithdrawn = new WithdrawnBid(event.params.punkIndex.toString());
  }

  bid.bid = event.params.value;
  bid.transaction = transaction.id;
  bid.punk = punk.id;
  bid.bidWithdrawn = bidwithdrawn.id;
  bid.bidder = event.params.fromAddress;

  bidwithdrawn.transaction = transaction.id;
  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()


  

  transaction.date = event.block.timestamp;
  transaction.bid = punk.id;
  transaction.block = event.block.number;

  punk.save();
  bidwithdrawn.save();
  transaction.save();
  punk.save();
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  log.debug("handlePunkBidWithdrawn", []);

  let withdrawnbid = WithdrawnBid.load(event.params.punkIndex.toString());
  let bid = BidEvent.load(event.params.punkIndex.toString());
  let account = Account.load(event.params.fromAddress.toHexString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString());

  if (withdrawnbid == null) {
    withdrawnbid = new WithdrawnBid(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString());
  }
  if (account == null) {
    account = new Account(event.params.fromAddress.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString());
  }

  withdrawnbid.amountWithdrawn = event.params.value;
  withdrawnbid.transaction = transaction.id;
  withdrawnbid.punk = punk.id;
  withdrawnbid.bid = bid.id;
  withdrawnbid.withdrawnBy = account.id;

  bid.account = account.id;
  bid.transaction = transaction.id;

  punk.account = account.id
  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()


  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;

  account.save();
  transaction.save();
  withdrawnbid.save();
  bid.save();
  punk.save();
}

export function handlePunkBought(event: PunkBought): void {
  log.debug("handlePunkBought", []);

  let saleevent = SaleEvent.load(event.params.punkIndex.toString());
  let account = Account.load(event.params.toAddress.toHexString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString());
  let offer = OfferEvent.load(event.params.punkIndex.toString());
  let bid = BidEvent.load(event.params.punkIndex.toString());
  let withdrawn = WithdrawnBid.load(event.params.punkIndex.toString());

  if (saleevent == null) {
    saleevent = new SaleEvent(event.params.punkIndex.toString());
  }
  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString());
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString());
  }
  if (account == null) {
    account = new Account(event.params.toAddress.toHexString());
  }
  if (withdrawn == null) {
    withdrawn = new WithdrawnBid(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString());
  }

  saleevent.punk = punk.id;
  saleevent.amount = event.params.value;
  saleevent.seller = event.params.fromAddress;
  saleevent.buyer = account.id;
  saleevent.transaction = transaction.id;

  bid.account = account.id;
  bid.transaction = transaction.id;

  withdrawn.withdrawnBy = account.id;
  withdrawn.transaction = transaction.id;

  punk.purchasedBy = account.id;
  punk.wrappedPunk = event.params.punkIndex.toString()
  punk.punk = punk.id
  punk.account = account.id;

  offer.offeredBy = account.id;
  offer.transaction = transaction.id;
  offer.punkOfferedForSale = punk.id;

  transaction.date = event.block.timestamp;
  transaction.account = account.id;
  transaction.punk = punk.id;
  transaction.block = event.block.number;

  punk.save();
  account.save();
  bid.save();
  offer.save();
  transaction.save();
  withdrawn.save();
  saleevent.save();
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  log.debug("handlePunkNoLongerForSale", []);

  let punk = NotForSaleEvent.load(event.params.punkIndex.toString());
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  if (punk == null) {
    punk = new NotForSaleEvent(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  punk.punk = event.params.punkIndex;
  punk.transaction = transaction.id;

  transaction.notForSale = punk.id;
  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;

  punk.save();
  transaction.save();
}

export function handleApproval(event: Approval): void {
 
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleProxyRegistered(event: ProxyRegistered): void {}

export function handleWrappedPunkTransfer(event: WrappedPunkTransfer): void {
  log.info("handleWrappedPunksTransfer tokenId: {} to: {}", [
    event.params.tokenId.toString(),
    event.params.to.toHexString(),
  ]);

  let wrappedPunk = WrappedPunk.load(event.params.tokenId.toString());
  let account = Account.load(event.params.to.toHexString());

  if (wrappedPunk == null) {
    wrappedPunk = new WrappedPunk(event.params.tokenId.toString());
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString());
  }

  wrappedPunk.punk = event.params.tokenId.toString();
  wrappedPunk.account = account.id;
  wrappedPunk.wrappedPunk = wrappedPunk.id

  wrappedPunk.save();
  account.save();
}

export function handleUnpaused(event: Unpaused): void {}
