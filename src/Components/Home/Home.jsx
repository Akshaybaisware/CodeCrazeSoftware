import React from "react";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import "./Home.css";

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
import SideImage from "../../Images/sixth_section.jpg"

import BackgroundImage from "../../Images/third_background.jpg";

function Home() {
  const approaches = [
    {
      icon: 'src/Images/gradient-icon-circle-1.png',
      title: 'Best Development Strategy',
      description: 'A streamlined strategy of delivering great web & mobile apps is what Prevoyance Solutions recognized for.'
    },
    {
      icon: 'src/Images/gradient-icon-circle-2.png',
      title: 'Value Added Services',
      description: 'Our value added services guarantee the clients to have outcomes beyond the expectations.'
    },
    {
      icon: 'src/Images/gradient-icon-circle-3.png',
      title: 'Customer Satisfaction',
      description: 'We consider our success on the basis of the clients\' successfully performing websites or mobile apps.'
    },
    {
      icon: 'src/Images/gradient-icon-circle-4.png',
      title: 'Best Technological Solutions',
      description: 'Inspired IT specialists are looking forward to understand the varied project requirements & come up with the superlative solutions.'
    },
    {
      icon: 'src/Images/gradient-icon-circle-5.png',
      title: 'Customer Tailored Support',
      description: 'We are dedicated to ensuring that our customers can contact us in the best way for them.'
    },
    {
      icon: 'src/Images/gradient-icon-circle-6.png',
      title: 'Customize Solutions',
      description: 'Absolutely customized development services are defined for Start-ups, Small businesses & large organizations.'
    },
  ];
  
  return (
    <div>
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

      <Row className="m-0 p-0">
        <Col
          xs={12}
          md={{ span: 6, order: 1 }}
          lg={{ span: 4, order: 1 }}
          className="m-0 p-0"
        >
          <div className="image-container">
            <Image src={Picture5} fluid className="custom-image-height" />
            <Container className="text-overlay">
              <i className="bi bi-pause-fill"></i>
              <h3 className="fw-bold">We design</h3>
              <p>
                Having experience in designing engaging UI, we assure you to
                cater optimal quality solutions that definitely boost business’
                performance incredibly.
              </p>
            </Container>
          </div>
        </Col>
        <Col
          xs={12}
          md={{ span: 6, order: 2, offset: 3 }}
          lg={{ span: 4, order: 2 }}
          className="m-0 p-0 d-flex align-items-center"
        >
          <div className="image-container text-center">
            <Image src={Picture6} fluid className="custom-image-height" />
            <Container className="text-overlay">
              <i className="bi bi-play"></i>
              <h3 className="fw-bold"> We develop</h3>
              <p>
                At Prevoyance Solutions, we are bestowed with dexterity to
                develop all your minutest application development specifications
                acutely & exact to the described requirements.
              </p>
            </Container>
          </div>
        </Col>
        <Col
          xs={12}
          md={{ span: 6, order: 3 }}
          lg={{ span: 4, order: 3 }}
          className="m-0 p-0"
        >
          <div className="image-container text-center">
            <Image src={Picture7} fluid className="custom-image-height" />
            <Container className="text-overlay">
              <i className="bi bi-stop-fill"></i>
              <h3 className="fw-bold">We test it</h3>
              <p>
                Our application development team tests the developed solutions
                thoroughly from the root and ensures satisfactory solution
                delivery within stipulated time.
              </p>
            </Container>
          </div>
        </Col>
      </Row>

      <div className="BackgroundImage">
        <Image src={BackgroundImage}></Image>
        <Container className="position-absolute top-50 start-50 text-center  translate-middle">
          <h1 class="fs-bold">We Work With.</h1>
          <p class="fs-lighter ">
            Prevoyance Solutions is a team of professionals who are striving to
            deliver best IT solution
            <br /> to people we work with..
          </p>
        </Container>
      </div>

      <Container className="Picture-Container">
        <Row className="d-lg-none">
          <Col>
            <Carousel className="Carousel-Image">
              <Carousel.Item>
                <Image
                  src={Picture8}
                  className="d-block w-50"
                  alt="Enterprise Solutions"
                />

                <p className="fs-5 fw-bold">Enterprise Solutions</p>
                <p className="text-black-50">
                  We work with large enterprises as well as small & medium-sized
                  enterprises. We transform the way small, medium & large
                  enterprises conduct their business with customers / clients,
                  vendors / suppliers, partners and employees in this digital
                  age
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={Picture9} className="d-block w-50" alt="Agencies" />

                <p className="fs-5 fw-bold">Agencies</p>
                <p className="text-black-50">
                  We work with consulting companies, independent software
                  vendors (isvs), software product development companies or
                  agencies. We partner with agencies to work on a project
                  end-to-end, or as extended team to build their client's
                  project successfully
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={Picture10}
                  className="d-block w-50"
                  alt="Startups"
                />

                <p className="fs-5 fw-bold">Startups</p>
                <p className="text-black-50">
                  We worked with more than 100+ global tech startups for their
                  web/cloud/ mobile / iot needs. We empower and support startups
                  with our digital expertise & experience at each stage whether
                  you are at Seed stage OR Expansion stage.
                </p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="d-none d-lg-flex">
          <Col xs={6} md={4}>
            <Image src={Picture8} thumbnail />
            <p className="fs-5 fw-bold">Enterprise Solutions</p>
            <p className="text-black-50">
              We work with large enterprises as well as small & medium-sized
              enterprises. We transform the way small, medium & large
              enterprises conduct their business with customers / clients,
              vendors / suppliers, partners and employees in this digital age
            </p>
            <Button
              variant="secondary"
              className="Paragraph mx-4 px-4 rounded-pill"
              size="lg"
            >
              More
            </Button>
          </Col>
          <Col xs={6} md={4}>
            <Image src={Picture9} thumbnail />
            <p className="fs-5 fw-bold">Agencies</p>
            <p className="text-black-50">
              We work with consulting companies, independent software vendors
              (isvs), software product development companies or agencies. We
              partner with agencies to work on a project end-to-end, or as
              extended team to build their client's project successfully
            </p>
            <Button
              variant="secondary"
              className="Paragraph mx-4 px-4 rounded-pill"
              size="lg"
            >
              More
            </Button>
          </Col>
          <Col xs={6} md={4}>
            <Image src={Picture10} thumbnail />
            <p className="fs-5 fw-bold">Startups</p>
            <p className="text-black-50">
              We worked with more than 100+ global tech startups for their
              web/cloud/ mobile / iot needs. We empower and support startups
              with our digital expertise & experience at each stage whether you
              are at Seed stage OR Expansion stage.{" "}
            </p>
            <Button
              variant="secondary"
              className="my-3 mx-4 px-4 Paragraph rounded-pill"
              size="lg"
            >
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

        <Carousel className="bg-dark ">
          <Carousel.Item interval={5000}>
            <ExampleCarouselImage text="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <ExampleCarouselImage1 text="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="business-approach">
      <h2>Our business approach.</h2>
      <p>Every business is different and our approach towards clients makes us stand in crowd, making Prevoyance Solutions as their first choice for IT solutions.</p>
      <div className="approach-list">
        {approaches.map((approach, index) => (
          <div className="approach-item" key={index}>
            <img src={approach.icon} alt={approach.title} />
            <h3>{approach.title}</h3>
            <p>{approach.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="Content-section">
      <div className="content">
        <div className="image-section">
          <img src={SideImage} alt="Team Discussion" className="image"/>
        </div>
        <div className="text-section">
          <h1>Engaging, purposeful, and creative.</h1>
          <p>
            Every business is unique and so are its needs. At Prevoyance Solutions, we provide the best solutions for designing, development, and digital marketing.
          </p>
          <button className="enquire-button">Enquire Us</button>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Home;
