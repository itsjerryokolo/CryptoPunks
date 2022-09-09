import {
	Bytes,
	BigInt,
	Address,
	Entity,
	store,
	log,
} from '@graphprotocol/graph-ts'

export default class Utils {
	constructor() {}

	static get id_BYTES(): Bytes {
		return Bytes.fromHexString('0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1')
	}

	static get id_STRING(): string {
		return '0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1'
	}

	static get accountDummyOne(): Address {
		return Address.fromHexString('0x06b306c85e5f33b1b2d971822ce0ed42fb7ab9a1')
	}
	static get accountDummyZero(): Address {
		return Address.fromHexString('0x0000000000000000000000000000000000000000')
	}

	static get accountDummyZero_BYTES(): Bytes {
		return Bytes.fromHexString('0x0000000000000000000000000000000000000000')
	}

	static get Bi_ZERO(): BigInt {
		return BigInt.zero()
	}

	static seedAccount(): void {
		let entity = new Entity()

		entity.setString('id', Utils.id_STRING)
		entity.setBytes('address', Utils.id_BYTES)
		entity.setBigInt('status', Utils.Bi_ZERO)

		store.set('Account', Utils.id_STRING, entity)
	}
}
