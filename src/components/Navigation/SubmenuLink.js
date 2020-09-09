import React from "react";
import { NavLink } from "react-router-dom";

const toPath = (string) => {
  if (string === "/home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const SubmenuLink = ({ menu, index, burgerClass, burgerToggle }) => {
  // console.log(menu);
  return (
    <li className="sub-menu-main-item" key={menu.id}>
      <NavLink
        className={burgerClass ? "nav-item visible-menu" : "nav-item"}
        activeClassName="active-nav-item"
        to={`/${toPath(menu.name)}`}
        onClick={burgerToggle}
      >
        {menu.name.toUpperCase()}
      <div className="dropdown-arrow" onClick={burgerToggle}/>
      </NavLink>
      <ul className="dropdown">
        {menu.sub_menus.map((el) => (
          <li className="sub-menu-item" key={el.id}>
            <NavLink
              className="nav-item"
              activeClassName="active-nav-item"
              to={`/${toPath(el.name)}`}
              onClick={burgerToggle}
            >
              {el.name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubmenuLink;
