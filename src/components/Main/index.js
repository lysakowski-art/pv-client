import React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "../../pages/Page/index";
import Home from "../../pages/Home/index";
import Contact from "../../pages/Contact/index";
import News from "../../pages/News/index";
import ArticleFull from "../../pages/News/ArticleFull/index";
import NotFound from "../../pages/NotFound/index";

const Main = () => {
  return (
    <div className="cnt">
      <Switch>
        <Route exact path="/page/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/kontakt" component={Contact} />
        <Route exact path="/page/:url" component={Page} />
        <Route exact path="/article/:url" component={ArticleFull} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
