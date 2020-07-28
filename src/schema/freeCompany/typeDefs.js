import { gql } from 'apollo-server-cloud-functions';

import * as common from '../common';
import { query, typeName } from './resolvers';

export default gql`
  ${common.typeDefs}

  type ${typeName}Results {
    ID: String
    Name: String
    Server: String
    Crest: [String]
  }

  type ${typeName} {
    Results: [${typeName}Results]
    Pagination: Pagination
  }

  ${query}
`;
