import React from 'react';

const Article = ({article}) => {
    return ( 
        <li key={article.id}>
            <h4>{article.name}</h4>
            <p>{article.content}</p>
        </li>
     );
}
 
export default Article;