import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img
            src="https://prestigeventures.pl/sites/all/themes/business/images/slide-image-1.jpg"
            alt="slide no1"
          />
        </div>
        <div>
          <img
            src="https://prestigeventures.pl/sites/all/themes/business/images/slide-image-2.jpg"
            alt="slide no 2"
          />
        </div>
        <div>
          <img
            src="https://prestigeventures.pl/sites/all/themes/business/images/slide-image-3.jpg"
            alt="slide no3"
          />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
