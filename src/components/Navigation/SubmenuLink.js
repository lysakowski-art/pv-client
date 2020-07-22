import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Nav } from "react-bootstrap";

const toPath = (string) => {
  if (string === "/home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const SubmenuLink = ({ menu }) => {
  return (
    <>
      <NavDropdown title={menu.name} id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Nav.Link as={Link} to={`/${toPath(menu.name)}`}>
            {menu.name}
          </Nav.Link>
        </NavDropdown.Item>
        {menu.sub_menus.map((subMenu) => (
          <NavDropdown.Item key={subMenu.id}>
            <Nav.Link as={Link} to={`/${toPath(subMenu.name)}`}>
              {subMenu.name}
            </Nav.Link>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </>
  );
};

export default SubmenuLink;
