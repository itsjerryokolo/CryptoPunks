---
sidebar_position: 5
---

### Run your local Graph Node

```
ETHEREUM_RPC=mainnet:https://eth-mainnet.alchemyapi.io/v2/${YOUR_API_KEY}
```

Run the command: `docker compose up`

### Logic for Transfers/Wraps

- Regular PunkTransfer

  - In handlePunkTransfer
    - decrement from
    - increment to
    - set owner
    - create transfer event

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

### Build

- Initialize subgraph (Subgraph Studio):

```
graph init --product subgraph-studio
--from-contract <CONTRACT_ADDRESS> [--network <ETHEREUM_NETWORK>] [--abi <FILE>] <SUBGRAPH_SLUG> [<DIRECTORY>]
```

- Initialize subgraph (Hosted Service):

```
graph init --product hosted-service --from-contract <CONTRACT_ADDRESS> <GITHUB_USER>/<SUBGRAPH_NAME>[<DIRECTORY>]
```

- Generate code from manifest and schema: `graph codegen`
- Build subgraph: `graph build`

### Deploy

- Authenticate (just once): `graph auth --product hosted-service <ACCESS_TOKEN>`
- Deploy to Subgraph Studio: `graph deploy --studio <SUBGRAPH_NAME>`
- Deploy to Hosted Service: `graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>`
