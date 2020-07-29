import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import client from "./utils/apolloClient";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <ParallaxProvider>
        <App className="app" />
      </ParallaxProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
