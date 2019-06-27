# Marketplace API NodeJS

A NodeJS Marketplace API project :pencil:

This project simulates an API from a marketplace which an user can publish his product to sell and another person can send an e-mail to him, showing interest on that product.

## Dependencies

You must need to use [Redis](https://redis.io) and [MongoDB](https://www.mongodb.com) to run this project. You can choose between download them or using [Docker](https://www.docker.com). To run them using Docker, execute the following example commands:

#### Redis

```sh
$ docker run --name noderedis -p 6379:6379 -d -t redis:alpine
```

#### MongoDB

```sh
$ docker run --name nodemongo -p 8081:8081 -d -t mongo:latest
```

## Getting Started

To run this Marketplace API locally, create a .env file in the project folder, following the file structure example below and overriding the values with your configuration:

```
APP_SECRET:Secret key of API

MAIL_HOST:Mail host config
MAIL_PORT:Mail port config
MAIL_USER:Mail user config
MAIL_PASS:Mail pass config

DB_URL:URL of MongoDB
REDIS_HOST:Host of Redis
REDIS_PORT:Port using by Redis

SENTRY_DSN:Sentry DNS
```

## Resources

#### User

``POST - /users ``  Create a new user

**Arguments**

| Argument | Type    | Required |
|----------|---------|----------|
|`name`    |*string* | x        |
|`email`   |*string* | x        |
|`password`|*string* | x        |

#### Sessions

``POST - /sessions ``  Create a new session to the user

**Arguments**

| Argument | Type    | Required |
|----------|---------|----------|
|`email`   |*string* | x        |
|`password`|*string* | x        |

#### Ads

``GET - /ads ``  Get all ads <br>
``GET - /ads/:id ``  Get a ad by ID <br>
``DELETE - /ads/:id ``  Delete a ad by ID <br>

``POST - /ads ``  Create a new ad

**Arguments**

| Argument    | Type    | Required |
|-------------|---------|----------|
|`title`      |*string* | x        |
|`description`|*string* | x        |
|`price`      |*numeric*| x        |

``PUT - /ads ``  Update a exists ad

**Arguments**

| Argument    | Type    | Required |
|-------------|---------|----------|
|`title`      |*string* | x        |
|`description`|*string* | x        |
|`price`      |*numeric*| x        |

#### Purchases

``PUT - /purchases/:id`` Close a purchase and the ad <br>
``POST - /purchases ``   Create a new purchase request

**Arguments**

| Argument    | Type    | Required | Options                      |
|-------------|---------|----------|------------------------------|
|`ad`         |*numeric*| x        | Ad ID                        |
|`content`    |*string* | x        | Message to send to Ad author |

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/marketplace-api/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/) | [Rocketseat - Teacher](https://github.com/Rocketseat)

See also the list of [contributors](https://github.com/gabriel-hahn/marketplace-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

