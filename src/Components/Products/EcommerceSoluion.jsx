import React from 'react'
import './EcommerceSolutions.css'
import { Container, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import EcommerceSolutions from '../../Images/E-commerceSolutions.webp'; 

function CRM() {
  return (
    <div className="container-fluid EcommerceSolutions-us-container m-0 p-0">
      <section className="EcommerceSolutions-us-section">
        <h1 id="animatedText"> E-Commerce Solutions <span className='Red'>.</span></h1>
        <p className="EcommerceSolutions-us-description mt-5">
          The Websites Which Are Into Online Shopping’s Are Ecommerce Website. Ecommerce Basically Means Buying Or Selling The Goods And Services, Transferring The Money With The Help Of Internet Online. Ecommerce Website Are Also Known As Internet Commerce.
        </p>
      </section>
      <Container className='shadow-lg p-5 bg-white rounded'>
        <header className="EcommerceSolutions-header">
          <p className="EcommerceSolutions-description fs-5">
            AISOFTSoftware Solutions is the best ecommerce website design and development company in Nagpur Pune Mumbai and pan India, Ecommerce website break down the locations barriers and helps you to sell the products to a large number of audience through digital platforms. This helps the audience to stay away from the crowded stores and makes easier to get their products at their place Prevoyance Solutions is the company which design and develop the best ecommerce website according to the requirement for the clients and We provide support to the Ecommerce website in term of consulting, planning, maintenance, Mobile Commerce & Social Commerce etc., We help small, medium and large entrepreneur for developing and designing their ecommerce website. Our faculty also provides all kind of technical support to the client require after development. All team members are experienced enough and well trained on the latest e-commerce platform including but not limited to; Amazon, eBay, Shopify, Cdiscount and Groupon. Additionally, you will get monthly metrics and analysis reports that will show how effective your account is. Prevoyance Solutions provides the Best Ecommerce Website Design & Development Services all over in Nagpur Pune Mumbai India.
          </p>
        </header>
        <section className="EcommerceSolutions-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 EcommerceSolutions-servicesColumn text-black fw-bold">
              <h2 className="EcommerceSolutions-servicesTitle">Our Services </h2>
              <ul className="EcommerceSolutions-servicesList my-5">
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Consulting & Planning</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Implementation & Deployment</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Customization & Enhancement</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Support & Maintenance</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Migration / Product Upgrade</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Consolidation & Integration</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Independent Validation & Verification</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> B2B, B2C, C2C & C2B Portals</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Point-of-Sales (POS) Systems Integration</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Inventory Management</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Mobile Commerce & Social Commerce</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Market Place & Vendor Management</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Design / Theme Integration</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Middleware Development - Web Services / API</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Social Network Integration (Like Facebook, Twitter, LinkedIn, etc.)</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Third Party Tools (Like Chat, Forum, Blog, Search Engine etc.)</li>
                <li className="EcommerceSolutions-serviceItem my-3"><span className="EcommerceSolutions-tick">&#10003;</span> Bug Fixing, Support, Maintenance, Enhancements & Performance Tuning in Existing Application</li>
              </ul>
            </div>
            <div className="col-lg-6 EcommerceSolutions-imageColumn">
              <img src={EcommerceSolutions} alt="CRM Diagram" className="EcommerceSolutions-image img-fluid"/>
            </div>
          </div>
        </section>
        <footer className="EcommerceSolutions-footer">
          <h2 className="EcommerceSolutions-footerTitle text-white mb-5 fs-3">Looking for Customer Relationship Management services?</h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  )
}

export default CRM
