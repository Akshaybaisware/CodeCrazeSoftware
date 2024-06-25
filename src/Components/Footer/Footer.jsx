import React from 'react';
import './Footer.css'; 

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
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#online-support">Online Support</a></li>
            <li><a href="#business-solution">Business Solution</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:prafullanathile@gmail.com">softwarecodecraze@gmail
          .com</a>,</p>
          <p>Phone: <a href="tel:+919970850512">9503007527/9403452788</a></p>
          <p>Nagpur 440003 Medical Square.</p>
        </div>
        <div className="map">
          <iframe
            title="Prevoyance IT Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.667213482834!2d79.0916063!3d21.1323985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11dbd9bb3f1%3A0xc4b8a33d4e7e1a45!2sPrevoyance%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1673012462530!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; CodeCraze Software Solutions Pvt Ltd © 2023. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
