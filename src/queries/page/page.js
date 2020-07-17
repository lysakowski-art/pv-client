import gql from "graphql-tag";

const getPage = gql`
  query getPage($name: String!) {
    pages(where: { name: $name }) {
      id
      content
      page_components {
        id
        name
        content
      }
    }
  }
`;

export default getPage;
