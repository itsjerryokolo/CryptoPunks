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
  CryptoPunksAssigned,
  cTokenTransfer, 
  CryptoPunkTransfer,
  CryptoPunkOffered,
  CryptoPunkBidsEntered,
  CryptoPunkBidsWithdrawn,
  CryptoPunkBought,
  CryptoPunkNotForSale
} from "../generated/schema"

export function handleAssign(event: Assign): void {
  let cryptopunksassigned = new CryptoPunksAssigned(event.transaction.hash.toHex())
  let contract = cryptopunks.bind(event.address)
  cryptopunksassigned.assignedTo = event.params.to
  cryptopunksassigned.punkIndex = event.params.punkIndex
  cryptopunksassigned.punksRemainingToAssign = contract.punksRemainingToAssign()
  cryptopunksassigned.transactionDate = event.block.timestamp
  cryptopunksassigned.transactionBlock = event.block.number
  cryptopunksassigned.save()
}

export function handleTransfer(event: Transfer): void {
let ctokentransfer = new cTokenTransfer(event.transaction.hash.toHex())
let contract = cryptopunks.bind(event.address)
ctokentransfer.transferedFrom = event.params.from
ctokentransfer.transferedTo = event.params.to
ctokentransfer.amountTransfered = event.params.value
ctokentransfer.name = contract._name
ctokentransfer.allPunksAssigned = contract.allPunksAssigned()
ctokentransfer.symbol = contract.symbol()
ctokentransfer.totalSupply = contract.totalSupply()
ctokentransfer.imageHash = contract.imageHash()
ctokentransfer.transactionDate = event.block.timestamp
ctokentransfer.transactionBlock = event.block.number
ctokentransfer.save()
}

export function handlePunkTransfer(event: PunkTransfer): void {
  let cryptopunktransfer = new CryptoPunkTransfer(event.transaction.hash.toHex())
  let contract = cryptopunks.bind(event.address)
  cryptopunktransfer.transferedFrom = event.params.from
  cryptopunktransfer.transferedTo = event.params.to
  cryptopunktransfer.punkIndex = event.params.punkIndex
  cryptopunktransfer.transactionDate = event.block.timestamp
  cryptopunktransfer.transactionBlock = event.block.number
  cryptopunktransfer.save()
}

export function handlePunkOffered(event: PunkOffered): void {
  let cryptopunkoffered = new CryptoPunkOffered(event.transaction.hash.toHex())
  let contract = cryptopunks.bind(event.address)
  cryptopunkoffered.punkIndex = event.params.punkIndex
  cryptopunkoffered.minimumAmount = event.params.minValue
  cryptopunkoffered.offeredTo = event.params.toAddress
  cryptopunkoffered.transactionDate = event.block.timestamp
  cryptopunkoffered.transactionBlock = event.block.number
  cryptopunkoffered.save()


}

export function handlePunkBidEntered(event: PunkBidEntered): void {
  let cryptopunkbidsentered = new CryptoPunkBidsEntered(event.transaction.hash.toHex())
  let contract = cryptopunks.bind(event.address)
  cryptopunkbidsentered.punkIndex = event.params.punkIndex
  cryptopunkbidsentered.bidder = event.params.fromAddress
  cryptopunkbidsentered.amount = event.params.value
  cryptopunkbidsentered.transactionDate = event.block.timestamp
  cryptopunkbidsentered.transactionBlock = event.block.number
  cryptopunkbidsentered.save()
}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {}

export function handlePunkBought(event: PunkBought): void {
  let cryptopunkbought = new CryptoPunkBought(event.transaction.hash.toHex())
  let contract = cryptopunks.bind(event.address)
  cryptopunkbought.transferedFrom = event.params.fromAddress
  cryptopunkbought.transferedTo = event.params.toAddress
  cryptopunkbought.amount = event.params.value
  cryptopunkbought.punkIndex = event.params.punkIndex
  cryptopunkbought.transactionDate = event.block.timestamp
  cryptopunkbought.transactionBlock = event.block.number
  cryptopunkbought.save()


}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
  let cryptopunknotforsale = new CryptoPunkNotForSale(event.transaction.hash.toHex())
  let contract = cryptopunks.bind(event.address)
  cryptopunknotforsale.punkIndex = event.params.punkIndex
  cryptopunknotforsale.transactionDate = event.block.timestamp
  cryptopunknotforsale.transactionBlock = event.block.number
  cryptopunknotforsale.save()



}
