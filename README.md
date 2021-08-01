# CryptoPunks
The CryptoPunks are 10,000 uniquely generated characters. 
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

## Example Query
### Purchases from account
```graphql
{
  sales(where: {to: "0x00bd9fd57c423a1b1c969823d409156d90974d77"}) {
    id
    from{id}
    to{id}
    amount
    txHash
    timestamp
    blockNumber
  }
}
```
### Query Punk
```graphql
{
  punks(where:{tokenid: "1000"}) {
    id
    accessories
    }
}
```
### Available Enums for Punk
--------------
- male
- female
- zombie
- alien
- ape

### Query male Punks
```graphql
{
punks(where:{type:male}){
  id
  accessories
  type
}
}
```

### Run your local Graph Node

```bash
ETHEREUM_RPC=mainnet:https://eth-mainnet.alchemyapi.io/v2/${YOUR_API_KEY} docker compose up 
```
