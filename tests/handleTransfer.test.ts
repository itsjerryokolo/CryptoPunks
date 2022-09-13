import { Bytes, BigInt, Address, ethereum } from '@graphprotocol/graph-ts'
import { Assign, Transfer } from '../generated/cryptopunks/cryptopunks'
import {
	newMockEvent,
	test,
	assert,
	clearStore,
	afterEach,
	describe,
	beforeEach,
} from 'matchstick-as/assembly/index'
import { handleTransfer } from '../src/mapping'
import Utils from './helpers/utils'

describe('handleTransfer', () => {
	beforeEach(() => {
		Utils.seedAccount()
	})
	afterEach(() => {
		clearStore()
	})
	test('handleTransfer', () => {
		let newTransferEvent = createNewTransferEvent(
			Utils.Bi_ZERO,
			Utils.accountDummyZero_BYTES,
			Utils.id_BYTES
		)

		handleTransfer(newTransferEvent)

		assert.fieldEquals(
			'Account',
			Utils.id_STRING,
			'id',
			Utils.id_BYTES.toHexString()
		)
		assert.fieldEquals(
			'Punk',
			Utils.id_STRING,
			'numberOfTransfers',
			Utils.Bi_ONE.toString()
		)
	})
})

export function createNewTransferEvent(
	punkId: BigInt,
	fromAccount: Bytes,
	toAccount: Bytes
): Transfer {
	let newTransferEvent = changetype<Transfer>(newMockEvent())

	let parameters: Array<ethereum.EventParam> = [
		new ethereum.EventParam('from', ethereum.Value.fromBytes(fromAccount)),
		new ethereum.EventParam('to', ethereum.Value.fromBytes(toAccount)),
		new ethereum.EventParam(
			'punkIndex',
			ethereum.Value.fromUnsignedBigInt(punkId)
		),
	]

	newTransferEvent.parameters = parameters

	return newTransferEvent
}
