import gql from "graphql-tag";

const getInvestmentReasons = gql`
  query Page($id: ID!) {
    page(id: $id) {
      page_components {
        id
        name
      }
    }
  }
`;
export default getInvestmentReasons;
