import React from "react";
import { Route, Switch } from "react-router-dom";
import { Query } from "@apollo/react-components";
import Nav from "../Nav/index";
import MENU_QUERY from "../../queries/catagories/category";
const Main = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Query query={MENU_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { menus } = data;
            return(
            <>
              {menus.map(menu=>(
              <Route key={menu.id} to={`/category/${menu}`}/>
              ))}
            </>
            )
          }}
        </Query>
      </Switch>
    </>
  );
};

export default Main;
