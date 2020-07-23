import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Article = ({article}) => {
    return ( 
        <div className="card-cnt">
            <img src="https://prestigeventures.pl/sites/all/themes/business/images/slide-image-1.jpg" alt="img"/>
            <h3>{article.name}</h3>
            <div className="text-container">{ReactHtmlParser(article.content).slice(0,1)}</div>
        </div>
     );
}
 
export default Article;


              