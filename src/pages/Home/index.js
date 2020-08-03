import React from "react";
import Banner from "./Banner";
import HomeInfo from "./HomeInfo";
import LatestArticles from "./LatestArticles";
import InvestmentReasons from "./InvestmentReasons";
import { ParallaxBanner } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <section className="banner">
        <Banner />
        
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
