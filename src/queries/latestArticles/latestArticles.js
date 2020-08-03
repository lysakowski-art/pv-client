import gql from "graphql-tag";

const getLatestArticles = gql`
  query getLatestArticles {
    news(limit: 6, sort: "CreatedAt") {
      id
      name
      content
      img {
        url
      }
    }
  }
`;
export default getLatestArticles;
