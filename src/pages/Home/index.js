import React from "react";
import Banner from "./Banner";
import HomeInfo from "./HomeInfo";
import LatestArticles from "./LatestArticles";
import InvestmentReasons from "./InvestmentReasons";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import { ParallaxBanner } from "react-scroll-parallax";
const Home = () => {
  return (
    <>
      <section className="banner">
        <Banner />
        <div className="title-holder">
          <Fade duration={1500}>
            <h1 className="title-banner">Prestige Ventures</h1>
          </Fade>
          <Fade bottom duration={2000}>
            <Link to={"home-info"} duration={1000} smooth={true}>
              <svg id="more-arrows">
                <polygon
                  className="arrow-top"
                  points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                />
                <polygon
                  className="arrow-middle"
                  points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                />
                <polygon
                  className="arrow-bottom"
                  points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
                />
              </svg>
            </Link>
          </Fade>
        </div>
      </section>
      <div className="section-wrapper">
        <section className="home-info">
          <HomeInfo />
        </section>

        <section className="investment-reasons">
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://wallpaperstock.net/diamond-wallpapers_39299_1920x1080.jpg",
                amount: 0.4,
              },
            ]}
          >
            <InvestmentReasons />
          </ParallaxBanner>
        </section>

        <Fade bottom>
          <section className="latest-articles">
            <LatestArticles />
          </section>
        </Fade>
      </div>
    </>
  );
};

export default Home;
