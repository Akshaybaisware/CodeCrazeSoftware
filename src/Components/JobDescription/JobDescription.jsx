import React from 'react';
import './JobDescription.css';
import { Container,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function JobDescription() {
  const navigate = useNavigate();

  const ClickForApply = () => {
    navigate('/carrerapply');
  };

  return (
    <div className="container-fluid JobDescription-container m-0 p-0">
      <section className="JobDescription-us-section">
        <h1 id="animatedText">Job Description<span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg JobDescription__section p-5 bg-white rounded'>
        <header className="JobDescription-header">
          <p className='fs-2 fw-bold'>Android developer </p>
        </header>

        <section className="JobDescription-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 JobDescription-servicesColumn text-black fw-bold">
              <h4 className='text-black-50 my-4'>Technical Skills</h4>
              <ul className='fw-normal'>
                <li>Thorough understanding of relational database concepts and management (MS-SQL).</li>
                <li>Thorough understanding of .NET 4.5 Framework or greater.</li>
                <li>Thorough understanding of ASP.Net, MVC, WCF, WPF, etc. is mandatory.</li>
                <li>SharePoint experience is desired.</li>
                <li>The Dot Net MVC Developer must be skilled at developing cutting-edge applications using the components of dot net programming.</li>
                <li>Posting Date</li>
              </ul>
            </div>
            <div>
              <p className="fs-4 text-black-50">Posting Date</p>
              <p className="fs-5">20/09/2019</p>
              <p className="fs-4 text-black-50">Location</p>
              <p className="fs-5">Nagpur</p>
              <p className="fs-4 text-black-50">Department</p>
              <p className="fs-5">Development</p>
              <p className="fs-4 text-black-50">Experience</p>
              <p className="fs-5">1-2 years</p>
              <p className="fs-4 text-black-50">Education</p>
              <p className="fs-5">BE/B Tech/MCA</p>
            </div>
          </div>
        </section>
        <footer>
          <Button className="btn rounded-pill" onClick={ClickForApply} style={{ backgroundColor: "#243859", color: "white" }}>Apply</Button>
        </footer>
      </Container>
    </div>
  )
}

export default JobDescription;
