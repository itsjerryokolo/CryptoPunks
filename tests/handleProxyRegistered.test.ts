import { Bytes, BigInt, ethereum, Address } from '@graphprotocol/graph-ts'
import { ProxyRegistered } from '../generated/WrappedPunks/WrappedPunks'
import {
	newMockEvent,
	test,
	assert,
	clearStore,
	afterEach,
	describe,
	beforeEach,
} from 'matchstick-as/assembly/index'
import { handleProxyRegistered } from '../src/mapping'
import Utils from './helpers/utils'

describe('handleProxyRegistered', () => {
	beforeEach(() => {
		Utils.seedUserProxy()
	})
	afterEach(() => {
		clearStore()
	})
	test('handleProxyRegistered', () => {
		let newProxyRegisteredEvent = createNewProxyRegisteredEvent(
			Utils.accountDummyOne,
			Utils.accountDummyZero
		)

		handleProxyRegistered(newProxyRegisteredEvent)

		assert.fieldEquals(
			'UserProxy',
			Utils.id_STRING,
			'blockNumber',
			Utils.Bi_ONE.toString()
		)
	})
})

export function createNewProxyRegisteredEvent(
	proxy: Address,
	user: Address
): ProxyRegistered {
	let newProxyRegisteredEvent = changetype<ProxyRegistered>(newMockEvent())

	let parameters: Array<ethereum.EventParam> = [
		new ethereum.EventParam('owner', ethereum.Value.fromAddress(user)),
		new ethereum.EventParam('proxyAddress', ethereum.Value.fromAddress(proxy)),
	]

	newProxyRegisteredEvent.parameters = parameters

	return newProxyRegisteredEvent
}
