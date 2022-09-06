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

	static get Bi_ZERO(): BigInt {
		return BigInt.zero()
	}

	static seedEntity(): void {
		let entity = new Entity()

		entity.setBytes('id', Utils.id_BYTES)
		entity.setString('bountyAddress', Utils.id_STRING)
		entity.setBigInt('status', Utils.Bi_ZERO)

		store.set('Entity', Utils.id_STRING, entity)
	}
}
