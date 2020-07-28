# xivapi-apollo-server

[![license](https://img.shields.io/github/license/xivapi/xivapi-js.svg)](LICENSE)

This is an apollo server layer for interacting with [XIVAPI](https://xivapi.com/) and requesting data using GraphQL.

### How to run

#### Run server in development
```sh
npm i
npm run start
```
Open [http://localhost:8080](http://localhost:8080) to use GraphQL's playground.

##### Example to fetch free company
```graphql
query {
  freecompany(name: "power xiv", server: "phoenix") {
    Results {
      ID
      Name
    }
  }
}
```

##### Example to fetch character
```graphql
query {
  character(name: "bordeaux", page: 2) {
    Pagination {
      Page
      PageTotal
    }
    Results {
      ID
      Name
      Server
    }
  }
}
```

## Caching

There is currently a default internal cache that will cache data (for 1 hour) for `/character/search` and `/freecompany/search` endpoints (the only 2 supported enpoints, at the moment).

## License

This project is open source, under the terms described in the [MIT License](LICENSE).
