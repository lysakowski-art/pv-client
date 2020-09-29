import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const toPath = (string) => {
  if (string === "/home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const SubmenuLink = ({ menu, burgerClass, burgerToggle }) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const handleSublink = () => {
    if (isClose) {
      setVisibleDropdown(!visibleDropdown);
      setIsClose(!isClose);
    } else{
      burgerToggle();
      setVisibleDropdown(!visibleDropdown);
      setIsClose(!isClose);
    }
  };
  return (
    <li className="sub-menu-main-item" key={menu.id}>
      <NavLink
        className={burgerClass ? "nav-item visible-menu" : "nav-item"}
        activeClassName="active-nav-item"
        to={`/page/${toPath(menu.name)}`}
        onClick={handleSublink}
      >
        {menu.name.toUpperCase()}
        <div className="arrow_cnt">
          <div
            className={
              visibleDropdown
                ? "dropdown-arrow dropdown-arrow-rotate"
                : "dropdown-arrow"
            }
          />
        </div>
      </NavLink>

      <ul
        className={visibleDropdown ? "dropdown visible-dropdown" : "dropdown"}
      >
        {menu.sub_menus.map((el) => (
          <li className="sub-menu-item" key={el.id}>
            <NavLink
              className="nav-item"
              activeClassName="active-nav-item"
              to={`/page/${toPath(el.name)}`}
              onClick={handleSublink}
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
