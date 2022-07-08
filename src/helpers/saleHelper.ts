import { ethereum, BigInt, Address, BigDecimal } from '@graphprotocol/graph-ts'
import { Sale } from '../../generated/schema'
import { getGlobalId } from '../utils'
import { sendEpnsNotification } from '../epnsNotification/EpnsNotification'

export function getOrCreateSale(
	fromAddress: Address,
	punk: string,
	event: ethereum.Event
): Sale {
	let sale = Sale.load(getGlobalId(event).concat('-SALE'))

	if (!sale) {
		sale = new Sale(getGlobalId(event).concat('-SALE'))
		sale.contract = event.address.toHexString()
		sale.timestamp = event.block.timestamp
		sale.blockNumber = event.block.number
		sale.txHash = event.transaction.hash
		sale.logNumber = event.logIndex
		sale.blockHash = event.block.hash
		sale.type = 'SALE'
	}
	/**
      Find out where to properly update this field
        sale.to = toAddress.toHexString(); ***DONE
    */
	sale.from = fromAddress.toHexString()
	sale.nft = punk.toString()

	sale.save()
	return sale as Sale
}

export function updateSale(sale: Sale, price: BigInt, buyer: Address): void {
	sale.amount = price
	sale.to = buyer.toHexString()
}

export function handleSaleNotification(
	punk: string,
	account: string,
	price: string,
	event: ethereum.Event
): void {
	let address = '0xbCb4ED1F05b8F017CF23E739552A6D81A014Ee84' //cryptopunks-subgraph.eth
	let saleTxHash = event.transaction.hash.toHexString()
	let recipient = `${address}`,
		type = '1',
		title = 'Punk Sold',
		body = `Yeehaw!, Punk: ${punk} bought by ${account}`,
		subject = 'Punk Sale Event',
		message = `Yeehaw!, Punk:${punk}just sold to ${account} for ${price}`,
		image = `https://cryptopunks.app/public/images/cryptopunks/punk${punk}.png`,
		secret = 'null',
		cta = `https://etherscan.io/tx/${saleTxHash}`

	let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`
	sendEpnsNotification(recipient, notification)
}
