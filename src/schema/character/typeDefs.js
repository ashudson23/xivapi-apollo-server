import { gql } from 'apollo-server';

import * as common from '../common';
import { query, typeName } from './resolvers';

export default gql`
  ${common.typeDefs}

  type ${typeName}Results {
    Avatar: String
    FeastMatches: Int
    ID: Int
    Lang: String
    Name: String
    Rank: String
    RankIcon: String
    Server: String
  }

  type ${typeName} {
    Results: [${typeName}Results]
    Pagination: Pagination
  }

  ${query}
`;
