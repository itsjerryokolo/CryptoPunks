import { Address, log } from '@graphprotocol/graph-ts'
import {
	Assign as Assigned,
	PunkTransfer,
	PunkOffered,
	PunkBidEntered,
	PunkBidWithdrawn,
	PunkBought,
	PunkNoLongerForSale,
	Transfer as cTokenTransfer,
} from '../generated/cryptopunks/cryptopunks'
import {
	Transfer as WrappedPunkTransfer,
	ProxyRegistered,
} from '../generated/WrappedPunks/WrappedPunks'
import { getTrait } from './traits'
import { Punk, Trait, MetaData, UserProxy, Ask, Bid } from '../generated/schema'
import {
	ZERO_ADDRESS,
	WRAPPED_PUNK_ADDRESS,
	BIGINT_ONE,
	BIGINT_ZERO,
} from './constant'

import {
	getOrCreateAccount,
	updateAccountHoldings,
} from '../src/helpers/accountHelper'

import { createMetadata } from './helpers/metadataHelper'
import { getOrCreateTransfer } from './helpers/transferHelper'
import { getOrCreateAssign } from './helpers/assignHelper'
import { getOwnerFromCToken, getOrCreateCToken } from './utils'

import {
	updatePunkOwner,
	updatePunkSaleAggregates,
} from '../src/helpers/punkHelper'

import {
	getOrCreateCryptoPunkContract,
	getOrCreateWrappedPunkContract,
	updateContractAggregates,
} from '../src/helpers/contractHelper'

import { createWrap, createUnwrap } from '../src/helpers/wrapAndUnwrap'
import { getOrCreateSale, handleSaleNotification } from './helpers/saleHelper'

import {
	closeOldAsk,
	createAskCreated,
	createAskRemoved,
	getOrCreateAsk,
} from './helpers/askHelpers'

import {
	getOrCreateBid,
	createBidCreated,
	createBidRemoved,
	closeOldBid,
} from '../src/helpers/bidHelpers'

import { updateSale } from './helpers/saleHelper'
import { updateAccountAggregates } from './helpers/accountHelper'
import { createPunk } from './helpers/punkHelper'

export function handleAssign(event: Assigned): void {
	log.info('handleAssign {}', [event.params.punkIndex.toString()])
	// This event fires when the user claims a Punk

	let trait = getTrait(event.params.punkIndex.toI32())
	let tokenId = event.params.punkIndex
	let account = getOrCreateAccount(event.params.to)
	let metadata = createMetadata(tokenId)
	let contract = getOrCreateCryptoPunkContract(event.address)

	//Assign is always the first EVENTS that actually creates the punk
	let punk = createPunk(tokenId, event.params.to)
	let assign = getOrCreateAssign(
		event.params.punkIndex,
		event.params.to,
		punk as Punk,
		metadata as MetaData,
		event
	)
	if (trait !== null) {
		let traits = new Array<string>()
		let type = Trait.load(trait.type)
		if (!type) {
			type = new Trait(trait.type)
			type.type = 'TYPE'
			type.numberOfNfts = BIGINT_ZERO
		}

		type.numberOfNfts = type.numberOfNfts.plus(BIGINT_ONE)
		type.save()
		traits.push(type.id)

		for (let i = 0; i < trait.accessories.length; i++) {
			let accessoryName = trait.accessories[i]
			let acessoryId = accessoryName.split(' ').join('-')
			let accessory = Trait.load(acessoryId)

			if (accessory === null) {
				accessory = new Trait(acessoryId)
				accessory.type = 'ACCESSORY'
				accessory.numberOfNfts = BIGINT_ZERO
			}
			accessory.numberOfNfts = accessory.numberOfNfts.plus(BIGINT_ONE)
			accessory.save()
			traits.push(accessory.id)
		}

		metadata.traits = traits
	}

	//Update account punk holdings
	account.numberOfPunksOwned = account.numberOfPunksOwned.plus(BIGINT_ONE)
	account.numberOfPunksAssigned = account.numberOfPunksAssigned.plus(BIGINT_ONE)

	//Write
	account.save()
	assign.save()
	contract.save()
	metadata.save()
	punk.save()
}

