import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import shipyaari from '../../Images/shipyaari.jpg';
import airrnp from '../../Images/airrnp.jpg';
import getmock from '../../Images/getmock.jpg';
import parkers from '../../Images/parkres.jpg';

import Picture1 from "../../Images/TechnologyImage1.png";
import Picture2 from "../../Images/TechnologyImage2.png";
import Picture3 from "../../Images/TechnologyImage3.png";
import Picture4 from "../../Images/TechnologyImage4.png";
import Picture5 from "../../Images/second-section-1.png";
import Picture6 from "../../Images/second-section-3.jpg";
import Picture7 from "../../Images/second-section-2.png";
import Picture8 from "../../Images/third-section-1.jpg";
import Picture9 from "../../Images/third-section-2.jpg";
import Picture10 from "../../Images/third-section-3.jpg";
import SideImage from "../../Images/sixth_section.jpg";
import BackgroundImage from "../../Images/third_background.jpg";

import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate =useNavigate();
  const approaches = [
    {
      icon: "src/Images/Business-development-startrgy.png",
      title: "Best Development Strategy",
      description: "A streamlined strategy of delivering great web & mobile apps is what Aisoft Solutions is recognized for."
    },
    {
      icon: "src/Images/valule-added-services.jpg",
      title: "Value Added Services",
      description: "Our value added services guarantee the clients to have outcomes beyond the expectations."
    },
    {
      icon: "src/Images/Customer_Satisfaction.jpeg",
      title: "Customer Satisfaction",
      description: "We consider our success on the basis of the clients' successfully performing websites or mobile apps."
    },
    {
      icon: "src/Images/technology.jpeg",
      title: "Best Technological Solutions",
      description: "Inspired IT specialists are looking forward to understanding the varied project requirements & come up with the superlative solutions."
    },
    {
      icon: "src/Images/Customer_tailored_support.jpeg",
      title: "Customer Tailored Support",
      description: "We are dedicated to ensuring that our customers can contact us in the best way for them."
    },
    {
      icon: "src/Images/cutomer.png",
      title: "Customize Solutions",
      description: "Absolutely customized development services are defined for Start-ups, Small businesses & large organizations."
    },
  ];

  const ClickForMore = () => {
    
    navigate('/enterprice');
    window.scrollTo(0, 0);
  }
  const ClickForMore1 = () => {
    
    navigate('/agency');
    window.scrollTo(0, 0);
  }
  const ClickForMore2 = () => {
    
    navigate('/startup');
    window.scrollTo(0, 0);
  }
  

  return (
    <div className="p-0 m-0 Home" >
      <Carousel className="mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100 Home__Image"
            src={Picture3}
            alt="First slide"
            style={{ minHeight: "50vh",  backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
             
             }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Home__Image"
            src={Picture2}
            alt="Second slide"
            style={{ minHeight: "50vh",  backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              
             }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Home__Image"
            src={Picture1}
            alt="Third slide"
            style={{ minHeight: "50vh",   backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              
             }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Home__Image"
            src={Picture4}
            alt="Fourth slide"
            style={{ minHeight: "50vh",  backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              
             }}
          />
        </Carousel.Item>
      </Carousel>
      <div className="Home__tiles">
  <Row className="m-0 p-0 Home__tilesRow">
    <Col xs={12} md={6} lg={4} className="m-0 p-0 order-md-1">
      <div style={{ position: 'relative' }}>
        <Image src={Picture5} fluid style={{ height: '400px', objectFit: 'cover' }} />
        <div className="Home__tileContent">
          <i className="bi icon-large bi-pencil" style={{ color: 'black' }}></i>
          <h3 className="fw-bold fs-2" style={{ color: 'black' }}>We design</h3>
          <p className="fs-5" style={{ color: 'black' }}>
            Having experience in designing engaging UI, we assure you to
            cater optimal quality solutions that definitely boost business’
            performance incredibly.
          </p>
        </div>
      </div>
    </Col>
    <Col xs={12} md={12} lg={4} className="m-0 p-0 order-md-3">
      <div className="text-center" style={{ position: 'relative' }}>
        <Image src={Picture6} fluid style={{ height: '400px', objectFit: 'cover' }} />
        <div className="Home__tileContent">
          <i className="bi icon-large bi-code-slash" style={{ color: 'black' }}></i>
          <h3 className="fw-bold fs-2" style={{ color: 'black' }}>We develop</h3>
          <p className="fs-5 custom-p-tag" style={{ color: 'black' }}>
            At AISOFT Software Solutions, we are bestowed with dexterity to
            develop all your minutest application development specifications
            acutely & exact to the described requirements.
          </p>
        </div>
      </div>
    </Col>
    <Col xs={12} md={6} lg={4} className="m-0 p-0 order-md-2">
      <div className="text-center" style={{ position: 'relative' }}>
        <Image src={Picture7} fluid style={{ height: '400px', objectFit: 'cover' }} />
        <div className="Home__tileContent">
          <i className="bi icon-large bi-check2-circle" style={{ color: 'black' }}></i>
          <h3 className="fw-bold fs-2" style={{ color: 'black' }}>We test it</h3>
          <p className="fs-5 p-0" style={{ color: 'black' }}>
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
  <Image src={BackgroundImage} fluid className="w-100  Home__BackgroundImage" />
  <Container className="text-overlay position-absolute top-0 start-50 text-center translate-middle">
    <h1 className="fw-bold fs-1">We Work With.</h1>
    <p className="fs-5 text-body-secondary">
      AISOFTSoftware Solutions is a team of professionals who are striving to
      deliver the best IT solutions to the people we work with.
    </p>
  </Container>

  <Container className="Home-Picture-Container">

    <Row className="d-md-none">
      <Col>
        <Carousel className="Home-Carousel-Image">
          <Carousel.Item>
            <Image src={Picture8} className="d-block w-100 Home-Image" alt="Enterprise Solutions" />
            <p className="fs-5 fw-bold">Enterprise Solutions</p>
            <p className="text-black-50">
              We work with large enterprises as well as small & medium-sized
              enterprises. We transform the way small, medium & large
              enterprises conduct their business with customers / clients,
              vendors / suppliers, partners and employees in this digital age.
            </p>
            <Button onClick={ClickForMore}  variant="secondary" className="Home-Paragraph1 mx-4 px-4  rounded-pill"  size="lg">
          More
        </Button>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Picture9} className="d-block w-100 Home-Image" alt="Agencies" />
            <p className="fs-5 fw-bold">Agencies</p>
            <p className="text-black-50">
              We work with consulting companies, independent software
              vendors (ISVs), software product development companies or
              agencies. We partner with agencies to work on a project
              end-to-end, or as an extended team to build their client's
              project successfully.
            </p>
            <Button variant="secondary" onClick={ClickForMore1}  className="Home-Paragraph1 mx-4 px-4 rounded-pill" size="lg">
          More
        </Button>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Picture10} className="d-block w-100 Home-Image" alt="Startups" />
            <p className="fs-5 fw-bold">Startups</p>
            <p className="text-black-50">
              We worked with more than 100+ global tech startups for their
              web/cloud/mobile/IOT needs. We empower and support startups
              with our digital expertise & experience at each stage whether
              you are at Seed stage OR Expansion stage.
            </p>
            <Button variant="secondary"  onClick={ClickForMore2}  className="Home-Paragraph1 mx-4 px-4 rounded-pill" size="lg">
          More
        </Button>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Carousel>
      <Carousel.Item>
        <Row className="d-none d-lg-none d-md-flex">
          <Col xs={12} md={6}>
            <Image src={Picture8} className="Home-Image img-fluid" />
            <p className="fs-3 fw-bold">Enterprise Solutions</p>
            <p className="text-black-50 fs-5 mb-4">
              We work with large enterprises as well as small & medium-sized
              enterprises. We transform the way small, medium & large
              enterprises conduct their business with customers / clients,
              vendors / suppliers, partners and employees in this digital age.
            </p>
            <Button variant="secondary" onClick={ClickForMore} className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Image src={Picture9} className="Home-Image img-fluid" />
            <p className="fs-3 fw-bold">Agencies</p>
            <p className="text-black-50 fs-5 mb-4">
              We work with consulting companies, independent software vendors
              (ISVs), software product development companies or agencies. We
              partner with agencies to work on a project end-to-end, or as an
              extended team to build their client's project successfully.
            </p>
            <Button variant="secondary" onClick={ClickForMore1} className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="d-none d-lg-none d-md-flex">
          <Col xs={12} md={6}>
            <Image src={Picture9} className="Home-Image img-fluid" />
            <p className="fs-3 fw-bold">Agencies</p>
            <p className="text-black-50 fs-5 mb-4">
              We work with consulting companies, independent software vendors
              (ISVs), software product development companies or agencies. We
              partner with agencies to work on a project end-to-end, or as an
              extended team to build their client's project successfully.
            </p>
            <Button variant="secondary" onClick={ClickForMore1} className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Image src={Picture10} className="Home-Image img-fluid" />
            <p className="fs-3 fw-bold">Startups</p>
            <p className="text-black-50 fs-5 mb-4">
              We worked with more than 100+ global tech startups for their
              web/cloud/mobile/IOT needs. We empower and support startups with
              our digital expertise & experience at each stage whether you are
              at Seed stage OR Expansion stage.
            </p>
            <Button variant="secondary"  onClick={ClickForMore2}  className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
              More
            </Button>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>

  
    <Row className="d-none d-lg-flex ">
      <Col xs={12} md={4}>
        <Image src={Picture8} className="Home-Image img-fluid" />
        <p className="fs-3 fw-bold">Enterprise Solutions</p>
        <p className="text-black-50 fs-5  mb-4">
          We work with large enterprises as well as small & medium-sized
          enterprises. We transform the way small, medium & large
          enterprises conduct their business with customers / clients,
          vendors / suppliers, partners and employees in this digital age.
        </p>
        <Button variant="secondary" onClick={ClickForMore} className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
          More
        </Button>
      </Col>
      <Col xs={12} md={4}>
        <Image src={Picture9} className="Home-Image img-fluid" />
        <p className="fs-3 fw-bold">Agencies</p>
        <p className="text-black-50 fs-5 mb-4">
          We work with consulting companies, independent software vendors
          (ISVs), software product development companies or agencies. We
          partner with agencies to work on a project end-to-end, or as an
          extended team to build their client's project successfully.
        </p>
        <Button variant="secondary" onClick={ClickForMore1} className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
          More
        </Button>
      </Col>
      <Col xs={12} md={4}>
        <Image src={Picture10} className="Home-Image img-fluid" />
        <p className="fs-3 fw-bold">Startups</p>
        <p className="text-black-50 fs-5 mb-4">
          We worked with more than 100+ global tech startups for their
          web/cloud/mobile/IOT needs. We empower and support startups with
          our digital expertise & experience at each stage whether you are
          at Seed stage OR Expansion stage.
        </p>
        <Button variant="secondary" onClick={ClickForMore2} className="Home-Paragraph mx-4 px-4 rounded-pill" size="lg">
          More
        </Button>
      </Col>
    </Row>
  </Container>
</div>


      
      <div className="Home__carousel ">
        <Container className="Home__Description text-center mb-5 ">
        <p className="fs-1 fw-bold ">Our Work</p>
        <p className=" fs-5 text-black-50 " >Yes, at AISOFT Software, we're obsessed with quality. We rely on our portfolio to do business and<br/> always ensure that each of our web or mobile deliverable is unique and world class.
        </p>
        </Container>
      <Carousel data-bs-theme="dark" interval={3000} className="Homecarousel__image"> 
        <Carousel.Item>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <img className="d-block w-100" src={shipyaari} alt="Shipyaari" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-sm-block">
              <img className="d-block w-100" src={airrnp} alt="AirRNP" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-md-block">
              <img className="d-block w-100" src={getmock} alt="GetMock" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-lg-block">
              <img className="d-block w-100" src={parkers} alt="Parkers" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <img className="d-block w-100" src={airrnp} alt="AirRNP" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-sm-block">
              <img className="d-block w-100" src={getmock} alt="GetMock" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-md-block">
              <img className="d-block w-100" src={parkers} alt="Parkers" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-lg-block">
              <img className="d-block w-100" src={shipyaari} alt="Shipyaari" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <img className="d-block w-100" src={getmock} alt="GetMock" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-sm-block">
              <img className="d-block w-100" src={parkers} alt="Parkers" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-md-block">
              <img className="d-block w-100" src={shipyaari} alt="Shipyaari" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 d-none d-lg-block">
              <img className="d-block w-100" src={airrnp} alt="AirRNP" />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>





    <Container className="Home__approachesection">
  <p className="text-center fs-1 fw-bold Our__business">Our business approach.</p>
  <p className="text-body-secondary mb-5 text-center">Every business is different and our approach towards clients makes us stand in the crowd, making AISOFTSoftware solution their first choice for IT solutions.</p>

  <Row className="mx-5 text-center">
    {approaches.map((approach, index) => (
      <Col key={index} xs={12} md={6} lg={4} className="mb-4">
        <div className="approach-card p-3">
          <img src={approach.icon} alt={approach.title} className="icon mb-3 icon-large" />
          <h3 className="fw-bold">{approach.title}</h3>
          <p className="text-body-secondary">{approach.description}</p>
        </div>
      </Col>
    ))}
  </Row>
</Container>

   


<Container fluid className="padding_fourth p-0 m-0">
  <Row className="m-0">
    <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0 m-0">
      <Image src={SideImage} alt="Sixth Section" className="sixth_image" style={{ width: '100%', height: '67vh' }} />
    </Col>
    <Col xl={6} lg={6} md={12} sm={12} xs={12} className="p-0 m-0 text-white d-flex align-items-center" >
      <div className="background_sixth p-5 w-100 d-flex flex-column justify-content-center" style={{ height: '67vh'  }}>
      <h2 className="heading_fifth fw-bold mb-9 fs-4" >
          Engaging,<br /> purposeful, and<br /> creative<span className="extra">.</span>
        </h2>
        <p className="heading_sub_sixth mb-0 fs-5">
          Every business is unique and so are its needs. At AISOFTSoftware solution, we provide the best solutions for designing, development, and digital marketing.
        </p>
        <Button variant="light" onClick={() => window.location.href='/contact'} className="mt-2 rounded-pill btn_apply_sixth">
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
