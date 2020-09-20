import React, { useState } from 'react';
import { CgFacebook } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";

const Header = ({ sticky }) => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false)

  let mobileMenu
  let mobileMenuBackgroundShadow

  if (mobileMenuOpen) {
    mobileMenu =  
      <div className="nav__mobile">
        <ul className="nav__elements--mobile" onClick={() => setmobileMenuOpen(!mobileMenuOpen)}>
          <a href="#szolgaltatasok" id="features-link"><li>Szolgáltatások</li></a>
          <a href="#munkaim" id="my-work-link"><li>Munkáim</li></a>
          <a href="#arak" id="prices-link"><li>Árak</li></a>
          <a href="#rolam" id="about-link"><li>Rólam</li></a>
          <a href="#elerhetoseg" id="contact-link"><li>Elérhetőség</li></a>
        </ul>
      </div>

      mobileMenuBackgroundShadow = <div className="nav__mobile__background-shadow" onClick={() => setmobileMenuOpen(!mobileMenuOpen)}></div>
  }

  return (
    <div id="header" className="nav-header">
      <div className="nav__top">
        <div className="wrapper">
          <p className="nav__top__items">
            <a className="nav__top__items__icons" href="https://www.facebook.com/Nails-By-Renee-133872024835153/" target="_blank">
              <CgFacebook />
            </a>
            <a className="nav__top__items__icons" href="" target="_blank">
              <FiInstagram />
            </a>
          </p>
          <p className="nav__top__items">
            <a className="no-underline nav__top__items__icons" href="tel:+36301234667">Tel.: +36 30 1234567</a>
          </p>
        </div>
      </div>

      <div className={sticky ? "nav-sticky" : "nav"}>

        <div className="wrapper nav-inner">
            <div className={sticky ? "logo-sticky" : "logo"}>
              <a href="#">Nails by Renee</a>
          </div>
          
          <div className="nav__mobile--menu">
            <span 
              className={mobileMenu && sticky
                ? "nav__mobile-menu--icon--menu-open-x--sticky"
                : (mobileMenu && !sticky 
                  ? "nav__mobile-menu--icon--menu-open-x"
                  : (sticky && !mobileMenu
                    ? "nav__mobile-menu--icon-sticky" : "nav__mobile-menu--icon"))}
              onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
              />
            { mobileMenuBackgroundShadow }
            { mobileMenu }
          </div>

          <div className="nav-bar">
            <ul className={sticky ? "nav-elements-sticky" : "nav-elements"}>
              <li><a href="#szolgaltatasok" id="features-link" className="nav-items">Szolgáltatások</a></li>
              <li><a href="#munkaim" id="my-work-link" className="nav-items">Munkáim</a></li>
              <li><a href="#arak" id="prices-link" className="nav-items">Árak</a></li>
              <li><a href="#rolam" id="about-link" className="nav-items">Rólam</a></li>
              <li><a href="#elerhetoseg" id="contact-link" className="nav-items">Elérhetőség</a></li>
            </ul>
          </div>

        </div>  
      </div>
    </div>
  )
}

export default Header
