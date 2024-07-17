import React from 'react';
import './UiUx.css';
import DesktopScreen from '../../Images/center_1.png';  // Assuming this is your image path
import { Button, Container } from 'react-bootstrap';
import ux_1 from '../../Images/ux_1.png'
import ux_2 from '../../Images/ux_2.png'
import ux_3 from '../../Images/ux_3.png'
import ux_4 from '../../Images/ux_4.png'

function UiUx() {
  return (
    <div className='m-0 p-0 bg-light'>
      <section className="Uiux-uiux-page-feature_mobile">
        <div className="container text-left">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <h1 className="uiux-breadcrumbs__txt">
                UI/UX Designing<span className="Red">.</span>
              </h1>
              <div className="uiux-breadcrumb text-left">
                <p className="uiux-why_para text-white mt-2 fs-4">
                  We at Aisoft Solutions are the leading UI/UX design company in Nagpur, Pune, Mumbai, and pan India.
                  We provide top-notch design services across Pan India. We are one of the best companies providing UI/UX design
                  services in Nagpur, India.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 uiux-img_banner_section">
              <img src={DesktopScreen} alt="Desktop Screen" width="100%" className="-uiux-img_mobile" />
            </div>
          </div>
        </div>
      </section>
      <Container className="container-fluid bg-white shadow shadow-lg text-secondary Uiux-bg-all">
        <div className="container Uiux-card_body p-5">
          <div className="row mb-5">
            <h3>Interaction Design</h3>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center ">
              <p className="Uiux-aboutus ">
                UX and UI are the two most important aspects of any design process. One drives the
                other and as they say UI is incomplete without UX and vice-versa. We offer beautiful interaction
                processes that are driven by the most modern technologies to offer a great interactive experience
                for your users.
                User experience is about more than just how easy the application is to use and how nice it looks. UX
                spans the range of visual design, content, interaction design, navigation, features and context to
                deliver a satisfying interaction and transaction experience for the user.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="Uiux-geeks ">
                <img src={ux_1} alt="" className="w-100 Uiux-slick_img" />
              </div>
            </div>
            <div className="Uiux-border_our mt-3 mb-3"></div>
            <h4 className="mb-3">Information Architecture</h4>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="Uiux-geeks">
                <img src={ux_2} alt="" className="w-100 Uiux-slick_img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center">
              <p className="Uiux-aboutus">
                Perfectionizing Information Architecture happens only when it is in the hands of
                experts. We plan a proper information architecture, which gives birth to digital products that are
                bound to change the world. Collaborating new technologies, design methods and business processes to
                formulate digital products that mark a new beginning.
                It includes Requirement Gathering &amp; Analysis, Mapping - User Needs &amp; Expectations, Business Goals,
                Target Platforms, Competitors, etc. then create scope definition..
              </p>
            </div>
            <div className="Uiux-border_our_1 mt-3 mb-3"></div>
            <h3>Mobile UX</h3>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center">
              <p className="Uiux-aboutus">
                Designing pleasurable Mobile UX experiences for people A great mobile UX is the key
                to your customer’s heart. We define and design mobile UX strategies that create excellent B2B and
                B2C functional enterprise mobile apps, which fall in the category of generation next app
                experiences.
                Here first, we analyze your existing product, identify usability / accessibility compliance issues,
                find out challenges &amp; gaps in current UI / UX. Then create new UI / UX design as per assessment
                report created &amp; current trends, do usability testing &amp; refine it further based on feedback from
                testing team.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="Uiux-geeks">
                <img src={ux_3} alt="" className="w-100 Uiux-slick_img" />
              </div>
            </div>
            <div className="Uiux-border_our mt-3 mb-3"></div>
            <h4 className="mb-3">UX Testing</h4>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="Uiux-geeks">
                <img src={ux_4} alt="" className="w-100 Uiux-slick_img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center">
              <p className="Uiux-aboutus">
                All user experience processes housed under one roof Aisoft Solutions is a
                one-stop solution for all your UX design needs. We are a warehouse of UX design services, starting
                from conceptualizing, analyzing, researching, prototyping, designing to the final stage of UX
                testing all under one roof.
                Our approach for Usability Testing is experiential. We design scenarios and experiment with actual
                users from the target industry. We use a variety of tools to test usability of products. Feedback is
                then provided to the design teams to refine and finalize product designs.
              </p>
            </div>
          </div>
          <div className="container mt-2 mb-5 Uiux-container_bg py-3">
            <h4 className="Uiux-aboutheading text-center mb-3 mt-3">
              What we love to do for UX UI Design
            </h4>
            <div className="row align-items-center justify-content-center mt-4">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex Uiux-padding_andriod_uiux">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-square me-3 Uiux-check_and mb-4"></i>
                  <span className="Uiux-why_para">
                    Rich User Interface – Based on high usability
                    standards we provide rich user interface.
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex Uiux-padding_andriod_uiux">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-square me-3 Uiux-check_and mb-4"></i>
                  <span className="Uiux-why_para">
                    Multiple Design Options – we have multiple
                    design options for crafting graphic design.
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex Uiux-padding_andriod_uiux">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-square me-3 Uiux-check_and mb-4"></i>
                  <span className="Uiux-why_para">
                    Reasonable Estimation – We do more than
                    just designing and ensures highest return on your investment
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex Uiux-padding_andriod_uiux">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-square me-3 Uiux-check_and mb-4"></i>
                  <span className="Uiux-why_para">
                    Established Approaches – The skill of latest technologies has empower us
                    to accept best practices
                    and verified methods.
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex Uiux-padding_andriod_uiux">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-square me-3 Uiux-check_and mb-4"></i>
                  <span className="Uiux-why_para">
                    Target Customer’s Needs – We
                    customize our services and solutions as per our client’s request.
                  </span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex Uiux-padding_andriod_uiux">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-square me-3 Uiux-check_and mb-4"></i>
                  <span className="Uiux-why_para">
                    Continuous Update – We always
                    upgrade our work as per current market trends.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <footer className="mobile-app-footer">
              <h2 className="mobile-app-footer-title text-white mb-3 fs-3">  Looking for UI/UX Designing services?</h2>
              <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
            </footer>
        
          </div>
        </Container>
      </div>
  
  );
}

export default UiUx;
