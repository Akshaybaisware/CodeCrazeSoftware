import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";

import Logo from './Images/Logo.svg';
import Picture1 from './Images/TehnologyImage1.jpeg';
import Picture2 from './Images/TechnologyImage2.jpg';
import Picture3 from './Images/TechnologyImage3.jpg';
import Picture4 from './Images/TechnologyImage4.jpg';
import Picture5 from './Images/second-section-1.jpg';
import Picture6 from './Images/second-section-2.jpg';
import Picture7 from './Images/second-section-3.jpg';
import BackgroundImage from './Images/third_background.jpg'

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
                  <NavDropdown.Item className="text-white" href="#aboutus">About Us</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#ourexpertise">Our Expertise</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#whyprevoyancesoloution">Why Prevoyance Solution</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className="text-white">PRODUCTS</span>} id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item className="text-white" href="#e-commerce">E-Commerce Solution</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#crm">CRM (Customer Relationship Management)</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#cms">CMS (Content Management System)</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#erp">ERP (Enterprise)</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#online-test">Online Test System</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#restaurant-management">Restaurant Management</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#super-market-software">Super Market Software</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#center-management-software">Center Management Software</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#career" className="text-white">Career</Nav.Link>
                <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
                <Nav.Link href="#contact" className="text-white">Contact Us</Nav.Link>
                <NavDropdown title={<span className="text-white">SERVICES</span>} id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item className="text-white text-wrap" href="#mobile-application-development">Mobile Application Development</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#custom-application-development">Custom Application Development</NavDropdown.Item>
                  <NavDropdown.Item className="text-white text-wrap" href="#website-programming-development">Website Programming and Development</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#software-testing">Software Testing</NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="#ui-ux">UI/UX</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#" className="d-flex text-white mx-auto align-items-center navbar-center">
            <Image src={Logo} rounded style={{ width: '65px', marginRight: '10px', position: "relative", top: "0.7em" }} />
            CODECRAZE SOFTWARE<br/>
            SOLUTION
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
      
      <Row className='m-0 p-0'>
  <Col xs={12} md={{ span: 6, order: 1 }} lg={{ span: 4, order: 1 }} className='m-0 p-0'>
    <div className='image-container'>
      <Image src={Picture5} fluid className='custom-image-height' />
      <Container className='text-overlay'>
        <i className="bi bi-pause-fill"></i>
        <h3 className='fw-bold'>We design</h3>
        <p>Having experience in designing engaging UI, we assure you to cater optimal quality solutions that definitely boost business’ performance incredibly.</p>
      </Container>
    </div>
  </Col>
  <Col xs={12} md={{ span: 6, order: 2, offset: 3 }} lg={{ span: 4, order: 2 }} className='m-0 p-0 d-flex align-items-center'>
    <div className='image-container text-center'>
      <Image src={Picture6} fluid className='custom-image-height' />
      <Container className='text-overlay'>
        <i className="bi bi-play"></i>
        <h3 className='fw-bold'> We develop</h3>
        <p>At Prevoyance Solutions, we are bestowed with dexterity to develop all your minutest application development specifications acutely & exact to the described requirements.</p>
      </Container>
    </div>
  </Col>
  <Col xs={12} md={{ span: 6, order: 3 }} lg={{ span: 4, order: 3 }} className='m-0 p-0'>
    <div className='image-container text-center'>
      <Image src={Picture7} fluid className='custom-image-height' />
      <Container className='text-overlay'>
        <i className="bi bi-stop-fill"></i>
        <h3 className='fw-bold'>We test it</h3>
        <p>Our application development team tests the developed solutions thoroughly from the root and ensures satisfactory solution delivery within stipulated time.</p>
      </Container>
    </div>
  </Col>
</Row>

    

      
      <div className='BackgroundImage'>
        <Image  src={BackgroundImage}></Image>
        <Container className='position-absolute top-50 start-50 text-center  translate-middle'>
        <h1 class="fs-bold">We Work With.</h1>
<p class="fs-lighter fs-4">Prevoyance Solutions is a team of professionals who are striving to deliver best IT solution<br/> to people we work with..</p>

    </Container>
        </div>
    


       </div>
  );
}

export default NavScrollExample;
