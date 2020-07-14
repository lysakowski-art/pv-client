import gql from "graphql-tag";

const HEADER_QUERY = gql`
    query Assets{
        assets{
            name
        }
    }
`;
export default HEADER_QUERY;    