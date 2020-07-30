import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import isOdd from "is-odd";

const Article = ({ article, index }) => {
  const [classToggle, setClassToggle] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setClassToggle(!classToggle);
  };

  if (isOdd(index)) {
    return (
      <li key={article.index}>
        <div className="article-cnt ">
          <div
            className={
              classToggle
                ? "article-content"
                : "article-content article-content-active"
            }
          >
            <h4 className="article-title">{article.name}</h4>
            <p className="article-text">{ReactHtmlParser(article.content)}</p>
            <button onClick={handleClick} className="article-button">
              {classToggle ? "Więcej" : "Mniej"}
            </button>
          </div>
          <img
            className="article-img"
            src="https://www.placecage.com/c/300/300"
            alt="jakis cage"
          />
        </div>
      </li>
    );
  } else {
    return (
      <li key={article.index}>
        <div className="article-cnt article-cnt-oposite">
          <div className={
            classToggle
            ? "article-content"
            : "article-content  article-content-active"
          
          }>
            <h4 className="article-title">{article.name}</h4>
            <p className="article-text">{ReactHtmlParser(article.content)}</p>
            <button
              onClick={handleClick}
              className="article-button oposite-button"
            >
              {classToggle ? "Więcej" : "Mniej"}
            </button>
          </div>
          <img
            className="article-img"
            src="https://www.placecage.com/c/300/300"
            alt="jakis cage"
          />
        </div>
      </li>
    );
  }
};

export default Article;
