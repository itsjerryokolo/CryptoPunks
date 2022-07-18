import { BigInt, ethereum } from '@graphprotocol/graph-ts'
import {
	AskRemoved,
	AskCreated,
	Ask,
	Punk,
	Account,
} from '../../generated/schema'
import { getGlobalId } from '../utils'
import { sendEpnsNotification } from '../epnsNotification/EpnsNotification'

export function createAskCreated(
	punkIndex: BigInt,
	event: ethereum.Event
): AskCreated {
	let askCreated = new AskCreated(getGlobalId(event).concat('-ASK_CREATED'))

	askCreated.type = 'ASK_CREATED'
	askCreated.nft = punkIndex.toString()
	askCreated.logNumber = event.logIndex
	askCreated.timestamp = event.block.timestamp
	askCreated.blockNumber = event.block.number
	askCreated.txHash = event.transaction.hash
	askCreated.blockHash = event.block.hash
	askCreated.contract = event.address.toHexString()

	return askCreated as AskCreated
}

export function createAskRemoved(
	punkIndex: BigInt,
	event: ethereum.Event
): AskRemoved {
	let askRemoved = new AskRemoved(getGlobalId(event).concat('-ASK_REMOVED'))

	askRemoved.type = 'ASK_REMOVED'
	askRemoved.nft = punkIndex.toString()
	askRemoved.logNumber = event.logIndex
	askRemoved.timestamp = event.block.timestamp
	askRemoved.blockNumber = event.block.number
	askRemoved.txHash = event.transaction.hash
	askRemoved.blockHash = event.block.hash
	askRemoved.contract = event.address.toHexString()

	return askRemoved as AskRemoved
}

export function getOrCreateAsk(
	fromAddress: string,
	event: ethereum.Event
): Ask {
	let askId = getGlobalId(event).concat('-ASK') // -ASK, To prevent conflict with interfaces with same ID
	let ask = Ask.load(askId)
	if (!ask) {
		ask = new Ask(askId)
		ask.from = fromAddress
		ask.open = true
		ask.offerType = 'ASK'
	}

	//ask.created = "" // nullable, needs to be the id of createAskCreated in same handler if it exists.
	//ask.removed = "" //needs to be the id of createAskRemoved in same handler
	//nft - update from same handler
	//amount: BigInt! - amount can be 0 if owner offers to Address & not zero Address

	return ask as Ask
}

export function closeOldAsk(punk: Punk, fromAccount: Account): void {
	let oldAskId = punk.currentAsk
	if (oldAskId !== null) {
		let oldAsk = Ask.load(oldAskId.toString())!
		/**
       Create a relationship between OldAsk and currentAskRemoved to provide information on the Ask that was removed
       current askRemoved can be gotten from the punk which we closed in PunkNoLongerForSale
    */
		oldAsk.removed = punk.currentAskRemoved
		oldAsk.open = false

		//Summon currentAskCreated from Punk entity to update Old Ask with askCreation information
		oldAsk.created = punk.currentAskCreated //we opened the Punk in PunkOffered() and saved the currentAskCreated to a field in the Punk entity

		oldAsk.from = fromAccount.id

		//Write
		oldAsk.save()
	}
}

export function handleAskNotification(
	punk: string,
	owner: string,
	price: string,
	event: ethereum.Event
): void {
	let address = '0xbCb4ED1F05b8F017CF23E739552A6D81A014Ee84' //cryptopunks-subgraph.eth
	let bidTxHash = event.transaction.hash.toHexString()
	let recipient = `${address}`,
		type = '1',
		title = 'New Listing',
		body = `${owner} listed Punk:${punk} for ${price} ETH by ${owner}`,
		subject = 'Punk Offer Event',
		message = `New Listing! ${owner} wants ${price} ETH for Punk: ${punk}`,
		image = `https://cryptopunks.app/public/images/cryptopunks/punk${punk}.png`,
		secret = 'null',
		cta = `https://etherscan.io/tx/${bidTxHash}`

	let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`
	sendEpnsNotification(recipient, notification)
}
