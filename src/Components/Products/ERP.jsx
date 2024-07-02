import React from 'react';
import './ERP.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import ERPImage from '../../Images/EPR.png'; 

function ERP() {
  return (
    <div className="container-fluid ERP-us-container m-0 p-0">
      <section className="ERP-us-section">
        <h1 id="animatedText">Enterprise Resource Planning.</h1>
        <p className="ERP-us-description my-5">
          We Offer Unique And Secure Web Application Development Solutions Matching Customer’s Business Strategies And Requirements. Focused On Collaborative Approach, Our Team Understands Customers’ Needs To Deliver Business Value.
        </p>
      </section>
      <Container className="shadow-lg p-5 bg-white rounded">
        <header className="ERP-header">
          <p className="fs-2 fw-bold my-2">What We Do In Enterprise Resource Planning.</p>
          <p className="ERP-description fs-5 mt-5">
            Over many years while working with global clients, we have developed proprietary tools, methodologies, frameworks, accelerators, and custom solutions built for and on top of the world’s leading CMS product suites to help businesses rapidly deploy CMS solutions and gain a competitive advantage.
          </p>
        </header>

        <section className="ERP-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 ERP-servicesColumn text-black fw-bold">
              <h2 className="ERP-servicesTitle">Our Services</h2>
              <ul className="ERP-servicesList">
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Consulting & Planning</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Implementation & Deployment</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Customization, Integration & Enhancement</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Support & Maintenance</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Migration / Product Upgrade</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Consolidation & Integration</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Independent Validation & Verification</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Human Resource Management System (HRMS)</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Business Process Management (BPM)</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Customer Relationship Management System (CRM)</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Customer Portal</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Partner Portal</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Sales Automation Systems</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Marketing Automation System</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Document Management System (DMS)</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Management Information System (MIS)</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Business intelligence & Analytics</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Purchase / Vendor Management</li>
              </ul>
            </div>
            <div className="col-lg-6 ERP-imageColumn">
              <img src={ERPImage} alt="CRM Diagram" className="ERP-image img-fluid" />
            </div>
          </div>
        </section>

        <footer className="ERP-footer">
          <h2 className="ERP-footerTitle text-white mb-5 fs-3">Looking for Content Management System services?</h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  );
}

export default ERP;
