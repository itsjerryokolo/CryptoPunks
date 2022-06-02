import { Address } from '@graphprotocol/graph-ts'
import { Buy as RaribleExchangeV1Buy } from '../../generated/RaribleExchangeV1/RaribleExchangeV1'
import { Punk } from '../../generated/schema'
import { WRAPPED_PUNK_ADDRESS, WETH_CONTRACT } from '../constant'
import { getOrCreateSale } from '../helpers/saleHelper'
import {
	getOrCreateAccount,
	updateAccountAggregates,
} from '../helpers/accountHelper'
import {
	getOrCreateWrappedPunkContract,
	updateContractAggregates,
} from '../helpers/contractHelper'
import { updatePunkSaleAggregates } from '../../src/helpers/punkHelper'
import { updateSale } from '../helpers/saleHelper'
import { getContractAddress, getPriceAfterRaribleCut } from '../utils'

export function handleExchangeV1Buy(event: RaribleExchangeV1Buy): void {
	/**
   	  @description RaribleExchangeV1 Contract - Track WRAPPEDPUNK SALE
      @summary 
		ROOT ISSUE:  Punk 509 was sold while wrapped.
			- Account: https://cryptopunks.app/cryptopunks/accountinfo?account=0x0eb9a7ff5cbf719251989caf1599c1270eafb531
			- Example: https://etherscan.io/tx/0x51583622e0dcfda43c6481ba073eb1bbd6b7f3ef98c28d3564918491344d8ce3#eventlog
    	- We want to capture this so we can calculate average prices & update other aggregates both for punk & account
		- We filter out wrappedPunk transactions by ensuring
			- both events occur in the same transaction.
			- the wrappedPunk contract address that emitted it.
    */

	let wrappedPunkContractAddress = getContractAddress(event)
	if (
		wrappedPunkContractAddress !== null &&
		wrappedPunkContractAddress == WRAPPED_PUNK_ADDRESS
	) {
		let sellToken = event.params.sellToken.toString()
		let price = event.params.buyValue
		let buyer = event.params.buyer
		let seller = event.params.owner
		let tokenId = event.params.buyTokenId.toString()

		if (sellToken == WRAPPED_PUNK_ADDRESS) {
			let contract = getOrCreateWrappedPunkContract(
				Address.fromString(wrappedPunkContractAddress)
			)
			let fromAccount = getOrCreateAccount(seller)
			let toAccount = getOrCreateAccount(buyer)
			let punk = Punk.load(tokenId)!
			let sale = getOrCreateSale(seller, tokenId, event)

			updateSale(sale, price, buyer)
			updateContractAggregates(contract, price)
			updateAccountAggregates(fromAccount, toAccount, price)
			updatePunkSaleAggregates(punk, price)

			//Write
			toAccount.save()
			fromAccount.save()
			sale.save()
			contract.save()
			punk.save()
		} else if (sellToken == WETH_CONTRACT) {
			/**
		    @description Logic for validating a bidAccepted sale
			@summary 
			A wrapped punk bid can be accepted on RaribleExchangeV1.
				- Example: https://etherscan.io/tx/0x26ad41d72737442ef108460bc25a69764b30e3df96344d95f8f3a03a551fd787#eventlog
				- We know this through the sell token.
					- If the sell token is WETH, then we know it's a wrapped punk bid that got accepted
					- If the sell token is the wrapped punk contract, then we know it's a regular sale
				- RaribleExchangeV1 takes 2.5% fee on all bids accepted transactions so we need to remove that to get the actual sale price
			*/
			let bidPrice = getPriceAfterRaribleCut(price)
			let contract = getOrCreateWrappedPunkContract(
				Address.fromString(wrappedPunkContractAddress)
			)
			let fromAccount = getOrCreateAccount(seller)
			let toAccount = getOrCreateAccount(buyer)
			let punk = Punk.load(tokenId)!
			let sale = getOrCreateSale(seller, tokenId, event)

			updateSale(sale, bidPrice, buyer)
			updateContractAggregates(contract, bidPrice)
			updateAccountAggregates(fromAccount, toAccount, bidPrice)
			updatePunkSaleAggregates(punk, bidPrice)

			//Write
			toAccount.save()
			fromAccount.save()
			sale.save()
			contract.save()
			punk.save()
		}
	}
}
