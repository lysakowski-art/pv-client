import gql from "graphql-tag";

const getInvestmentReasons = gql`
  query Page($id: ID!) {
    page(id: $id) {
      page_components(limit:6 ) {
        id
        name
      }
    }
  }
`;
export default getInvestmentReasons;