export function handleTransfer(event: cTokenTransfer): void {
	/**
	   @summary Throw-away entity
      		e.g: https://etherscan.io/tx/0x23d6e24628dabf4fa92fa93630e5fa6f679fac75071aab38d7e307a3c0f4a3ca#eventlog
 	 */
	if (event.params.to.toHexString() != ZERO_ADDRESS) {
		let fromAccount = getOrCreateAccount(event.params.from)
		let toAccount = getOrCreateAccount(event.params.to)
		let cToken = getOrCreateCToken(event)

		cToken.from = event.params.from.toHexString()
		cToken.to = event.params.to.toHexString()
		cToken.owner = event.params.to.toHexString()
		cToken.amount = event.params.value

		//Write
		cToken.save()
		toAccount.save()
		fromAccount.save()
	}
}
export function handlePunkTransfer(event: PunkTransfer): void {
	log.debug('handlePunkTransfer from: {} to: {}', [
		event.params.from.toHexString(),
		event.params.to.toHexString(),
	])
	let sender = event.params.from
	let receiver = event.params.to
	let tokenId = event.params.punkIndex.toString()

	let fromProxy = UserProxy.load(sender.toHexString())
	let toProxy = UserProxy.load(receiver.toHexString())

	if (toProxy !== null) {
		log.debug('PunkTransfer to proxy detected toProxy: {} ', [toProxy.id])
		return
	} else if (
		receiver.toHexString() != WRAPPED_PUNK_ADDRESS &&
		sender.toHexString() != WRAPPED_PUNK_ADDRESS
	) {
		log.debug('Regular punk transfer check: {} ', [tokenId])

		let toAccount = getOrCreateAccount(event.params.to)
		let fromAccount = getOrCreateAccount(event.params.from)
		let punk = Punk.load(tokenId)!

		punk.numberOfTransfers = punk.numberOfTransfers.plus(BIGINT_ONE)

		let transfer = getOrCreateTransfer(event.params.punkIndex, event)
		transfer.from = fromAccount.id
		transfer.to = toAccount.id
		transfer.nft = punk.id

		//We close the oldBid if the bidder was transfered the punk
		let toBid = punk.currentBid
		if (toBid !== null) {
			let oldBid = Bid.load(toBid.toString())!
			if (oldBid.from == toAccount.id) {
				oldBid.created = punk.currentBidCreated
				oldBid.open = false
				oldBid.save()
			}
		}
		updateAccountHoldings(toAccount, fromAccount)
		toAccount.numberOfTransfers = toAccount.numberOfTransfers.plus(BIGINT_ONE)
		fromAccount.numberOfTransfers = fromAccount.numberOfTransfers.plus(
			BIGINT_ONE
		)

		//Capture punk transfers and owners if not transfered to WRAPPED PUNK ADDRESS
		punk.owner = toAccount.id

		//Write
		transfer.save()
		toAccount.save()
		fromAccount.save()
		punk.save()
	} else if (
		fromProxy !== null &&
		sender.toHexString() == fromProxy.id &&
		receiver.toHexString() == WRAPPED_PUNK_ADDRESS
	) {
		log.info('Wrap detected of punk: {} ', [tokenId])

		let punk = Punk.load(tokenId)!
		punk.wrapped = true

		//Write
		punk.save()
	} else if (sender.toHexString() == WRAPPED_PUNK_ADDRESS) {
		//Burn/Unwrap
		log.debug('Unwrapped detected. From: {}, punk: {}', [
			sender.toHexString(),
			tokenId,
		])

		let punk = Punk.load(event.params.punkIndex.toString())!
		punk.wrapped = false

		//Write
		punk.save()
	}
}

