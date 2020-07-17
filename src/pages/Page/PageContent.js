import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import PageComponent from './PageComponent';

const PageContent = (props) => {
    const { pages } = props;
    return ( 
        <>
            <section>
                {ReactHtmlParser(pages[0].content)}
            </section>
            {pages[0].page_components.length>0 ?  <PageComponent page_components={pages[0].page_components}/> : null}
        </>
     )
}
 
export default PageContent;