---
sidebar_position: 2
---

# Entities

### Entities for the CryptoPunks Subgraph are all listed below

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
| punksOwned            | [Punk!]      | All Punks owned by account                        |
| bought                | [Sale!]!     | Purchases by Account                              |
| nftsOwned             | [NFT!]!      | All Punks owned by account                        |
| assigned              | [Assign!]!   | Punks assigned to account (if any)                |
| sent                  | [Transfer!]! | Punk transfers by Account                         |
| received              | [Transfer!]! | Punk transfers to Account                         |
| bids                  | [Bid!]!      | Query bids by Account                             |
| asks                  | [Ask!]!      | Punks offered for sale by Account                 |
| numberOfPunksOwned    | BigInt!      | Total number of Punks owned by account            |
| numberOfPunksAssigned | BigInt!      | Total number of Punks assigned to account         |
| numberOfTransfers     | BigInt!      | Total number of transfer by Account               |
| numberOfSales         | BigInt!      | Total number of sales by Account                  |
| numberOfPurchases     | BigInt!      | Total number of purchases by Account              |
| totalSpent            | BigInt!      | Total amount spent buying Punks by Account        |
| totalEarned           | BigInt!      | Total amount earned by Account from selling Punks |
| averageAmountSpent    | BigInt!      | Average amount spent buying Punks by Account      |
| accountUrl            | String!      | Account URL                                       |

## Punk

| Field                  | Type       | Description                                                              |
| ---------------------- | ---------- | ------------------------------------------------------------------------ |
| id                     | ID!        | Punk ID                                                                  |
| transferedTo           | Account    | Account that received Punk                                               |
| assignedTo             | Account    | Account that claimed Punk                                                |
| purchasedBy            | Account    | Punk Buyers                                                              |
| metadata               | MetaData   | Punk Metadata                                                            |
| contract               | Contract   | Contract Data                                                            |
| tokenId                | BigInt!    | Punk TokenID                                                             |
| owner                  | Account!   | Current owner of Punk                                                    |
| wrapped                | Boolean!   | Wrap Status                                                              |
| events                 | [Event!]!  | All Punk events                                                          |
| currentAsk             | Ask        | Current Ask for Punk                                                     |
| currentBid             | Bid        | Current Bid for Punk                                                     |
| currentAskCreated      | AskCreated | Current AskCreated event                                                 |
| currentBidCreated      | BidCreated | Current BidCreated event                                                 |
| numberOfTransfers      | BigInt!    | Number of times Punk has been transferred                                |
| numberOfSales          | BigInt!    | Number of times Punk was sold                                            |
| currentAskRemoved      | AskRemoved | Current AskRemoved event                                                 |
| currentBidRemoved      | BidRemoved | Current BidRemoved event                                                 |
| totalAmountSpentOnPunk | BigInt!    | Total amount spent purchasing Punk across OpenSea & Rarible marketplaces |
| averageSalesPrice      | BigInt!    | Average price for Punk across OpenSea & Rarible marketplaces             |

## MetaData

| Field       | Type      | Description    |
| ----------- | --------- | -------------- |
| id          | ID!       | Metadata ID    |
| tokenId     | BigInt!   | Punk Token ID  |
| tokenURI    | String!   | URI of Punk    |
| image       | String    | Punk Image     |
| svg         | String    | Punk Svg image |
| contractURI | String!   | Contract URI   |
| punk        | Punk!     | Punk           |
| traits      | [Trait!]! | Punk Traits    |

## Trait

| Field        | Type         | Description                     |
| ------------ | ------------ | ------------------------------- |
| id           | ID!          | Trait ID                        |
| type         | TraitType!   | Type of Trait                   |
| metaDatas    | [Metadata!]! | Punk Metadata                   |
| numberOfNfts | BigInt!      | Number of Punks with this trait |

## Ask

