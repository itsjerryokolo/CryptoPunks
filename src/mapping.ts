import { BigInt,  Address, Bytes, log, BigDecimal, ByteArray  } from "@graphprotocol/graph-ts"
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
  cryptopunks__punkBidsResult
} from "../generated/cryptopunks/cryptopunks"

import { 
  cTokenTransferEvent,
  Account,
  AssignEvent,
  NftTransferEvent,
  Nft,
  Transaction,
  NotForSaleEvent,
  cToken,
  OfferEvent,
  BidEvent,
  WithdrawnBid,
  Contract,
  SaleEvent
} from "../generated/schema"

export function handleAssign(event: Assign): void {

  let assign = AssignEvent.load(event.params.punkIndex.toHexString())
  let account = Account.load(event.params.to.toHexString())
  let remainingPunks = cryptopunks.bind(event.address)
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let offer = OfferEvent.load(event.params.punkIndex.toString())
  let nft = Nft.load(event.params.punkIndex.toString())
  let ctransfer = NftTransferEvent.load(event.params.punkIndex.toString())
  let bid = BidEvent.load(event.params.punkIndex.toString())


  if (assign == null) {
    assign = new AssignEvent(event.params.punkIndex.toString())
  }
  if (ctransfer == null) {
    ctransfer = new NftTransferEvent(event.params.punkIndex.toString())
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString())
  }
  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString())
  }
  if (nft == null) {
    nft = new Nft(event.params.punkIndex.toString())
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }


  assign.assignedTo = account.id
  assign.transaction = transaction.id
  assign.nft = nft.id
  assign.nftsRemainingToAssign = remainingPunks.punksRemainingToAssign()


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.assigned = assign.id
  

  bid.account = account.id
  bid.transaction = transaction.id


  offer.offeredBy = account.id
  offer.transaction = transaction.id
  offer.nftOfferedForSale = nft.id


  nft.assignedTo = account.id
  nft.account = account.id
  account.nft = nft.id
  

  ctransfer.ownedBy = account.id
  ctransfer.transaction = transaction.id
  

  nft.save()
  account.save()
  assign.save()
  offer.save()
  ctransfer.save()
  transaction.save()

}

