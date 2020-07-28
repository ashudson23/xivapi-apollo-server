import { ApolloServer } from 'apollo-server-cloud-functions';
// import responseCachePlugin from 'apollo-server-plugin-response-cache';

import schema from './schema';
import dataSources from './dataSources';
// import cache from './cache';

const {
  XIVAPI_KEY: token
} = process.env;

export default new ApolloServer({
  // cache,
  context: ({ req }) => ({
    token: req?.headers?.['x-token'] ?? token,
  }),
  dataSources,
  // plugins: [responseCachePlugin()],
  playground: true,
  schema,
});
