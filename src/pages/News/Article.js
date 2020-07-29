import React from "react";
import ReactHtmlParser from "react-html-parser";
import isOdd from "is-odd"

const Article = ({ article,index }) => {
  if (isOdd(index)) {
    return (
      <li key={article.index}>
        <div className="article-cnt ">
          <div className="article-content">
            <h4 className="article-title">{article.name}</h4>
            <p className="article-text">{ReactHtmlParser(article.content)}</p>
            <button className="article-button">Więcej</button>
          </div>
          <img
            className="article-img"
            src="https://www.placecage.com/c/300/300"
            alt="jakis cage"
          />
        </div>
      </li>
    )} else {
     return (<li key={article.index}>
      <div className="article-cnt article-cnt-oposite">
        <div className="article-content">
          <h4 className="article-title">{article.name}</h4>
          <p className="article-text">{ReactHtmlParser(article.content)}</p>
          <button className="article-button oposite-button">Więcej</button>
        </div>
        <img
          className="article-img"
          src="https://www.placecage.com/c/300/300"
          alt="jakis cage"
        />
      </div>
    </li>)
  }
};

export default Article;

{/* <li key={article.index}>
      <div className="article-cnt">
        <div className="article-content">
          <h4 className="article-title">{article.name}</h4>
          <p className="article-text">{ReactHtmlParser(article.content)}</p>
        </div>
        <img
          className="article-img"
          src="https://www.placecage.com/c/300/300"
          alt="jakis cage"
        />
      </div>
    </li> */}