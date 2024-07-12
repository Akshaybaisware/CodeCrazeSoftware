import React from 'react'
import './CRM.css'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import CrmImage from '../../Images/CRM.webp'; 

function CRM() {
  return (
    <div className="container-fluid Crm-us-container m-0 p-0">
    <section className="Crm-us-section ">
        <h1 id="animatedText" >Customer Relationship Management<span className='Red'>.</span> </h1>
        <p className="Crm-us-description mt-2  ">
        Customer Relationship Management (CRM) Is A Technique That Helps Businesses Manage Their Interactions With Customers
           </p>
      </section>
      <Container className='shadow-lg p-5    bg-white rounded'>
            <header className="Crm-header">
        
        <p className="Crm-description fs-5">
       CodeCrazeSoftware Solution is the Best CRM website and App Development company all over in Nagpur Pune Mumbai and pan India, We not only into CRM application development company in Nagpur but also we provide Service & support in various ways to our clients all over in Nagpur Pune Mumbai and pan India, we are the top Customer relationship management company in Nagpur. Customer relationship management (CRM) is a technique that helps businesses manage their interactions with customers. It often involves studying a large amount of information through data analysis. Most of the time, when people use the term "CRM," they're referring to a CRM system, a device that helps in productivity, sales management, and other areas. Every business is aware about the importance about Customer Relationship Management system very well, Today every business is using the CRM system. They all are keeping same for maintaining every single data of their company. Customer relationship management is basically a combination of Practice, Strategies and Technologies that a Company use to manage and analyses the current analytics of the company. Prevoyance Solution is the best CRM application development company in Nagpur. We the Prevoyance Solution is the best CRM software based service provider Company in Nagpur as well as in Pune Mumbai and pan India. Collaboration and productivity can be increased with visibility and simple access to data. Many small businesses and startups begin by only keeping track of their leads in an email marketing platform and their client list in a spreadsheet. For a while, that works just great, but then things start to fall apart. It can be difficult to keep track of everything, particularly for businesses striving to expand. There may be inconsistencies across various databases if your data is stored in various locations. Your team's ability to condense everything can be slowed down by something as basic as someone forgetting to update one spreadsheet. It might be challenging to understand how various connections or businesses are connected when critical information is separated. So there is a need of using Customer Relationship Management Software for every company.



        </p>
      </header>

      <section className="Crm-servicesSection">
  <div className="row flex-column flex-lg-row">
    <div className="col-lg-6 Crm-servicesColumn text-black fw-bold">
      <h2 className="Crm-servicesTitle">Our Services</h2>
      <ul className="Crm-servicesList my-5">
        <li className="Crm-serviceItem my-3"><span className="Crm-tick">&#10003;</span> Consulting & Planning</li>
        <li className="Crm-serviceItem1 my-3"><span className="Crm-tick">&#10003;</span> Implementation & Deployment</li>
        <li className="Crm-serviceItem my-3"><span className="Crm-tick">&#10003;</span> Customization, Integration & Enhancement</li>
        <li className="Crm-serviceItem1 my-3"><span className="Crm-tick">&#10003;</span> Support & Maintenance</li>
        <li className="Crm-serviceItem my-3"><span className="Crm-tick">&#10003;</span> Migration / Product Upgrade</li>
        <li className="Crm-serviceItem1 my-3"><span className="Crm-tick">&#10003;</span> Consolidation & Integration</li>
        <li className="Crm-serviceItem my-3"><span className="Crm-tick">&#10003;</span> Independent Validation & Verification</li>
        <li className="Crm-serviceItem1 my-3"><span className="Crm-tick">&#10003;</span> B2B, B2C, C2C & C2B Portals</li>
        <li className="Crm-serviceItem my-3"><span className="Crm-tick">&#10003;</span> Custom Application & Module / Plugin Development</li>
        <li className="Crm-serviceItem1 my-3"><span className="Crm-tick">&#10003;</span> Legacy Applications Upgradation, Enhancement & Performance Tuning</li>
      </ul>
    </div>
    <div className="col-lg-6 Crm-imageColumn">
      <img src={CrmImage} alt="CRM Diagram" className="Crm-image img-fluid"/>
    </div>
  </div>
</section>

<footer className="Crm-footer">
  <h2 className="Crm-footerTitle text-white mb-5 fs-3">Looking for Customer Relationship Management services?</h2>
  <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
</footer>





        </Container>
      </div>
  )
}

export default CRM