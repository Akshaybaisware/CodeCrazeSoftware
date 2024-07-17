import React from 'react';
import './Agencies.css';
import { Container, Button } from 'react-bootstrap';


function Agencies() {
  return (
    <div className="container-fluid Agencies-Agency-container m-0 p-0">
      <section className="Agencies-us-section">
        <h1 id="animatedText">Agencies <span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg Agencies__section p-5 bg-white rounded'>
        <section className="Agencies-agency-services-section">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">
                WORKING WITH CONSULTING COMPANIES, INDEPENDENT SOFTWARE VENDORS (ISVS), SOFTWARE PRODUCT DEVELOPMENT COMPANIES OR AGENCIES
              </h4>
              <div className="border-line"></div> 
            </div>
            <div className="col-lg-6">
              <div className="Agencies-agency-picture">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <h5 className="card-title">Agencies</h5>
                    <p className="card-text">We partner with agencies to work on a project end-to-end, or as an extended team to build their client's project successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
                <div className="Agencies-h2-single-case-study">
                  <div className="Agencies-img1" >
                    <div className="Agencies-content">
                      Team Augmentation - Onsite / Offshore
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
                <div className="Agencies-h2-single-case-study">
                  <div className="Agencies-img2" >
                    <div className="Agencies-content">
                      Technology Migration / Re-engineering
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
                <div className="Agencies-h2-single-case-study">
                  <div className="Agencies-img3" >
                    <div className="Agencies-content">
                      End-to-end Product Engineering
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
                <div className="Agencies-h2-single-case-study">
                  <div className="Agencies-img4" >
                    <div className="Agencies-content">
                      Maintenance & Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
       
          <div className="row">
            <div className="col-lg-6 Agencies-agency-services-list">
              <ul className="fw-normal Agencies-list-unstyled">
                <li className="Agencies-red-border"><i className="fas fa-cogs blue-icon px-3 py-3"></i> Enterprise Business Solutions / Automation</li>
                <li className="Agencies-blue-border"><i className="fas fa-network-wired blue-icon px-3 py-3"></i> Enterprise System Integration</li>
                <li className="Agencies-red-border"><i className="fas fa-mobile-alt blue-icon px-4 py-3"></i> Enterprise Mobility</li>
              </ul>
            </div>
            <div className="col-lg-6 Agencies-agency-services-list">
              <ul className="fw-normal Agencies-list-unstyled">
                <li className="Agencies-blue-border"><i className="fas fa-database blue-icon p-3"></i> Enterprise Content Management System (CMS)</li>
                <li className="Agencies-red-border"><i className="fas fa-code blue-icon p-3"></i> Enterprise Application Development & Maintenance (ADM)</li>
                <li className="Agencies-blue-border"><i className="fas fa-sync-alt blue-icon p-3"></i> Technology Migration / Re-engineering</li>
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


          <footer className="Cms-footer">
          <h2 className="Cms-footerTitle text-white mb-5 fs-3">Looking for Content Management System services?
          </h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
        </section>
      </Container>
    </div>
  );
}

export default Agencies;
