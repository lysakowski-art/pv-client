import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Query } from "@apollo/react-components";
import getBannerImages from "../../queries/bannerImages/bannerImages";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { ParallaxBanner } from "react-scroll-parallax";

const Banner = (env) => {
  return (
    <div className="header">
      <Query query={getBannerImages}>
        {({ loading, error, data }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error.message}`;
          const { banners } = data;
          return (
            <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
              {banners.map((banner, index) => (
                <div key={index} className="main-banner-container">
                  {/* <img src={process.env.REACT_APP_BACKEND_URL + banner.img[0].url} alt=""/> */}
                  <ParallaxBanner
                    layers={[
                      {
                        image:
                          process.env.REACT_APP_BACKEND_URL + banner.img[0].url,
                        amount: 0.4,
                      },
                    ]}
                    style={{
                      height: "93vh",
                      width: "100vw",
                    }}
                  />
                </div>
              ))} 
            </Carousel>
          );
        }}
      </Query>
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
    </div>
  );
};

export default Banner;
