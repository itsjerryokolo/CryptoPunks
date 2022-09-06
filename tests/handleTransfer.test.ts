import { BigInt, Address, ethereum } from '@graphprotocol/graph-ts'
import {
	assert, // Check database for expected values
	test, // test a unit of the handler function in mappings
	newMockEvent, // Gives me access to logIndex, transactionLogIndex, logType, block, transaction
	createMockedFunction, //Contract Calls
} from 'matchstick-as/assembly/index'
// import { log } from 'matchstick-as/assembly/log'
import { logStore } from 'matchstick-as/assembly/store'
import { PunkTransfer } from '../generated/cryptopunks/cryptopunks'
import { handlePunkTransfer } from '../src/mapping'

import { WRAPPED_PUNK_ADDRESS, ZERO_ADDRESS } from '../src/constant'

///////////////////////////////////
/// Mock Values ///
///////////////////////////////////
const OWNER1 = '0x6f4a2d3a4f47f9c647d86c929755593911ee0001'
const OWNER2 = '0xc36817163b7eaef25234e1d18adbfa52105a0002'
const OWNER3 = '0xb4cf0f5f2ffed445ca804898654366316d0a0003'
const PROXY2 = '0x674578060c0f07146bcc86d12b8a2efa1e810002'
const CRYPTOPUNKS_ADDRESS = Address.fromString(
	'0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
)
///////////////////////////////////
// Contract Call Tests //
///////////////////////////////////

createMockedFunction(
	Address.fromString(WRAPPED_PUNK_ADDRESS),
	'symbol',
	'symbol():(string)'
).returns([ethereum.Value.fromString('WPUNKS')])

function createBlock(number: i32): ethereum.Block {
	let mockEvent = newMockEvent()

	let block = mockEvent.block
	block.number = BigInt.fromI32(number)
	return block
}

function createPunkTransferEvent(
	from: Address,
	to: Address,
	punkIndex: i32,
	blockNumber: i32 = 1000
): PunkTransfer {
	let mockEvent = newMockEvent()

	let parameters = new Array<ethereum.EventParam>()

	// Stack the event parameters
	parameters.push(
		new ethereum.EventParam('from', ethereum.Value.fromAddress(from))
	)
	parameters.push(new ethereum.EventParam('to', ethereum.Value.fromAddress(to)))
	parameters.push(
		new ethereum.EventParam('punkIndex', ethereum.Value.fromI32(punkIndex))
	)

	// Stack the Transfer event with the parameters
	let transferEvent = new PunkTransfer(
		CRYPTOPUNKS_ADDRESS,
		mockEvent.logIndex,
		mockEvent.transactionLogIndex,
		mockEvent.logType,
		createBlock(blockNumber),
		mockEvent.transaction,
		parameters,
		null
	)

	return transferEvent
}

///////////////////////////////////////////
//TEST PUNK TRANSFER
///////////////////////////////////////////
//Call test()
test('test Transfer', () => {
	let transferEvent = createPunkTransferEvent(
		Address.fromString(OWNER1),
		Address.fromString(OWNER2),
		1,
		1
	)
	//Run test against mapping logic
	handlePunkTransfer(transferEvent)

	//Check database for expected values
	assert.fieldEquals('Account', OWNER1, 'numberOfPunksOwned', '0')
	assert.fieldEquals('Account', OWNER2, 'numberOfPunksOwned', '1')
	logStore()
})
