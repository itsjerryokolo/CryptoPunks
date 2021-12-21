import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import { Contract } from "../../generated/schema";

import { cryptopunks } from "../../generated/cryptopunks/cryptopunks";
import { WrappedPunks } from "../../generated/WrappedPunks/WrappedPunks";

export function getOrCreateCryptoPunkContract(address: Address): Contract {
  let id = address.toHexString();
  let contract = Contract.load(id);
  let cryptopunk = cryptopunks.bind(address);

  if (!contract) {
    contract = new Contract(id);
    contract.totalAmountTraded = BigInt.fromI32(0);
    contract.totalSales = BigInt.fromI32(0);

    let symbolCall = cryptopunk.try_symbol();
    if (!symbolCall.reverted) {
      contract.symbol = symbolCall.value;
    } else {
      log.warning("symbolCall Reverted", []);
    }

    let nameCall = cryptopunk.try_name();
    if (!nameCall.reverted) {
      contract.name = nameCall.value;
    } else {
      log.warning("nameCall Reverted", []);
    }

    let imageHashCall = cryptopunk.try_imageHash();
    if (!imageHashCall.reverted) {
      contract.imageHash = imageHashCall.value;
    } else {
      log.warning("imageHashCall Reverted", []);
    }

    let totalSupplyCall = cryptopunk.try_totalSupply();
    if (!totalSupplyCall.reverted) {
      contract.totalSupply = totalSupplyCall.value;
    } else {
      log.warning("totalSupplyCall Reverted", []);
    }

    contract.save();
  }

  return contract as Contract;
}

export function getOrCreateWrappedPunkContract(address: Address): Contract {
  let id = address.toHexString();
  let contract = Contract.load(id);
  let wrappedPunks = WrappedPunks.bind(address);

  if (!contract) {
    contract = new Contract(id);
    contract.totalAmountTraded = BigInt.fromI32(0);
    contract.totalSales = BigInt.fromI32(0);

    let symbolCall = wrappedPunks.try_symbol();
    if (!symbolCall.reverted) {
      contract.symbol = symbolCall.value;
    } else {
      log.warning("symbolCall Reverted", []);
    }

    let nameCall = wrappedPunks.try_name();
    if (!nameCall.reverted) {
      contract.name = nameCall.value;
    } else {
      log.warning("nameCall Reverted", []);
    }

    let totalSupplyCall = wrappedPunks.try_totalSupply();
    if (!totalSupplyCall.reverted) {
      contract.totalSupply = totalSupplyCall.value;
    } else {
      log.warning("totalSupplyCall Reverted", []);
    }

    contract.save();
  }

  return contract as Contract;
}
