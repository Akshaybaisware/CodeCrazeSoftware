import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-us">
          <h2>Get in touch!</h2>
          <p>Your technical partner towards web success.</p>
          <button className="contact-button">Contact Us</button>
        </div>
        <div className="quick-links">
          <h3><FontAwesomeIcon icon={faLink} /> Quick Links</h3>
          <ul>
            <li><a href="#services"><FontAwesomeIcon icon={faLink} /> Services</a></li>
            <li><a href="#online-support"><FontAwesomeIcon icon={faLink} /> Online Support</a></li>
            <li><a href="#business-solution"><FontAwesomeIcon icon={faLink} /> Business Solution</a></li>
            <li><a href="#faqs"><FontAwesomeIcon icon={faLink} /> FAQs</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Contact Information</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:softwarecodecraze@gmail.com">softwarecodecraze@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+919970850512">9503007527/9403452788</a></p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nagpur 440003 Medical Square.</p>
        </div>
        <div className="map">
          <iframe
            title="Prevoyance IT Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.667213482834!2d79.0916063!3d21.1323985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11dbd9bb3f1%3A0xc4b8a33d4e7e1a45!2sPrevoyance%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1673012462530!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; CodeCraze Software Solutions Pvt Ltd © 2023. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