| Field   | Type     | Description                                            |
| ------- | -------- | ------------------------------------------------------ |
| id      | ID!      | Ask ID                                                 |
| from    | Account! | Account that created Ask                               |
| open    | Boolean! | Open Status of Punk. Asks can be either Open or Closed |
| amount  | BigInt!  | Ask for Punk in ETH                                    |
| nft     | NFT      | Punk being offered for sale                            |
| created | Event    | Ask created at                                         |
| removed | Event    | Ask removed at                                         |

## Bid

| Field     | Type       | Description                                            |
| --------- | ---------- | ------------------------------------------------------ |
| id        | ID!        | Bid ID                                                 |
| from      | Account!   | Bidder                                                 |
| open      | Boolean!   | Open status of Punk. Bids can be either Open or Closed |
| amount    | BigInt!    | Bid amount in ETH                                      |
| nft       | NFT        | Punk bidded                                            |
| created   | Event      | Bid created at                                         |
| removed   | Event      | Bid removed at                                         |
| offerType | offerType! | Type of Offer                                          |

## Contract

| Field             | Type    | Description                                      |
| ----------------- | ------- | ------------------------------------------------ |
| id                | ID!     | Contract Address                                 |
| symbol            | String  | Token Symbol                                     |
| name              | String  | Token Name                                       |
| totalSupply       | BigInt! | Total supply of tokens                           |
| totalSales        | BigInt! | Total number of Punk sales                       |
| totalAmountTraded | BigInt! | Total Sales in ETH for Punks                     |
| imageHash         | String  | The hash of the composite image of all the Punks |

## Assign

| Field       | Type       | Description                 |
| ----------- | ---------- | --------------------------- |
| id          | ID!        | Assign ID                   |
| contract    | Contract   | Contract Metada             |
| nft         | NFT        | Punk that was assigned      |
| to          | Account    | Account that claimed Punk   |
| amount      | BigInt     | Punk amount                 |
| from        | Account    | Account that created Assign |
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
| from        | Account    | Account that created Assign |
| to          | Account    | Account that claimed Ask    |
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

| Field       | Type       | Description                  |
| ----------- | ---------- | ---------------------------- |
| id          | ID!        | BidRemoved ID                |
| from        | Account    | Account that removed bid     |
| to          | Account    | Account                      |
| bid         | bid        | Punk bid removed             |
| amount      | BigInt     | Bid that was removed, in ETH |
| contract    | Contract   | Contract metadata            |
| nft         | NFT        | Punk whose bid was removed   |
| logNumber   | BigInt!    | Transaction log number       |
| type        | EventType! | Event type                   |
| blockNumber | BigInt!    | Transaction block number     |
| blockHash   | Bytes!     | Event block hash             |
| txHash      | Bytes!     | Event transaction hash       |
| timeStamp   | BigInt!    | Transaction timestamp        |

## AskRemoved

| Field       | Type       | Description                  |
| ----------- | ---------- | ---------------------------- |
| id          | ID!        | AskRemoved ID                |
| ask         | bid        | Punk ask removed             |
| from        | Account    | Account that removed Ask     |
| to          | Account    | Account                      |
| amount      | BigInt     | Ask that was removed, in ETH |
| contract    | Contract   | Contract metadata            |
| nft         | NFT        | Punk whose ask was removed   |
| logNumber   | BigInt!    | Transaction log number       |
| type        | EventType! | Event type                   |
| blockNumber | BigInt!    | Transaction block number     |
| blockHash   | Bytes!     | Event block hash             |
| txHash      | Bytes!     | Event transaction hash       |
| timeStamp   | BigInt!    | Transaction timestamp        |

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
| owner       | String! | New owner of Punk                                                      |
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
| from        | Account    | Account that wrapped Punk |
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
| from        | Account    | Account that unwrapped Punk |
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
| id          | ID!      | Contract Address of UserProxy |
| user        | Account! | Account that owns the Proxy   |
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
