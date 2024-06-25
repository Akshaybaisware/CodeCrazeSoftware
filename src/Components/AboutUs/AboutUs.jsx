import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import Conferenza from '../../Images/conferenza.jpg'
import airrnp from '../../Images/airrnp.jpg'
import shipyaari from '../../Images/shipyaari.jpg'
import parkes from "../../Images/parkres.jpg"

const AboutUs = () => {
  return (
    <div className="container m-0 p-0">
      <section className="about-section">
        <h1 id="animatedText">About Prevoyance Solution Pvt Ltd.</h1>
        <p className="description mt-5">
          We Prevoyance Solutions provide paper-free total business solutions. We are a client-centered and quality-conscious organization that offers a complete portfolio of Software Development, Website Designing, Mobile Application Development, Digital Marketing, Internet Marketing, and Technology Solutions. Founded in 2010 and headquartered in Nagpur, Prevoyance Solutions has over 9 years of experience, dedicated to offering premier paper-free solutions. Our team of highly motivated and experienced professionals aims to provide the most timely customized solutions.
        </p>
      </section>

      <Container className='shadow-lg p-3 mb-5 bg-white rounded p-5'>
        <section className="overview-section">
          <h2>CodeCraze Software Solutions will make your business successful.</h2>
          <p>
            We, CodeCraze Software Solutions, provide precise and effective business solutions. We are a client-oriented and quality-conscious organization offering a wide range of business strategies and services. Our goal is to help businesses achieve success through innovation and efficiency. We prioritize building trust and maintaining transparency with our clients. Our services include web development, digital marketing, data analysis, and more. We are dedicated to delivering projects on time and providing comprehensive technical support to ensure client satisfaction.
          </p>
        </section>

        <section className="success-section">
          <h2 className='mb-5'>Key Aspects of CodeCraze Software Solutions</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-bullseye bullseye icon"></i>
              <h3 className='mt-4 mb-3'>Mission</h3>
              <p className='text-left'>
                CodeCraze Software Solutions aims to provide services globally and emerge as a leader in the international market. We emphasize strong human relations and prioritize customer satisfaction at every business level.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-graph-up graph-up icon"></i>
              <h3 className='mb-3 mt-3'>Capabilities</h3>
              <p className='text-left'>
                At CodeCraze Software Solutions, we understand that every business is unique, driven by different goals and needs. Whether you seek revenue growth, cost reduction, or operational efficiency, we provide tailored solutions to meet your specific business objectives.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-lightbulb lightbulb icon"></i>
              <h3 className='mt-2 mb-4'>Core Values</h3>
              <ul className='text-left'>
                <li>Commitment</li>
                <li>Discipline</li>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Teamwork</li>
                <li>Professionalism</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="clients-section">
          <div className="business-relationships">
            <h2>Establishing Long-term Business Relationships with Clients.
            </h2>
            <div className="content">
              <div className="description__businessrelationships mt-5">
                <p className='mt-5' >
                CodeCraze Software Solutions providing paper the total business solution. We are a client-centered and quality-conscious that offers a complete portfolio of Software Development, Website Designing, Mobile Application Developnest Digital Marketing Internet Marketing and Technology Solutions. Founded in your 2009 and headquartered at Nagpur, Prevoyance Solutions har been promoted by some highly experienced professional dedicated to provide total IT and online solution under one roof. It po not only the latest technology gadgets but also the most knowledgeable

                </p>
              </div>
              <div className="logos">
                <img src={Conferenza} alt="Conferenza" />
                <img src={airrnp} alt="Airmp" />
                <img src={shipyaari} alt="Get Mock Test" />
                <img src={parkes} alt="Parkres" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default AboutUs;
