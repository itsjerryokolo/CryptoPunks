# Queries
## Sales for the last 30 days
```graphql
query MyQuery {
  sales(
    orderBy: timestamp
    orderDirection: desc
    where: {timestamp_gt: "1649238346"}
  ) {
    id
    to {
      id
    }
    amount
    txHash
    timestamp
  }
}
```

## Query Punk data
```graphql
{
punks(where:{id: "1000"}){
    id
    owner{id}
    assignedTo{id}
    wrapped
    currentBidCreated{id}
    currentAskCreated{id}
    numberOfTransfers
    numberOfSales
    events{id}
  }
}
```

## Query the Asks for a Punk
```graphql
{
  asks(orderDirection: desc, where: {nft: "365"}) {
    id
    open
    amount
    created {
      blockNumber
      timestamp
    }
    removed {
      id
      blockNumber
      timestamp
    }
    from {
      id
    }
  }
}
```

## Query Owner Data

```graphql
{
  accounts(where: {id: "0x6aeda057364cc4aad943cac04a1c149d90e10a3b"}) {
    id
    nftsOwned {
      id
    }
    bids{
      id
    }
    asks{
      id
      created{
        id
        txHash
        timestamp
      }
    }
    bought{
      id
      timestamp
      nft{
        id
      }
    }
    sent{
      id
      nft{
        id
      }
      txHash
      timestamp
    }
    received{
      id
      nft{
        id
      }
      txHash
      timestamp
    }
    assigned{
      id
      nft{id}
      timestamp
      txHash
    }
  }
}
```
## Query male Punks

```graphql
{
  punks(where: { type: male }) {
    id
    accessories
    type
  }
}
```