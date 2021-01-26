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
  cTokenTransfer,
  Owner,
  Assigned,
  CryptoPunkTransfer,
  CryptoPunk,
  Transaction,
  NotForSale,
  cToken,
  Offer,
  Bid,
  WithdrawnBid,
  Purchase
} from "../generated/schema"

export function handleAssign(event: Assign): void {

  let punk = Assigned.load(event.params.punkIndex.toHexString())
  let owner = Owner.load(event.params.to.toHexString())
  let remainingPunks = cryptopunks.bind(event.address)
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let offer = Offer.load(event.params.punkIndex.toString())

  if (punk == null) {
    punk = new Assigned(event.params.punkIndex.toString())
  }
  if (offer == null) {
    offer = new Offer(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.to.toHexString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  punk.assignedTo = owner.id
  punk.punkAssigned = event.params.punkIndex
  punk.transaction = transaction.id
  punk.punksRemainingToAssign = remainingPunks.punksRemainingToAssign()


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.assigned = punk.id


  offer.offeredByAssignee = owner.id
  offer.transaction = transaction.id
  offer.punkOfferedForSale = event.params.punkIndex


  owner.punkAssigned = punk.id
  owner.transaction = transaction.id

  punk.save()
  owner.save()
  offer.save()
  transaction.save()

}

export function handleTransfer(event: Transfer): void {
  
  let ctransfer = cTokenTransfer.load(event.params.to.toHexString())
  let owner = new Owner(event.params.to.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let contract = cryptopunks.bind(event.address)
  let ctoken = cToken.load(event.params.to.toHexString())
  
  if (ctransfer == null) {
    ctransfer = new cTokenTransfer(event.params.from.toHexString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if (ctoken == null) {
    ctoken = new cToken(event.params.to.toHexString())
  }
  if (owner == null) {
    owner = new Owner(event.params.to.toHexString())
}

  ctransfer.ownedBy = owner.id
  ctransfer.ctoken = ctoken.id
  ctransfer.transferedFrom = event.params.from
  ctransfer.transferedTo = event.params.to
  ctransfer.amountTransfered = event.params.value
  ctransfer.transaction = transaction.id


  ctoken.allPunksAssigned = contract.allPunksAssigned()
  ctoken.symbol = contract.symbol()
  ctoken.totalSupply = contract.totalSupply()
  ctoken.imageHash = contract.imageHash()
  ctoken.name = contract._name
  ctoken.address = contract._address
  ctoken.transfers = ctransfer.id
  ctoken.transaction = transaction.id

  owner.cTokenTransfered = ctransfer.id
  owner.transaction = transaction.id


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.ctoken = ctransfer.id


  ctoken.save()
  owner.save()
  transaction.save()
  ctransfer.save()

}

export function handlePunkTransfer(event: PunkTransfer): void {
  
  let punk = CryptoPunkTransfer.load(event.params.punkIndex.toString())
  let owner = Owner.load(event.params.to.toHexString())
  let previousOwner = Owner.load(event.params.from.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let offer = Offer.load(event.params.punkIndex.toString())


  if (punk == null) {
    punk = new CryptoPunkTransfer(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.to.toHexString());
  }
  if (previousOwner == null) {
    previousOwner = new Owner(event.params.from.toHexString());
  }
  if (offer == null) {
    offer = new Offer(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  
  punk.punk = event.params.punkIndex
  punk.sender = event.params.from
  punk.receiver = event.params.to
  punk.ownedBy = owner.id
  punk.transaction = transaction.id


  owner.punkTransfered = punk.id
  owner.transaction = transaction.id

  offer.offeredByPunkHolder = previousOwner.id
  offer.transaction = transaction.id
  offer.punkOfferedForSale = event.params.punkIndex


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.punkTransfers = punk.id

  
  punk.save()
  owner.save()
  offer.save()
  previousOwner.save()
  transaction.save()

}

export function handlePunkOffered(event: PunkOffered): void {

  let punk = Offer.load(event.params.punkIndex.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let cryptopunk = CryptoPunk.load(event.params.punkIndex.toString())

  if (punk == null) {
    punk = new Offer(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (cryptopunk == null) {
    cryptopunk = new CryptoPunk(event.params.punkIndex.toString());
  }


  punk.amountOffered = event.params.minValue
  punk.punkOfferedForSale = event.params.punkIndex
  punk.punk = cryptopunk.id
  punk.transaction = transaction.id


  cryptopunk.transaction = transaction.id
  cryptopunk.offer = punk.id
  cryptopunk.punk = event.params.punkIndex


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  transaction.offer = punk.id

  punk.save()
  cryptopunk.save()
  transaction.save()

}

export function handlePunkBidEntered(event: PunkBidEntered): void {

  let punk = Bid.load(event.params.punkIndex.toString())
  let owner = Owner.load(event.params.fromAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let bidwithdrawn = WithdrawnBid.load(event.params.punkIndex.toString())
  let cryptopunk = CryptoPunk.load(event.params.punkIndex.toString())

  if (punk == null) {
    punk = new Bid(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (owner == null) {
    owner = new Owner(event.params.fromAddress.toHexString());
  }
  if (cryptopunk == null) {
    cryptopunk = new CryptoPunk(event.params.punkIndex.toString());
  }
  if (bidwithdrawn == null) {
    bidwithdrawn = new WithdrawnBid(event.params.punkIndex.toString());
  }

  punk.bid = event.params.value
  punk.transaction = transaction.id
  punk.punk = cryptopunk.id
  punk.bidWithdrawn = bidwithdrawn.id
  punk.bidder = event.params.fromAddress
  punk.punk = cryptopunk.id

  bidwithdrawn.transaction = transaction.id

  cryptopunk.bid = punk.id
  cryptopunk.punk = event.params.punkIndex
  cryptopunk.transaction = transaction.id


  owner.punkBid = owner.id
  owner.transaction = transaction.id

  transaction.date = event.block.timestamp
  transaction.bid = punk.id
  transaction.block = event.block.number

  punk.save()
  bidwithdrawn.save()
  transaction.save()
  cryptopunk.save()
  owner.save()



}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {

  let punk = WithdrawnBid.load(event.params.punkIndex.toString())
  let bid = Bid.load(event.params.punkIndex.toString())
  let owner = Owner.load(event.params.fromAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let cryptopunk = CryptoPunk.load(event.params.punkIndex.toString())

  if (punk == null) {
    punk = new WithdrawnBid(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (bid == null) {
    bid = new Bid(event.params.punkIndex.toString());
  }
  if (owner == null) {
    owner = new Owner(event.params.fromAddress.toHexString());
  }
  if (cryptopunk == null) {
    cryptopunk = new CryptoPunk(event.params.punkIndex.toString());
  }

  punk.amountWithdrawn = event.params.value
  punk.transaction = transaction.id
  punk.punk = cryptopunk.id
  punk.bid = bid.id
  punk.withdrawnBy = owner.id

  owner.transaction = transaction.id


  transaction.date = event.block.timestamp
  transaction.block = event.block.number
  

  cryptopunk.bid = punk.id
  cryptopunk.punk = event.params.punkIndex
  cryptopunk.transaction = transaction.id


  owner.save()
  transaction.save()
  cryptopunk.save()
  bid.save()
  punk.save()

}

export function handlePunkBought(event: PunkBought): void {

  let punk = Purchase.load(event.params.punkIndex.toString())
  let owner = Owner.load(event.params.toAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let cryptopunk = CryptoPunk.load(event.params.punkIndex.toString())
  let offer = Offer.load(event.params.punkIndex.toString())
  let bid = Bid.load(event.params.punkIndex.toString())
  let withdrawn = WithdrawnBid.load(event.params.punkIndex.toString())


  if (punk == null) {
    punk = new Purchase(event.params.punkIndex.toString())
  }
  if (offer == null) {
    offer = new Offer(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.toAddress.toHexString());
  }
  if (bid == null) {
    bid = new Bid(event.params.punkIndex.toString());
  }
  if (withdrawn == null) {
    withdrawn = new WithdrawnBid(event.params.punkIndex.toString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (cryptopunk == null) {
    cryptopunk = new CryptoPunk(event.params.punkIndex.toString());
  }

  punk.punk = cryptopunk.id
  punk.amount = event.params.value
  punk.seller = event.params.fromAddress
  punk.buyer = owner.id
  punk.transaction = transaction.id

  bid.owner = owner.id
  bid.transaction = transaction.id

  withdrawn.withdrawnBy = owner.id
  withdrawn.transaction = transaction.id

  owner.punkPurchased = punk.id
  owner.punkOfferedForSale = offer.id
  owner.transaction = transaction.id


  offer.offeredByPunkBuyer = owner.id
  offer.transaction = transaction.id
  offer.punkOfferedForSale = event.params.punkIndex
 

  transaction.date = event.block.timestamp
  transaction.owner = owner.id
  transaction.punk = cryptopunk.id
  transaction.block = event.block.number


  cryptopunk.purchase = punk.id
  cryptopunk.punk = event.params.punkIndex
  cryptopunk.OwnedBy = owner.id
  cryptopunk.transaction = transaction.id


  punk.save()
  owner.save()
  bid.save()
  offer.save()
  transaction.save()
  withdrawn.save()
  cryptopunk.save()


}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {

  let punk = NotForSale.load(event.params.punkIndex.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  if (punk == null) {
    punk = new NotForSale(event.params.punkIndex.toString())
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  punk.punkIndex = event.params.punkIndex
  punk.transaction = transaction.id


  transaction.date = event.block.timestamp
  transaction.block = event.block.number


  punk.save()
  transaction.save()

}
