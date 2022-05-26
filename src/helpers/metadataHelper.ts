import { BigInt } from "@graphprotocol/graph-ts";
import { CONTRACT_URI, IMAGE_URI, TOKEN_URI } from "../constant";
import { MetaData } from "../../generated/schema";

export function createMetadata(punkId: BigInt): MetaData {
  let metadata = new MetaData(punkId.toString());
  metadata.tokenURI = TOKEN_URI.concat(punkId.toString());
  metadata.contractURI = CONTRACT_URI;
  metadata.tokenId = punkId;
  metadata.punk = punkId.toString();
  metadata.contractURI = CONTRACT_URI;
  metadata.imageURI = IMAGE_URI.concat(punkId.toString()).concat(".png");

  metadata.traits = new Array<string>();

  metadata.save();

  return metadata as MetaData;
}
