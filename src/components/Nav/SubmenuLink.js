import React from 'react';
import {Link} from "react-router-dom"

const toPath = (string) => {
    if (string === "/home") {
      return "";
    } else {
      return string.replace("?", "").split(" ").join("_").toLowerCase();
    }
  };
  
  const SubmenuLink = ({menu}) => {
      return ( 
        <li key={menu.id}>
        <Link to={`/${toPath(menu.name)}`}>{menu.name}</Link>
        <ul>
          {menu.sub_menus.map((subMenu) => (
            <li key={subMenu.id}>
              <Link to={`/${toPath(subMenu.name)}`}>
                {subMenu.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>

       );
  }
   
  export default SubmenuLink;