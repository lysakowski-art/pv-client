import gql from "graphql-tag";

const getNews = gql`
  query News {
    news {
      id
      name
      content
    }
  }
`;
export default getNews;
