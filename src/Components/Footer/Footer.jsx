import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className="text-white mb-5">
              Get in touch <span className="text-danger">!</span>
            </h2>
            <p className="text-white mb-5" >Your technical partner towards web success.</p>
            <button className="btn btn-outline-light">Contact Us</button>
          </div>
          <div className="col-md-6">
            <div className="map-container">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.667213482834!2d79.0916063!3d21.1323985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11dbd9bb3f1%3A0xc4b8a33d4e7e1a45!2sPrevoyance%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1673012462530!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-white">
              <FontAwesomeIcon icon={faLink} /> Quick Links
            </h3>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-danger">Services</a></li>
              <li><a href="#online-support" className="text-danger">Online Support</a></li>
              <li><a href="#business-solution" className="text-danger">Business Solution</a></li>
              <li><a href="#faqs" className="text-danger">FAQs</a></li>
            </ul>
            <div className="social-links mt-4">
              <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-white">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Contact Information
            </h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              <a href="mailto:prafulanathile@gmail.com" className="text-danger"> prafulanathile@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone:
              <a href="tel:+919970850512" className="text-danger"> 9503007527/9403452788</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              17/1 Amar Plaza Salt Lake SMS, India Road, IT Park Rd, Nagpur - 440022, Third Floor, Beside Persistent.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-danger">&copy;CodeCrazeSoftware Solutions Pvt Ltd © 2023. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
