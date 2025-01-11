// Footer.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logolight from "../assets/logo-light.png";

const Footer = () => (
  <section className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logolight} alt="HomeScape Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">PrivacyPolicy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="footer-right">
        <h3>Get the freshest HomeScape news !!</h3>
        <div className="subscribe-us">
          <input type="email" placeholder="Your email here" className="subscribe-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
