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
                <li className="Agencies-red-border"><i className="fas fa-cogs"></i> Enterprise Business Solutions / Automation</li>
                <li className="Agencies-blue-border"><i className="fas fa-network-wired"></i> Enterprise System Integration</li>
                <li className="Agencies-red-border"><i className="fas fa-mobile-alt"></i> Enterprise Mobility</li>
              </ul>
            </div>
            <div className="col-lg-6 Agencies-agency-services-list">
              <ul className="fw-normal Agencies-list-unstyled">
                <li className="Agencies-blue-border"><i className="fas fa-database"></i> Enterprise Content Management System (CMS)</li>
                <li className="Agencies-red-border"><i className="fas fa-code"></i> Enterprise Application Development & Maintenance (ADM)</li>
                <li className="Agencies-blue-border"><i className="fas fa-sync-alt"></i> Technology Migration / Re-engineering</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12 text-center">
              <section id='Agencies_related-sec'>
                <div className="Agencies-related-service">
                  <h3 className="fw-bold mt-5">RELATED SERVICES</h3>
                </div>
              </section>
             
              <div className="row justify-content-center Agencies-related-services">
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
