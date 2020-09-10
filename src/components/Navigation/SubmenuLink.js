import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const toPath = (string) => {
  if (string === "/home") {
    return "";
  } else {
    return string.replace("?", "").split(" ").join("_").toLowerCase();
  }
};

const SubmenuLink = ({ menu, index, burgerClass, burgerToggle }) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const handleVisibleDropdown = () => {
    setVisibleDropdown(visibleDropdown);
  }
  
  return (
    <li className="sub-menu-main-item" key={menu.id}>
      <NavLink
        className={burgerClass ? "nav-item visible-menu" : "nav-item"}
        activeClassName="active-nav-item"
        to={`/page/${toPath(menu.name)}`}

      >
        {menu.name.toUpperCase()}
      <div className="dropdown-arrow" onClick={handleVisibleDropdown}/>
      </NavLink>
      <ul className={visibleDropdown?"dropdown visible-dropdown":"dropdown"}>
        {menu.sub_menus.map((el) => (
          <li className="sub-menu-item" key={el.id}>
            <NavLink
              className="nav-item"
              activeClassName="active-nav-item"
              to={`/page/${toPath(el.name)}`}

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
