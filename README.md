# xivapi-apollo-server

[![version](https://badge.fury.io/js/xivapi-js.svg)](https://www.npmjs.com/package/xivapi-js)
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

## License

This project is open source, under the terms described in the [MIT License](LICENSE).
