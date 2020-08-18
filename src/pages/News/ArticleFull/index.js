import React from "react";
import getArticle from "../../../queries/article/article";
import { Query } from "@apollo/react-components";
import ReactHtmlParser from "react-html-parser";

const ArticleFull = ({ match }) => {
  const { url } = match;
  const id = url.substr(9);
  console.log(id);
  return (
    <>
      <Query query={getArticle} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;
          return (
            <div className="article-wrapper">
              <div className="article-cnt">
                <div className="art-title">
                  <h3>
                  {data.new.name}
                  </h3>
                </div>
                <div className="art-img-cnt"></div>
                <div className="art-content">
                  {ReactHtmlParser(data.new.content)}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default ArticleFull;
