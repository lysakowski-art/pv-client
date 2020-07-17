import React from "react";
import { Link } from "react-router-dom";

const toPath = (string) => {
  if (string === "Home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const MenuLink = ({ menu }) => {
  return (
    <li key={menu.id}>
      {menu.name === "Dom Finansowy WEST" ? (
        <a
          href="https://dfwest.pl/"
          target="_blank"
          rel="noopener nofollow referrer"
        >
          Dom Finansowy WEST
        </a>
      ) : (
        <Link to={`/${toPath(menu.name)}`}>{menu.name}</Link>
      )}
    </li>
  );
};

export default MenuLink;
