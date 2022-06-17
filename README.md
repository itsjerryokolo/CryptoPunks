# CryptoPunks

The CryptoPunks are 10,000 uniquely generated characters.
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

![Punks](punks.png)

## Subgraph url
```
https://thegraph.com/explorer/subgraph?id=YqMJatbgbqy1GodtbYZv4U9NzyaScCgSF7CAE5ivAM7&view=Overview
```

## GraphQL endpoint
Query the subgraph via its endpoint
```
https://gateway.thegraph.com/api/[api-key]/subgraphs/id/YqMJatbgbqy1GodtbYZv4U9NzyaScCgSF7CAE5ivAM7
```
## Entities
You'll find the description of the various fields in the `schema.graphql`

- ASK: This entity captures the ASKS for a punk or from a user. It also shows the `current ASK` of the Punk.
       An ask can be `open` or `closed`.  You can also query when the ask was `created` and when it was `removed`
- BID: This entity captures the BIDS for a punk or from a user. It also shows the `current BID` of the Punk.
        An ask can be `open` or `closed`. You can also query when the bid was `created` and when it was `removed`
- PUNK: This entity holds useful information about the Punks; `traits`, `accessories`, `gender`, `owner` etc
- ACCOUNT: Account contains the user data; `Trades`, `Hodlings` etc
- CONTRACT: Contract metadata including `Trade Volume`
- METADATA: Here, you can retrieve the punk tokenURI, image URI, traits, and other useful metadata
- SALE - Query punk sale events


## Queries
A list of example queries you can make can be found here: [Queries.md](Queries.md) 

### Available Enums for Punk
- male
- female
- zombie
- alien
- ape


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
