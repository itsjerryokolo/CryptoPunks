import { BigInt, ethereum } from '@graphprotocol/graph-ts'
import {
	BidCreated,
	BidRemoved,
	Bid,
	Punk,
	Account,
} from '../../generated/schema'
import { getGlobalId } from '../utils'

import { sendEpnsNotification } from '../epnsNotification/EpnsNotification'

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

export function closeOldBid(punk: Punk, toAccount: Account): void {
	let oldBidId = punk.currentBid
	if (oldBidId !== null) {
		let oldBid = Bid.load(oldBidId.toString())!
		if (oldBid.from == toAccount.id) {
			oldBid.created = punk.currentBidCreated
			oldBid.open = false
			oldBid.save()
		}
	}
}

export function handleBidNotification(
	punk: string,
	bidder: string,
	price: string,
	event: ethereum.Event
): void {
	let address = '0xbCb4ED1F05b8F017CF23E739552A6D81A014Ee84' //cryptopunks-subgraph.eth
	let bidTxHash = event.transaction.hash.toHexString()
	let recipient = `${address}`,
		type = '1',
		title = 'New Punk Bid',
		body = `New Bid for Punk: ${punk} for ${price}ETH`,
		subject = 'Punk Bid Event',
		message = `${bidder} just placed a bid for Punk: ${punk} for ${price}ETH`,
		image = `https://cryptopunks.app/public/images/cryptopunks/punk${punk}.png`,
		secret = 'null',
		cta = `https://etherscan.io/tx/${bidTxHash}`

	let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`
	sendEpnsNotification(recipient, notification)
}
