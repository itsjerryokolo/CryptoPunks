import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { CToken, Punk } from "../generated/schema";
import { BIGINT_ONE, BIGINT_ZERO } from "./constant";

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

export function calculateAverage(totalAmount: BigInt, qty: BigInt): BigInt {
  let average = totalAmount.div(qty);
  return average;
}

export function updatePunkSaleAggregates(punk: Punk, price: BigInt): void {
  //Update punk aggregates
  punk.totalAmountSpentOnPunk = punk.totalAmountSpentOnPunk.plus(price);
  punk.numberOfSales = punk.numberOfSales.plus(BIGINT_ONE);

  //We only calculate average sale price if there are more than 0 sales so we don't divide by 0
  if (punk.numberOfSales != BIGINT_ZERO) {
    punk.averageSalePrice = calculateAverage(
      punk.totalAmountSpentOnPunk,
      punk.numberOfSales
    );
  }
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
