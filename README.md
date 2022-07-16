# CryptoPunks

The CryptoPunks are 10,000 uniquely generated characters.
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

![Punks](punks.png)

## Subgraph Url
```
https://thegraph.com/explorer/subgraph?id=YqMJatbgbqy1GodtbYZv4U9NzyaScCgSF7CAE5ivAM7&view=Overview
```

## GraphQL Endpoint

You first need to create an API KEY.
See: https://youtu.be/UrfIpm-Vlgs
```
https://gateway.thegraph.com/api/[API-KEY]/subgraphs/id/YqMJatbgbqy1GodtbYZv4U9NzyaScCgSF7CAE5ivAM7
```
## Queries
A list of example queries you can make can be found here: [Queries.md](Queries.md) 

## Links

- Protocol: https://cryptopunks.app/
- Contract addresses:
    - Cryptopunks: `0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB`
    - CryptopunksData: `0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2`
    - WrappedPunks: `0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6`
    - Opensea: `0x7be8076f4ea4a4ad08075c2508e481d6c946d12b`
    - RaribleExchangeV1: `0xcd4ec7b66fbc029c116ba9ffb3e59351c20b5b06`
    - ERC721Sale: `0x131aebbfe55bca0c9eaad4ea24d386c5c082dd58`

## EPNS Notifications

```
https://staging.epns.io#/channels
```

Subscribe to get realtime event notifications from the subgraph.
Search for `Cryptopunks Marketplace` and opt-in.
## Run your local Graph Node

```bash
ETHEREUM_RPC=mainnet:https://eth-mainnet.alchemyapi.io/v2/${YOUR_API_KEY}
```

Run the command: `docker compose up`
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

## Build

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

## Deploy

- Authenticate (just once): `graph auth --product hosted-service <ACCESS_TOKEN>`
- Deploy to Subgraph Studio: `graph deploy --studio <SUBGRAPH_NAME>`
- Deploy to Hosted Service: `graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>`
