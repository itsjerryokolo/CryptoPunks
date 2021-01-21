# CryptoPunks
The CryptoPunks are 10,000 uniquely generated characters. 
No two are exactly alike, and each one of them can be officially owned by a single person on the Ethereum blockchain.

## Example Query
```graphql
{
  cryptoPunksAssigneds(where: {punkIndex_gt:"5000"}) {
    id
    assignedTo
    punkIndex
    punksRemainingToAssign
    transactionDate
  }
  cryptoPunkBoughts(first: 5, where:{amount_not:"0"}) {
    id
    transferedTo
    transferedFrom
    amount
    transactionDate
  }
}

