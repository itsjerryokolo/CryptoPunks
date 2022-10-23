---
sidebar_position: 2
---

# Entities

- [Account](#account)
- [Punk](#punk)
- [Metadata](#metadata)
- [Trait](#trait)
- [Ask](#ask)
- [Bid](#bid)
- [Contract](#contract)
- [Assign](#assign)
- [Sale](#sale)
- [AskCreated](#askcreated)
- [BidCreated](#bidcreated)
- [BidRemoved](#bidremoved)
- [AskRemoved](#askremoved)
- [Transfer](#transfer)
- [CToken](#ctoken)
- [Wrap](#wrap)
- [Unwrap](#unwrap)
- [UserProxy](#userproxy)
- [EpnsNotificationCounter](#epnsnotificationcounter)
- [EpnsPushNotification](#epnspushnotification)
- [NFT](#nft)
- [Event](#event)
- [Offer](#offer)

## Account

| Field                 | Type         | Description                                       |
| --------------------- | ------------ | ------------------------------------------------- |
| id                    | Bytes!       | Etherum address                                   |
| punksOwned            | [Punk!]      | All punks owned by account                        |
| bought                | [Sale!]!     | Purchases by account                              |
| nftsOwned             | [NFT!]!      | All punks owned by account                        |
| assigned              | [Assign!]!   | Punks assigned to account (if any)                |
| sent                  | [Transfer!]! | Punk transfers by account                         |
| received              | [Transfer!]! | Punk transfers to account                         |
| bids                  | [Bid!]!      | Query bids by account                             |
| asks                  | [Ask!]!      | Punks offered for sale by account                 |
| numberOfPunksOwned    | BigInt!      | Total number of punks owned by account            |
| numberOfPunksAssigned | BigInt!      | Total number of punks assigned to account         |
| numberOfTransfers     | BigInt!      | Total number of transfer by account               |
| numberOfSales         | BigInt!      | Total number of sales by account                  |
| numberOfPurchases     | BigInt!      | Total number of purchases by account              |
| totalSpent            | BigInt!      | Total amount spent buying punks by account        |
| totalEarned           | BigInt!      | Total amount earned by account from selling punks |
| averageAmountSpent    | BigInt!      | Average amount spent buying punks by account      |
| accountUrl            | String!      | Account URL                                       |

## Punk

| Field                  | Type       | Description                                                              |
| ---------------------- | ---------- | ------------------------------------------------------------------------ |
| id                     | ID!        | Punk ID                                                                  |
| transferedTo           | Account    | Account that received punk                                               |
| assignedTo             | Account    | Account that claimed punk                                                |
| purchasedBy            | Account    | Punk buyers                                                              |
| metadata               | MetaData   | Punk metadata                                                            |
| contract               | Contract   | Contract data                                                            |
| tokenId                | BigInt!    | Punk tokenID                                                             |
| owner                  | Account!   | Current owner of punk                                                    |
| wrapped                | Boolean!   | Wrap status                                                              |
| events                 | [Event!]!  | All punk events                                                          |
| currentAsk             | Ask        | Current ask for punk                                                     |
| currentBid             | Bid        | Current bid for punk                                                     |
| currentAskCreated      | AskCreated | Current AskCreated event                                                 |
| currentBidCreated      | BidCreated | Current BidCreated event                                                 |
| numberOfTransfers      | BigInt!    | Number of times punk has been transferred                                |
| numberOfSales          | BigInt!    | Number of times punk was sold                                            |
| currentAskRemoved      | AskRemoved | Current AskRemoved event                                                 |
| currentBidRemoved      | BidRemoved | Current BidRemoved event                                                 |
| totalAmountSpentOnPunk | BigInt!    | Total amount spent purchasing punk across opensea & rarible marketplaces |
| averageSalesPrice      | BigInt!    | Average price for punk across opensea & rarible marketplaces             |

## MetaData

| Field       | Type      | Description    |
| ----------- | --------- | -------------- |
| id          | ID!       | Metadata ID    |
| tokenId     | BigInt!   | Punk token ID  |
| tokenURI    | String!   | URI of punk    |
| image       | String    | Punk image     |
| svg         | String    | Punk svg image |
| contractURI | String!   | Contract URI   |
| punk        | Punk!     | Punk           |
| traits      | [Trait!]! | Punk traits    |

## Trait

| Field        | Type         | Description                     |
| ------------ | ------------ | ------------------------------- |
| id           | ID!          | Trait ID                        |
| type         | TraitType!   | Type of trait                   |
| metaDatas    | [Metadata!]! | Punk metadata                   |
| numberOfNfts | BigInt!      | Number of punks with this trait |

## Ask

| Field   | Type     | Description                                            |
| ------- | -------- | ------------------------------------------------------ |
| id      | ID!      | Ask ID                                                 |
| from    | Account! | Account that created ask                               |
| open    | Boolean! | Open status of punk. Asks can be either open or closed |
| amount  | BigInt!  | Ask for punk in ETH                                    |
| nft     | NFT      | Punk being offered for sale                            |
| created | Event    | Ask created at                                         |
| removed | Event    | Ask removed at                                         |

## Bid

| Field     | Type       | Description                                            |
| --------- | ---------- | ------------------------------------------------------ |
| id        | ID!        | Bid ID                                                 |
| from      | Account!   | Bidder                                                 |
| open      | Boolean!   | Open status of punk. Bids can be either open or closed |
| amount    | BigInt!    | Bid amount in ETH                                      |
| nft       | NFT        | Punk bidded                                            |
| created   | Event      | Bid created at                                         |
| removed   | Event      | Bid removed at                                         |
| offerType | offerType! | Type of offer                                          |

## Contract

| Field             | Type    | Description                                      |
| ----------------- | ------- | ------------------------------------------------ |
| id                | ID!     | Contract address                                 |
| symbol            | String  | Token symbol                                     |
| name              | String  | Token name                                       |
| totalSupply       | BigInt! | Total supply of tokens                           |
| totalSales        | BigInt! | Total number of punk sales                       |
| totalAmountTraded | BigInt! | Total sales in ETH for punks                     |
| imageHash         | String  | The hash of the composite image of all the punks |

## Assign

| Field       | Type       | Description                 |
| ----------- | ---------- | --------------------------- |
| id          | ID!        | Assign ID                   |
| contract    | Contract   | Contract metadata           |
| nft         | NFT        | Punk that was assigned      |
| to          | Account    | Account that claimed punk   |
| amount      | BigInt     | Punk amount                 |
| from        | Account    | Account that created assign |
| type        | EventType! | Event type                  |
| logNumber   | BigInt!    | Transaction log number      |
| blockNumber | BigInt!    | Transaction block number    |
| blockHash   | Bytes!     | Event block hash            |
| txHash      | Bytes!     | Event transaction hash      |
| timeStamp   | BigInt!    | Transaction timestamp       |

## Sale

| Field       | Type       | Description              |
| ----------- | ---------- | ------------------------ |
| id          | ID!        | Sale ID                  |
| to          | Account    | Punk buyer               |
| amount      | BigInt     | Amount in ETH            |
| from        | Account    | Punk seller              |
| contract    | Contract   | Contract metadata        |
| nft         | NFT        | Punk being sold          |
| logNumber   | BigInt!    | Transaction log number   |
| type        | EventType! | Event type               |
| blockNumber | BigInt!    | Transaction block number |
| blockHash   | Bytes!     | Event block hash         |
| txHash      | Bytes!     | Event transaction hash   |
| timeStamp   | BigInt!    | Transaction timestamp    |

## AskCreated

| Field       | Type       | Description                 |
| ----------- | ---------- | --------------------------- |
| id          | ID!        | AskCreated ID               |
| from        | Account    | Account that created assign |
| to          | Account    | Account that claimed ask    |
| ask         | Ask        | Punk                        |
| amount      | BigInt     | Ask in ETH                  |
| contract    | Contract   | Contract metadata           |
| nft         | NFT        | Punk being offered for sale |
| logNumber   | BigInt!    | Transaction log number      |
| type        | EventType! | Event type                  |
| blockNumber | BigInt!    | Transaction block number    |
| blockHash   | Bytes!     | Event block hash            |
| txHash      | Bytes!     | Event transaction hash      |
| timeStamp   | BigInt!    | Transaction timestamp       |

## BidCreated

| Field       | Type       | Description              |
| ----------- | ---------- | ------------------------ |
| id          | ID!        | BidCreated ID            |
| from        | Account    | Account that created bid |
| to          | Account    | Account that claimed bid |
| bid         | Ask        | Punk                     |
| amount      | BigInt     | Bid in ETH               |
| contract    | Contract   | Contract metadata        |
| nft         | NFT        | Punk being bidded        |
| logNumber   | BigInt!    | Transaction log number   |
| type        | EventType! | Event type               |
| blockNumber | BigInt!    | Transaction block number |
| blockHash   | Bytes!     | Event block hash         |
| txHash      | Bytes!     | Event transaction hash   |
| timeStamp   | BigInt!    | Transaction timestamp    |

## BidRemoved

| Field       | Type       | Description                |
| ----------- | ---------- | -------------------------- |
| id          | ID!        | BidRemoved ID              |
| from        | Account    | Account that removed bid   |
| to          | Account    | Account                    |
| bid         | bid        | Punk bid removed           |
| amount      | BigInt     | Bid in ETH                 |
| contract    | Contract   | Contract metadata          |
| nft         | NFT        | Punk whose bid was removed |
| logNumber   | BigInt!    | Transaction log number     |
| type        | EventType! | Event type                 |
| blockNumber | BigInt!    | Transaction block number   |
| blockHash   | Bytes!     | Event block hash           |
| txHash      | Bytes!     | Event transaction hash     |
| timeStamp   | BigInt!    | Transaction timestamp      |

## AskRemoved

| Field       | Type       | Description                |
| ----------- | ---------- | -------------------------- |
| id          | ID!        | AskRemoved ID              |
| ask         | bid        | Punk ask removed           |
| from        | Account    | Account that removed ask   |
| to          | Account    | Account                    |
| amount      | BigInt     | Ask in ETH                 |
| contract    | Contract   | Contract metadata          |
| nft         | NFT        | Punk whose ask was removed |
| logNumber   | BigInt!    | Transaction log number     |
| type        | EventType! | Event type                 |
| blockNumber | BigInt!    | Transaction block number   |
| blockHash   | Bytes!     | Event block hash           |
| txHash      | Bytes!     | Event transaction hash     |
| timeStamp   | BigInt!    | Transaction timestamp      |

## Transfer

| Field       | Type       | Description              |
| ----------- | ---------- | ------------------------ |
| id          | ID!        | Transfer ID              |
| from        | Account    | Sender                   |
| to          | Account    | Receiver                 |
| amount      | BigInt     | Punk amount              |
| contract    | Contract   | Contract metadata        |
| nft         | NFT        | Punk being transferred   |
| logNumber   | BigInt!    | Transaction log number   |
| type        | EventType! | Event type               |
| blockNumber | BigInt!    | Transaction block number |
| blockHash   | Bytes!     | Event block hash         |
| txHash      | Bytes!     | Event transaction hash   |
| timeStamp   | BigInt!    | Transaction timestamp    |

## CToken

| Field       | Type    | Description                                                            |
| ----------- | ------- | ---------------------------------------------------------------------- |
| id          | ID!     | TxHash + logNumber                                                     |
| from        | Account | Sender                                                                 |
| to          | Account | Receiver                                                               |
| owner       | String! | New owner of punk                                                      |
| amount      | BigInt  | Amount of cToken transferred                                           |
| punkId      | String  | Punk ID                                                                |
| referenceId | String! | Field for storing referenceIDs of other events in the same transaction |
| blockNumber | BigInt! | Transaction block number                                               |
| blockHash   | Bytes!  | Event block hash                                                       |
| txHash      | Bytes!  | Event transaction hash                                                 |
| timeStamp   | BigInt! | Transaction timestamp                                                  |

## Wrap

| Field       | Type       | Description               |
| ----------- | ---------- | ------------------------- |
| id          | ID!        | Wrap ID                   |
| from        | Account    | Account that wrapped punk |
| to          | Account    | Receiver                  |
| amount      | BigInt     | Punk amount               |
| contract    | Contract   | Contract metadata         |
| nft         | NFT        | Punk being wrapped        |
| logNumber   | BigInt!    | Transaction log number    |
| type        | EventType! | Event type                |
| blockNumber | BigInt!    | Transaction block number  |
| blockHash   | Bytes!     | Event block hash          |
| txHash      | Bytes!     | Event transaction hash    |
| timeStamp   | BigInt!    | Transaction timestamp     |

## UnWrap

| Field       | Type       | Description                 |
| ----------- | ---------- | --------------------------- |
| id          | ID!        | Wrap ID                     |
| from        | Account    | Account that unwrapped punk |
| to          | Account    | Receiver                    |
| amount      | BigInt     | Punk amount                 |
| contract    | Contract   | Contract metadata           |
| nft         | NFT        | Punk being unwrapped        |
| logNumber   | BigInt!    | Transaction log number      |
| type        | EventType! | Event type                  |
| blockNumber | BigInt!    | Transaction block number    |
| blockHash   | Bytes!     | Event block hash            |
| txHash      | Bytes!     | Event transaction hash      |
| timeStamp   | BigInt!    | Transaction timestamp       |

## UserProxy

| Field       | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| id          | ID!      | Contract address of UserProxy |
| user        | Account! | Account that owns the proxy   |
| blockNumber | BigInt!  | Transaction block number      |
| blockHash   | Bytes!   | Event block hash              |
| txHash      | Bytes!   | Event transaction hash        |
| timeStamp   | BigInt!  | Transaction timestamp         |

## EpnsNotificationCounter

| Field      | Type    | Description |
| ---------- | ------- | ----------- |
| id         | ID!     | ID          |
| totalcount | BigInt! | Total count |

## EpnsPushNotification

| Field              | Type    | Description         |
| ------------------ | ------- | ------------------- |
| id                 | ID!     | ID                  |
| notificationNumber | BigInt! | Notification number |
| recipient          | String! | Recipient           |
| notification       | String! | Notification        |
