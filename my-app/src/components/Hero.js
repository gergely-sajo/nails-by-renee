import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from '../images/hero/img1.jpg';
import img2 from '../images/hero/img2.jpg';
import img4 from '../images/hero/img4.jpg';

function Hero() {
  return (
    <div id="hero">
      <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled="false" dotsDisabled="false" fadeOutAnimation="true" stopAutoPlayOnHover="true">
          <img src={img1} className="sliderimg"/>
          <img src={img2} className="sliderimg"/>
          <img src={img4} className="sliderimg"/>
      </AliceCarousel>
    </div>
  )
}

export default Hero