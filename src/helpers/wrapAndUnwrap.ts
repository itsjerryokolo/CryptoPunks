import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { Wrap, Unwrap } from '../../generated/schema'

export function createWrap(
	id: Address,
	fromAccount: Address,
	nft: BigInt,
	event: ethereum.Event
): Wrap {
	let wrap = new Wrap(
		event.transaction.hash
			.toHexString()
			.concat('-')
			.concat(event.logIndex.toString())
	)
	wrap.from = fromAccount
	wrap.type = 'WRAP'
	wrap.timestamp = event.block.timestamp
	wrap.nft = nft.toString()
	wrap.blockNumber = event.block.number
	wrap.logNumber = event.logIndex
	wrap.blockHash = event.block.hash
	wrap.txHash = event.transaction.hash

	wrap.save()
	return wrap as Wrap
}

export function createUnwrap(
	fromAccount: Address,
	toAccount: Address,
	nft: BigInt,
	event: ethereum.Event
): Unwrap {
	let unWrap = new Unwrap(
		event.transaction.hash
			.toHexString()
			.concat('-')
			.concat(event.logIndex.toString())
	)
	unWrap.from = fromAccount
	unWrap.to = toAccount
	unWrap.type = 'UNWRAP'
	unWrap.timestamp = event.block.timestamp
	unWrap.logNumber = event.logIndex
	unWrap.nft = nft.toString()
	unWrap.blockNumber = event.block.number
	unWrap.blockHash = event.block.hash
	unWrap.txHash = event.transaction.hash

	unWrap.save()
	return unWrap as Unwrap
}
