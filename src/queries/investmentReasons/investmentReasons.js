import gql from "graphql-tag";

const getInvestmentReasons = gql`
  query Page($id: ID!) {
    page(id: $id) {
      page_components(limit:5 ) {
        id
        name
        icon
      }
    }
  }
`;
export default getInvestmentReasons;
