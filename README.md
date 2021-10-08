# CryptoPunks

The CryptoPunks are 10,000 uniquely generated characters.
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

Test

## Query account

```graphql
{
  accounts(where: { id: "0x94de7e2c73529ebf3206aa3459e699fbcdfcd49b" }) {
    id
    nftsOwned {
      id
    }
    wrappedPunksOwned {
      id
    }
    bought {
      id
      timestamp
      txHash
    }
    assigned {
      id
      timestamp
      txHash
    }
    received {
      id
      timestamp
      txHash
    }
    bids {
      id
      offerType
      created {
        id
        amount
        type
        timestamp
        txHash
      }
      removed {
        id
        type
        timestamp
        txHash
      }
    }
    asks {
      id
    }
  }
}
```

## Query Punk data

```graphql
{
  punks(where: { tokenid: "1000" }) {
    id
    accessories
  }
}
```

## Available Enums for Punk

- male
- female
- zombie
- alien
- ape

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

## Run your local Graph Node

```bash
ETHEREUM_RPC=mainnet:https://eth-mainnet.alchemyapi.io/v2/${YOUR_API_KEY} docker compose up
```

## Logic for Transfers/Wraps

- Regular PunkTransfer
  - In handlePunkTransfer:
    - decrement from
    - increment to
    - set owner
    - create Transfer event
- Mint/Wrap
  - In handlePunkTransfer (to = WrappedPunkAddress):
    - decrement from
  - In handleWrappedPunkTransfer (from = ZeroAddress):
    - increment to
    - set owner
    - create Wrap event
- Burn/Unwrap
  - In handlePunkTransfer (from = WrappedPunkAddress):
    - increment to
    - set owner
  - In handleWrappedPunkTransfer (to = ZeroAddress):
    - decrement from
    - create Unwrap event
- Wrapped Transfer
  - In handleWrappedPunkTransfer:
    - decrement from
    - increment to
    - set owner
    - create Transfer event
