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
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/policies">Policies</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.pinterest.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="https://www.youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
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
