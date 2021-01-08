# CryptoPunks
Subgraph for the Cryptopunks marketplace

## Example Query
```graphql

{
  cryptoPunksAssigneds(first: 5) {
    id
    assignedTo
    punkIndex
    punksRemainingToAssign
    transactionDate
  }
  cryptoPunkBoughts(first: 5) {
    id
    transferedTo
    transferedFrom
    amount
    transactionDate
  }
  cryptoPunkTransfers(first: 5) {
    id
    punkIndex
    transferedTo
    transferedFrom
    transactionDate
  }
}
