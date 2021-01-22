# CryptoPunks
The CryptoPunks are 10,000 uniquely generated characters. 
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

## Example Query
```graphql
{
  owners(where:{id: "0x00bd9fd57c423a1b1c969823d409156d90974d77"}) {
    id
    punkPurchased {
      id
      transaction{
        id
        date
      }
    }
    punkAssigned {
      id
      transaction{
        id
        date
      }
    }
    punkTransfered {
      id
      transaction{
        id
        date
      }
    }
    transaction{
      date
      block
      id
    }
  }
}


