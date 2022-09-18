import { Bytes, BigInt, Address, Entity, store } from '@graphprotocol/graph-ts'
import { getOrCreateAccount } from '../../src/helpers/accountHelper'

export default class Utils {
	constructor() {}

	static get id_BYTES(): Bytes {
		return Bytes.fromHexString('0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1')
	}

	static get id_STRING(): string {
		return '0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1'
	}

	static get accountDummyOne(): Address {
		return Address.fromString('0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1')
	}

	static get accountDummyOne_BYTES(): Bytes {
		return Bytes.fromHexString('0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1')
	}
	static get accountDummyZero(): Address {
		return Address.fromString('0x0000000000000000000000000000000000000000')
	}

	static get accountDummyZero_BYTES(): Bytes {
		return Bytes.fromHexString('0x0000000000000000000000000000000000000000')
	}

	static get loremIpsum(): string {
		return 'Lorem ipsum dolor sit amet'
	}

	static get Bi_ZERO(): BigInt {
		return BigInt.zero()
	}

	static get Bi_ONE(): BigInt {
		return BigInt.fromI32(1)
	}

	static seedAccount(): void {
		getOrCreateAccount(Address.fromBytes(Utils.id_BYTES))
	}

	static seedUserProxy(): void {
		let entity = new Entity()

		entity.setString('id', Utils.id_STRING)
		entity.setBigInt('user', Utils.Bi_ZERO)
		entity.setBigInt('blockNumber', Utils.Bi_ZERO)
		entity.setBigInt('blockHash', Utils.Bi_ZERO)
		entity.setBigInt('txHash', Utils.Bi_ZERO)
		entity.setBigInt('timestamp', Utils.Bi_ZERO)

		store.set('UserProxy', Utils.id_STRING, entity)
	}
}
