import React from 'react';
import './SuperMarket.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CmsImage from '../../Images/Food.jpg'; 

function SuperMarketManagement() {
  return (
    <div className="container-fluid supermarket-management-container m-0 p-0">
      <section className="supermarket-management-section">
        <h1 id="animatedText">Super Market Software <span className='Red'>.</span></h1>
        <p className="supermarket-management-description mt-5">
          We Provide Perfect Retail POS (Point Of Sales) Solutions To Manage Your Billing, Serialized Inventory Based Supermarket, Grocery, Hypermarket, Convenience Retail Store Business With Our Retail Software Integrated With Retail Pos And Billing Software.
        </p>
      </section>
      <Container className='shadow-lg p-5 bg-white rounded'>
        <header className="supermarket-management-header">
          <p className="supermarket-management-header-description fs-5 mt-2">
            Our Software consists of POS, billing, inventory, business intelligence, MIS reports, CRM, and accounting modules. This simplifies the task of managing your retail business and in turn increases operational efficiency & improves customer relationships.
          </p>
        </header>

        <section className="supermarket-management-services-section">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 supermarket-management-services-column text-black fw-bold">
              <ul className="supermarket-management-services-list">
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to add cash memo and take payment and print cash memo receipt.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to register user details.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can add vendor details.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can add Customer type details.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to add customer details.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to add discount details.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to add product units.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Discount (by percentage, amount, total order)
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to add taxes details.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to add product category, subcategory, and product details.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can add product purchase details.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can add pending payment detail of vendor.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> View pending details of vendor.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> View invoice details.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can view report of pending purchase order.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can view report of pending payment.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Admin can add purchase order details.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Display list of purchase order.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Facility to generate bill and view bill details.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> View outstanding report.
                </li>
                <li className="supermarket-management-service-item1 my-3"><span className="supermarket-management-tick">&#10003;</span> Verify purchase order.
                </li>
                <li className="supermarket-management-service-item my-3"><span className="supermarket-management-tick">&#10003;</span> Daily record of login persons details.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 supermarket-management-image-column">
              <img src={CmsImage} alt="CRM Diagram" className="supermarket-management-image img-fluid" />
            </div>
          </div>
        </section>

        <footer className="supermarket-management-footer">
          <h2 className="supermarket-management-footer-title text-white mb-5 fs-3">Looking for Content Management System services?</h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  );
}

export default SuperMarketManagement;
