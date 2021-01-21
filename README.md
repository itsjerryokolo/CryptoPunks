# CryptoPunks
The CryptoPunks are 10,000 uniquely generated characters. 
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

## Example Query
```graphql
{
  purchases(first:50){
    punkIndex
    amount
    seller
    buyer
    transaction{
      id
      date
      block
    }
  }
}

