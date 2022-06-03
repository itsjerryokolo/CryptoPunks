import { Address } from '@graphprotocol/graph-ts'
import { OrdersMatched } from '../../generated/Opensea/Opensea'
import { Punk } from '../../generated/schema'
import { WRAPPED_PUNK_ADDRESS } from '../constant'
import {
	getOrCreateAccount,
	updateAccountAggregates,
} from '../helpers/accountHelper'
import {
	getOrCreateWrappedPunkContract,
	updateContractAggregates,
} from '../helpers/contractHelper'
import { getOrCreateSale, updateSale } from '../helpers/saleHelper'
import { getContractAddress, getPunkId, getMakerAddress } from '../utils'
import { updatePunkSaleAggregates } from '../../src/helpers/punkHelper'

export function handleOpenSeaSale(event: OrdersMatched): void {
	/**
      @summary OpenSea Contract - Track WRAPPEDPUNK sale
	  @description:
    	 ROOT ISSUE:  Punk 7443 was sold on Opensea while wrapped.
      		- Account: https://cryptopunks.app/cryptopunks/accountinfo?account=0x0eb9a7ff5cbf719251989caf1599c1270eafb531
        	- Example: https://etherscan.io/tx/0xac6acdca9aeb00238ff885dcd4e697afd1cfa8ba75ef69622f786b96f8d164cf#eventlog
        - We want to capture this so we can calculate average prices & update other aggregates both for punk & account
		
		- We filter out wrappedPunk transactions by ensuring
			- both events occur in the same transaction
			- the wrappedPunk contract address emitted it
	 */
	let wrappedPunkContractAddress = getContractAddress(event)
	if (
		wrappedPunkContractAddress !== null &&
		wrappedPunkContractAddress == WRAPPED_PUNK_ADDRESS
	) {
		//We get the tokenId from the Transfer event because OrderMatched doesn't emit it.
		let tokenId = getPunkId(event)

		//We need the makerAddress to differentiate a regular sale from a bidAccepted sale
		let makerAddress = getMakerAddress(event)

		//All the operations below wouldn't make sense without the punkId, so we ensure it exists.
		if (tokenId !== null) {
			let punk = Punk.load(tokenId)!
			let contract = getOrCreateWrappedPunkContract(
				Address.fromString(wrappedPunkContractAddress)
			)

			if (
				makerAddress !== null &&
				makerAddress == event.params.taker.toHexString()
			) {
				//Regular wrappedPunk sale
				let price = event.params.price
				let buyer = event.params.taker
				let seller = event.params.maker

				let fromAccount = getOrCreateAccount(seller)
				let toAccount = getOrCreateAccount(buyer)
				let sale = getOrCreateSale(seller, tokenId, event)

				updateSale(sale, price, buyer)
				updateAccountAggregates(fromAccount, toAccount, price)
				updateContractAggregates(contract, price)
				updatePunkSaleAggregates(punk, price)

				punk.save()
				contract.save()
				sale.save()
				toAccount.save()
				fromAccount.save()
			} else if (
				makerAddress !== null &&
				makerAddress == event.params.maker.toHexString()
			) {
				/**
           @summary Logic for validating bidAccepted sale:
		   @description 
		  	- We want to capture this sale.
                - The major difference between this sale and a regular sale is that
                    - the maker becomes the buyer --> (toAccount)
                    - the taker becomes the seller --> (fromAccount)
                - Example:
                     https://etherscan.io/tx/0x0e44a5eb1d553ab2daacf43fd50bcd73f030e739de009368a9f2897150e1215d#eventlog

            - Getting the maker address from the toAccount in the wrappedPunk Transfer event confirms that
              this is a bid accepted sale because the maker is the buyer, but in the OrderMatched event, the maker is the seller.
        */
				let price = event.params.price
				let seller = event.params.taker
				let buyer = event.params.maker

				let sale = getOrCreateSale(seller, tokenId, event)
				let fromAccount = getOrCreateAccount(seller)
				let toAccount = getOrCreateAccount(buyer)

				updateSale(sale, price, buyer)
				updateAccountAggregates(fromAccount, toAccount, price)
				updateContractAggregates(contract, price)
				updatePunkSaleAggregates(punk, price)

				punk.save()
				contract.save()
				sale.save()
				toAccount.save()
				fromAccount.save()
			}
		}
	}
}
