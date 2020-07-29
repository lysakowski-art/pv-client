import React from "react";
import ReactHtmlParser from "react-html-parser";
import PageComponent from "./PageComponent";
import { ParallaxBanner } from "react-scroll-parallax";

const PageContent = (props) => {
  const { pages } = props;
  return (
    <>
      <section className="page-main">
        <ParallaxBanner><h2>{ReactHtmlParser(pages[0].content)}</h2></ParallaxBanner>
      </section>
      {pages[0].page_components.length > 0 ? (
        <PageComponent page_components={pages[0].page_components} />
      ) : null}
    </>
  );
};

export default PageContent;
