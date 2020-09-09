import React, { useState } from "react";
import { Query } from "react-apollo";
import MenuLink from "./MenuLink";
import SubmenuLink from "./SubmenuLink";
import MENU_QUERY from "../../queries/catagories/category";

const Navigation = () => {
  const [burgerClass, setBurgerClass] = useState(false);

  const burgerToggle = () => {
    setBurgerClass(!burgerClass);
  };
 
  return (
    <div className="nav-main-cnt">
      <Query query={MENU_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const { menus } = data;
          return (
            <div
              className={burgerClass ? "nav-cnt nav-visible-cnt" : "nav-cnt"}
            >
              {menus.map((menu, index) => {
                if (menu.sub_menus.length === 0) {
                  return (
                    <MenuLink
                      menu={menu}
                      key={index}
                      burgerClass={burgerClass}
                      burgerToggle={burgerToggle}
                    />
                  );
                } else if (menu.sub_menus.length > 0) {
                  return (
                    <SubmenuLink
                      menu={menu}
                      key={index}
                      burgerClass={burgerClass}
                      burgerToggle={burgerToggle}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          );
        }}
      </Query>
      <label className="burger">
        <div className="burger-cnt" onClick={burgerToggle}>
          <div className={burgerClass ? "change bar1" : "bar1"} />
          <div className={burgerClass ? "change bar2" : "bar2"} />
          <div className={burgerClass ? "change bar3" : "bar3"} />
        </div>
      </label>
    </div>
  );
};

export default Navigation;
