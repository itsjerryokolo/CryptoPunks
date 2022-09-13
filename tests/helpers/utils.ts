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

	static get loremIpsum(): string {
		return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
	}

	static get Bi_ZERO(): BigInt {
		return BigInt.zero()
	}

	static get Bi_ONE(): BigInt {
		return BigInt.fromI32(1)
	}

	static seedAccount(): void {
		let entity = new Entity()

		entity.setBytes('id', Utils.id_BYTES)
		entity.setBigInt('averageAmountSpent', Utils.Bi_ZERO)
		entity.setBigInt('totalEarned', Utils.Bi_ZERO)
		entity.setBigInt('totalSpent', Utils.Bi_ZERO)
		entity.setBigInt('numberOfSales', Utils.Bi_ZERO)
		entity.setBigInt('numberOfTransfers', Utils.Bi_ZERO)
		entity.setBigInt('numberOfPunksAssigned', Utils.Bi_ZERO)
		entity.setBigInt('numberOfPunksOwned', Utils.Bi_ZERO)
		entity.setBigInt('numberOfPurchases', Utils.Bi_ZERO)
		entity.setBigInt('averageAmountSpent', Utils.Bi_ZERO)
		entity.setString('accountUrl', Utils.loremIpsum)

		store.set('Account', Utils.id_STRING, entity)
	}
}
