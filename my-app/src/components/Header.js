import React, { useState } from 'react';

const Header = ({ sticky }) => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false)

  let mobileMenu
  let mobileMenuBackgroundShadow

  if (mobileMenuOpen) {
    mobileMenu =  
      <div className="nav__mobile">
        <ul className="nav__elements--mobile" onClick={() => setmobileMenuOpen(!mobileMenuOpen)}>
          <a href="#features" id="features-link"><li>Szolgáltatások</li></a>
          <a href="#my-work" id="my-work-link"><li>Munkáim</li></a>
          <a href="#testimonials" id="e´testimonials-link"><li>Vélemények</li></a>
          <a href="#prices" id="prices-link"><li>Árak</li></a>
          <a href="#about" id="about-link"><li>Rólam</li></a>
          <a href="#contact" id="contact-link"><li>Kapcsolat</li></a>
        </ul>
      </div>

      mobileMenuBackgroundShadow = <div className="nav__mobile__background-shadow" onClick={() => setmobileMenuOpen(!mobileMenuOpen)}></div>
  }

  return (
    <div id="header" className={sticky ? "nav-sticky" : "nav"}>

      <div className="wrapper nav-inner">
          <div className={sticky ? "logo-sticky" : "logo"}>
            <a href="#">Nails by Renee</a>
        </div>
        
        <div className="nav__mobile--menu">
          <span 
            className={mobileMenu && sticky ? "nav__mobile-menu--icon--menu-open-x--sticky" : (mobileMenu && !sticky ? "nav__mobile-menu--icon--menu-open-x" : (sticky && !mobileMenu ? "nav__mobile-menu--icon-sticky" : "nav__mobile-menu--icon"))}
            onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
            />
          { mobileMenuBackgroundShadow }
          { mobileMenu }
        </div>

        <div className="nav-bar">
          <ul className={sticky ? "nav-elements-sticky" : "nav-elements"}>
            <li><a href="#features" id="features-link" className="nav-items">Szolgáltatások</a></li>
            <li><a href="#my-work" id="my-work-link" className="nav-items">Munkáim</a></li>
            <li><a href="#testimonials" id="e´testimonials-link" className="nav-items">Vélemények</a></li>
            <li><a href="#prices" id="prices-link" className="nav-items">Árak</a></li>
            <li><a href="#about" id="about-link" className="nav-items">Rólam</a></li>
            <li><a href="#contact" id="contact-link" className="nav-items">Kapcsolat</a></li>
          </ul>
        </div>

      </div>  
    </div>
  )
}

export default Header
