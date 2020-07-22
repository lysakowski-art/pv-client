import React from "react";
import { Link } from "react-router-dom";
import {Nav} from 'react-bootstrap'

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
        <Nav.Link
          href="https://dfwest.pl/"
          target="_blank"
          rel="noopener nofollow referrer"
        >
          Dom Finansowy WEST
        </Nav.Link>
      ) : (
        <Nav.Link as={Link} to={`/${toPath(menu.name)}`}>{menu.name}</Nav.Link>
      )}
    </>
  );
};

export default MenuLink;
