import { gql } from 'apollo-server';

export default gql`
  type Pagination {
    Page: Int
    PageNext: String
    PagePrev: String
    PageTotal: Int
    Results: Int
    ResultsPerPage: Int
    ResultsTotal: Int
  }
`;
