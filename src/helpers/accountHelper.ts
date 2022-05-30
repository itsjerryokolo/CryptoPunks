import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Account } from "../../generated/schema";
import { BIGINT_ONE, BIGINT_ZERO } from "../constant";
import { calculateAverage } from "../utils";

export function getOrCreateAccount(address: Address): Account {
  let id = address.toHexString();
  let account = Account.load(id);
  let url = "https://cryptopunks.app/cryptopunks/accountinfo?account=";

  if (!account) {
    account = new Account(id);
    account.numberOfPunksOwned = BIGINT_ZERO;
    account.numberOfSales = BIGINT_ZERO;
    account.totalEarned = BIGINT_ZERO;
    account.numberOfTransfers = BIGINT_ZERO;
    account.numberOfPunksAssigned = BIGINT_ZERO;
    account.numberOfPurchases = BIGINT_ZERO;
    account.totalSpent = BIGINT_ZERO;
    account.averageAmountSpent = BIGINT_ZERO;
    account.accountUrl = url.concat(id);

    account.save();
  }

  return account as Account;
}

export function updateAccountAggregates(
  fromAccount: Account,
  toAccount: Account,
  price: BigInt
): void {
  //Update fromAccount aggregates
  fromAccount.numberOfSales = fromAccount.numberOfSales.plus(BIGINT_ONE);
  fromAccount.totalEarned = fromAccount.totalEarned.plus(price);

  //Update toAccount aggregates
  toAccount.totalSpent = toAccount.totalSpent.plus(price);
  toAccount.numberOfPurchases = toAccount.numberOfPurchases.plus(BIGINT_ONE);

  //We only calculate average amount spent if there are more than 0 purchases so we don't divide by 0
  if (toAccount.numberOfPurchases != BIGINT_ZERO) {
    toAccount.averageAmountSpent = calculateAverage(
      toAccount.totalSpent,
      toAccount.numberOfPurchases
    );
  }
}

export function updateAccountHoldings(
  toAccount: Account,
  fromAccount: Account
): void {
  //Update toAccount holdings
  toAccount.numberOfPunksOwned = toAccount.numberOfPunksOwned.plus(BIGINT_ONE);

  //Update fromAccount holdings
  fromAccount.numberOfPunksOwned = fromAccount.numberOfPunksOwned.minus(
    BIGINT_ONE
  );
}
