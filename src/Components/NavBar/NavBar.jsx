import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'; 
import { NavLink } from "react-router-dom";


import Logo from '../../Images/Logo.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark-gradient">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="ms-auto" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 p-3 text-uppercase justify-content-center">
              <Nav.Link as={NavLink} to="/" className="text-white">Home</Nav.Link>
              <NavDropdown title={<span className="text-white">ABOUT US</span>} id="offcanvasNavbarDropdown-expand-lg">
                <NavDropdown.Item as={NavLink} to="/aboutus" className="text-white">About Us</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/ourexpertise" className="text-white">Our Expertise</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/whycodecraze" className="text-white">Why CodeCraze</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span className="text-white">PRODUCTS</span>} id="offcanvasNavbarDropdown-expand-lg">
                <NavDropdown.Item as={NavLink} to="/e-commerce" className="text-white">E-Commerce Solution</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/crm" className="text-white text-wrap">CRM (Customer Relationship Management)</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/cms" className="text-white text-wrap">CMS (Content Management System)</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/erp" className="text-white text-wrap">ERP (Enterprise)</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/onlinetest" className="text-white text-wrap">Online Test System</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/restaurant-management" className="text-white text-wrap">Restaurant Management</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/super-market-software" className="text-white text-wrap">Super Market Software</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/center-management-software" className="text-white text-wrap">Center Management Software</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/career" className="text-white">Career</Nav.Link>
              <Nav.Link as={NavLink} to="/blog" className="text-white">Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="text-white">Contact Us</Nav.Link>
              <NavDropdown title={<span className="text-white">SERVICES</span>} id="offcanvasNavbarDropdown-expand-lg">
                <NavDropdown.Item as={NavLink} to="/mobile-application-development" className="text-white text-wrap">Mobile Application Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/custom-application-development" className="text-white text-wrap">Custom Application Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/website-programming-development" className="text-white text-wrap">Website Programming and Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/software-testing" className="text-white">Software Testing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/ui-ux" className="text-white">UI/UX</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand as={NavLink} to="/" className="d-flex text-white mx-auto align-items-center navbar-center">
          <Image src={Logo} rounded style={{ width: '65px', marginRight: '10px', position: "relative", top: "0.7em" }} />
          CODECRAZE SOFTWARE<br />
          SOLUTION
        </Navbar.Brand>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavBar;
