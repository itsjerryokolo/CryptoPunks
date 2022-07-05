import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'

import { CryptoPunksData } from '../generated/CryptoPunksData/CryptoPunksData'
import { Punk, MetaData } from '../generated/schema'

export function handleBlock(block: ethereum.Block): void {
	if (
		block.number.ge(BigInt.fromI32(13047091)) &&
		block.number.lt(BigInt.fromI32(13057091))
	) {
		let index = block.number.minus(BigInt.fromI32(13047091)).toI32()

		let data = CryptoPunksData.bind(
			Address.fromString('0x16f5a35647d6f03d5d3da7b35409d65ba03af3b2')
		)

		//  let attributes = data.punkAttributes(BigInt.fromI32(index));
		let svgCall = data.try_punkImageSvg(index)
		let imageCall = data.try_punkImage(index)

		let punk = Punk.load(index.toString())!
		let metadata = MetaData.load(index.toString())!

		metadata.svg = svgCall.reverted ? ' ' : svgCall.value.toString()
		metadata.image = imageCall.reverted ? ' ' : imageCall.value.toHexString()

		punk.metadata = metadata.id

		punk.save()
		metadata.save()
	}
}
