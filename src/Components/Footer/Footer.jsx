import React from 'react';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate =useNavigate();
  const ClickforTheNextpage=()=>{
    navigate('./contact')
    window.scrollTo(0, 0); // Scroll to top


    

  }
  

    const ClickForFAQ = () => {
      navigate('/faq');
      window.scrollTo(0, 0); // Scroll to top

    };
  const ClickforTheServicePage=()=>{
    navigate('./mobile-application-development')
    window.scrollTo(0, 0); // Scroll to top

    

  }
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className="text-white mb-5">
              Get in touch <span className="text-danger">!</span>
            </h2>
            <p className="text-white mb-5 fs-4" >Your technical partner towards web success.</p>
            <button onClick={ClickforTheNextpage} className="btn btn-outline-light">Contact Us</button>
          </div>
          <div className="col-md-6">
            <div className="map-container">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.667213482834!2d79.0916063!3d21.1323985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11dbd9bb3f1%3A0xc4b8a33d4e7e1a45!2sAisoft%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1673012462530!5m2!1sen!2sin"
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
            <h3 className="text-white my-2">
              <FontAwesomeIcon icon={faLink} /> Quick Links
            </h3>
            <ul className="Footer-list-unstyled ">
        
              
            <li onClick={ClickforTheServicePage} className="text-white my-2">
          
   
    <i className="fas  fa-concierge-bell"></i> Services

</li>

<li  onClick={ClickforTheNextpage} className="text-white my-2" >
 
    <i className="fas fa-headset"></i> Online Support
 
</li>

<li onClick={ClickForFAQ} className="text-white my-2">
   
    <i className="fas fa-question-circle"></i> FAQs
 
</li>

            </ul>
            <div className="social-links mt-4">
            <a href="https://www.facebook.com" target="_blank" className="text-white mx-2">
  <FontAwesomeIcon icon={faFacebookF} />
</a>
<a href="https://twitter.com" target="_blank" className="text-white mx-2">
  <FontAwesomeIcon icon={faTwitter} />
</a>
<a href="https://www.linkedin.com/company/aisoftsolution.in/?viewAsMember=true" target="_blank" className="text-white mx-2">
  <FontAwesomeIcon icon={faLinkedinIn} />
</a>
<a href="https://www.youtube.com" target="_blank" className="text-white mx-2">
  <FontAwesomeIcon icon={faYoutube} />
</a>
<a href="https://www.instagram.com" target="_blank" className="text-white mx-2">
  <FontAwesomeIcon icon={faInstagram} />
</a>

            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-white">
           Contact Information
            </h3>
            <p  className='text-white'>
              <FontAwesomeIcon icon={faEnvelope} />  Email:
              <a href="mailto:prafulanathile@gmail.com" className="text-danger"> CodeSoftwareSolution@gmail.com</a>
            </p>
            <p className='text-white'>
              <FontAwesomeIcon icon={faPhone} /> Phone:
              <a href="tel:+919970850512" className="text-danger"> 9503007527/9403452788</a>
            </p>
            <p className='text-white'>
              <FontAwesomeIcon className='me-2' icon={faMapMarkerAlt} /> 
              address Nagpur medical square
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p  > <span className="text-danger ">&copy; AISOFTSoftware Solutions Pvt Ltd </span> <span className='text-white'>© 2024. All Rights Reserved.</span> </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
