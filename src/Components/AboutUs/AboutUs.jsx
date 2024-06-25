import React from 'react';

import './About.css';

const Aboutus = () => {
  return (
    <div className="container ">
      <section className="about-section">
        <h1 id="animatedText"> About Prevoyance Solution Pvt Ltd.</h1>
        <p className="description mt-5">
        We Prevoyance Solutions providing paper free total business solution. We are a client-centered and quality-conscious organization that offers a complete portfolio of Software Development, Website Designing, Mobile Application Development, Digital Marketing, Internet Marketing and Technology Solutions. Founded in year 2009 and headquartered at Nagpur, Prevoyance Solutions has been promoted by some highly experienced professionals dedicated to provide total IT and online solutions under one roof. It possesses not only the latest technology gadgets but also the most knowledgeable and experienced hands to offer most user friendly customized solutions




        </p>
      </section>
      
      <section className="overview-section">
        <h2>Prevoyance Solutions will make your business successful.
        .</h2>
        <p>
          We, Prevoyance Solutions, providing precise and best business solutions. We are a client-oriented and quality-conscious organization that offers a wide range of business solutions and strategies. Our goal is to help businesses achieve success by providing innovative and efficient services. We believe in building trust and maintaining transparency with our clients. Our services include web development, digital marketing, data analysis, and much more. We are dedicated to delivering projects on time and providing technical support to ensure our clients' satisfaction.
        </p>
      </section>
      
      <section className="success-section ">
        <h2>Prevoyance Solutions will make your business successful.</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-bullseye icon"></i>
            <h3>Mission</h3>
            <p>At Prevoyance Solutions, our mission is to provide our clients with the best solutions for their business needs.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-graph-up icon"></i>
            <h3>Capabilities</h3>
            <p>Our capabilities include web development, digital marketing, data analysis, business strategy, and technical support.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-lightbulb icon"></i>
            <h3>Values</h3>
            <p>We value trust, transparency, and client satisfaction. We strive to deliver high-quality services and build long-term relationships with our clients.</p>
          </div>
        </div>
      </section>
      
      <section className="clients-section">
        <h2>Establishing Long-term Business Relationships with Clients.</h2>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="client-logo1.png" alt="Client 1" className="client-logo"/>
            <img src="client-logo2.png" alt="Client 2" className="client-logo"/>
            <img src="client-logo3.png" alt="Client 3" className="client-logo"/>
            <img src="client-logo4.png" alt="Client 4" className="client-logo"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
