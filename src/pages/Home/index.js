import React from "react";
import Banner from "./Banner";
import HomeInfo from "./HomeInfo";
import LatestArticles from "./LatestArticles";
import InvestmentReasons from "./InvestmentReasons";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="banner">
        <Banner />
        <div className="title-holder">
          <h1 className="title-banner">Prestige Ventures</h1>
          <Link to={"home-info"} duration={1000} smooth={true}>
            <svg id="more-arrows">
              <polygon
                class="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </Link>
        </div>
      </section>
      <div className="section-wrapper">
        <section className="home-info">
          <HomeInfo />
        </section>
        <section className="investment-reasons">
          <InvestmentReasons />
        </section>
        <section className="latest-articles">
          <LatestArticles />
        </section>
      </div>
    </>
  );
};

export default Home;
