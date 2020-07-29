import React from "react";
import { NavLink } from "react-router-dom";

const toPath = (string) => {
  if (string === "Home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const MenuLink = ({ menu }) => {
  return (
    <>
      {menu.name === "Dom Finansowy WEST" ? (
        <a 
        className="nav-item"
          href="https://dfwest.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOM FINANSOWY WEST
        </a>
      ) : (
        <NavLink className="nav-item" activeClassName="active-nav-item" to={`/${toPath(menu.name)}`}>{menu.name.toUpperCase()}</NavLink>
      )}
    </>
  );
};

export default MenuLink;
