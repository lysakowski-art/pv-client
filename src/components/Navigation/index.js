import React from "react";
import { Query } from "react-apollo";
import MenuLink from "./MenuLink";
import SubmenuLink from "./SubmenuLink";
import MENU_QUERY from "../../queries/catagories/category";

const Navigation = () => {
  return (
    <div className="nav-main-cnt">
      <Query query={MENU_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const { menus } = data;
          return (
            <div className="nav-cnt">
              {menus.map((menu) => {
                if (menu.sub_menus.length === 0) {
                  return <MenuLink menu={menu} />;
                } else if (menu.sub_menus.length > 0) {
                  return <SubmenuLink menu={menu} />;
                } else {
                  return null;
                }
              })}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Navigation;
