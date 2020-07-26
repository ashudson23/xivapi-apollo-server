import { ApolloServer } from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import schema from './schema';
import dataSources from './datasources';
import cache from './cache';

const {
  PORT: port,
  XIVAPI_KEY: token,
  NODE_ENV: env,
} = process.env;

const server = new ApolloServer({
  cache,
  context: ({ req }) => ({
    token: req?.headers?.['x-token'] ?? token,
    env: req?.headers?.['x-env'] ?? env,
  }),
  dataSources,
  plugins: [responseCachePlugin()],
  playground: env !== production,
  schema,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