export function handlePunkOffered(event: PunkOffered): void {
	/**
    	@description:
			- createAskCreatedEVENT
			- create Ask
			- create relationship between Ask and AskCreated to provide information on creation EVENT
	*/

	let punk = Punk.load(event.params.punkIndex.toString())!
	let askCreated = createAskCreated(event.params.punkIndex, event)
	let fromAccount = getOrCreateAccount(Address.fromString(punk.owner))
	closeOldAsk(punk, fromAccount)

	let ask = getOrCreateAsk(punk.owner, event)

	ask.nft = punk.id
	ask.from = punk.owner
	ask.amount = event.params.minValue
	ask.created = askCreated.id
	ask.open = true

	askCreated.ask = ask.id
	askCreated.to = event.params.toAddress.toHexString()
	askCreated.from = punk.owner
	askCreated.amount = event.params.minValue

	punk.currentAskCreated = askCreated.id
	punk.currentAsk = ask.id //Update the currentAsk for the punk in Punk entity for future reference

	//Write
	askCreated.save()
	punk.save()
	ask.save()
}

export function handlePunkBidEntered(event: PunkBidEntered): void {
	/**
    	@summary This event first only fires when a bid is created
   	 	@description:
       		- createBidCreatedEVENT
       		- create Bid
       		- create relationship between Bid and BidCreated to provide information on creation EVENT
  	*/
	log.debug('handlePunkBidCreatedEntered', [])

	let bidCreated = createBidCreated(
		event.params.punkIndex,
		event.params.fromAddress.toHexString(),
		event
	)
	let punk = Punk.load(event.params.punkIndex.toString())!
	let account = getOrCreateAccount(event.params.fromAddress)
	let bid = getOrCreateBid(event.params.fromAddress.toHexString(), event)

	bid.amount = event.params.value
	bid.nft = punk.id
	bid.from = account.id
	bid.created = bidCreated.id

	punk.currentBid = bid.id

	bidCreated.bid = bid.id //Create relationship with Bid
	bidCreated.amount = event.params.value

	//Update the currentBid for the punk in Punk entity for future reference
	punk.currentBidCreated = bidCreated.id

	//Write
	bid.save()
	punk.save()
	account.save()
	bidCreated.save()
}
export function handlePunkBidWithdrawn(event: PunkBidWithdrawn): void {
	/** 
    	@summary: The event fires anytime a bidder withdraws their bid
		@description:
			- createBidRemovedEVENT
			- close Old Bid
			- create relationship between Bid and BidRemoved
 	 */
	log.debug('handlePunkBidCreatedWithdrawn', [])

	let fromAccount = getOrCreateAccount(event.params.fromAddress)
	let punk = Punk.load(event.params.punkIndex.toString())!
	let bidRemoved = createBidRemoved(
		event.params.punkIndex,
		event.params.fromAddress.toHexString(),
		event
	)
	bidRemoved.amount = event.params.value
	bidRemoved.nft = punk.id

	let oldBidId = punk.currentBid
	if (oldBidId !== null) {
		let oldBid = Bid.load(oldBidId.toString())!
		oldBid.created = punk.currentBidCreated
		oldBid.from = fromAccount.id
		oldBid.open = false
		oldBid.removed = bidRemoved.id

		bidRemoved.bid = oldBid.id

		oldBid.save()
	}
	//Update Punk fields with current bid removal EVENT so we can reference them elsewhere
	punk.currentBidRemoved = bidRemoved.id

	//Write
	punk.save()
	fromAccount.save()
	bidRemoved.save()
}

