import React from 'react';
import ReactHtmlParser from "react-html-parser";

const CookieInfo = ({el}) => {
    return ( 
        <>
        <div className="contact-adress" key={el.id}>
        <h4>
            POLITYKA COOKIE
        </h4>
            {ReactHtmlParser(el.content)}
        </div>
        </>
     );
}
 
export default CookieInfo;