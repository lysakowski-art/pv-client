import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {ApolloProvider  } from 'react-apollo'
import { BrowserRouter as Router } from "react-router-dom";
import client from './utils/apolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
      <ApolloProvider client={client}>
        <App className="app"/>
      </ApolloProvider>
  </Router>,
  document.getElementById("root")
);