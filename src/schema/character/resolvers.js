import { gql } from 'apollo-server-cloud-functions';

export const typeName = 'Character';

export const query = gql`
  type Query {
    character(name: [String], server: [String], page: [Int]): ${typeName}
  }
`;

export default {
  Query: {
    character: async (_req, params, ctx, info) => {
      info.cacheControl.setCacheHint({ maxAge: 60, scope: 'PRIVATE' });

      const {
        name = "",
        server = "",
        page = "",
      } = params;

      return ctx.dataSources.xivApi.search('character', { name, server, page });
    },
  }
};
