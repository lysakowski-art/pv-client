import React from "react";
import { Query } from "@apollo/react-components";
import getNews from "../../queries/news/news";
import Article from "./Article";

const Home = () => {
  return (
    <div>
      <Query query={getNews}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;
          const { news } = data;
          const articles = news.map((article,index) => <Article key={index} article={article} />);
          return <div><ul>{articles}</ul></div>;
        }}
      </Query>
    </div>
  );
};

export default Home;
