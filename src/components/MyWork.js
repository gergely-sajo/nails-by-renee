import React from 'react';

import pic1 from '../images/mywork/1.jpg';
import pic2 from '../images/mywork/2.jpg';
import pic3 from '../images/mywork/3.jpg';
import pic4 from '../images/mywork/4.jpg';
import pic5 from '../images/mywork/5.jpg';
import pic6 from '../images/mywork/6.jpg';
import pic7 from '../images/mywork/7.jpg';
import pic8 from '../images/mywork/8.jpg';

function MyWork() {
  return (
    <div id="munkaim" className="page-section">
      <div className="wrapper">
        <h2 className="page-section__title">Munkáim</h2>
        <div className="row--grid">
          <div className="">
            <img src={pic1}></img>
          </div>
          <div className="">
            <img src={pic2}></img>
          </div>
          <div className="">
            <img src={pic3}></img>
          </div>
          <div className="">
            <img src={pic4}></img>
          </div>
          <div className="">
            <img src={pic5}></img>
          </div>
          <div className="">
            <img src={pic6}></img>
          </div>
          <div className="">
            <img src={pic7}></img>
          </div>
          <div className="">
            <img src={pic8}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork