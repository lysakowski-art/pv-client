import React from "react";
import ReactHtmlParser from "react-html-parser";
import PageComponent from "./PageComponent";
import { ParallaxBanner } from "react-scroll-parallax";

const PageContent = (props) => {
  const { pages } = props;
  return (
    <>
      <section className="page-main">
        <ParallaxBanner
          className="page-parallax-banner"
          layers={[
            {
              image:
                "https://wallpaperstock.net/diamond-wallpapers_39299_1920x1080.jpg",
              amount: 0.4,
            },
          ]}
          style={{
            height: "500px",
          }}
        >
          {ReactHtmlParser(pages[0].content)}
        </ParallaxBanner>
      </section>
      {pages[0].page_components.length > 0 ? (
        <PageComponent page_components={pages[0].page_components} />
      ) : null}
    </>
  );
};

export default PageContent;
