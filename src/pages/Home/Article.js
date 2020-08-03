import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Article = ({article}) => {
    // console.log(article.img[0].url);
    return ( 
        <div className="card-cnt">
            <div className="card-img-cnt">
            <img className="card-img" src={`http://127.0.0.1:1337${article.img[0].url}`} alt="img"/>
            </div>
            <h3 className="card-title">{article.name}</h3>
            <div className="card-text-container">{ReactHtmlParser(article.content)}</div>
            <button className="card-button">WIĘCEJ</button>
        </div>
     );
}
 
export default Article;


              