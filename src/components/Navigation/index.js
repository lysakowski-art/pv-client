import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";
import SubmenuLink from "./SubmenuLink";
import MENU_QUERY from "../../queries/catagories/category";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      fixed="top"
      className="justify-content-center nav-custom"
    >
      <Navbar.Brand>
        <Nav.Link as={Link} to='/'>
          <img
            src="http://www.prestigeventures.pl/sites/all/themes/business/images/logo.png"
            alt="Prestige Ventures"
            style={{
              height: 48,
            }}
          />
        </Nav.Link>
      </Navbar.Brand>
      <Nav>
        <Query query={MENU_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { menus } = data;
            return (
              <>
                {menus.map((menu) => {
                  if (menu.sub_menus.length === 0) {
                    return <MenuLink menu={menu} />;
                  } else if (menu.sub_menus.length > 0) {
                    return <SubmenuLink menu={menu} />;
                  } else {
                    return null;
                  }
                })}
              </>
            );
          }}
        </Query>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
