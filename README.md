<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Justification for Using MongoDB

In this project, MongoDB was chosen as the database for the following reasons:

### Document-Oriented Storage

MongoDB's flexible, JSON-like document structure is ideal for a commenting system, allowing for dynamic and evolving data schemas.

### Scalability

MongoDB's horizontal scaling and high throughput capabilities ensure the system can efficiently handle large volumes of comments and high user activity.

### Performance

With efficient indexing and a powerful aggregation framework, MongoDB provides fast query performance and complex data processing capabilities.

### Ease of Use

MongoDB's document model and rich query language enhance developer productivity and simplify data handling.

### Community and Ecosystem

MongoDB's strong community support and integration with NestJS streamline development and provide access to a wealth of resources and tools.

### Security

MongoDB's robust security features, including authentication, authorization, and encryption, ensure the safety and integrity of user data.

These factors make MongoDB a highly suitable choice for developing a scalable, performant, and secure commenting system.

# Commenting System Backend

## Overview

This project is a backend service for a commenting system, allowing users to post, retrieve, edit, and delete comments. It uses Node.js with NestJS and MongoDB. This README provides instructions on setting up and running the project, as well as how to test the API using Postman.

## Features

- User authentication (register and log in)
- Post comments
- Retrieve all comments
- Edit and delete own comments

## Prerequisites

- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas)
- Postman (for API testing)

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
MONGODB_URI=mongodb://localhost:27017/commenting-system
JWT_SECRET=your_jwt_secret
```

- `MONGODB_URI`: The connection string for MongoDB.
- `JWT_SECRET`: A secret key for JSON Web Tokens (JWT).

### 4. Run Migrations

If you have any database migrations, run them using:

```bash
yarn migration:run
```

### 5. Start the Server

```bash
yarn start
```

The server will start and listen on `http://localhost:3000`.

## Testing with Postman

### 1. Register a New User

- Method: POST
- URL: `http://localhost:3000/auth/register`
- Body (JSON):
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
  ```

### 2. Log In

- Method: POST
- URL: `http://localhost:3000/auth/login`
- Body (JSON):
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
  ```
- Response: The server will return a JWT token.

### 3. Post a Comment

- Method: POST
- URL: `http://localhost:3000/comments`
- Headers:
  - `Authorization: Bearer <your_jwt_token>`
- Body (JSON):
  ```json
  {
    "content": "This is a comment."
  }
  ```

### 4. Retrieve All Comments

- Method: GET
- URL: `http://localhost:3000/comments`
- Headers:
  - `Authorization: Bearer <your_jwt_token>`

### 5. Edit a Comment

- Method: PUT
- URL: `http://localhost:3000/comments/<comment_id>`
- Headers:
  - `Authorization: Bearer <your_jwt_token>`
- Body (JSON):
  ```json
  {
    "content": "This is an edited comment."
  }
  ```

### 6. Delete a Comment

- Method: DELETE
- URL: `http://localhost:3000/comments/<comment_id>`
- Headers:
  - `Authorization: Bearer <your_jwt_token>`
