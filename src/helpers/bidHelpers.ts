import { BigInt, ethereum } from '@graphprotocol/graph-ts'
import {
	BidCreated,
	BidRemoved,
	Bid,
	Punk,
	Account,
} from '../../generated/schema'
import { getGlobalId } from '../utils'

//Update the state of the last Bid
export function getOrCreateBid(
	fromAddress: string,
	event: ethereum.Event
): Bid {
	let bidId = getGlobalId(event).concat('-BID') // -BID, To prevent conflict with interfaces with same ID
	let bid = Bid.load(bidId) //Should not be null
	if (!bid) {
		bid = new Bid(bidId)
		bid.from = fromAddress
		bid.offerType = 'BID'
		bid.open = true
	}

	/**
    nft = "" - needs to be updated from somewhere else ***DONE
    amount: BigInt! - needs to be updated from somewhere else ***DONE
    bid.created = "" non-nullable, needs to be the id of createBidCreated in same handler ***DONE
    bid.removed = "" - needs to be the id of createBidRemoved in same handler ***DONE
    bid.open = false;
  */
	return bid as Bid
}

//Record a new BidCreated EVENT anytime we observe one
export function createBidCreated(
	punkIndex: BigInt,
	fromAddress: string,
	event: ethereum.Event
): BidCreated {
	let bidCreated = new BidCreated(getGlobalId(event).concat('-BID_CREATED'))

	bidCreated.type = 'BID_CREATED'
	bidCreated.nft = punkIndex.toString()
	bidCreated.from = fromAddress
	bidCreated.timestamp = event.block.timestamp
	bidCreated.logNumber = event.logIndex
	bidCreated.blockNumber = event.block.number
	bidCreated.txHash = event.transaction.hash
	bidCreated.blockHash = event.block.hash
	bidCreated.contract = event.address.toHexString()

	return bidCreated as BidCreated
}

//Record a new BidRemoved event anytime we observe one
export function createBidRemoved(
	punkIndex: BigInt,
	fromAddress: string,
	event: ethereum.Event
): BidRemoved {
	let bidRemoved = new BidRemoved(getGlobalId(event).concat('-BID_REMOVED'))

	bidRemoved.from = fromAddress
	bidRemoved.contract = event.address.toHexString()
	bidRemoved.nft = punkIndex.toString()
	bidRemoved.timestamp = event.block.timestamp
	bidRemoved.blockNumber = event.block.number
	bidRemoved.logNumber = event.logIndex
	bidRemoved.txHash = event.transaction.hash
	bidRemoved.blockHash = event.block.hash
	bidRemoved.type = 'BID_REMOVED'

	return bidRemoved as BidRemoved
}

export function closeOldBid(punk: Punk, fromAccount: Account): void {
	let oldBidId = punk.currentBid
	if (oldBidId !== null) {
		let oldBid = Bid.load(oldBidId.toString())!
		oldBid.created = punk.currentBidCreated
		oldBid.from = fromAccount.id
		oldBid.open = false
		oldBid.save()
	}
}
