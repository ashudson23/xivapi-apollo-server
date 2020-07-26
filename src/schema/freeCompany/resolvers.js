import { gql } from 'apollo-server';

export const typeName = 'FreeCompany';

export const query = gql`
  type Query {
    freecompany(name: [String], server: [String], page: [Int]): ${typeName}
  }
`;

export default {
  Query: {
    freecompany: async (_req, params, ctx, info) => {
      info.cacheControl.setCacheHint({ maxAge: 60, scope: 'PRIVATE' });

      //TODO: potentially get list of requested fields and add them to `column` field

      const {
        name = "",
        server = "",
        page = "",
      } = params;

      return ctx.dataSources.xivApi.search('freecompany', { name, server, page });
    },
  }
};
