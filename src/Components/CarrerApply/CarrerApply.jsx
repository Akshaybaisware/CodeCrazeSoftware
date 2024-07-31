import React, { useState } from 'react';
import './CareerApply.css';
import { Container, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CareerApplyFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    nationality: '',
    gender: '',
    qualification: '',
    major: '',
    yearOfPassing: '',
    institute: '',
    experience: '',
    professionalInstitute: '',
    skills: '',
    applyingRole: '',
    resume: null,  // Resume is stored here
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,  // If there's a file, store it; otherwise, store the value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here (e.g., sending data to server)
    console.log('Form Data:', formData);

    // Example: If sending to a server, you can create a FormData object:
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    // Now formDataToSend can be sent via an HTTP request

    // Clear form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      location: '',
      nationality: '',
      gender: '',
      qualification: '',
      major: '',
      yearOfPassing: '',
      institute: '',
      experience: '',
      professionalInstitute: '',
      skills: '',
      applyingRole: '',
      resume: '',  // Reset the resume field as well
    });

    // Show a toast message
    toast.success('Thank you for submitting!');
  };
  return (
    <div className="container-fluid CareerApply-container m-0 p-0">
      <section className="CareerApply-us-section">
        <h1 id="animatedText">Build Your Career<span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg CareerApply__section p-5 bg-white rounded'>
        <section className="CareerApply-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className="container mt-5">
              <form onSubmit={handleSubmit}>
                <h2 className="mb-4">Personal Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nationality" className="form-label">Nationality</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>

                <h2 className="mb-4">Educational Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="qualification" className="form-label">Highest Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="major" className="form-label">Specialization / Major</label>
                    <input
                      type="text"
                      className="form-control"
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="yearOfPassing" className="form-label">Year of Passing</label>
                    <input
                      type="text"
                      className="form-control"
                      id="yearOfPassing"
                      name="yearOfPassing"
                      value={formData.yearOfPassing}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="institute" className="form-label">Institute</label>
                    <input
                      type="text"
                      className="form-control"
                      id="institute"
                      name="institute"
                      value={formData.institute}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <h2 className="mb-4">Professional Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="experience" className="form-label">Total Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="professionalInstitute" className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="professionalInstitute"
                      name="professionalInstitute"
                      value={formData.professionalInstitute}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">Key Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="applyingRole" className="form-label">Applying for Which Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="applyingRole"
                    name="applyingRole"
                    value={formData.applyingRole}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">Upload Resume</label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    name="resume"
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="btn rounded-pill" style={{ backgroundColor: "#243859", color: "white" }}>Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default CareerApplyFormComponent;
