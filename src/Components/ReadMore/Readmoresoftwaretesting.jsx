import React from 'react';
import './ReadMore.css';
import { Container } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';

function Readmoresoftwaretesting() {
  return (
    <div className="container-fluid ReadMoreMobileDescription-container m-0 p-0">
      <section className="ReadMoreMobileDescription-us-section">
        <h1 id="animatedText">Blogs.</h1>
      </section>
      <Container className='shadow-lg ReadMoreMobile__section p-5 bg-white rounded'>
        <header className="ReadMoreMobile-header my-3">
          <p className='fs-2 fw-bold'>Latest Software Testing Trends.</p>
        </header>

        <section className="ReadMoreMobile-servicesSection">
          <div>
            <div className="ReadMoreMobile-servicesColumn my-4 text-black fw-bold">
              <p className="fs-5 fw-normal text-light-emphasis">
                This post is educational; learn what trends will significantly impact you and how to assist yourself become ready for the new technology. As the world becomes more digitalized, we now see huge changes in technical breakthroughs.
              </p>
              <p className="fs-5 fw-normal text-light-emphasis">
                The massive technological and digital transition will continue in 2022 as well, demanding ongoing innovation and self-reinvention on the part of the enterprises. The way that businesses build, validate, deploy, and use software is impacted by the extraordinary and exponential change in technology.
              </p>
              <p className="fs-5 fw-normal text-light-emphasis">
                Therefore, in order to develop and deliver high-quality software quickly, these businesses need to continuously innovate and revamp themselves. To do this, they must discover a way to optimise their processes and tools.
              </p>
              <p className="fs-5 fw-normal text-light-emphasis">
                Software testing is a key area for changes and enhancements, accounting for about 30% of the project's overall effort. Testing practices and technology must evolve to address the challenges of getting "Quality at Speed" in the face of the complexity of systems, environments, and data that is expanding.
              </p>
              <p className="fs-5 fw-normal text-light-emphasis">
                The biggest trends in software testing are listed below, some of which have already become apparent in recent years. According to our views, Agile and DevOps, test automation, artificial intelligence for testing, and API test automation are the most clear trends for the following several years.
              </p>
              <p className="fs-5 fw-normal text-light-emphasis">
                In addition to these tendencies, testing tools like Selenium, Katalon, TestComplete, and Kobiton may be able to overcome the difficulties in software testing.
              </p>
            </div>
           
           


          </div>
        </section>
        <MDBFooter  className='text-center text-lg-left ReadMorecustom-footer'>
  <div className='text-center p-3 my-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    <h2>Here are the Top Software Testing Trends that one should anticipate in 2022.</h2>
    <div className='container text-center'>
      <div className='row'>
        <div className='col'>
          <ul style={{ fontSize: '1rem',  listStyle: 'none', padding: 0 }}>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2 my-2" style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>Agile and DevOps</span>
            </li>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2 my-2 " style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>Artificial Intelligence for Testing</span>
            </li>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2  my-2 " style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>Integration of Tools and Activities</span>
            </li>
          </ul>
        </div>
        <div className='col'>
          <ul style={{ fontSize: '1rem', listStyle: 'none', padding: 0 }}>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2 my-2" style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>Test Automation</span>
            </li>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2 my-2" style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>Mobile Test Automation</span>
            </li>
          </ul>
        </div>
        <div className='col'>
          <ul style={{ fontSize: '1rem', listStyle: 'none', padding: 0 }}>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2 my-2" style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>API and Services Test Automation</span>
            </li>
            <li className='my-2' style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-check me-2 my-2" style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '0.3rem' }}></i>
              <span>Test Environments and Data</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</MDBFooter>
      </Container>
    </div>
  )
}

export default Readmoresoftwaretesting;
