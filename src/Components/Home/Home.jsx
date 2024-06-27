import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Carousel/ExampleCarouselImage.jsx";
import ExampleCarouselImage1 from "../Carousel/ExampleCarouselImage1.jsx";

import Picture1 from "../../Images/TehnologyImage1.jpeg";
import Picture2 from "../../Images/TechnologyImage2.jpg";
import Picture3 from "../../Images/TechnologyImage3.jpg";
import Picture4 from "../../Images/TechnologyImage4.jpg";
import Picture5 from "../../Images/second-section-1.jpg";
import Picture6 from "../../Images/second-section-2.jpg";
import Picture7 from "../../Images/second-section-3.jpg";
import Picture8 from "../../Images/third-section-1.jpg";
import Picture9 from "../../Images/third-section-2.jpg";
import Picture10 from "../../Images/third-section-3.jpg";
import SideImage from "../../Images/sixth_section.jpg";
import BackgroundImage from "../../Images/third_background.jpg";

import "./Home.css";

function Home() {
  const approaches = [
    {
      icon: "src/Images/gradient-icon-circle-1.png",
      title: "Best Development Strategy",
      description: "A streamlined strategy of delivering great web & mobile apps is what Prevoyance Solutions is recognized for."
    },
    {
      icon: "src/Images/gradient-icon-circle-2.png",
      title: "Value Added Services",
      description: "Our value added services guarantee the clients to have outcomes beyond the expectations."
    },
    {
      icon: "src/Images/gradient-icon-circle-3.png",
      title: "Customer Satisfaction",
      description: "We consider our success on the basis of the clients' successfully performing websites or mobile apps."
    },
    {
      icon: "src/Images/gradient-icon-circle-4.png",
      title: "Best Technological Solutions",
      description: "Inspired IT specialists are looking forward to understanding the varied project requirements & come up with the superlative solutions."
    },
    {
      icon: "src/Images/gradient-icon-circle-5.png",
      title: "Customer Tailored Support",
      description: "We are dedicated to ensuring that our customers can contact us in the best way for them."
    },
    {
      icon: "src/Images/gradient-icon-circle-6.png",
      title: "Customize Solutions",
      description: "Absolutely customized development services are defined for Start-ups, Small businesses & large organizations."
    },
  ];

  return (
    <div className="p-0 m-0">
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

      <div className="Home__tiles">
  <Row className="m-0 p-0  Home__tilesRow">
    <Col xs={12} md={6} lg={4} className="m-0 p-0 order-md-1">
      <div style={{ position: 'relative' }}>
        <Image src={Picture5} fluid  />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
          <i className="bi fs-1 bi-pause-fill"></i>
          <h3 className="fw-bold fs-3">We design</h3>
          <p className="fs-6 color-light">
            Having experience in designing engaging UI, we assure you to
            cater optimal quality solutions that definitely boost business’
            performance incredibly.
          </p>
        </div>
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} className="m-0 p-0 order-md-3">
      <div className="text-center" style={{ position: 'relative' }}>
        <Image src={Picture6} fluid className="custom-image-height" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
          <i className="bi fs-1 bi-play"></i>
          <h3 className="fw-bold fs-2">We develop</h3>
          <p className="fs-6 color-light  custom-p-tag ">
            CodeCrazeSoftware Solutions, we are bestowed with dexterity to
            develop all your minutest application development specifications
            acutely & exact to the described requirements.
          </p>
        </div>
      </div>
    </Col>
    <Col xs={12} md={6} lg={4} className="m-0 p-0 order-md-2">
      <div className="text-center" style={{ position: 'relative' }}>
        <Image src={Picture7} fluid  />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
          <i className="bi fs-1 bi-stop-fill"></i>
          <h3 className="fw-bold fs-2">We test it</h3>
          <p className="fs-6 color-light p-0">
            Our application development team tests the developed solutions
            thoroughly from the root and ensures satisfactory solution
            delivery within stipulated time.
          </p>
        </div>
      </div>
    </Col>
  </Row>
</div>




      <div className="BackgroundImage">
        <Image src={BackgroundImage} fluid className="w-100" />
        <Container className="text-overlay position-absolute top-50 start-50 text-center translate-middle">
          <h1 className="fw-bold">We Work With.</h1>
          <p className="fw-light">
            Prevoyance Solutions is a team of professionals who are striving to
            deliver the best IT solutions to the people we work with.
          </p>
        </Container>
      </div>

      <Container className="Picture-Container">
        <Row className="d-lg-none">
          <Col>
            <Carousel className="Carousel-Image">
              <Carousel.Item>
                <Image src={Picture8} className="d-block w-100" alt="Enterprise Solutions" />
                <p className="fs-5 fw-bold">Enterprise Solutions</p>
                <p className="text-black-50">
                  We work with large enterprises as well as small & medium-sized
                  enterprises. We transform the way small, medium & large
                  enterprises conduct their business with customers / clients,
                  vendors / suppliers, partners and employees in this digital
                  age.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={Picture9} className="d-block w-100" alt="Agencies" />
                <p className="fs-5 fw-bold">Agencies</p>
                <p className="text-black-50">
                  We work with consulting companies, independent software
                  vendors (ISVs), software product development companies or
                  agencies. We partner with agencies to work on a project
                  end-to-end, or as an extended team to build their client's
                  project successfully.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={Picture10} className="d-block w-100" alt="Startups" />
                <p className="fs-5 fw-bold">Startups</p>
                <p className="text-black-50">
                  We worked with more than 100+ global tech startups for their
                  web/cloud/mobile/IOT needs. We empower and support startups
                  with our digital expertise & experience at each stage whether
                  you are at Seed stage OR Expansion stage.
                </p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="d-none d-lg-flex">
          <Col xs={12} md={4}>
            <Image src={Picture8} thumbnail />
            <p className="fs-5 fw-bold">Enterprise Solutions</p>
            <p className="text-black-50">
              We work with large enterprises as well as small & medium-sized
              enterprises. We transform the way small, medium & large
              enterprises conduct their business with customers / clients,
              vendors / suppliers, partners and employees in this digital age.
            </p>
            <Button variant="secondary" className="Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <Image src={Picture9} thumbnail />
            <p className="fs-5 fw-bold">Agencies</p>
            <p className="text-black-50">
              We work with consulting companies, independent software vendors
              (ISVs), software product development companies or agencies. We
              partner with agencies to work on a project end-to-end, or as an
              extended team to build their client's project successfully.
            </p>
            <Button variant="secondary" className="Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <Image src={Picture10} thumbnail />
            <p className="fs-5 fw-bold">Startups</p>
            <p className="text-black-50">
              We worked with more than 100+ global tech startups for their
              web/cloud/mobile/IOT needs. We empower and support startups with
              our digital expertise & experience at each stage whether you are
              at Seed stage OR Expansion stage.
            </p>
            <Button variant="secondary" className="Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
        </Row>
      </Container>

      
      <div className="Our_Work">
        <Container className="content-container">
          <h1 className="fs-bold">Our Work.</h1>
          <p className="fs-lighter fs-4">
            Yes, at Prevoyance, we're obsessed with quality. We rely on our
            portfolio to do business and <br /> always ensure that each of our
            web or mobile deliverable is unique and world class.
          </p>
        </Container>

        <Carousel className="bg-dark">
    <Carousel.Item interval={5000}>
      <ExampleCarouselImage text="First slide" />
    </Carousel.Item>
    <Carousel.Item interval={5000}>
      <ExampleCarouselImage1 text="Second slide" />
    </Carousel.Item>
  </Carousel>
      </div>

      <Container className="Home__approachesection">
        <h2 className="text-center mb-5">Our business approach.
        </h2>
        <p> Every business is different and our approach towards clients makes us stand in crowd, making Prevoyance Solutions as their first choice for IT solutions.
        </p>
        <Row>
          {approaches.map((approach, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <div className="approach-card p-3">
                <img src={approach.icon} alt={approach.title} className="icon mb-3" />
                <h3 className="fw-bold">{approach.title}</h3>
                <p>{approach.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

   
    <Container fluid className="padding_fourth p-0">
      <Row className="m-0">
        <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0">
          <Image src={SideImage} alt="Sixth Section" className="sixth_image w-100 h-100" />
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0 text-white d-flex align-items-center">
          <div className="background_sixth p-5 w-100 h-100 d-flex flex-column justify-content-center">
            <h2 className="heading_sixth fw-bold fs-1 mb-5">Engaging,<br/> purposeful, and<br/> creative<span className="extra">.</span></h2>
            <p className="heading_sub_sixth mb-5">
              Every business is unique and so are its needs. At CodeCrazeSoftware solution, we provide the best solutions for designing, development, and digital marketing.
            </p>
            <Button variant="light" className="mt-4 w-50 rounded-pill btn_apply_sixth">
              Enquire Us
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
