import React from 'react';
import './OurExpertise.css';
import { Container } from 'react-bootstrap';
import SoftwareDeveloper from '../../Images/SoftwareDeveloper.webp';
import Counter from './Counter'; // Import the Counter component

const OurExpertise = () => {
  return (
    <div className="OurExpertise-page-feature p-0 m-0 bg-light">
      <div className="OurExpertise-page__feature1 position-absolute w-100  m-0">
        <Container>
          <p id="animatedText"  className="fs-1 fw-bold text-start">Our Expertise <span className='Red'>.</span></p>
        </Container>
      </div>

      <div className="container position-relative bg-white OurExpertise-custom-subtle-shadow p-4 rounded OurExpertise-custom-container">
        <header className="text-start mb-4 OurExpertise-custom-header">
          <h1 className="fs-2 mt-3">CodeCrazeSoftware Solution Provide a wide Range of Services.</h1>
        </header>

        <section className="row mb-4 OurExpertise-custom-row">
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 OurExpertise-custom-paragraph">
              <div className="row align-items-center mb-3">
                <div className="col-auto">
                  <i className="fas fa-cogs fa-2x OurExpertise-icon OurExpertise-icon-gradient"></i>
                </div>
                <div className="col">
                  <h2 className="fs-4 mb-1">End-to-End Product Engineering</h2>
                  <p className="small">
                    Product Engineering Excellence - building next-generation Products,
                    Platforms & Experiences that connects with your customers.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <div className="col-auto">
                  <i className="fas fa-digital-tachograph fa-2x OurExpertise-icon OurExpertise-icon-gradient"></i>
                </div>
                <div className="col">
                  <h2 className="fs-4 mb-1">Enterprise Digital Transformation</h2>
                  <p className="small">
                    Transforming enterprises by developing products, services & experiences.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <div className="col-auto">
                  <i className="fas fa-users fa-2x OurExpertise-icon OurExpertise-icon-gradient"></i>
                </div>
                <div className="col">
                  <h2 className="fs-4 mb-1">Team Augmentation</h2>
                  <p className="small">
                    Skills, Processes & Commitment - which you need. Resources as a
                    Service (Offshore, Onsite & Hybrid) and ODC / BOT.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <div className="col-auto">
                  <i className="fas fa-laptop fa-2x OurExpertise-icon OurExpertise-icon-gradient"></i>
                </div>
                <div className="col">
                  <h2 className="fs-4 mb-1">Content Management System</h2>
                  <p className="small">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3">
              <img
                src={SoftwareDeveloper} // Replace with your image source
                alt="Service Illustration"
                className="img-fluid OurExpertise-custom-image"
              />
            </div>
          </div>
        </section>

        <section className="row mb-4 OurExpertise-custom-left-align-text">
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 OurExpertise-custom-paragraph OurExpertise-expertise">
              <h3 className="fs-3">Expertise</h3>
              <p className="small">Leverage robust technologies platforms and framework.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 OurExpertise-custom-paragraph OurExpertise-products">
              <h3 className="fs-3">Products</h3>
              <p className="small">Products to aid and grow your business.</p>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="h-100 p-3 OurExpertise-custom-paragraph OurExpertise-dedicated-team">
              <h3 className="fs-3">Dedicated Development Team</h3>
              <p className="small">Hire expert team for technology-driven needs.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 OurExpertise-custom-paragraph OurExpertise-industries">
              <h3 className="fs-3">Industries</h3>
              <p className="small">Industries IT solutions for diverse domains.</p>
            </div>
          </div>
        </section>

        <footer className="row text-center bg-light py-4 OurExpertise-custom-footer">
          <p className='fs-2 my-2 text-black fw-bold'>WHAT SET US APART, BY THE NUMBERS</p>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <Counter target="756" />
            <p className="fs-3 text-black-50">Websites Designed and Developed</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <Counter target="674" />
            <p className="fs-3 text-black-50">Apps Published</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <Counter target="35" />
            <p className="fs-3 text-black-50">Employees</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <Counter target="856" />
            <p className="fs-3 text-black-50">Happy Customers</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OurExpertise;
