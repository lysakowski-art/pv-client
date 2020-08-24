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

const MenuLink = ({ menu, burgerClass }) => {
  return (
    <>
      <NavLink
        className={burgerClass ? "nav-item visible-menu": "nav-item"}
        activeClassName="active-nav-item"
        exact to={`/${toPath(menu.name)}`}
      >
        {menu.name === "Home" ? (
          <FontAwesomeIcon className="home-icon" icon={faGem} />
        ) : (
          menu.name.toUpperCase()
        )}
      </NavLink>
    </>
  );
};

export default MenuLink;
