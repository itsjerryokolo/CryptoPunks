import { BigInt, ethereum, BigDecimal } from '@graphprotocol/graph-ts'
import { CToken } from '../generated/schema'
import { BIGINT_ONE } from './constant'

export function getGlobalId(event: ethereum.Event): string {
	let globalId = event.transaction.hash
		.toHexString()
		.concat('-')
		.concat(event.logIndex.toString())
	return globalId
}

export function getOwnerFromCToken(event: ethereum.Event): string {
	let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE)
	let id = event.transaction.hash
		.toHexString()
		.concat('-')
		.concat(cTokenLogIndex.toString())

	let cToken = CToken.load(id)
	if (!cToken) {
		cToken = new CToken(id)
		cToken.blockNumber = event.block.number
		cToken.referenceId = cToken.id
		cToken.blockHash = event.block.hash
		cToken.txHash = event.transaction.hash
		cToken.timestamp = event.block.timestamp
		cToken.save()
	}

	let owner = cToken.owner
	return owner
}

export function getContractAddress(event: ethereum.Event): string | null {
	//The transfer always come first, so we need to provide the correct logIndex for cToken
	let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE)

	let id = event.transaction.hash
		.toHexString()
		.concat('-')
		.concat(cTokenLogIndex.toString())

	/**
	 * We only care about transactions concerning WrappedPunk contract
	 * cToken should exist with the given ID.
	 */
	let cToken = CToken.load(id)

	// if it doesn't then it's not a WrappedPunk transaction
	if (!cToken) {
		return null
	}

	// if it does, then return the contract Address to enable us validate the transaction in handleBuy()
	let contractAddress = cToken.referenceId
	return contractAddress as string
}

/**
 * @description Get the punk ID from WrappedPunk Transfer event
 * @param event
 * @returns `string` if transaction is a WrappedPunk Transfer event, or `null` otherwise
 */
export function getPunkId(event: ethereum.Event): string | null {
	/**
   @description
   	- We only care about transactions concerning WrappedPunk contract saved from the WrappedPunk Transfer event.
    - We need the punk ID to validate our sale in OrderMatched() event
    - The transfer always come first, so we need to provide the correct logIndex for cToken
	  - cToken should exist with the given ID in the same transaction at the time it's being called in OrderMatched() event.
   	- if it doesn't then it's not a WrappedPunk transaction (null)
*/
	let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE)

	let id = event.transaction.hash
		.toHexString()
		.concat('-')
		.concat(cTokenLogIndex.toString())

	let cToken = CToken.load(id)

	if (!cToken) {
		return null
	}

	let punk = cToken.punkId
	return punk as string
}
/**
 * @description Get the maker address from WrappedPunk Transfer event
 * @param event
 * @returns `string` if transaction is a WrappedPunk Transfer event, or `null` otherwise
 */

export function getMakerAddress(event: ethereum.Event): string | null {
	/**
   @description
   	- We only care about transactions concerning WrappedPunk contract saved from the WrappedPunk Transfer event.
    - We need the maker address to validate a bid accepted sale in the OrderMatched() event
    - The transfer always come first, so we need to provide the correct logIndex for cToken
	  - cToken should exist with the given ID in the same transaction at the time it's being called in the OrderMatched() event.
   	- if it doesn't then it's not a WrappedPunk transaction (null)
*/
	let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE)
	let id = event.transaction.hash
		.toHexString()
		.concat('-')
		.concat(cTokenLogIndex.toString())

	let cToken = CToken.load(id)

	if (!cToken) {
		return null
	}

	let makerAddress = cToken.to
	return makerAddress as string
}

/**
  @description This function calculates the average given two values
  @param totalAmount 
  @param qty 
  @returns Returns the average in `BigInt`
 */
export function calculateAverage(totalAmount: BigInt, qty: BigInt): BigInt {
	let average = totalAmount.div(qty)
	return average
}

/**
  @description: 
    - This function creates or loads the cToken entity on demand. 
    - We need it to carry values over to events where those values don't exist.
  @param event
  @returns `CToken`
 */
export function getOrCreateCToken(event: ethereum.Event): CToken {
	let cToken = CToken.load(getGlobalId(event))
	if (!cToken) {
		cToken = new CToken(getGlobalId(event))
		cToken.referenceId = cToken.id
		cToken.blockNumber = event.block.number
		cToken.blockHash = event.block.hash
		cToken.txHash = event.transaction.hash
		cToken.timestamp = event.block.timestamp
	}
	return cToken as CToken
}

/**
   @description This function takes out the 2.5% Rarible cut from the sale price
   @param price - Sale price
   @returns Returns the ETH Sale price in `BigInt` after cut removal
 */

export function getPriceAfterRaribleCut(price: BigInt): BigInt {
	let cut = BigDecimal.fromString('0.025') //2.5%

	let cutDecimal = cut.times(price.toBigDecimal())
	let cutStringFromDecimal = cutDecimal.toString()

	//Check incase the value ends with ".0", e.g 12.0
	if (cutStringFromDecimal.includes('.') === true) {
		let priceAfterCut = price.minus(
			BigInt.fromString(cutStringFromDecimal.split('.')[0])
		)
		return priceAfterCut
	} else {
		let priceAfterCut = price.minus(BigInt.fromString(cutStringFromDecimal))
		return priceAfterCut
	}
}

export function convertPriceToBigDecimal(
	quantity: BigInt,
	decimals: i32 = 18
): BigDecimal {
	return quantity.divDecimal(
		BigInt.fromI32(10)
			.pow(decimals as u8)
			.toBigDecimal()
	)
}
