import gql from "graphql-tag";

const MENU_QUERY = gql`
  query getMenus {
    menus(sort: "order") {
      name
      id
      sub_menus {
        id
        name
      }
    }
  }
`;

export default MENU_QUERY;
