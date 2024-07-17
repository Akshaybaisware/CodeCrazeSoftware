import React from 'react';
import './Startup.css';
import { Container, Button } from 'react-bootstrap';
import team1 from '../../../Images/team-1.jpg';
import team2 from '../../../Images/team-2.jpg';
import team3 from '../../../Images/team-3.jpg';
import team4 from '../../../Images/team-4.jpg';

function Agencies() {
  return (
    <div className="container-fluid Startup-container m-0 p-0">
      <section className="Startup-us-section">
        <h1 id="animatedText">Startups <span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg Startup-Agencies__section p-5 bg-white rounded'>
        <section className="Startup-Agencies-agency-services-section">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">
                WORKED WITH MORE THAN 100+ GLOBAL TECH STARTUPS - FOR THEIR WEB / CLOUD / MOBILE / IOT NEEDS
              </h4>
              <div className="Startup-border-line"></div>
            </div>
            <div className="col-lg-6">
              <div className="Startup-Agencies-agency-picture">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <h5 className="card-title">Startup</h5>
                    <p className="card-text">
                      We empower and support startups with our digital expertise & experience at each stage - whether you are at Seed stage OR Expansion stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-12 col-12">
              <div className="Startup-single-team">
                <div className="img">
                  <img src={team1} alt=""/>
                  <div className="Startup-content">
                    <span className="default"><i className="fas fa-hand-pointer"></i></span>
                    <p className="social">Idea to Prototype</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-12 col-12">
              <div className="Startup-single-team">
                <div className="img">
                  <img src={team2} alt=""/>
                  <div className="Startup-content Startup-content_new">
                    <span className="default"><i className="fas fa-hand-pointer"></i></span>
                    <p className="social">Complete Product Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-12 col-12">
              <div className="Startup-single-team">
                <div className="img">
                  <img src={team3} alt=""/>
                  <div className="Startup-content">
                    <span className="default"><i className="fas fa-hand-pointer"></i></span>
                    <p className="social">Maintenance &amp; Support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-12 col-12">
              <div className="Startup-single-team">
                <div className="img">
                  <img src={team4} alt=""/>
                  <div className="Startup-content Startup-content_new">
                    <span className="default"><i className="fas fa-hand-pointer"></i></span>
                    <p className="social">Minimal Viable Product (MVP)</p>
                  </div>
                </div>
              </div>
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
