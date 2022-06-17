import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";

import { CryptoPunksData } from "../generated/CryptoPunksData/CryptoPunksData";
import { Punk } from "../generated/schema";

export function handleBlock(block: ethereum.Block): void {
  if (
    block.number.gt(BigInt.fromI32(13047091)) &&
    block.number.gt(BigInt.fromI32(13057091))
  ) {
    let index = block.number.minus(BigInt.fromI32(13047091)).toI32();

    let data = CryptoPunksData.bind(
      Address.fromString("0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2")
    );

    //  let attributes = data.punkAttributes(BigInt.fromI32(index));
    let svg = data.punkImageSvg(BigInt.fromI32(index));
    let image = data.punkImage(BigInt.fromI32(index));

    let punk = Punk.load(index.toString())!;
    // ...

    punk.save();
  }
}
