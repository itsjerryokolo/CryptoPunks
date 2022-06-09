import { Address, BigInt } from '@graphprotocol/graph-ts'
import { Punk } from '../../generated/schema'
import { BIGINT_ONE, BIGINT_ZERO } from '../constant'
import { calculateAverage } from '../utils'

export function createPunk(tokenId: BigInt, owner: Address): Punk {
	let punk = new Punk(tokenId.toString())
	punk.wrapped = false
	punk.tokenId = tokenId
	punk.owner = owner.toHexString()
	punk.numberOfTransfers = BIGINT_ZERO
	punk.numberOfSales = BIGINT_ZERO
	punk.totalAmountSpentOnPunk = BIGINT_ZERO
	punk.averageSalePrice = BIGINT_ZERO

	return punk as Punk
}

export function updatePunkSaleAggregates(punk: Punk, price: BigInt): void {
	//Update punk aggregates
	punk.totalAmountSpentOnPunk = punk.totalAmountSpentOnPunk.plus(price)
	punk.numberOfSales = punk.numberOfSales.plus(BIGINT_ONE)

	//We only calculate average sale price if there are more than 0 sales so we don't divide by 0
	if (punk.numberOfSales != BIGINT_ZERO) {
		punk.averageSalePrice = calculateAverage(
			punk.totalAmountSpentOnPunk,
			punk.numberOfSales
		)
	}
}

export function updatePunkOwner(punk: Punk, toAccount: Address): void {
	//Update Punk entity
	punk.purchasedBy = toAccount.toHexString()
	punk.owner = toAccount.toHexString()
}
