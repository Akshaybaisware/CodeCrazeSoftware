import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Get in touch!</h5>
            <p>Your technical partner towards web success.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/support" className="text-white">Online Support</a></li>
              <li><a href="/business-solution" className="text-white">Business Solution</a></li>
              <li><a href="/faqs" className="text-white">FAQs</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>Softwarecodecraze@gmail.com</li>
              <li>+91 9503007527</li>
              <li>Nagpur 440003 Medical Square</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Embedded Google Map iframe */}
            <div className="map-responsive">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.654900190524!2d79.077863!3d21.151268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5f84bc7c19e6b%3A0x5082be5c2cf098f6!2sMedical%20Square%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1624574485812!5m2!1sen!2sin"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>CodeCraze Software Solutions Pvt Ltd © 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
