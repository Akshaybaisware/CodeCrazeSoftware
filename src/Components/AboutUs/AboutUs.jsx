import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Conferenza from '../../Images/conferenza.jpg';
import airrnp from '../../Images/airrnp.jpg';
import shipyaari from '../../Images/shipyaari.jpg';
import parkes from "../../Images/parkres.jpg";

const AboutUs = () => {
  return (
    <div className="container-fluid about-us-container m-0 p-0">
      <section className="about-us-section ">
        <h1 id="animatedText">About CodeCrazeSoftware Solution Pvt Ltd.</h1>
        <p className="about-us-description mt-5 ">
        CodeCrazeSoftware Solution Has The Solution Of Every Query, We Provides The Best Solution To Our Clients And Bring Smile On Their Entire Team. Prevoyance Solution Is The Best Software Development, Mobile App Design, Application Testing And Deplopment, Android Ipad And IPhone App Development, Custom Web Application Development Company, Software Testing Companies, UI/UX Design Company, Ecommerce Website Development Company, CRM Website And App Development Company, Content Management System (CMS) Software And Application Company, Enterprise Resource Planning (ERP) Software And Application Development Company, Java Development Company (Java SE, Java Embedded, Java EE), Complete Digital Marketing Services (Search Engine Optimization (SEO) Company & Paid Ads Media Add & PPC), We Are The Best Software Development Company In Nagpur, Pune , Mumbai And India Level Too We Have The Answer Of Every Questions. We Build Proper Strategy For Every Project And Work Accordingly On It With The Expert We Are Having In Our Team. We Deliver The Project On Given Time Interval And Also Provide The Technical Support. We Believe In Building Trust And 100% Transparency.


        </p>
      </section>

      <Container className='shadow-lg p-5 mb-5 bg-white rounded'>
        <section className="about-us-overview-section">
          <h2>Overview About CodeCraze Software Solutions Pvt Ltd.</h2>
          <p className='text-black-50 fs-5'>
            We, CodeCraze Software Solutions, provide precise and effective business solutions. We are a client-oriented and quality-conscious organization offering a wide range of business strategies and services. Our goal is to help businesses achieve success through innovation and efficiency. We prioritize building trust and maintaining transparency with our clients. Our services include web development, digital marketing, data analysis, and more. We are dedicated to delivering projects on time and providing comprehensive technical support to ensure client satisfaction.
          </p>
        </section>

        <section className="about-us-success-section">
          <h2 className='mb-5'>Key Aspects of CodeCraze Software Solutions</h2>
          <Row>
            <Col md={4} className="text-center">
              <i className="bi bi-bullseye about-us-icon"></i>
              <h3 className='mt-5 mb-2'>Mission</h3>
              <p className='text-left fs-5'>
                CodeCraze Software Solutions aims to provide services globally and emerge as a leader in the international market. We emphasize strong human relations and prioritize customer satisfaction at every business level.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <i className="bi bi-graph-up about-us-icon"></i>
              <h3 className='mb-2 mt-5'>Capabilities</h3>
              <p className='text-left fs-5'>
                At CodeCraze Software Solutions, we understand that every business is unique, driven by different goals and needs. Whether you seek revenue growth, cost reduction, or operational efficiency, we provide tailored solutions to meet your specific business objectives.
              </p>
            </Col>
            <Col md={4} className="text-center about-us-core-values">
              <i style={{position:"relative",top:"-0.6em"}} className="bi bi-lightbulb about-us-icon"></i>
              <h3 >Core Values</h3>
              <ul className='about-us-core-values-list'>
                <li>Commitment</li>
                <li>Discipline</li>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Teamwork</li>
                <li>Professionalism</li>
              </ul>
            </Col>
          </Row>
        </section>
        <section className="about-us-clients-section">
  <div className="about-us-business-relationships">
    <h2>Establishing Long-term Business Relationships with Clients.</h2>
    <div className="row about-us-content">
      <div className="about-us-description-businessrelationships mt-5 col-lg-6 col-md-12 col-12">
        <p className='mt-5'>
          CodeCraze Software Solutions providing paper the total business solution. We are a client-centered and quality-conscious company that offers a complete portfolio of Software Development, Website Designing, Mobile Application Development, Digital Marketing, Internet Marketing, and Technology Solutions. Founded in 2009 and headquartered at Nagpur, Prevoyance Solutions has been promoted by some highly experienced professionals dedicated to providing total IT and online solutions under one roof. It offers not only the latest technology gadgets but also the most knowledgeable.
        </p>
      </div>
      <div className="about-us-logos d-flex flex-column align-items-center col-lg-6 col-md-12 col-12">
        <img src={Conferenza} alt="Conferenza" className="about-us-client-logo" />
        <img src={airrnp} alt="Airmp" className="about-us-client-logo" />
        <img src={shipyaari} alt="Get Mock Test" className="about-us-client-logo" />
        <img src={parkes} alt="Parkres" className="about-us-client-logo" />
      </div>
    </div>
  </div>
</section>



      </Container>
    </div>
  );
}

export default AboutUs;
