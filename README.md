# CryptoPunks
Subgraph for the Cryptopunks marketplace

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

