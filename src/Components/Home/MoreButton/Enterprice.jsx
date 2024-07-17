import React from 'react';
import './Enterprise.css';
import { Container, Button } from 'react-bootstrap';

function JobDescription() {
  return (
    <div className="container-fluid Enterprise-container m-0 p-0">
      <section className="Enterprise-us-section">
        <h1 id="animatedText">Enterprise Solutions <span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg Enterprise__section p-5 bg-white rounded'>
        <section className="enterprise-services-section">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">
                WORKING WITH LARGE ENTERPRISES AS WELL AS SMALL & MEDIUM-SIZED ENTERPRISES (SMES)
              </h4>
            </div>
            <div className="col-lg-6">
              <div className="enterprise-picture">
                <div className="card  text-white">
                  <div className="card-body">
                    <h5 className="card-title">Enterprise Solutions</h5>
                    <p className="card-text">We transform the way small, medium & large enterprises conduct their business with customers / clients, vendors / suppliers, partners and employees in this digital age.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div className="row my-5">
  <div className="col-lg-6 enterprise-services-list">
    <ul className="fw-normal list-unstyled">
      <li className="red-border"><i className="fas fa-cogs p-3 Enterprise-icon-color"></i> Enterprise Business Solutions / Automation</li>
      <li className="yellow-border"><i className="fas fa-network-wired p-3  Enterprise-icon-color"></i> Enterprise System Integration</li>
      <li className="blue-border"><i className="fas fa-mobile-alt px-4 py-3 Enterprise-icon-color"></i> Enterprise Mobility</li>
    </ul>
  </div>
  <div className="col-lg-6 enterprise-services-list">
    <ul className="fw-normal list-unstyled">
      <li className="red-border"><i className="fas fa-database px-3 py-3 Enterprise-icon-color"></i> Enterprise Content Management System (CMS)</li>
      <li className="yellow-border"><i className="fas fa-code  px-3 py-3 Enterprise-icon-color"></i> Enterprise Application Development & Maintenance (ADM)</li>
      <li className="blue-border"><i className="fas fa-sync-alt  px-3 py-3 Enterprise-icon-color"></i> Technology Migration / Re-engineering</li>
    </ul>
  </div>
</div>

<div className="row">
  <div className="col-lg-12 text-center">
    <h4 className="fw-bold my-5">RELATED SERVICES</h4>
    <div className="row justify-content-center related-services my-5">
      <div className="col-md-2 text-center">
        <button className="btn r rounded-pill Enterprise-Custom-button">
          <i className="fas fa-lightbulb Enterprise-icon-bg1"></i> 
          <span className="Enterprise-small-font">Business / Tech Consulting</span> 
        </button>
      </div>
      <div className="col-md-2 text-center">
        <button className="btn  rounded-pill Enterprise-Custom-button">
          <i className="fas fa-drafting-compass Enterprise-icon-bg1"></i> 
          <span className="Enterprise-small-font">Product Prototyping</span>
        </button>
      </div>
      <div className="col-md-2 text-center">
        <button className="btn  rounded-pill Enterprise-Custom-button">
          <i className="fas fa-handshake Enterprise-icon-bg1"></i> 
          <span className="Enterprise-small-font">Managed Services</span>
        </button>
      </div>
      <div className="col-md-2 text-center">
        <button className="btn  rounded-pill Enterprise-Custom-button">
          <i className="fas fa-check-circle Enterprise-icon-bg1"></i> 
          <span className="Enterprise-small-font">Quality Assurance & Testing</span>
        </button>
      </div>
      <div className="col-md-2 text-center">
        <button className="btn  rounded-pill Enterprise-Custom-button">
          <i className="fas fa-cogs Enterprise-icon-bg1"></i> 
          <span className="Enterprise-small-font">Product Engineering</span>
        </button>
      </div>
    </div>
  </div>
</div>



          <footer className="OnlineTest-footer text-center">
            <h2 className="OnlineTest-footerTitle text-white mb-5 fs-3">Looking for Customer Relationship Management services?
            </h2>
            <Button variant="outline-light" onClick={() => window.location.href='/contact'} className="text-white px-4 fw-bold">
              Talk to Our Experts
            </Button>
          </footer>
        </section>
      </Container>
    </div>
  );
}

export default JobDescription;
