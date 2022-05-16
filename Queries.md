# Queries

## Sales for the last 30 days

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

```javascript
{
  $timestamp_gt: Math.round(Date.now() / 1000) - 30 * 24 * 60 * 60;
}
```

## Query Punk data

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

## Query the Asks for a Punk

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

## Query Owner Data

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
### TODO
  - Who owns the most expensive punk?
  - What are the total sales for the last 30days
  - Which punk has had the most transfers?
  - Which punk has be sold the most?
  - Who has spent the most on punks?
  - Who owns the most punk?
  - Average total sales over 7days
  - Average total sales in 30 days
  - Punk with the most trait
  - Percentage difference in sale from previous day
  - How many punks were sold in 7 day and 30day period
  - How many male punks?
  - How many female punks?
  - Which male punk has been sold the most?
  - Which female punk has been sold the most?
  - The most expensive ask for a male punk?
  - The most expensive ask for a female punk?
  - The most expensive bid for a male punk?
  - The most expensive bid for a female punk?
  - Which punks hasn’t been moved since assign event?
  - Which address own a punk but haven’t moved it?
