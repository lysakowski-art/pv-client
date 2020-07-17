import gql from "graphql-tag";

const getHome = gql`
  query getHome($id: ID!) {
    page(id: $id) {
      id
      content
    }
  }
`;

export default getHome;