import gql from "graphql-tag";

const HOME_QUERY = gql`
query Pages {
  page(id: "5f0d7e6e4f7c9b19923f0a57") {
    id
    name
    content
  }
}
`;

export default HOME_QUERY;
