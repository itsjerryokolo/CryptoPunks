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
  Transfer as CtokenTransfer,
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

import { getTrait, traits } from "./traits";

import {
  Ask,
  Account,
  Assign,
  Transfer,
  BidCreated,
  Punk,
  Sale,
  BidRemoved,
  AskCreated,
  AskRemoved,
  WrappedPunk,
  Contract,
  Bid
} from "../generated/schema";

export function handleAssign(event: Assigned): void {
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

  let assign = Assign.load(event.params.punkIndex.toString() + "-" + "ASSIGN");
  let account = Account.load(event.params.to.toHexString());
  let cryptopunk = cryptopunks.bind(event.address);
  let contract = new Contract(event.address.toHexString())
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK")

  if (assign == null) {
    assign = new Assign(event.params.punkIndex.toString() + "-" + "ASSIGN");
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString());
  }
  if (punk == null){
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK")
  }
  assign.type = "ASSIGN"

  assign.to = account.id;
  assign.nft = event.params.punkIndex.toString();
  assign.punksRemainingToAssign = cryptopunk.punksRemainingToAssign();
  assign.timestamp = event.block.timestamp
  assign.blockNumber = event.block.number
  assign.txHash = event.transaction.hash
  assign.blockHhash = event.block.hash
  assign.contract = contract.id

  let symbolCall = cryptopunk.try_symbol()
  if(!symbolCall.reverted){
    contract.symbol = symbolCall.value
  }
  else{
    log.warning("symbolCall Reverted", [])
  }

  let nameCall = cryptopunk.try_name()
  if(!nameCall.reverted){
    contract.name = nameCall.value
  }
  else{
    log.warning("nameCall Reverted", [])
  }

  let imageHashCall = cryptopunk.try_imageHash()
  if(!imageHashCall.reverted){
    contract.imageHash = imageHashCall.value
  }
  else{
    log.warning("imageHashCall Reverted", [])
  }

  let allPunksAssignedCall = cryptopunk.try_allPunksAssigned()
  if(!allPunksAssignedCall.reverted){
    contract.allPunksAssigned = allPunksAssignedCall.value
  }
  else{
    log.warning("allPunkAssignedCall Reverted", [])
  }

  let totalSupplyCall = cryptopunk.try_totalSupply()
  if(!totalSupplyCall.reverted){
    contract.totalSupply = totalSupplyCall.value
  }
  else{
    log.warning("totalSupplyCall Reverted", [])
  }

  punk.assignedTo = account.id;
  punk.punk = punk.id
  punk.transferedTo = account.id
  punk.tokenId = event.params.punkIndex
  punk.owner = account.id
  punk.wrappedPunk = event.params.punkIndex.toString()
  if (trait != null) {
    punk.type = trait.type;
    punk.accessories = trait.accessories;
  }

  account.save();
  assign.save();
  contract.save()
  punk.save();
}

export function handleTransfer(event: Transfer): void {}

