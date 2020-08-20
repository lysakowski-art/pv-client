import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// import {Route} from "react-router-dom";  
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import client from "./utils/apolloClient";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <ParallaxProvider>
        {/* <Route> */}
        <App className="app" />
        {/* </Route> */}
      </ParallaxProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