export function handleTransfer(event: Transfer): void {
  
  let ctransfer = cTokenTransferEvent.load(event.params.to.toHexString())
  let account = new Account(event.params.to.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let punk = cryptopunks.bind(event.address)
  let contract = new Contract(event.params.from.toHexString())
  let ctoken = new cToken(event.params.to.toHexString())
  
  if (ctransfer == null) {
    ctransfer = new cTokenTransferEvent(event.params.from.toHexString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }

  ctransfer.ownedBy = account.id
  ctransfer.ctoken = ctoken.id
  ctransfer.transferedFrom = event.params.from
  ctransfer.transferedTo = event.params.to
  ctransfer.amountTransfered = event.params.value
  ctransfer.transaction = transaction.id

  ctoken.contract = contract.id


  contract.allNftsAssigned = punk.allPunksAssigned()
  contract.symbol = punk.symbol()
  contract.totalSupply = punk.totalSupply()
  contract.imageHash = punk.imageHash()
  contract.name = punk._name
  contract.address = punk._address


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.ctoken = ctransfer.id


  ctoken.save()
  account.save()
  contract.save()
  transaction.save()
  ctransfer.save()

}

export function handlePunkTransfer(event: PunkTransfer): void {
  
  let nftTransfer = NftTransferEvent.load(event.params.punkIndex.toString())
  let account = Account.load(event.params.to.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let offer = OfferEvent.load(event.params.punkIndex.toString())
  let nft = Nft.load(event.params.punkIndex.toString())
  let bid = BidEvent.load(event.params.punkIndex.toString())

  if (nftTransfer == null) {
    nftTransfer = new NftTransferEvent(event.params.punkIndex.toString())
  }
  if (account == null) {
    account = new Account(event.params.to.toHexString())
  }
  if (nft == null) {
    nft = new Nft(event.params.punkIndex.toString())
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString())
  }
  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  
  nftTransfer.nft = nft.id
  nftTransfer.sender = event.params.from
  nftTransfer.receiver = event.params.to
  nftTransfer.ownedBy = account.id
  nftTransfer.transaction = transaction.id

  bid.account = account.id
  bid.transaction = transaction.id

  offer.offeredBy = account.id
  offer.transaction = transaction.id
  offer.nftOfferedForSale = nft.id

  nft.transferedTo = account.id
  nft.account = account.id
  account.nft = nft.id

  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.nftTransfers = nft.id

  
  nft.save()
  account.save()
  bid.save()
  offer.save()
  nftTransfer.save()
  transaction.save()

}

export function handlePunkOffered(event: PunkOffered): void {

  let offer = OfferEvent.load(event.params.punkIndex.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let nft = Nft.load(event.params.punkIndex.toString())
  let account = Account.load(event.params.toAddress.toHexString())
  let bid = BidEvent.load(event.params.punkIndex.toString())


  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if (nft == null) {
    nft = new Nft(event.params.punkIndex.toString())
  }
  if (account == null) {
    account = new Account(event.params.toAddress.toHexString())
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString())
  }


  offer.amountOffered = event.params.minValue
  offer.offeredBy = account.id
  offer.nftOfferedForSale = nft.id
  offer.transaction = transaction.id

  bid.account = account.id
  bid.transaction = transaction.id
  
  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.offer = nft.id


  nft.save()
  account.save()
  offer.save()
  bid.save()
  transaction.save()
  
}

export function handlePunkBidEntered(event: PunkBidEntered): void {

  let bid = BidEvent.load(event.params.punkIndex.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let bidwithdrawn = WithdrawnBid.load(event.params.punkIndex.toString())
  let nft = Nft.load(event.params.punkIndex.toString())

  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if (nft == null) {
    nft = new Nft(event.params.punkIndex.toString())
  }
  if (bidwithdrawn == null) {
    bidwithdrawn = new WithdrawnBid(event.params.punkIndex.toString())
  }

  bid.bid = event.params.value
  bid.transaction = transaction.id
  bid.nft = nft.id
  bid.bidWithdrawn = bidwithdrawn.id
  bid.bidder = event.params.fromAddress

  bidwithdrawn.transaction = transaction.id

  transaction.date = event.block.timestamp
  transaction.bid = nft.id
  transaction.block = event.block.number

  nft.save()
  bidwithdrawn.save()
  transaction.save()
  nft.save()


}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {

  let withdrawnbid = WithdrawnBid.load(event.params.punkIndex.toString())
  let bid = BidEvent.load(event.params.punkIndex.toString())
  let account = Account.load(event.params.fromAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let nft = Nft.load(event.params.punkIndex.toString())

  if (withdrawnbid == null) {
    withdrawnbid = new WithdrawnBid(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString())
  }
  if (account == null) {
    account = new Account(event.params.fromAddress.toHexString())
  }
  if (nft == null) {
    nft = new Nft(event.params.punkIndex.toString())
  }

  withdrawnbid.amountWithdrawn = event.params.value
  withdrawnbid.transaction = transaction.id
  withdrawnbid.nft = nft.id
  withdrawnbid.bid = bid.id
  withdrawnbid.withdrawnBy = account.id

  bid.account = account.id
  bid.transaction = transaction.id


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  


  account.save()
  transaction.save()
  withdrawnbid.save()
  bid.save()
  nft.save()

}

export function handlePunkBought(event: PunkBought): void {

  let saleevent = SaleEvent.load(event.params.punkIndex.toString())
  let account = Account.load(event.params.toAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let nft = Nft.load(event.params.punkIndex.toString())
  let offer = OfferEvent.load(event.params.punkIndex.toString())
  let bid = BidEvent.load(event.params.punkIndex.toString())
  let withdrawn = WithdrawnBid.load(event.params.punkIndex.toString())
  


  if (saleevent == null) {
    saleevent = new SaleEvent(event.params.punkIndex.toString())
  }
  if (offer == null) {
    offer = new OfferEvent(event.params.punkIndex.toString())
  }
  if (bid == null) {
    bid = new BidEvent(event.params.punkIndex.toString())
  }
  if (account == null) {
    account = new Account(event.params.toAddress.toHexString())
  }
  if (withdrawn == null) {
    withdrawn = new WithdrawnBid(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if (nft == null) {
    nft = new Nft(event.params.punkIndex.toString())
  }

  saleevent.nft = nft.id
  saleevent.amount = event.params.value
  saleevent.seller = event.params.fromAddress
  saleevent.buyer = account.id
  saleevent.transaction = transaction.id

  bid.account = account.id
  bid.transaction = transaction.id

  withdrawn.withdrawnBy = account.id
  withdrawn.transaction = transaction.id

  account.nft = nft.id
  nft.purchasedBy = account.id
  nft.account = account.id


  offer.offeredBy = account.id
  offer.transaction = transaction.id
  offer.nftOfferedForSale = nft.id
 

  transaction.date = event.block.timestamp
  transaction.account = account.id
  transaction.nft = nft.id
  transaction.block = event.block.number



  nft.save()
  account.save()
  bid.save()
  offer.save()
  transaction.save()
  withdrawn.save()
  saleevent.save()


}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {

  let nft = NotForSaleEvent.load(event.params.punkIndex.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (nft == null) {
    nft = new NotForSaleEvent(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }

  nft.nft = event.params.punkIndex
  nft.transaction = transaction.id

  transaction.notForSale = nft.id
  transaction.date = event.block.timestamp
  transaction.block = event.block.number


  nft.save()
  transaction.save()

}