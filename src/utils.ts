import { BigInt, ethereum, BigDecimal } from "@graphprotocol/graph-ts";
import { CToken } from "../generated/schema";
import { BIGINT_ONE } from "./constant";

export function getGlobalId(event: ethereum.Event): string {
  let globalId = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(event.logIndex.toString());
  return globalId;
}

export function getOwnerFromCToken(event: ethereum.Event): string {
  let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE);
  let id = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(cTokenLogIndex.toString());

  let cToken = CToken.load(id);
  if (!cToken) {
    cToken = new CToken(id);
    cToken.blockNumber = event.block.number;
    cToken.referenceId = cToken.id;
    cToken.blockHash = event.block.hash;
    cToken.txHash = event.transaction.hash;
    cToken.timestamp = event.block.timestamp;
    cToken.save();
  }

  let owner = cToken.owner;
  return owner;
}

export function getContractAddress(event: ethereum.Event): string | null {
  //The transfer always come first, so we need to provide the correct logIndex for cToken
  let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE);

  let id = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(cTokenLogIndex.toString());

  /**
   * We only care about transactions concerning WrappedPunk contract
   * cToken should exist with the given ID.
   */
  let cToken = CToken.load(id);

  // if it doesn't then it's not a WrappedPunk transaction
  if (!cToken) {
    return null;
  }

  // if it does, then return the contract Address to enable us validate the transaction in handleBuy()
  let contractAddress = cToken.referenceId;
  return contractAddress as string;
}

export function getPunkId(event: ethereum.Event): string | null {
  //The transfer always come first, so we need to provide the correct logIndex for cToken
  let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE);

  let id = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(cTokenLogIndex.toString());

  /**
   * We only care about transactions concerning WrappedPunk contract
   * cToken should exist with the given ID.
   */
  let cToken = CToken.load(id);

  // if it doesn't then it's not a WrappedPunk transaction
  if (!cToken) {
    return null;
  }

  // if it does, then return the punkId to enable us validate the transaction in OrderMatched()
  let punk = cToken.punkId;
  return punk as string;
}

export function getMakerAddress(event: ethereum.Event): string | null {
  //The transfer always come first, so we need to provide the correct logIndex for cToken
  let cTokenLogIndex = event.logIndex.minus(BIGINT_ONE);

  let id = event.transaction.hash
    .toHexString()
    .concat("-")
    .concat(cTokenLogIndex.toString());

  /**
   * We only care about transactions concerning WrappedPunk contract
   * cToken should exist with the given ID.
   */
  let cToken = CToken.load(id);

  // if it doesn't then it's not a WrappedPunk transaction
  if (!cToken) {
    return null;
  }

  // if it does, then return the maker address to enable us validate the transaction in OrderMatched()
  let makerAddress = cToken.to;
  return makerAddress as string;
}

/**
 * @description This function calculates the average given two values
 * @returns Returns the average in `BigInt`
 */
export function calculateAverage(totalAmount: BigInt, qty: BigInt): BigInt {
  let average = totalAmount.div(qty);
  return average;
}

export function getOrCreateCToken(event: ethereum.Event): CToken {
  let cToken = CToken.load(getGlobalId(event));
  if (!cToken) {
    cToken = new CToken(getGlobalId(event));
    cToken.referenceId = cToken.id;
    cToken.blockNumber = event.block.number;
    cToken.blockHash = event.block.hash;
    cToken.txHash = event.transaction.hash;
    cToken.timestamp = event.block.timestamp;
  }
  return cToken as CToken;
}

/**
 * @description This function takes out the Rarible cut from the sale price
 * @summary 
     - We convert the percentage cut to a decimal
     - We get the cut in ETH in BigDecimal
     - We subtract the cut from the `price` to get the final sale price

 * @param price - Sale amount
 * @returns Returns the ETH Sale price in `BigInt` after cut conversion
 */

export function getPriceAfterRaribleCut(price: BigInt): BigInt {
  let cut = BigDecimal.fromString("0.025"); //2.5%

  let cutDecimal = cut.times(price.toBigDecimal());
  let cutStringFromDecimal = cutDecimal.toString();

  //Extra check incase the value ends with ".0", e.g 12.0
  if (cutStringFromDecimal.includes(".") === true) {
    let priceAfterCut = price.minus(
      BigInt.fromString(cutStringFromDecimal.split(".")[0])
    );
    return priceAfterCut;
  } else {
    let priceAfterCut = price.minus(BigInt.fromString(cutStringFromDecimal));
    return priceAfterCut;
  }
}