export function handlePunkTransfer(event: PunkTransfer): void {
  log.debug("handlePunkTransfer", []);

  let transfer = Transfer.load(event.params.punkIndex.toString() + "-" + "TRANSFER");
  let account = Account.load(event.params.to.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");  
  let contract = new Contract(event.address.toHexString());


  if (transfer == null) {
    transfer = new Transfer(event.params.punkIndex.toString() + "-" + "TRANSFER");
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }

  transfer.type = "TRANSFER"

  transfer.contract = contract.id;
  transfer.to = event.params.to.toHexString();
  transfer.from = event.params.from.toHexString();

  transfer.nft = event.params.punkIndex.toString();
  transfer.timestamp = event.block.timestamp
  transfer.blockNumber = event.block.number
  transfer.txHash = event.transaction.hash
  transfer.blockHhash = event.block.hash
  transfer.contract = contract.id

  transfer.save();
  account.save();
  account.save();
  contract.save();
}

export function handlePunkOffered(event: PunkOffered): void {
  log.debug("handlePunkOffered", []);

  let askCreated = AskCreated.load(event.params.punkIndex.toString() + "-" + "ASKCREATED");
  let askRemoved = AskRemoved.load(event.params.punkIndex.toString() + "-" + "ASKREMOVED");
  let ask = Ask.load(event.params.punkIndex.toString() + "-" + "ASK");
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");
  let contract = new Contract(event.address.toHexString())
  let account = Account.load(event.params.toAddress.toHexString());

  if (askCreated == null) {
    askCreated = new AskCreated(event.params.punkIndex.toString() + "-" + "ASKCREATED");
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (account == null) {
    account = new Account(event.params.toAddress.toHexString());
  }
  if (ask == null) {
    ask = new Ask(event.params.punkIndex.toString() + "-" + "ASK");
  }
  if (askRemoved == null) {
    askRemoved = new AskRemoved(event.params.punkIndex.toString() + "-" + "ASKREMOVED");
  }
  ask.from = account.id
  if(ask != null){
    ask.open = true
  }
  ask.nft = event.params.punkIndex.toString();
  ask.created = askCreated.id
  ask.removed = askRemoved.id
  askCreated.type = "ASK_CREATED"

  askCreated.amount = event.params.minValue;
  askCreated.from = account.id;
  askCreated.to = event.params.toAddress.toHexString()
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp
  askCreated.blockNumber = event.block.number
  askCreated.txHash = event.transaction.hash
  askCreated.blockHhash = event.block.hash
  askCreated.contract = contract.id

  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()
  punk.tokenId = event.params.punkIndex
  punk.owner = event.params.toAddress.toHexString()


  punk.save();
  account.save();
  askCreated.save();
  contract.save();
  
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  log.debug("handlePunkBidCreatedEntered", []);

  let bidCreated = BidCreated.load(event.params.punkIndex.toString() + "-" + "BIDCREATED");
  let bid = Bid.load(event.params.punkIndex.toString() + "-" + "BID")
  let account = Account.load(event.params.fromAddress.toHexString());
  let contract = new Contract(event.address.toHexString())
  let bidRemoved = BidRemoved.load(event.params.punkIndex.toString() + "-" + "BIDREMOVED");
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");

  if (bidCreated == null) {
    bidCreated = new BidCreated(event.params.punkIndex.toString() + "-" + "BIDCREATED");
  }
  if (bidRemoved == null) {
    bidRemoved = new BidRemoved(event.params.punkIndex.toString() + "-" + "BIDREMOVED");
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (bid == null) {
    bid = new Bid(event.params.punkIndex.toString() + "-" + "BID");
  }
  if (account == null) {
    account = new Account(event.params.fromAddress.toHexString());
  }

  if(bid != null){
    bid.open = true
  }
  bid.nft = event.params.punkIndex.toString()
  bid.created = bidCreated.id
  bid.removed = bidRemoved.id
  bid.from = account.id
  bid.nft = event.params.punkIndex.toString();
  bid.offerType = "BID"


  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = account.id
  bidRemoved.contract = contract.id;
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp
  bidRemoved.blockNumber = event.block.number
  bidRemoved.txHash = event.transaction.hash
  bidRemoved.blockHhash = event.block.hash
  bidRemoved.type = "BID_REMOVED"



  bidCreated.amount = event.params.value;
  bidCreated.from = account.id
  bidCreated.contract = contract.id;
  bidCreated.nft = event.params.punkIndex.toString();
  bidCreated.timestamp = event.block.timestamp
  bidCreated.blockNumber = event.block.number
  bidCreated.txHash = event.transaction.hash
  bidCreated.blockHhash = event.block.hash
  bidCreated.type = "BID_CREATED"


  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()
  punk.tokenId = event.params.punkIndex
  punk.owner = event.params.fromAddress.toHexString()

  bid.save();
  punk.save();
  bidRemoved.save();
  contract.save()
  bidCreated.save()
  
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  log.debug("handlePunkBidCreatedWithdrawn", []);

  let bidRemoved = BidRemoved.load(event.params.punkIndex.toString() + "-" + "BIDREMOVED");
  let bidCreated = BidCreated.load(event.params.punkIndex.toString() + "-" + "BIDCREATED")
  let account = Account.load(event.params.fromAddress.toHexString())
  let contract = new Contract(event.address.toHexString())
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK")

  if (bidRemoved == null) {
    bidRemoved = new BidRemoved(event.params.punkIndex.toString() + "-" + "BIDREMOVED")
  }
  if (bidCreated == null) {
    bidCreated = new BidCreated(event.params.punkIndex.toString() + "-" + "BIDCREATED")
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }
  if (account == null) {
    account = new Account(event.params.fromAddress.toHexString())
  }

  bidRemoved.bid = bidCreated.id;
  bidRemoved.from = account.id
  bidRemoved.contract = contract.id;
  bidRemoved.nft = event.params.punkIndex.toString();
  bidRemoved.timestamp = event.block.timestamp
  bidRemoved.blockNumber = event.block.number
  bidRemoved.txHash = event.transaction.hash
  bidRemoved.blockHhash = event.block.hash
  bidRemoved.type = "BID_REMOVED"

  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()
  punk.tokenId = event.params.punkIndex
  punk.owner = event.params.fromAddress.toHexString()


  punk.save()
  contract.save()
  bidRemoved.save()
  bidCreated.save()
  contract.save()
}

export function handlePunkBought(event: PunkBought): void {
  log.debug("handlePunkBought", []);

  let sale = Sale.load(event.params.punkIndex.toString() + "-" + "SALE");
  let account = Account.load(event.params.toAddress.toHexString());
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK");
  let contract = new Contract(event.address.toHexString())


  if (sale == null) {
    sale = new Sale(event.params.punkIndex.toString() + "-" + "SALE");
  }
  if (account == null) {
    account = new Account(event.params.toAddress.toHexString());
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }

  sale.amount = event.params.value;
  sale.to = event.params.toAddress.toHexString();
  sale.from = event.params.fromAddress.toHexString();
  sale.contract = contract.id;
  sale.nft = event.params.punkIndex.toString();
  sale.timestamp = event.block.timestamp
  sale.blockNumber = event.block.number
  sale.txHash = event.transaction.hash
  sale.blockHhash = event.block.hash
  sale.type = "SALE"

  punk.purchasedBy = account.id;
  punk.wrappedPunk = event.params.punkIndex.toString()
  punk.punk = punk.id
  punk.account = account.id;
  punk.tokenId = event.params.punkIndex
  punk.owner = event.params.toAddress.toHexString()

  punk.save();
  account.save();
  contract.save()
  sale.save();
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  log.debug("handlePunkNoLongerForSale", []);

  let askRemoved = AskRemoved.load(event.params.punkIndex.toString() + "-" + "ASKREMOVED");
  let askCreated = AskCreated.load(event.params.punkIndex.toString() + "-" + "ASKCREATED");
  let contract = new Contract(event.address.toHexString())
  let punk = Punk.load(event.params.punkIndex.toString() + "-" + "PUNK")

  if (askCreated == null) {
    askCreated = new AskCreated(event.params.punkIndex.toString() + "-" + "ASKCREATED")
  }
  if (askRemoved == null) {
    askRemoved = new AskRemoved(event.params.punkIndex.toString() + "-" + "ASKREMOVED")
  }
  if (punk == null) {
    punk = new Punk(event.params.punkIndex.toString() + "-" + "PUNK");
  }

  askCreated.contract = contract.id;
  askCreated.nft = event.params.punkIndex.toString();
  askCreated.timestamp = event.block.timestamp
  askCreated.blockNumber = event.block.number
  askCreated.txHash = event.transaction.hash
  askCreated.blockHhash = event.block.hash
  askCreated.type = "ASK_CREATED"

  askRemoved.ask = askCreated.id;
  askRemoved.contract = contract.id;
  askRemoved.nft = event.params.punkIndex.toString();
  askRemoved.timestamp = event.block.timestamp
  askRemoved.blockNumber = event.block.number
  askRemoved.txHash = event.transaction.hash
  askRemoved.blockHhash = event.block.hash
  askRemoved.type = "ASK_REMOVED"


  punk.punk = punk.id
  punk.wrappedPunk = event.params.punkIndex.toString()
  punk.tokenId = event.params.punkIndex


  punk.save()
  askCreated.save()
  askRemoved.save()
  contract.save()
  
}
export function handleProxyRegistered(event: ProxyRegistered): void {}

export function handleWrappedPunkTransfer(event: WrappedPunkTransfer): void {
  log.info("handleWrappedPunksTransfer tokenId: {} to: {}", [
    event.params.tokenId.toString(),
    event.params.to.toHexString(),
  ]);

  let trait = getTrait(event.params.tokenId.toI32());

  let wrappedPunk = WrappedPunk.load(event.params.tokenId.toString() + "-" + "WRAPPEDPUNK");
  let account = Account.load(event.params.to.toHexString());

  if (wrappedPunk == null) {
    wrappedPunk = new WrappedPunk(event.params.tokenId.toString() + "-" + "WRAPPEDPUNK");
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString());
  }

  wrappedPunk.punk = event.params.tokenId.toString();
  wrappedPunk.account = account.id;
  wrappedPunk.owner = account.id
  wrappedPunk.wrappedPunk = wrappedPunk.id
  wrappedPunk.tokenId = event.params.tokenId 

  if (trait != null) {
    wrappedPunk.type = trait.type;
    wrappedPunk.accessories = trait.accessories;
  }

  wrappedPunk.save();
  account.save();
}

export function handleUnpaused(event: Unpaused): void {}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}
