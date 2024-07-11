import React from 'react';
import './Enterprise.css';
import { Container,Button } from 'react-bootstrap';

function JobDescription() {
  return (
    <div className="container-fluid Enterprise-container m-0 p-0">
      <section className="Enterprise-us-section">
        <h1 id="animatedText">Enterprise Solutions <span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg Enterprise__section p-5 bg-white rounded'>
      
      <section className="enterprise-services-section">
      <div className="row">
        <div className="col-lg-8">
          <h4 className="fw-bold">
            WORKING WITH LARGE ENTERPRISES AS WELL AS SMALL & MEDIUM-SIZED ENTERPRISES (SMES)
          </h4>
        </div>
        <div className="col-lg-4">
          <div className="enterprise-picture">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Enterprise Solutions</h5>
                <p className="card-text">We transform the way small, medium & large enterprises conduct their business with customers / clients, vendors / suppliers, partners and employees in this digital age.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 enterprise-services-list">
          <ul className="fw-normal">
            <li className="red-border"><i className="fas fa-cogs"></i> Enterprise Business Solutions / Automation</li>
            <li className="blue-border"><i className="fas fa-network-wired"></i> Enterprise System Integration</li>
            <li className="red-border"><i className="fas fa-mobile-alt"></i> Enterprise Mobility</li>
          </ul>
        </div>
        <div className="col-lg-6 enterprise-services-list">
          <ul className="fw-normal">
            <li className="blue-border"><i className="fas fa-database"></i> Enterprise Content Management System (CMS)</li>
            <li className="red-border"><i className="fas fa-code"></i> Enterprise Application Development & Maintenance (ADM)</li>
            <li className="blue-border"><i className="fas fa-sync-alt"></i> Technology Migration / Re-engineering</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h4 className="fw-bold mt-5">RELATED SERVICES</h4>
          <div className="row justify-content-center related-services">
            <div className="col-md-2 text-center">
              <button className="btn btn-outline-primary"><i className="fas fa-lightbulb"></i> Business / Tech Consulting</button>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-outline-primary"><i className="fas fa-drafting-compass"></i> Product Prototyping</button>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-outline-primary"><i className="fas fa-handshake"></i> Managed Services</button>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-outline-primary"><i className="fas fa-check-circle"></i> Quality Assurance & Testing</button>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-outline-primary"><i className="fas fa-cogs"></i> Product Engineering</button>
            </div>
          </div>
        </div>
      </div>
      <div className="enterprise-contact-section text-center mt-5">
        <h5>Looking for Customer Relationship Management services?</h5>
        <button className="btn btn-primary mt-3">Talk to our Expert!</button>
      </div>
    </section>



      </Container>
    </div>
  );
}

export default JobDescription;
{/* <footer className="OnlineTest-footer text-center">
        <h2 className="OnlineTest-footerTitle text-white mb-5 fs-3">Looking for Customer Relationship Management services?
        </h2>
          <Button  variant="outline-light" className="  text-white  px-4 fw-bold">
            Talk to Our Experts
          </Button>
        </footer> */}