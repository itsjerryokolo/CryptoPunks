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