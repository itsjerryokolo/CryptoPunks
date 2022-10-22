---
sidebar_position: 3
---

## Sample Queries

Below are some sample queries you can use to gather information from the CryptoPunks subgraph

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

### Sales

```graphql
query Last30DaysSales($timestamp_gt: String) {
  sales(
    orderBy: timestamp
    orderDirection: desc
    where: { timestamp_gt: $timestamp_gt }
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

With `$timestamp_gt` set like this:

```graphql
{
  $timestamp_gt: Math.round(Date.now() / 1000) - 30 * 24 * 60 * 60;
}
```

### Get Punk Data

```graphql
{
  punks(where: { id: "1000" }) {
    id
    owner {
      id
    }
    assignedTo {
      id
    }
    wrapped
    currentBidCreated {
      id
    }
    currentAskCreated {
      id
    }
    numberOfTransfers
    numberOfSales
    events {
      id
    }
  }
}
```

### Asks for a Punk

```graphql
{
  asks(orderDirection: desc, where: { nft: "365" }) {
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

### Owner data

```graphql
{
  accounts(where: { id: "0x6aeda057364cc4aad943cac04a1c149d90e10a3b" }) {
    id
    nftsOwned {
      id
    }
    bids {
      id
    }
    asks {
      id
      created {
        id
        txHash
        timestamp
      }
    }
    bought {
      id
      timestamp
      nft {
        id
      }
    }
    sent {
      id
      nft {
        id
      }
      txHash
      timestamp
    }
    received {
      id
      nft {
        id
      }
      txHash
      timestamp
    }
    assigned {
      id
      nft {
        id
      }
      timestamp
      txHash
    }
  }
}
```

### Male Punks

```graphql
{
  punks(where: { type: male }) {
    id
    accessories
    type
  }
}
```
