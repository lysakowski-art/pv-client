import React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "../../pages/Page/index";
import News from "../../pages/News/index";
import Contact from "../../pages/Contact/index";

const Main = () => {
  return (
    <>
      <Switch>
        <Route path="/:url" component={Page} />
        <Route path="/news" component={News} />
        <Route path="/kontakt" component={Contact} />
      </Switch>
    </>
  );
};

export default Main;
