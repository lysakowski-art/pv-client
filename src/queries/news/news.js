import gql from "graphql-tag";

const getNews = gql`
query News {
  news {
    id
    name
    content
    img{
      url
    }
  }
}
`;
export default getNews;
