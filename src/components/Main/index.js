import React from "react";
import { Route, Switch } from "react-router-dom";
import Page from "../../pages/Page/index";
import Home from "../../pages/Home/index";
import Contact from "../../pages/Contact/index";
import News from "../../pages/News/index";
import ArticleFull from "../../pages/News/ArticleFull/index";

const Main = () => {
  return (
    <div className="cnt">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News}/>
        <Route exact path="/kontakt" component={Contact} />
        <Route exact path="/:url" component={Page} />
        <Route exact path="/article/:url" component={ArticleFull}/>
      </Switch>
    </div>
  );
};

export default Main;
