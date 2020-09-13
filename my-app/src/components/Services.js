import React from 'react';
import manicure from '../images/services/manicure4.jpg';
import gelpolish from '../images/services/gel-polish.jpg';
import artificialnails from '../images/services/artificial-nails.jpg';

function Services() {
  return (
    <div id="services" className="page-section">
      <div className="wrapper">
        <h2 className="page-section__title">Szolgáltatások</h2>
        <div className="row">
          <div className="row__4">
            <div className="service">
              <div className="service__photo"><img src={manicure}></img></div>
              <h3 className="service__title">Manikűr</h3>
              <p className="service__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="row__4">
            <div className="service">
              <div className="service__photo"><img src={gelpolish}></img></div>
              <h3 className="service__title">Gél lakk</h3>
              <p className="service__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="row__4">
            <div className="service">
              <div className="service__photo"><img src={artificialnails}></img></div>
              <h3 className="service__title">Műköröm</h3>
              <p className="service__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services