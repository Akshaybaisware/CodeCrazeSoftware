import React from 'react';
import './MobileApp.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DesktopScreen from '../../Images/center_1.png';

function MobileApp() {
  return (
    <div className="container-fluid MobileApp-us-container m-0 p-0 bg-light">
      <section className="MobileApp-us-section">
        <Container className="row text-left ">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
            <h1 id="animatedText">Mobile Application Development</h1>
            <p className="MobileApp-us-description mt-4 ">
              Mobility solutions are helping businesses grow irrespective of location. We work with diverse brands, organizations, start-ups, and individuals to create powerful apps from great ideas. Prevoyance Solutions is a leading mobile application development company in Nagpur, Pune, Mumbai, and Pan India, helping companies from startups and small businesses to large enterprises design, develop, and launch custom mobile applications.
            </p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12 MobileApp__Image">
            <img src={DesktopScreen} alt="Mobile Application" className="img-fluid" />
          </div>
        </Container>
      </section>

      <Container className="shadow-lg p-5 bg-white rounded">
        <header className="MobileApp-header">
          <p className="MobileApp-description fs-5">
            We at CodeCrazeSoftware Solution build top-quality iPhone applications, iPad applications, and Android applications for clients. Considering the requirements of the clients, we deliver customer-centric applications. As an experienced mobile app development company, our mobile app developers ensure that our clients receive exceptional mobile app development services by offering creative solutions in the most economical manner. To build a client's business brand that performs in today's innovative and creative marketplace, we use modern software. Prevoyance Solutions, a mobile application development company in Nagpur, has hands-on experience in developing mobile applications as well as custom app development in Nagpur, India. As one of the best and top mobile app development companies in Nagpur, India, many of our clients have won awards and have been featured in leading mobile app stores.
          </p>
        </header>

        <div className="container text-white bg-dark p-5">
          <p className="text-start mt-2 mb-4 fs-4 fw-bold">
            We always aim to reach unique people with unique concepts, and our team helps them enhance their business through our IT services. We are successful because of our business values, which are:
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>✅ Enhancing speed and performance</li>
                <li>✅ Enabling device independence</li>
                <li>✅ Providing a rich user interface experience</li>
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
            Right from the start, we harness the latest and best tools, SDKs, and frameworks to ensure our mobile app development services cater to both iOS and Android.
          </p>
        </div>

        <Container className="MobileApp__Description">
          <Row>
            <Col className="services-card">
              <p className="fs-4 fw-bold">iPhone</p>
              <p className="fs-5 text-black-50">
                Our iOS development team has vast experience in sculpting your ideas into a masterpiece business app. We develop apps that run smoothly on devices, with incredible UX/UI designs that can achieve business objectives.
              </p>
            </Col>
            <Col className="services-card">
              <p className="fs-4 fw-bold">Android</p>
              <p className="fs-5 text-black-50">
                Android application development is important for any business as most users across the globe use Android OS. At least 800 million individuals use Android apps worldwide, thus having a result-focused Android app development tactic is a way to business success.
              </p>
            </Col>
            <Col className="services-card">
              <p className="fs-4 fw-bold">HTML5</p>
              <p className="fs-5 text-black-50">
                Our HTML5 development team has vast experience in sculpting your ideas into a masterpiece business app. We develop apps that run smoothly on devices, with incredible UX/UI designs that can achieve business objectives.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 4.5 }} className="services-card services-card-small">
              <p className="fs-4 fw-bold">Windows</p>
              <p className="fs-5 text-black-50 me-5">
                Windows is a group of several proprietary graphical operating system families developed and marketed by Microsoft. Each family caters to a certain sector of the computing industry, such as Windows NT for consumers, Windows Server for servers, and Windows IoT for embedded systems.
              </p>
            </Col>
          </Row>
        </Container>

        <footer className="MobileApp-footer">
          <h2 className="MobileApp-footerTitle text-white mb-3 fs-3">Looking for Customer Relationship Management services?</h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  );
}

export default MobileApp;
