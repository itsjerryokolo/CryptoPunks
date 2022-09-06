import { Bytes, BigInt, Address, ethereum } from '@graphprotocol/graph-ts'
import { Assign } from '../generated/cryptopunks/cryptopunks'
import {
	newMockEvent,
	test,
	assert,
	clearStore,
	afterEach,
	describe,
	beforeEach,
} from 'matchstick-as/assembly/index'
import { handleAssign } from '../src/mapping'
import Utils from '../tests/helpers/utils'

describe('handleAssign', () => {
	beforeEach(() => {
		Utils.seedEntity()
	})

	afterEach(() => {
		clearStore()
	})

	test('can handle new bounty closed', () => {
		let newAssignEvent = createNewAssignEvent(Utils.bountyId, Utils.id_STRING)

		newAssignEvent.transaction.hash = Bytes.fromHexString(Utils.transactionHash)

		handleAssign(newAssignEvent)

		assert.fieldEquals('Bounty', Utils.id, 'AssignTime', Utils.AssignTime)
		assert.fieldEquals('Bounty', Utils.id, 'closer', Utils.userId)
		assert.fieldEquals('Bounty', Utils.id, 'status', Utils.status_CLOSED)
	})
})

export function createNewAssignEvent(
	bountyId: string,
	bountyAddress: string
): Assign {
	let newAssignEvent = changetype<Assign>(newMockEvent())

	let parameters: Array<ethereum.EventParam> = [
		new ethereum.EventParam('bountyId', ethereum.Value.fromString(bountyId)),
		new ethereum.EventParam(
			'bountyAddress',
			ethereum.Value.fromAddress(Address.fromString(bountyAddress))
		),
	]

	newAssignEvent.parameters = parameters

	return newAssignEvent
}
