import React from 'react';
import './Website.css'; // Assuming this is where your custom styles are defined
import DesktopScreen from '../../Images/center_1.png'; // Adjust path as per your project structure
import Webdevelop from '../../Images/webdevelop.jpg'; 
import { Container,Button } from 'react-bootstrap';

function Website() {
  return (
    <div className='m-0 p-0 bg-light'>
      <section className="Website-web-feature_mobile">
        <div className="container text-left">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="Website-text-container">
                <h1 className="Website-webbreadcrumbs__txt  ">
                  Website Programming &amp; Development<span className="Red">.</span>
                </h1>
              </div>
              <div className="Website-webbreadcrumb text-left">
                <p className="Website-webwhy_para text-white mt-5 fs-5">
                  In a competitive edge, a full-featured website is a basic need for business promotion. We have a large pool of resources for developing multi-functional web portals. Our custom web application development company offers a lineup of services for front-end &amp; back-end development.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12 Website-img_banner_section">
              <img src={DesktopScreen} alt="Desktop Screen" width="100%" className="Website-webimg_mobile" />
            </div>
          </div>
        </div>
      </section>

      <Container className="container-fluid  rounded">
        <div className="container Website-card_body p-5">
          <div className="py-4">
            <h3 className="mb-3 Website-aboutheading">
              Professional Web Application Design &amp; Development Services
              <span className="Red">.</span>
            </h3>
          </div>
          <p className="Website-why_para">
            Programmers code smartly &amp; convert a simple website into a powerful business tool. Pretty web graphics designs are the great weapons to beat competitors in Cyberspace. Mobile responsive websites crafted by skilled in-house web developers offer a pleasant browsing experience to each visitor. Cost-effective solutions along with a modular approach allow us to expand or extend already existing functionalities. Professional web development services assure clients of the best return on investment with smooth business dealings.
          </p>
          <div className="Website-clients-area p-4 bg-dark text-white rounded">
            <div className="row">
              <h3 className="mb-3 Website-aboutheading text-white">We have prominence in<span className="Website-extra">:</span></h3>
              <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-white mt-5 Website-margin_topcommon">
                <div className="Website-para_left_about mb-2">
                  <i className="fas fa-check-circle me-3"></i><span>Custom Application Development</span>
                </div>
                <div className="Website-para_left_about mb-2">
                  <i className="fas fa-check-circle me-3"></i><span>Website design &amp; Development</span>
                </div>
                <div className="Website-para_left_about mb-2">
                  <i className="fas fa-check-circle me-3"></i><span>Web Software Development</span>
                </div>
                <div className="Website-para_left_about mb-2">
                  <i className="fas fa-check-circle me-3"></i><span>Web Hosting</span>
                </div>
                <div className="Website-para_left_about mb-2">
                  <i className="fas fa-check-circle me-3"></i><span>Website Maintenance &amp; Support</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-3 p-2">
                <div>
                  <img src={Webdevelop} alt="Web Development Process" className="w-100 Website-slick_img" />
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12">
                <h4 className="Website-aboutheading text-center mb-4">Why Us for end-to-end web app development services<span className="Red">?</span></h4>
                <p className="Website-why_para">
                  We are committed to delivering dynamic solutions as a prestigious company for web design and development. We offer high-quality business value with awesome features and a rich user experience. Programming and development services with technical support always keep us in a leading position among others. Each business is unique &amp; has distinctive requirements. Technical experts are smart enough to execute the code for simple to complex business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row Website-new_section mb-5 " >
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-3 border-end border-bottom">
              <h3 className="Website-heading_new_top">Understand a Vision</h3>
              <div className="Website-why_para_web">
                Business Analysts understand a vision, objectives &amp; business needs for web development. They spend a good time going through the requirements document given by the client &amp; make the ideas clearer before coming to any conclusion.
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-3 border-start border-bottom">
              <h3 className="Website-heading_new_top">Full Control over Development</h3>
              <div className="Website-why_para_web">
                Professionals have full control over the design &amp; development process. Work transparency &amp; seamless communication means flawless websites. In-house professionals have total control over a web app they build.
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-3 border-end">
              <h3 className="Website-heading_new_top">Feature Rich Web Application Development</h3>
              <div className="Website-why_para_web">
                We are known for delivering highly usable websites and affordable e-commerce web development services to potential clients. Module-wise development with brand new coding techniques eases the development task.
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-3 border-start">
              <h3 className="Website-heading_new_top">24/7 Maintenance and Support</h3>
              <div className="Website-why_para_web">
                Techies never hesitate to provide technical support for previously completed projects. Clients of running projects obviously get anytime support from the experts. Exclusive services are offered for web maintenance as well.
              </div>
            </div>
          </div>
         
            <footer className="mobile-app-footer">
              <h2 className="mobile-app-footer-title text-white mb-3 fs-3">Looking for Website Programming &amp; app development services?</h2>
              <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
            </footer>
         
        </div>
      </Container>
    </div>
  );
}

export default Website;
