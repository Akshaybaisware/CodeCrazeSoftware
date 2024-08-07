import React from 'react';
import './Career.css';
import { Container, Row, Col, Image,Button } from 'react-bootstrap';
import { FaRegClock, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa'; // Import icons from react-icons


import { FaHeart, FaLightbulb, FaTrophy, FaMountain } from 'react-icons/fa'; // Importing FontAwesome icons
import MicrosoftAsp from '../../Images/ICON/aws.png';
import Angular from '../../Images/ICON/angularjs.png';
import Cprogramming from '../../Images/ICON/c.png';
import golang_logo_icon from '../../Images/ICON/golang_logo_icon.png';
import html5 from '../../Images/ICON/html5.png';
import icons8React from '../../Images/ICON/React.png';
import java from '../../Images/ICON/java.png';
import linux from '../../Images/ICON/linux.png';
import pycharm from '../../Images/ICON/pycharm.png';
import r from '../../Images/ICON/r.png';
import swift from '../../Images/ICON/swift.png';
import Csharp from '../../Images/ICON/Csharp.png';
import postgresql from '../../Images/ICON/postgresql.png';
import typescript from '../../Images/ICON/typescript.png';

import nodejs from '../../Images/ICON/node-js.png';
import Python from '../../Images/ICON/python.png';
import cplus from '../../Images/ICON/C++.png';
import dotnet from '../../Images/ICON/dotnet.png';
import tailwindcss from '../../Images/ICON/tailwindcss.png';
import vuejs from '../../Images/ICON/vue-js.png';
import jquery from '../../Images/ICON/jquery.png';
import expressjs80 from '../../Images/ICON/expressjs80.png';
import { useNavigate } from 'react-router-dom';
import RazerPay from './RazerPay';



const OurExpertise = () => {
  const navigate = useNavigate();
  const handleClick = () => {
  
    navigate('/carrerapply');
    window.scrollTo(0, 0);
};




  return (
    <div className="career-page-feature p-0 m-0 bg-light">
      <div className="career-page__feature1 position-absolute w-100 m-0">
        <Container>
          <p id="animatedText" className="fs-1 fw-bold text-start">
            Career <span className='Red'>.</span>
          </p>
        </Container>
      </div>

      <div className="container position-relative bg-white career-custom-subtle-shadow p-4 rounded career-custom-container">
       
        <section className="row mb-4 career-custom-row">
       
  <Container className='border border-dark Carrer__Webtechnology'>
  <h3 className='my-5 text-center fw-bold '> Technologies</h3>
    <Row>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={MicrosoftAsp} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={Angular} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={Cprogramming} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={golang_logo_icon} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={icons8React} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={html5} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={java} />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={linux} />
      </Col>
    </Row>
    <Row>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={nodejs} alt="Description of image 1" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={pycharm} alt="Description of image 2" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={r} alt="Description of image 3" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={typescript} alt="Description of image 4" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={swift} alt="Description of image 5" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={Python} alt="Description of image 6" />
      </Col>
    </Row>
    <Row>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={cplus} alt="Description of image 1" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={Csharp} alt="Description of image 2" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={dotnet} alt="Description of image 3" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={postgresql} alt="Description of image 4" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={tailwindcss} alt="Description of image 5" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={ vuejs} alt="Description of image 6" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={jquery} alt="Description of image 6" />
      </Col>
      <Col className="d-flex justify-content-center">
        <Image className="small-image" src={expressjs80} alt="Description of image 6" />
      </Col>
    </Row>
  </Container>
</section>
<header className="text-start mb-4 my-4 career-custom-header">
          <h1 className="fs-2 mt-3 fw-bold ">
            We believe in four basic principles
            <span className='Red'>.</span>
          </h1>
        </header>

        <section className="principles-section">
  <Container>
    <Row className="mb-4 align-items-center principle-row">
      <Col xs={1} className="d-flex justify-content-center">
        <FaHeart className="principle-icon" color="#ff6b6b" />
      </Col>
      <Col xs={11}>
        <p className='fs-3 fw-bold'>Be a Host.</p>
        <p className='fs-5 text-black-50'>Care for others and make them feel like they belong. Encourage others to participate to their fullest. Listen, communicate openly and set clear expectations.</p>
      </Col>
    </Row>
    <Row className="mb-4 align-items-center principle-row">
      <Col xs={1} className="d-flex justify-content-center">
        <FaLightbulb className="principle-icon" color="#feca57" />
      </Col>
      <Col xs={11}>
        <p className='fs-3 fw-bold'>Be a Cereal Entrepreneur.</p>
        <p className='fs-5 text-black-50'>Be bold and apply original thinking. Imagine the ideal outcome. Be resourceful to make the outcome a reality.</p>
      </Col>
    </Row>
    <Row className="mb-4 align-items-center principle-row">
      <Col xs={1} className="d-flex justify-content-center">
        <FaTrophy className="principle-icon" color="#54a0ff" />
      </Col>
      <Col xs={11}>
        <p className='fs-3 fw-bold'>Champion the mission.</p>
        <p className='fs-5 text-black-50'>Prioritize work that advances the mission and positively impacts the community. Build with the long-term in mind. Actively participate in the community and culture.</p>
      </Col>
    </Row>
    <Row className="mb-4 align-items-center principle-row">
      <Col xs={1} className="d-flex justify-content-center">
        <FaMountain className="principle-icon" color="#1dd1a1" />
      </Col>
      <Col xs={11}>
        <p className='fs-3 fw-bold'>Embrace the Adventure.</p>
        <p className='fs-5 text-black-50'>Be curious, ask for help, and demonstrate an ability to grow. Own and learn from mistakes. Bring joy and optimism to work.</p>
      </Col>
    </Row>
  </Container>
</section>


        <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">Data Scientist / Senior Data Analyst</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2">5+ years</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Chennai</span>
      </div>
      <div className="mb-3">
        <strong>Responsibilities:</strong>
        Analyze and interpret complex datasets to generate actionable insights.
       Develop predictive models and machine learning algorithms.
      Create data visualizations and reports for stakeholders.
      Collaborate with cross-functional teams to solve business problems.
      </div>
      <div className="mb-3">
        <strong>Qualification:</strong>
        5+ years of experience in data science or analytics.
Proficiency in Python/R, SQL, and data visualization tools.
Strong statistical and machine learning skills.
Excellent communication and problem-solving abilities.
      </div>
      <div className="mb-3">
        <strong>Package:</strong> 
      22-25LPA
      </div>
      <button className="btn rounded-pill" onClick={handleClick} style={{backgroundColor:"#243859" ,color:"white"}}>View / Apply</button>

    </div>
    <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">Senior Software Engineer - Systems</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2"> 5+ years</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Indore</span>
      </div>
      <div className="mb-3">
        <strong>Key Responsibilities:</strong> 
        Design and implement system-level software and APIs.
Optimize software performance and scalability.
Collaborate with cross-functional teams to integrate systems and improve functionality.
Troubleshoot and resolve complex technical issues.
      </div>
      <div className="mb-3">
        <strong>Skills:</strong> 
        5+ years of experience in software engineering with a focus on systems development.
Proficiency in programming languages such as C++, Java, or Python.
Experience with system design, distributed systems, and performance optimization.
Strong problem-solving skills and ability to handle complex technical problems.
      </div>
      <div className="mb-3">
        <strong>Package:</strong> 
      12LPA+
      </div>
      <button className="btn rounded-pill" onClick={handleClick} style={{backgroundColor:"#243859" ,color:"white"}}>View / Apply</button>

    </div>

    <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">kafka</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2">3-4 Years</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Noida</span>
      </div>
      <div className="mb-3">
        <strong>Description:</strong>
        We are looking for a Kafka Developer with 3-4years of experience. The ideal candidate will have expertise in developing, managing, and optimizing Kafka-based data pipelines. Responsibilities include designing and implementing scalable Kafka solutions, ensuring data integrity, and collaborating with cross-functional teams for seamless data flow integration.
      </div>
    
      <div className="mb-3">
        <strong>Package:</strong> 
      12-15LPA
      </div>
      <button className="btn rounded-pill" onClick={handleClick} style={{backgroundColor:"#243859" ,color:"white"}}>View / Apply</button>

    </div>
    <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">ReactJs</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2">Fresher</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Noida/Gurgaon</span>
      </div>
      <div className="mb-3">
        <strong>Description: </strong>
        We are seeking a React Developer (Fresher) with basic knowledge of JavaScript, HTML, CSS, and React.js. Responsibilities include assisting in developing web applications, writing clean code, and collaborating with senior developers. This role requires a keen eye for detail, strong problem-solving skills, and a willingness to learn and adapt.
       </div>
      <div className="mb-3">
        <strong>Skills: </strong>
           HTML , CSS , JAVASCRIPT , REACTJS , BOOTSTRAP 
      </div>
      <div className="mb-3">
        <strong>Package: </strong> 
        4-5.5LPA
      </div>
     
      <button className="btn rounded-pill"  style={{backgroundColor:"#243859" ,color:"white"}}><RazerPay/></button>
    </div>
    <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">Software Tester</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2">Fresher</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Mohali</span>
      </div>
      <div className="mb-3">
        <strong>Description: </strong>
        Software Tester ensures the quality and functionality of software by identifying and reporting bugs through manual or automated testing. They create and execute test plans, collaborate with developers to resolve issues, and ensure that software meets requirements before release. Attention to detail and strong analytical skills are essential in this role.
       </div>
      <div className="mb-3">
        <strong>Skills: </strong>
        Proficiency in tools like Selenium, QTP, JUnit, TestNG, or Cypress for automating test cases.
      </div>
      <div className="mb-3">
        <strong>Package: </strong> 
        3-LPA4
      </div>
     
      <button className="btn rounded-pill" onClick={handleClick} style={{backgroundColor:"#243859" ,color:"white"}}>View / Apply</button>
    </div>
    <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">NodeJS</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2">Fresher</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Noida/Gurgaon</span>
      </div>
      <div className="mb-3">
        <strong>Description: </strong>
        We are seeking a skilled Node.js Developer to join our dynamic team. In this role, you will be responsible for developing and maintaining server-side components, ensuring high performance and responsiveness to requests from the frontend. You will collaborate with front-end developers, design APIs, and work on integrating data storage solutions, all while contributing to the overall software architecture.
       </div>
      <div className="mb-3">
        <strong>Skills: </strong>
        ES6+ , CSS , JAVASCRIPT , Express.js, Koa, or NestJS for building scalable applications , RESTful and/or GraphQL APIs, including authentication and authorization.
      </div>
      <div className="mb-3">
        <strong>Package: </strong> 
        4-5.5LPA
      </div>
     
      <button className="btn rounded-pill"  style={{backgroundColor:"#243859" ,color:"white"}}><RazerPay/></button>
    </div>
    
      </div>
    </div>
  );
};

export default OurExpertise;
