import React from 'react';
import './MobileApp.css';
import { Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DesktopScreen from '../../Images/center_1.png'

function MobileApp() {
  return (
    <div className="container-fluid MobileApp-us-container m-0 p-0">
<section className="MobileApp-us-section">
  <div className="row">
    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
      <h1 id="animatedText">Mobile Application Development</h1>
      <p className="MobileApp-us-description mt-5">
        Mobility solutions are helping businesses grow irrespective of location. We work with diverse brands, organizations, start-ups, and individuals to create powerful apps from great ideas. Prevoyance Solutions is a leading mobile application development company in Nagpur, Pune, Mumbai, and Pan India, helping companies from startups and small businesses to large enterprises design, develop, and launch custom mobile applications.
      </p>
    </div>
    <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12 MobileApp__Image">
      <img src={DesktopScreen} alt="Mobile Application" className="img-fluid" />
    </div>
  </div>
</section>


      <Container className='shadow-lg p-5 bg-white rounded'>
        <header className="MobileApp-header">
          <p className="MobileApp-description fs-5">
            We the CodeCrazeSoftware Solution build top quality of iPhone application, iPad application, Android Application for clients. Considering the requirement of the clients we deliver the customer centric application to our clients. As an experienced Mobile app development company, our mobile app developers team ensures that our clients will receive exceptional Mobile apps development services by offering creative solutions in the most economical manner. To build a client's business brand that performs in today's innovative and creative marketplace, we use modern software. Prevoyance Solution a Mobile Application Development Company in Nagpur has hands on experience in development Mobile application as well as custom app development in Nagpur India As being the best and top mobile app development companies in Nagpur India, many of our clients have won awards and have been featured in the leading mobile App Store.
          </p>
        </header>
        <div className="container text-white bg-dark p-5">
          <p className="text-start mt-2 mb-4 fs-4 fw-bold">
            We always aim to reach unique people with unique concepts and our team help them enhance their business through our IT services. We are successful because of our business values, which are
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>✅ Enhancing speed and performance</li>
                <li>✅ Enabling device independence to all devices</li>
                <li>✅ Providing rich User Interface experience</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>✅ Provision of high standard features and functionality</li>
                <li>✅ Enhancing visual appeal for mobile apps</li>
                <li>✅ Increasing the client's business impact</li>
              </ul>
            </div>
          </div>
          <p className="text-start fw-bold fs-4">
            Right from the start, we harness the latest and best tools, SDKs, and frameworks to ensure our mobile app development services cater for iOS and Android.
          </p>
        </div>
        <footer className="MobileApp-footer">
          <h2 className="MobileApp-footerTitle text-white mb-5 fs-3">Looking for Customer Relationship Management services?</h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  );
}

export default MobileApp;
