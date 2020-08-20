import React from "react";
import { Query } from "@apollo/react-components";
import getLatestArticles from "../../queries/latestArticles/latestArticles";
import Article from "./Article"

const LatestArticles = () => {
  return (
      <Query query={getLatestArticles}>
      {({ loading, error, data }) => {
        if (loading) return "Loading";
        if (error) return `Error: ${error.message}`;
        const { news } = data;
        return news.map((article) => (
          <Article key={article.id} article={article} />
        ));
      }}
    </Query>
  );
};

export default LatestArticles;
