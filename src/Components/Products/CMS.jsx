import React from 'react';
import './CMS.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import CmsImage from '../../Images/CMSSoftware.png'; 

function CMS() {
  return (
    <div className="container-fluid Cms-us-container m-0 p-0">
      <section className="Cms-us-section ">
        <h1 id="animatedText">Enterprise Resource Planning. </h1>
        <p className="Cms-us-description mt-5">
        We Offer Unique And Secure Web Application Development Solutions Matching Customer’s Business Strategies And Requirements.Focused On Collaborative Approach, Our Team Understands Customers’ Needs To Deliver Business Value.


        </p>
      </section>
      <Container className='shadow-lg p-5 bg-white rounded'>
        <header className="Cms-header">
          <p className='fs-2 fw-bold'>What We Do In Enterprise Resource Planning.
          . </p>
          <p className="Cms-description fs-5 mt-5">
          We transform the way Small, Medium & Large Enterprises conduct their business with Customers / Clients, Vendors / Suppliers, Partners and Employees in this digital age.

.
          </p>
        </header>

        <section className="Cms-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 Cms-servicesColumn text-black fw-bold">
              <h2 className="Cms-servicesTitle">Our Services</h2>
              <ul className="Cms-servicesList">
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Consulting & Planning</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Implementation & Deployment</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Customization, Integration & Enhancement</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Support & Maintenance</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Migration / Product Upgrade</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Consolidation & Integration</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Independent Validation & Verification</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Corporate Websites & Portals</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Custom Application & Module / Plugin Development</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Legacy Applications Upgradation, Enhancement & Performance Tuning</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Intranet Websites for Corporates</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> News Publishing Websites</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Online Magazines, Newspaper & Publication Websites</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Education / E-Learning Websites</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Art, Music & Multimedia Websites</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Government Websites</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Nonprofit / NGO Websites</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Transportation Websites</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Community Portals</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Middleware Development - Web Services / API</li>
                <li className="Cms-serviceItem my-3"><span className="Cms-tick">&#10003;</span> Third Party Tools OR Plug-in Integration (Like Chat, Forum, Blog, Search Engine, etc.)</li>
                <li className="Cms-serviceItem1 my-3"><span className="Cms-tick">&#10003;</span> Social Network Integration (Like Facebook, Twitter, LinkedIn, etc.)</li>
              </ul>
            </div>
            <div className="col-lg-6 Cms-imageColumn">
              <img src={CmsImage} alt="CRM Diagram" className="Cms-image img-fluid" />
            </div>
          </div>
        </section>

        <footer className="Cms-footer">
          <h2 className="Cms-footerTitle text-white mb-5 fs-3">Looking for Content Management System services?
          </h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  )
}

export default CMS;
