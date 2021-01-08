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
  PunkNoLongerForSale
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
  cryptopunksassigned.transactionDate = event.block.timestamp
  cryptopunksassigned.transactionBlock = event.block.number
}

export function handleTransfer(event: Transfer): void {
let ctokentransfer = new cTokenTransfer(event.transaction.hash.toHex())
let contract = cryptopunks.bind(event.address)
ctokentransfer.transferedFrom = event.params.from
ctokentransfer.transferedTo = event.params.to
ctokentransfer.amountTransfered = event.params.value
ctokentransfer.transactionDate = event.block.timestamp
ctokentransfer.name = contract._name
ctokentransfer.allPunksAssigned = contract.allPunksAssigned()
ctokentransfer.symbol = contract.symbol()
ctokentransfer.totalSupply = contract.totalSupply()
ctokentransfer.imageHash = contract.imageHash()
ctokentransfer.transactionBlock = event.block.number
ctokentransfer.save()
}

export function handlePunkTransfer(event: PunkTransfer): void {}

export function handlePunkOffered(event: PunkOffered): void {}

export function handlePunkBidEntered(event: PunkBidEntered): void {}

export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {}

export function handlePunkBought(event: PunkBought): void {}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {}