export function handlePunkNoLongerForSale(event: PunkNoLongerForSale): void {
	log.debug('handlePunkNoLongerForSale', [])
	/**
	 * @description
   		- This event fires when the owner removes their ask
   		- Also fires when the owner's Ask is accepted which closes their ask and creates a SaleEVENT
        - SaleEvent is a regular PunkBoughtEVENT which we already captured in handlePunkBought()

		- createAskRemovedEVENT
		- close Old Ask
	*/
	let punk = Punk.load(event.params.punkIndex.toString())!
	let askRemoved = createAskRemoved(event.params.punkIndex, event)

	//Close Old Ask
	let oldAskId = punk.currentAsk
	if (oldAskId !== null) {
		let oldAsk = Ask.load(oldAskId.toString())!
		//Create relationship with AskRemoved
		oldAsk.removed = askRemoved.id
		oldAsk.created = punk.currentAskCreated
		oldAsk.nft = punk.id
		oldAsk.open = false
		oldAsk.from = punk.owner
		askRemoved.ask = oldAsk.id

		oldAsk.save()
	} else {
		//https://cryptopunks.app/cryptopunks/details/2158
		//This is a weird case where an offer can be withdrawn before it's created

		let ask = getOrCreateAsk(punk.owner, event)
		ask.nft = punk.id
		ask.open = false
		ask.from = punk.owner
		ask.removed = askRemoved.id

		//Amount is 0 because this field is non-nullable & this basically initializes the field so it doesn't fail.
		//Also, this event doesn't emit the amount.

		ask.amount = BIGINT_ZERO
		askRemoved.amount = BIGINT_ZERO
		askRemoved.ask = ask.id

		ask.save()
	}

	punk.currentAskRemoved = askRemoved.id

	//Write
	askRemoved.save()
	punk.save()
}

export function handlePunkBought(event: PunkBought): void {
	if (event.params.toAddress.toHexString() == ZERO_ADDRESS) {
		/**
		 * @summary
     		- Logic for tracking acceptBidForPunk(), BidAccepted
        		e.g https://etherscan.io/tx/0x23d6e24628dabf4fa92fa93630e5fa6f679fac75071aab38d7e307a3c0f4a3ca#eventlog

		   @description:
			- createBidRemovedEvent
			- close Old Bid only if bidder is the buyer
			- close Old Ask since it has been sold
			- createSaleEvent
			- update aggregates for Account, Contract and Punk
    	*/

		let tokenId = event.params.punkIndex
		let punk = Punk.load(tokenId.toString())!
		let contract = getOrCreateCryptoPunkContract(event.address)
		let fromAccount = getOrCreateAccount(event.params.fromAddress)
		let toAccount = getOrCreateAccount(
			Address.fromString(getOwnerFromCToken(event))
		)
		let bidRemoved = createBidRemoved(
			tokenId,
			event.params.fromAddress.toHexString(),
			event
		)
		let sale = getOrCreateSale(
			event.params.fromAddress,
			tokenId.toString(),
			event
		)
		closeOldAsk(punk, fromAccount)

		//Close old bid if the bidder is the buyer & use the bid amount to update sale
		let oldPunkBidId = punk.currentBid
		if (oldPunkBidId !== null) {
			let oldBid = Bid.load(oldPunkBidId.toString())!
			if (oldBid.from == toAccount.id) {
				oldBid.created = punk.currentBidCreated
				oldBid.removed = bidRemoved.id
				oldBid.nft = punk.id
				bidRemoved.bid = oldBid.id
				oldBid.open = false

				oldBid.save()
			}
			updateSale(
				sale,
				oldBid.amount,
				Address.fromString(getOwnerFromCToken(event))
			)
			updateAccountAggregates(fromAccount, toAccount, oldBid.amount)
			updatePunkSaleAggregates(punk, oldBid.amount)
			updateContractAggregates(contract, oldBid.amount)
		}

		updatePunkOwner(punk, Address.fromString(getOwnerFromCToken(event)))
		updateAccountHoldings(toAccount, fromAccount)

		//Save the current BidRemoved for future reference
		punk.currentBidRemoved = bidRemoved.id

		//Write
		contract.save()
		punk.save()
		sale.save()
		bidRemoved.save()
		toAccount.save()
		fromAccount.save()
	} else {
		log.debug('handlePunkBought', [])

		/** 
      		@summary Logic for tracking Regular PunkBought 
			@description: This also implicitly captures AskAccepted for Punk which is updated in PunkNoLongerForSaleEVENT(Close Ask)			
	  			Example: https://etherscan.io/tx/0x0004ba250b29b0e2cda2e882c8bf5a14e7d2133e63bf0334fb1f44c716ccb187#eventlog
      		- buyPunk() does not emit a PunkTransfer event, so we need to keep track
			- createSaleEvent
			- close Old Bid if bidder is buyer
			- close Old Ask
    	*/

		let price = event.params.value
		let tokenId = event.params.punkIndex.toString()
		let seller = event.params.fromAddress
		let buyer = event.params.toAddress

		let punk = Punk.load(tokenId)!
		let contract = getOrCreateCryptoPunkContract(event.address)
		let toAccount = getOrCreateAccount(buyer)
		let fromAccount = getOrCreateAccount(seller)
		let sale = getOrCreateSale(seller, punk.id, event)

		updateSale(sale, price, buyer)
		closeOldBid(punk, toAccount)
		closeOldAsk(punk, fromAccount)
		updatePunkOwner(punk, buyer)
		updatePunkSaleAggregates(punk, price)
		updateContractAggregates(contract, price)
		updateAccountHoldings(toAccount, fromAccount)
		updateAccountAggregates(fromAccount, toAccount, price)

		//Write
		punk.save()
		fromAccount.save()
		toAccount.save()
		contract.save()
		sale.save()

		//Remove before deploying to The Graph Network
		// handleSaleNotification(
		// 	punk.id,
		// 	buyer.toHexString(),
		// 	price.toBigDecimal().toString()
		// )
	}
}

