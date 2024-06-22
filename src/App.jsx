import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./App.css";
import Logo from './Images/Logo.svg';
import Picture1 from './Images/TehnologyImage1.jpeg';
import Picture2 from './Images/TechnologyImage2.jpg';
import Picture3 from './Images/TechnologyImage3.jpg';
import Picture4 from './Images/TechnologyImage4.jpg';

function NavScrollExample() {
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
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 p-3 text-uppercase justify-content-center">
                <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                <NavDropdown title={<span className="text-white">ABOUT US</span>} id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item className="text-white  " href="#aboutus">About Us</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#ourexpertise">Our Expertise</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#whyprevoyancesoloution">Why Prevoyance Solution</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className="text-white">PRODUCTS</span>} id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item className="text-white" href="#e-commerce">E-Commerce Solution</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#crm">CRM (Customer Relationship Management)</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#cms">CMS (Content Management System)</NavDropdown.Item>
                  <NavDropdown.Item className="text-white  text-wrap" href="#erp">ERP (Enterprise)</NavDropdown.Item>
                  <NavDropdown.Item  className="text-white  text-wrap" href="#online-test">Online Test System</NavDropdown.Item>
                  <NavDropdown.Item className="text-white  text-wrap"  href="#restaurant-management">Restaurant Management</NavDropdown.Item>
                  <NavDropdown.Item className="text-white  text-wrap" href="#super-market-software">Super Market Software</NavDropdown.Item>
                  <NavDropdown.Item className="text-white  text-wrap" href="#center-management-software">Center Management Software</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#career" className="text-white">Career</Nav.Link>
                <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
                <Nav.Link href="#contact" className="text-white">Contact Us</Nav.Link>
                <NavDropdown title={<span className="text-white">SERVICES</span>} id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item className="text-white  text-wrap" href="#mobile-application-development">Mobile Application Development</NavDropdown.Item>
                  <NavDropdown.Item className="text-white  text-wrap" href="#custom-application-development">Custom Application Development</NavDropdown.Item>
                  <NavDropdown.Item className="text-white  text-wrap" href="#website-programming-development">Website Programming and Development</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#software-testing">Software Testing</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#ui-ux">UI/UX</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#" className="d-flex text-white mx-auto align-items-center navbar-center">
            <Image src={Logo} rounded style={{ width: '65px', marginRight: '10px', position: "relative", top: "0.7em" }} />
            <div className="d-flex flex-column text-white text-wrap">
              <span>CODECRAZE SOFTWARE</span>
              <span> SOLUTION</span>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Picture1}
            alt="First slide"
            style={{ maxHeight: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Picture2}
            alt="Second slide"
            style={{ maxHeight: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Picture3}
            alt="Third slide"
            style={{ maxHeight: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Picture4}
            alt="Fourth slide"
            style={{ maxHeight: "90vh" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NavScrollExample;
