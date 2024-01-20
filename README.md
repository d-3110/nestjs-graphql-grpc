## Description
NestjsでREST,GraphQL,gRPCでそれぞれAPIを作ってみたリポジトリ

|                |        |                                            | 
| -------------- | ------ | ------------------------------------------ | 
| 開発環境       | Docker | ![](https://skillicons.dev/icons?i=docker) | 
| フレームワーク | NestJs | ![](https://skillicons.dev/icons?i=nest)   | 
| DB             | MySQL  | ![](https://skillicons.dev/icons?i=mysql)  | 
| ORM            | Prisma | ![](https://skillicons.dev/icons?i=prisma) | 

### GraphQL

http://localhost:3000/graphql

### gRPC

http://localhost:5000

### REST

http://localhost:3000/rest-api

## DB migrationmigration
```bash
# migrate
$ yarn prisma migrate dev --name init

# seed
$ yarn prisma db seed

```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
### proto
```bash
$ make protoc
```