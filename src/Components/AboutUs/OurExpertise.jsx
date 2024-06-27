import React from 'react';
import './OurExpertise.css';

const OurExpertise = () => {
  return (
    <div className="page-feature p-0 m-0">
      <div className="page__feature1 position-absolute w-100 p-0 m-0">
        <p id="animatedText" className="fs-1">Our Expertise</p>
      </div>

      <div className="container mt-5 position-relative bg-white custom-subtle-shadow p-4 rounded custom-container">
        <header className="text-center mb-4 custom-header">
          <h1 className="h3">Prevoyance Provide a wide Range of Services.</h1>
        </header>

        <section className="row mb-4 custom-row">
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 custom-paragraph">
              <h2 className="h5">End-to-End Product Engineering</h2>
              <p className="small">
                Product Engineering Excellence - building next-generation Products,
                Platforms & Experiences that connects with your customers.
              </p>
              <h2 className="h5">Enterprise Digital Transformation</h2>
              <p className="small">
                Transforming enterprises by developing products, services & experiences.
              </p>
              <h2 className="h5">Team Augmentation</h2>
              <p className="small">
                Skills, Processes & Commitment - which you need. Resources as a
                Service (Offshore, Onsite & Hybrid) and ODC / BOT.
              </p>
              <h2 className="h5">Content Management System</h2>
              <p className="small">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3">
              <img
                src="https://via.placeholder.com/400" // Replace with your image source
                alt="Service Illustration"
                className="img-fluid custom-image"
              />
            </div>
          </div>
        </section>

        <section className="row mb-4 custom-left-align-text">
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 custom-paragraph">
              <h3 className="h6">Expertise</h3>
              <p className="small">Leverage robust technologies platforms and framework.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 custom-paragraph">
              <h3 className="h6">Products</h3>
              <p className="small">Products to aid and grow your business.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 custom-paragraph">
              <h3 className="h6">Dedicated Development Team</h3>
              <p className="small">Hire expert team for technology-driven needs.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="h-100 p-3 custom-paragraph">
              <h3 className="h6">Industries</h3>
              <p className="small">Industries IT solutions for diverse domains.</p>
            </div>
          </div>
        </section>

        <footer className="row text-center bg-light py-4 custom-footer">
          <div className="col-md-3 mb-3">
            <h4 className="h6">3856+</h4>
            <p className="small">Websites Developed</p>
          </div>
          <div className="col-md-3 mb-3">
            <h4 className="h6">3856+</h4>
            <p className="small">Apps Published</p>
          </div>
          <div className="col-md-3 mb-3">
            <h4 className="h6">35+</h4>
            <p className="small">Employees</p>
          </div>
          <div className="col-md-3 mb-3">
            <h4 className="h6">856+</h4>
            <p className="small">Happy Customers</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OurExpertise;
