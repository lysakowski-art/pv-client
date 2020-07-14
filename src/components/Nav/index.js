import React from "react";
// import Query from "../Query";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import MENU_QUERY from "../../queries/catagories/category";

const Nav = () => {
  return (
    <div>
      <Query query={MENU_QUERY}>
      {({loading, error, data})=>{
        if(loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const {menus} = data

        return(
          <div>
            <ul>
              {menus.map((menu, i)=> (
                <li key={menu.id}>
                   <Link to={`/category/${menu.name}`}>
                    {menu.sub_menus.length > 0 ? (
                    <select>
                      <option>{menu.name}</option>
                      {menu.sub_menus.map((el) => (
                        <option>{el.name}</option>
                      ))}
                    </select>
                    ) : (
                      <>{menu.name}</>  
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
      </Query>
    </div>
  );
};

export default Nav;


// {menus.map((menu, i) => {
//   return (
//     <li key={menu.id}>
//       <Link to={`/category/${menu.name}`}>
//         {menu.name}
//         {menu.sub_menus.length > 0 ? (
//           <select>
//             {menu.sub_menus.map((el) => (
//               <option>{el.name}</option>
//             ))}
//           </select>
//         ) : null}
//       </Link>
//     </li>
//   );
// })}