# CryptoPunks

The CryptoPunks are 10,000 uniquely generated characters.
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

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
