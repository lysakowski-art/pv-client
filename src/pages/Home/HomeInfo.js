import React from "react";
import { Query } from "@apollo/react-components";
import getHome from "../../queries/home/home";
import ReactHtmlParser from "react-html-parser";

const HomeInfo = () => {
  return (
    <>
      <Query query={getHome} variables={{ id: "5f0d7e6e4f7c9b19923f0a57" }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;
          const { page } = data;
          return <div>{ReactHtmlParser(page.content)}</div>;
        }}
      </Query>
    </>
  );
};

export default HomeInfo;
