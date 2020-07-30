import React from "react";
import { Query } from "@apollo/react-components";
import getNews from "../../queries/news/news";
import Article from "./Article";

const News = () => {
  return (
    <div className="news-main">
 
      <div className="news-wrapper">
        <Query query={getNews}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error: ${error.message}`;
            const { news } = data;
            const articles = news.map((article, index) => (
              <Article key={index} article={article} index={index} />
            ));
            return (
              <div className="news-cnt">
                <ul>{articles}</ul>
              </div>
            );
          }}
        </Query>
      </div>
    </div>
  );
};

export default News;
