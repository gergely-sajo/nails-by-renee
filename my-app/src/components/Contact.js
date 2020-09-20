import React from 'react';

import { CgFacebook } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";

function Contact() {
  return (
    <div id="elerhetoseg" className="page-section">
      <div className="wrapper">
        <h2 className="page-section__title">Elérhetőség</h2>
        <div className="generic-content-container generic-content-container--text-centered">
          <h3 className="page-section__subtitle">Nyitvatartás</h3>
          <p>Hétfő - Péntek: 09:00 - 17:00</p>
          <p>Szombat - Vasárnap: Zárva</p>
          <p>Cím: Budapest, Krisztina tér 3.</p>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.6210875848064!2d19.029288615626733!3d47.49729447917756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc2489f79c2f%3A0x749a3426119d3bd7!2sBudapest%2C%20Krisztina%20t%C3%A9r%203%2C%201013%20Hungary!5e0!3m2!1sen!2sat!4v1600618243618!5m2!1sen!2sat"
            width="100%"
            height="400px"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          >
          </iframe>

        </div>
        <p className="page-section__subtitle">Foglalj időpontot.</p>
        <form className="contact-email-form" action="https://formspree.io/xeqpqezw" method="POST">
            <div className="contact-email-form__half">
              <label>Név<br/><input className="contact-email-form__input" type="text" name="name" /></label>
            </div>
            <div className="contact-email-form__half">
              <label>Email címe:<br/><input className="contact-email-form__input" type="text" name="_replyto" /></label>
            </div>
          <div id ="message">
            <label>Üzenet:<br/><textarea className="contact-email-form__textarea" name="message"></textarea></label>
          </div>
          <div className="page-section__centered">
            <button className="btn" type="submit">Üzenet küldése</button>
          </div>
        </form>

        <p className="generic-content-container generic-content-container--text-centered generic-content-container--large">Vagy foglalj időpontot telefonon: <a href="tel:+36301234667">Tel.: +36 30 1234567</a></p>
        <div className="generic-content-container--text-centered">
          <p>Kövessen engem a közösségi oldalaimon is.</p>
          <a className="contact__social-icon" href="https://www.facebook.com/Nails-By-Renee-133872024835153/" target="_blank"><CgFacebook size={25}/></a>
          <a className="contact__social-icon" href="" target="_blank"><FiInstagram size={25}/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
