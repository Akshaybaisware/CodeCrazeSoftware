import React from 'react';
import './ContactUs.css';
import { Container,Button } from 'react-bootstrap';

const CareerApplyFormComponent = () => {
  
  return (
    <div  className="container-fluid CareerApply-container  m-0 p-0">
      <section className="CareerApply-us-section">
        <h1 id="animatedText">Contact Us<span className='Red'>.</span> </h1>
      </section>
      <Container className='shadow-lg CareerApply__section p-5 bg-white rounded'>
       
        <section className="CareerApply-servicesSection">
        <div className="contact-us-container container">
      <div className="contact-us-row row justify-content-center">
        <div className="contact-us-col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="contact-us-card card">
            <div className="contact-us-card-body card-body">
              <h5 className="contact-us-card-title card-title">Contact Info</h5>
              <h2 className="contact-us-card-text card-text">Let's Connect With Us</h2>
              <p>THIS COULD BE THE BEGINNING OF THE BEAUTIFUL RELATIONSHIP</p>
              <p className="contact-us-icon-background"><i className="fas fa-phone-alt"></i> Phone Number<br/>7756940249</p>
              <p className="contact-us-icon-background text-"><i className="fas fa-map-marker-alt"></i> Visit Us Office:<br/><span className='text-warning'> Gayatri Nagar IT PARK </span></p>
              <p className="contact-us-icon-background"><i className="fas fa-envelope"></i> Mail Us:<br/>aisoftsolutions8@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-us-col col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 mt-1 ">
          <form className="contact-us-form mt-5">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="contact-us-form-label form-label">Your Name *</label>
                <input type="text" className="contact-us-form-control form-control" id="name" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="contact-us-form-label form-label">Your Email *</label>
                <input type="email" className="contact-us-form-control form-control" id="email" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="contact-us-form-label form-label">Phone Number *</label>
                <input type="tel" className="contact-us-form-control form-control" id="phone" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="postalCode" className="contact-us-form-label form-label">Postal Code *</label>
                <input type="text" className="contact-us-form-control form-control" id="postalCode" required />
              </div>
            </div>
            <div className="contact-us-mb-3 mb-3">
              <label htmlFor="comments" className="contact-us-form-label form-label">Your Comments*</label>
              <textarea className="contact-us-form-control form-control" id="comments" rows="3" required></textarea>
            </div>
            <Button type='submit' className="btn " style={{ backgroundColor: "#243859",width:"30%", color: "white" }}>Submit</Button>
          </form>
        </div>
      </div>
    </div>

        </section>
      </Container>
    </div>
  );
};

export default CareerApplyFormComponent;
