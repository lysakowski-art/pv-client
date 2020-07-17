import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import MENU_QUERY from "../../queries/catagories/category";

const toPath = (string) => {
  return string.replace("?","").split(" ").join("_").toLowerCase()
}

const Nav = () => { 
  return (
    <div>
      <Query query={MENU_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const { menus } = data;
          return (
            <div>
              <ul>
                {menus.map((menu) => {
                  if (menu.sub_menus.length === 0) {
                    return (
                      <li key={menu.id}>
                        <Link to={`/${toPath(menu.name)}`}>
                          {menu.name}
                        </Link>
                      </li>
                    );
                  } else if (menu.sub_menus.length > 0) {
                    return (
                      <li key={menu.id}>
                        <Link to={`/${toPath(menu.name)}`}>
                          {menu.name}
                        </Link>
                        <ul>
                          {menu.sub_menus.map((subMenu) => (
                            <li key={subMenu.id}>
                              <Link to={`/${toPath(subMenu.name)}`}>
                                {subMenu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {return null}
                })}
              </ul>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
