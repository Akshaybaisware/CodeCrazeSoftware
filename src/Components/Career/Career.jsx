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


const OurExpertise = () => {
  const navigate = useNavigate();
  const handleClick = () => {
  
    navigate('/jobdescription');
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
              <Col xs={1} className="d-flex justify-content-center"><FaHeart size={40} color="#ff6b6b" /></Col>
              <Col xs={11}>
                <p className='fs-3 fw-bold'>Be a Host.</p>
                <p className='fs-5 text-black-50'>Care for others and make them feel like they belong. Encourage others to participate to their fullest. Listen, communicate openly and set clear expectations.</p>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center principle-row">
              <Col xs={1} className="d-flex justify-content-center"><FaLightbulb size={40} color="#feca57" /></Col>
              <Col xs={11}>
                <p className='fs-3 fw-bold'>Be a Cereal Entrepreneur.</p>
                <p className='fs-5 text-black-50'>Be bold and apply original thinking. Imagine the ideal outcome. Be resourceful to make the outcome a reality.</p>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center principle-row">
              <Col xs={1} className="d-flex justify-content-center"><FaTrophy size={40} color="#54a0ff" /></Col>
              <Col xs={11}>
                <p className='fs-3 fw-bold'>Champion the mission.</p>
                <p className='fs-5 text-black-50'>Prioritize work that advances the mission and positively impacts the community. Build with the long-term in mind. Actively participate in the community and culture.</p>
              </Col>
            </Row>
            <Row className="mb-4 align-items-center principle-row">
              <Col xs={1} className="d-flex justify-content-center"><FaMountain size={40} color="#1dd1a1" /></Col>
              <Col xs={11}>
                <p  className='fs-3 fw-bold' >Embrace the Adventure.</p>
                <p className='fs-5 text-black-50'>Be curious, ask for help, and demonstrate an ability to grow. Own and learn from mistakes. Bring joy and optimism to work.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="container job-footer border mt-4 pt-4">
      <h4 className="job-title text-gradient">Android Developer</h4>
      <div className="d-flex align-items-center mb-3">
        <FaRegClock className="icon" />
        <span className="mx-2">1-2 Years</span>
        <span className="mx-2">|</span>
        <FaMapMarkerAlt className="icon" />
        <span className="mx-2">Nagpur</span>
      </div>
      <div className="mb-3">
        <strong>Description:</strong> Excellent knowledge in core Java · Hands on experience in the full life cycle of Android application development · Strong knowledge in RESTful web services JSON · Good Knowledge of Android SDK's · Push Notifications & Toast · familiar on open source Eclipse, Android Studio, edit plus
      </div>
      <div className="mb-3">
        <strong>Skills:</strong> Design and build Android mobile applications · Collaborate with cross-functional teams to analyze, design, and ship new features · Fully responsible for mobile app development · Implement new technologies to maximize application performance.
      </div>
      <button className="btn rounded-pill" onClick={handleClick} style={{backgroundColor:"#243859" ,color:"white"}}>View / Apply</button>

    </div>
      </div>
    </div>
  );
};

export default OurExpertise;