//This function is called for three events: Mint (Wrap), Burn (Unwrap) and Transfer
export function handleWrappedPunkTransfer(event: WrappedPunkTransfer): void {
	log.info('handleWrappedPunksTransfer tokenId: {} from: {} to: {}', [
		event.params.tokenId.toString(),
		event.params.from.toHexString(),
		event.params.to.toHexString(),
	])

	let contract = getOrCreateWrappedPunkContract(event.address)

	if (event.params.from.toHexString() == ZERO_ADDRESS) {
		// A wrapped punk is minted (wrapped)
		let wrap = createWrap(
			Address.fromString(WRAPPED_PUNK_ADDRESS),
			event.params.from,
			event.params.tokenId,
			event
		)

		contract.totalSupply = contract.totalSupply.plus(BIGINT_ONE)

		wrap.to = event.params.to.toHexString()

		//Write
		wrap.save()
	} else if (event.params.to.toHexString() == ZERO_ADDRESS) {
		// A wrapped punk is burned (unwrapped)
		let unWrap = createUnwrap(
			event.params.from,
			event.params.to,
			event.params.tokenId,
			event
		)

		contract.totalSupply = contract.totalSupply.minus(BIGINT_ONE)

		//Write
		unWrap.save()
	} else {
		//Wrapped Punk Transfer
		//We do not want to save a transfer for wrapped punk mints/burns
		let transfer = getOrCreateTransfer(event.params.tokenId, event)
		let toAccount = getOrCreateAccount(event.params.to)
		let fromAccount = getOrCreateAccount(event.params.from)
		let punk = Punk.load(event.params.tokenId.toString())!

		//We create a cToken Entity here to store IDs for future comparison
		let cToken = getOrCreateCToken(event)
		cToken.from = event.params.from.toHexString()
		cToken.to = event.params.to.toHexString()
		cToken.owner = event.params.to.toHexString()
		cToken.punkId = event.params.tokenId.toString()

		//We need the contract address to filter our transactions from other marketplace(OpenSea,RaribleExchangeV1, ERC721Sale) sales
		cToken.referenceId = event.address.toHexString()

		updateAccountHoldings(toAccount, fromAccount)
		punk.owner = toAccount.id
		punk.numberOfTransfers = punk.numberOfTransfers.plus(BIGINT_ONE)

		//Write
		fromAccount.save()
		toAccount.save()
		transfer.save()
		cToken.save()
		punk.save()
	}

	contract.save()
}

export function handleProxyRegistered(event: ProxyRegistered): void {
	let userProxy = new UserProxy(event.params.proxy.toHexString())
	userProxy.user = event.params.user.toHexString()
	userProxy.timestamp = event.block.timestamp
	userProxy.txHash = event.transaction.hash
	userProxy.blockNumber = event.block.number
	userProxy.blockHash = event.block.hash
	userProxy.save()
}
