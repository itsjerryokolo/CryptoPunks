import { BigInt } from '@graphprotocol/graph-ts'
import { CONTRACT_URI, IMAGE_URI, TOKEN_URI } from '../constant'
import { MetaData } from '../../generated/schema'
import { PunkImage } from '../punkSvg'

export function createMetadata(punkId: BigInt): MetaData {
	let metadata = new MetaData(punkId.toString())
	metadata.tokenURI = TOKEN_URI.concat(punkId.toString())
	metadata.contractURI = CONTRACT_URI
	metadata.tokenId = punkId
	metadata.punk = punkId.toString()
	metadata.contractURI = CONTRACT_URI
	metadata.image = PunkImage.get(punkId.toString())

	metadata.traits = new Array<string>()

	metadata.save()

	return metadata as MetaData
}
