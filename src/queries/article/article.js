import gql from "graphql-tag";

const getArticle = gql`
  query getArticle($id: ID!) {
    new(id: $id) {
      id
      name
      content
      img {
        url
      }
    }
  }
`;

export default getArticle;
