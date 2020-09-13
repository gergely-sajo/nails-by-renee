import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../images/hero/img1.jpg';
import img2 from '../images/hero/img2.jpg';
import img4 from '../images/hero/img4.jpg';

function Hero() {
  return (
    <div id="hero">
      <Slider autoplay autoplaySpeed={3000} pauseOnHover="false">
          <img src={img1} className="sliderimg"/>
          <img src={img2} className="sliderimg"/>
          <img src={img4} className="sliderimg"/>
      </Slider>
    </div>
  )
}

export default Hero