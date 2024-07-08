import React from 'react';
import './CareerApply.css';
import { Container,Button } from 'react-bootstrap';

const CareerApplyFormComponent = () => {
  return (
    <div className="container-fluid CareerApply-container m-0 p-0">
      <section className="CareerApply-us-section">
        <h1 id="animatedText">Android developer.</h1>
      </section>
      <Container className='shadow-lg CareerApply__section p-5 bg-white rounded'>
       
        <section className="CareerApply-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className="container mt-5">
              <form>
                <h2 className="mb-4">Personal Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone No.</label>
                    <input type="text" className="form-control" id="phone" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nationality" className="form-label">Nationality</label>
                    <input type="text" className="form-control" id="nationality" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                
                <h2 className="mb-4">Educational Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="qualification" className="form-label">Highest Qualification</label>
                    <input type="text" className="form-control" id="qualification" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="major" className="form-label">Specialization / Major</label>
                    <input type="text" className="form-control" id="major" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="yearOfPassing" className="form-label">Year of Passing</label>
                    <input type="text" className="form-control" id="yearOfPassing" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="institute" className="form-label">Institute</label>
                    <input type="text" className="form-control" id="institute" />
                  </div>
                </div>
                
                <h2 className="mb-4">Professional Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="experience" className="form-label">Total Experience</label>
                    <input type="text" className="form-control" id="experience" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="professionalInstitute" className="form-label">Institute</label>
                    <input type="text" className="form-control" id="professionalInstitute" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">Key Skills</label>
                  <input type="text" className="form-control" id="skills" />
                </div>
                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">Upload Resume</label>
                  <input type="file" className="form-control" id="resume" />
                </div>
                
                <Button className="btn rounded-pill" style={{ backgroundColor: "#243859", color: "white" }}>Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CareerApplyFormComponent;
