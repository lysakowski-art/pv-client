import React from "react";
import { Query } from "@apollo/react-components";
import getPage from "../../queries/page/page";
import PageContent from "./PageContent";

const Page = ({ match }) => {
  const { url } = match;
  const name = url.substr(1);
  return (
    <div className="page-cnt">
      <Query query={getPage} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const { pages } = data;
          return <PageContent pages={pages} />;
        }}
      </Query>
    </div>
  );
};
export default Page;
