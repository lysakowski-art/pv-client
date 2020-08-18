import React from "react";
import { Query } from "@apollo/react-components";
import getPage from "../../queries/page/page";
import PageContent from "./PageContent";
import NoPageFound from "../../pages/NoPageFound/index";

const Page = ({ match }) => {
  const { url } = match;
  const name = url.substr(1);
  return (
    <div className="page-cnt">
      <Query query={getPage} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`
          const { pages } = data;
          if (data) return <PageContent pages={pages} />;
          console.log(pages);
          return <NoPageFound />;
        }}
      </Query>
    </div>
  );
};
export default Page;
