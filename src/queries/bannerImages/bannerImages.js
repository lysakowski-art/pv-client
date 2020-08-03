import gql from "graphql-tag";

const getBannerImages = gql`
query getBannerImages {
    banners {
      img{
        url
      }
    }
  }
`;

export default getBannerImages;
