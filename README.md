# CryptoPunks
The CryptoPunks are 10,000 uniquely generated characters. 
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

## Example Query
### Query Owner data
```graphql

{
  owners(where: {id: "0x7174039818a41e1ae40fdcfa3e293b0f41592af2"}) {
    id
    allpunksOwned {
      id
    }
    punkPurchased {
      id
      transaction {
        id
        date
      }
    }
    punkAssigned {
      id
      transaction {
        id
        date
      }
    }
    punkTransfered {
      id
      transaction {
        id
        date
      }
    }
    punkOfferedForSale {
      id
      amountOffered
    }
    punkBid {
      id
      bid
    }
    transaction {
      date
      block
      id
    }
  }
}

```
### Query purchases of specific owner
```graphql
{
  purchases(where:{purchaseBy: "0x00bd9fd57c423a1b1c969823d409156d90974d77"}) {
    id
    punkIndex
    buyer
    seller
    purchaseBy{
      id
    }
    amount
    transaction{
      id
    }
}
}
```

## Run your local Graph Node

```bash
ETHEREUM_RPC=mainnet:https://eth-mainnet.alchemyapi.io/v2/${YOUR_API_KEY} docker compose up 
```