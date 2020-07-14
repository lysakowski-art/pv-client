import React from "react";
import { Query } from "@apollo/react-components";
import ReactHtmlParser from 'react-html-parser';
import HOME_QUERY from "../../queries/home/home";

const Home = () => {
  return (
    <div>
      <Query query={HOME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const { page } = data;
          return <div>{ReactHtmlParser(page.content)}</div>;
        }}
      </Query>
    </div>
  );
};
export default Home;
