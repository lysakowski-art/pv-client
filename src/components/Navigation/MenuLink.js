import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const toPath = (string) => {
  if (string === "Home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const MenuLink = ({ menu, burgerClass, burgerToggle }) => {
  return (
    <>
      <li>
        {menu.name === "Home" ? (
          <NavLink
            className={burgerClass ? "nav-item visible-menu" : "nav-item"}
            activeClassName="active-nav-item"
            exact
            to={`/${toPath(menu.name)}`}
            onClick={burgerToggle}
          >
            <FontAwesomeIcon className="home-icon" icon={faGem} />
          </NavLink>
        ) : (
          <NavLink
            className={burgerClass ? "nav-item visible-menu" : "nav-item"}
            activeClassName="active-nav-item"
            exact
            to={`/page/${toPath(menu.name)}`}
            onClick={burgerToggle}
          >
            {menu.name.toUpperCase()}
          </NavLink>
        )}
      </li>
    </>
  );
};

export default MenuLink;
