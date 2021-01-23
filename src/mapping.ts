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
  Withdrawn,
  Purchase
} from "../generated/schema"

export function handleAssign(event: Assign): void {

  let punk = Assigned.load(event.params.punkIndex.toHexString())
  let owner = Owner.load(event.params.to.toHexString())
  let remainingPunks = cryptopunks.bind(event.address)
  let transaction = Transaction.load(event.transaction.hash.toHexString())

  if (punk == null) {
    punk = new Assigned(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.to.toHexString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }

  punk.assignedTo = owner.id
  punk.assigned = event.params.to
  punk.punkAssigned = event.params.punkIndex
  punk.transaction = transaction.id
  punk.punksRemainingToAssign = remainingPunks.punksRemainingToAssign()


  transaction.date = event.block.timestamp
  transaction.block = event.block.number


  owner.punkAssigned = punk.id
  owner.transaction = transaction.id


  punk.save()
  owner.save()
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


  ctoken.save()
  owner.save()
  transaction.save()
  ctransfer.save()

}

export function handlePunkTransfer(event: PunkTransfer): void {
  
  let punk = CryptoPunkTransfer.load(event.params.punkIndex.toHexString())
  let owner = Owner.load(event.params.to.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())

  if (punk == null) {
    punk = new CryptoPunkTransfer(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.to.toHexString());
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


  transaction.date = event.block.timestamp
  transaction.block = event.block.number

  
  punk.save()
  owner.save()
  transaction.save()

}

export function handlePunkOffered(event: PunkOffered): void {

  let punk = Offer.load(event.params.punkIndex.toString())
  let owner = Owner.load(event.params.toAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let cryptopunk = CryptoPunk.load(event.params.punkIndex.toString())

  if (punk == null) {
    punk = new Offer(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.toAddress.toHexString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (cryptopunk == null) {
    cryptopunk = new CryptoPunk(event.params.punkIndex.toString());
  }


  punk.offersBy = owner.id
  punk.amountOffered = event.params.minValue
  punk.offeredTo = event.params.toAddress
  punk.punkOffered = event.params.punkIndex
  punk.punk = cryptopunk.id
  punk.transaction = transaction.id


  cryptopunk.transaction = transaction.id
  cryptopunk.offer = punk.id
  cryptopunk.punk = event.params.punkIndex


  owner.punkOffer = punk.id
  owner.transaction = transaction.id


  transaction.date = event.block.timestamp
  transaction.block = event.block.number

  punk.save()
  cryptopunk.save()
  owner.save()
  transaction.save()

}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  // let cryptopunkbidsentered = new CryptoPunkBidsEntered(event.transaction.hash.toHex())
  // cryptopunkbidsentered.punkIndex = event.params.punkIndex
  // cryptopunkbidsentered.bidder = event.params.fromAddress
  // cryptopunkbidsentered.amountBidded = event.params.value
  // cryptopunkbidsentered.transactionDate = event.block.timestamp
  // cryptopunkbidsentered.transactionBlock = event.block.number
  // cryptopunkbidsentered.save()
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
  // let cryptopunkbidswithdrawn = new CryptoPunkBidsWithdrawn(event.transaction.hash.toHex())
  // cryptopunkbidswithdrawn.withdrawnFrom = event.params.fromAddress
  // cryptopunkbidswithdrawn.punkIndex = event.params.punkIndex
  // cryptopunkbidswithdrawn.amountWithdrawn = event.params.value
  // cryptopunkbidswithdrawn.transactionDate = event.block.timestamp
  // cryptopunkbidswithdrawn.transactionBlock = event.block.number
  // cryptopunkbidswithdrawn.save()
}

export function handlePunkBought(event: PunkBought): void {

  let punk = Purchase.load(event.params.punkIndex.toString())
  let owner = Owner.load(event.params.toAddress.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let cryptopunk = CryptoPunk.load(event.params.punkIndex.toString())

  if (punk == null) {
    punk = new Purchase(event.params.punkIndex.toString())
  }
  if (owner == null) {
    owner = new Owner(event.params.toAddress.toHexString());
  }
  if (transaction == null) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  if (cryptopunk == null) {
    cryptopunk = new CryptoPunk(event.params.punkIndex.toString());
  }

  punk.punkIndex = event.params.punkIndex
  punk.buyer = event.params.toAddress
  punk.punk = cryptopunk.id
  punk.amount = event.params.value
  punk.seller = event.params.fromAddress
  punk.purchaseBy = owner.id
  punk.transaction = transaction.id


  owner.punkPurchased = punk.id
  owner.transaction = transaction.id
 

  transaction.date = event.block.timestamp
  transaction.block = event.block.number


  cryptopunk.purchase = punk.id
  cryptopunk.punk = event.params.punkIndex
  cryptopunk.OwnedBy = owner.id
  cryptopunk.transaction = transaction.id


  punk.save()
  owner.save()
  transaction.save()
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
