import React from 'react';

import about from '../images/about/about.jpg';

function About() {
  return (
    <div id="rolam" className="page-section">
      <div className="wrapper">
        <h2 className="page-section__title">Rólam</h2>
        <div className="row row--gutters">
          <div className="row__4">
            <img src={about}></img>
          </div>
          <div className="row__8 generic-content-container">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About