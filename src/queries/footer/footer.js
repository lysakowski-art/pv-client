import gql from "graphql-tag";

const FOOTER_QUERY = gql`
query Components {
    components{
        id
        name
        content
    }
}
`;

export default FOOTER_QUERY;
