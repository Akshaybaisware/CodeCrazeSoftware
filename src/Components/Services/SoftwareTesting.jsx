import React from 'react';
import './SoftwareTesting.css';  // Import your CSS file
import DesktopScreen from '../../Images/center_1.png';  // Assuming this is your image path
import { Container,Button } from 'react-bootstrap';
import SoftwaretestingClient from '../../Images/software-testing-Client.png'

function SoftwareTesting() {
  return (
    <div className='m-0 p-0 bg-light'>
      <section className="Website_softwaretesting_page-feature_mobile">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <h1 className="Website_softwaretesting_breadcrumbs__txt">
                Software Testing<span className="Red">.</span>
              </h1>
              <div className="SoftwareTesting_breadcrumb">
                <p className="SoftwareTesting_why_para mt-2 text-white fs-5">
                  Software Testing is one of the most vital stages in the software development life cycle. Testing of apps, devices, websites, and systems is an integral part of any company. It provides insights into the performance of the software. Software testing is a method for identifying gaps between provided input and desired output.
                </p>
                <p className='text-white fs-5 '>
                  If you are looking for the best Software Testing company in Nagpur, Pune, Mumbai, India, then Yes Prevoyance Solutions is the right place. We are ranked among the top Software Testing Companies in Nagpur, Pune, Mumbai, and across India.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 SoftwareTesting_img_banner_section">
              <img src={DesktopScreen} alt="" width="100%" className="SoftwareTesting_img_mobile" />
            </div>
          </div>
        </div>
      </section>

      <Container className="SoftwareTestingcontainer-fluid bg-white shadow shadow-lg">
        <div className="container card_body p-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <p className="SoftwareTesting_why_para text-secondary fs-5">
                AISOFTSoftwareSolutions offers assistance with software testing. AISOFTSoftwareSolutions supports every testing requirement at any stage of the software development cycle. To identify the flaws and mistakes committed during the development stages, software testing is actually necessary.AISOFTSoftwareSolution provides the best Software Testing service in Nagpur and it is the best company in Software company all over in Nagpur Pune Mumbai India.
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-center text-secondary fs-5 mb-5">
            <div className="col-lg-8 col-md-9 col-sm-12 col-12">
              <h3 className="SoftwareTesting_heading_custom_content">Software Testing Services<span className="SoftwareTesting_extra">.</span></h3>
              <p className="SoftwareTesting_aboutus mt-2">
                Testing is required to provide services to clients like the delivery of high-quality products or software applications that need less maintenance and, as a result, produce outcomes that are more accurate, dependable, and consistent.
              </p>
              <h3 className="SoftwareTesting_heading_custom_content">How We can Help You<span className="SoftwareTesting_extra">?</span></h3>
              <p className="SoftwareTesting_aboutus mt-2 " >
                Our approach to software testing can help clients take advantage of critical information which could be used to:
              </p>
              <div className="row">
  <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
    <div className="SoftwareTesting_para_left_about mt-1 row">
      <div className="col-1">
        <i className="fas fa-bullseye me-3"></i>
      </div>
      <div className="col-11">
        <span className='fs-6'>Redefine the application / software development process</span>
      </div>
    </div>
    <div className="SoftwareTesting_para_left_about mt-1 row">
      <div className="col-1">
        <i className="fas fa-bullseye me-3"></i>
      </div>
      <div className="col-11">
        <span className='fs-6'>Verify the accuracy of logic.</span>
      </div>
    </div>
    <div className="SoftwareTesting_para_left_about mt-1 row">
      <div className="col-1">
        <i className="fas fa-bullseye me-3"></i>
      </div>
      <div className="col-11">
        <span className='fs-6'>Identify areas of weakness and enhancements</span>
      </div>
    </div>
    <div className="SoftwareTesting_para_left_about mt-1 row">
      <div className="col-1">
        <i className="fas fa-bullseye me-3"></i>
      </div>
      <div className="col-11">
        <span className='fs-6'>Ensure that business requirements of the system have been met</span>
      </div>
    </div>
    <div className="SoftwareTesting_para_left_about mt-1 row">
      <div className="col-1">
        <i className="fas fa-bullseye me-3"></i>
      </div>
      <div className="col-11">
        <span className='fs-6'>Verify the expected performance.</span>
      </div>
    </div>
    <div className="SoftwareTesting_para_left_about mt-1 row">
      <div className="col-1">
        <i className="fas fa-bullseye me-3"></i>
      </div>
      <div className="col-11">
        <span className='fs-6'>Reduce rework that is needed to fix buggy software</span>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4 mt-lg-0">
    <img src={SoftwaretestingClient} alt="" className="SoftwareTesting-Image Software-img-fluid " />
  </div>


              </div>
            </div>
          </div>
          

          <footer className="mobile-app-footer">
              <h2 className="mobile-app-footer-title text-white mb-3 fs-3"> Looking for Software Testing services?</h2>
              <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
            </footer>
        </div>
      </Container>
    </div>
  );
}

export default SoftwareTesting;
