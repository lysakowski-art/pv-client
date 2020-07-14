import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {ApolloProvider  } from 'react-apollo'
import { BrowserRouter as Router } from "react-router-dom";
import client from './utils/apolloClient'

ReactDOM.render(
  <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </Router>,
  document.getElementById("root")
);