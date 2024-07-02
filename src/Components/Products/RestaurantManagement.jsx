import React from 'react';
import './RestaurantManagement.css';
import { Container,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CmsImage from '../../Images/cms-1.jpg'; 

function RestaurantManagement() {
  return (
    <div className="container-fluid restaurant-management-container m-0 p-0">
      <section className="restaurant-management-section">
        <h1 id="animatedText">Restaurant Management</h1>
        <p className="restaurant-management-description mt-5">
          Restaurant Management Systems Are The Crucial Technology Components That Enable A Single Outlet Or Enterprise To Better Serve Its Customers And Aid Employees With Food And Beverage Transactions And Controls.
        </p>
      </section>
      <Container className='shadow-lg p-5 bg-white rounded'>
        <header className="restaurant-management-header">
          <p className="restaurant-management-header-description fs-5 mt-2">
            This software offers Point Of Sale, Inventory and Menu Management Systems, Reservations and Table Management, Back office applications.
          </p>
        </header>

        <section className="restaurant-management-services-section">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 restaurant-management-services-column text-black fw-bold">
              <ul className="restaurant-management-services-list">
                <li className="restaurant-management-service-item my-3"><span className="restaurant-management-tick">&#10003;</span> Faster access of the Point-of-Sale system with the help of big icons on the home screen
                </li>
                <li className="restaurant-management-service-item1 my-3"><span className="restaurant-management-tick">&#10003;</span> Sales and purchase entries
                </li>
                <li className="restaurant-management-service-item my-3"><span className="restaurant-management-tick">&#10003;</span> KOT generation
                </li>
                <li className="restaurant-management-service-item1 my-3"><span className="restaurant-management-tick">&#10003;</span> Invoice generation
                </li>
                <li className="restaurant-management-service-item my-3"><span className="restaurant-management-tick">&#10003;</span> Migration / Product Upgrade</li>
                <li className="restaurant-management-service-item1 my-3"><span className="restaurant-management-tick">&#10003;</span> Calculation of tax
                </li>
                <li className="restaurant-management-service-item my-3"><span className="restaurant-management-tick">&#10003;</span> Customer details
                </li>
                <li className="restaurant-management-service-item1 my-3"><span className="restaurant-management-tick">&#10003;</span> Discount (by percentage, amount, total order)
                </li>
                <li className="restaurant-management-service-item my-3"><span className="restaurant-management-tick">&#10003;</span> Cash out (by cash, cheque, credit cards, complimentary)
                </li>
                <li className="restaurant-management-service-item1 my-3"><span className="restaurant-management-tick">&#10003;</span> Legacy Applications Upgradation, Enhancement & Performance Tuning</li>
                <li className="restaurant-management-service-item my-3"><span className="restaurant-management-tick">&#10003;</span> The order entry screen is provided in such a way that the user can enter the order by pressing a series of keys in the keyboard. Mouse can also be used for entering orders.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 restaurant-management-image-column">
              <img src={CmsImage} alt="CRM Diagram" className="restaurant-management-image img-fluid" />
            </div>
          </div>
        </section>

        <footer className="restaurant-management-footer">
          <h2 className="restaurant-management-footer-title text-white mb-5 fs-3">Looking for Content Management System services?
          </h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  )
}

export default RestaurantManagement;
