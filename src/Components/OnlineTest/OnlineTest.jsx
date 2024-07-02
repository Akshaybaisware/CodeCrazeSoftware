import React from 'react';
import './OnlineTest.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ERPImage from '../../Images/EPR.png';
import Accordion from 'react-bootstrap/Accordion';

function OnlineTest() {
  return (
    <div className="container-fluid ERP-us-container m-0 p-0">
      <section className="ERP-us-section">
        <h1 id="animatedText">Online Test System</h1>
        <p className="ERP-us-description my-5">
          Online Test Engine, as the name suggests, is a test engine where administrators can arrange online tests for their students. It is designed for educational institutes to hold all their exams online.
        </p>
      </section>
      <Container className="shadow-lg p-5 bg-white rounded">
        <header className="ERP-header">
          <p className="fs-2 fw-bold my-2">What We Do In Enterprise Resource Planning</p>
          <p className="ERP-description fs-5 mt-5">
            A student can appear for exams online and get evaluated immediately. Enrolling students, creating tests, assigning them to students, and maintaining result history are all handled, reducing paperwork.
          </p>
        </header>

        <section className="ERP-servicesSection">
          <Row className="flex-column flex-lg-row">
            <Col lg={6} className="ERP-servicesColumn text-black fw-bold">
              <h2 className="ERP-servicesTitle">Our Services</h2>
              <ul className="ERP-servicesList">
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Manage Student list and give authentication to student.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Facility to activate user for particular time period or set expiry date.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Search student by Id, Name, College, Qualification, Mobile, Email, Registration Date etc.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Export to excel student list.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Track records of registered college user and Companies.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Search records by College Name, location, company name.</li>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="border-0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header 
                      className="ERP-serviceItem my-3 fw-bold text-black"><span className="ERP-tick">&#10003;</span> Online Test System
                    </Accordion.Header>
                    <Accordion.Body>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Create Category, Sections.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Create Test Category wise like Full length test, Chapterwise, Sectionwise, company wise.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Facility to set expiry date for Test.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Upload Excel format Test Sheet to add questions.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Facility to create Free or Paid Test.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Manage Test like edit, delete, modify expiry date etc.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Assign test to students.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> View Assigned Test.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Facility to take print of Test Paper in proper format.</li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="border-0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="ERP-serviceItem my-3 fw-bold text-black"><span className="ERP-tick">&#10003;</span> Test Result Section
                    </Accordion.Header>
                    <Accordion.Body>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> View Test Appeared Students list.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> View students Score Test wise or Date wise.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Facility to export to excel result or print pages.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Graphical format Result generation.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Sectionwise Question Analysis.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Sectionwise Marks Analysis.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Aggregate Marks Analysis.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Comparative Marks Analysis.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Manual paper check facility for descriptive type questions.</li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Generate Paper Set of Test, Assign Paper Set, Print Paper Set.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Track records of College Student Data list posted by Colleges.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Facility to search records, export to excel data, Assign records to selected companies.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> View Assigned Records to Companies.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Manage Job posted by Companies.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Manage Student Application for Job.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Keep history of Students discussion forum.</li>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="border-0">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="ERP-serviceItem1 fw-bold my-3 text-black"><span className="ERP-tick">&#10003;</span> E-learning Videos
                    </Accordion.Header>
                    <Accordion.Body>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Add Branch, Subject, Chapter name.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Add video chapterwise.</li>
                      <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Add video size limitations.</li>
                      <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Assign video to students.</li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Facility to upload files in Doc File, PDF, PPT format.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> E-learning course Material.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Facility to add Opening Notice for Colleges.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Facility to add E-announcement for students.</li>
                <li className="ERP-serviceItem my-3"><span className="ERP-tick">&#10003;</span> Manage Testimonials or Feedback given by User.</li>
                <li className="ERP-serviceItem1 my-3"><span className="ERP-tick">&#10003;</span> Add Career and Courses information.</li>
              </ul>
            </Col>
            <Col lg={6} className="ERP-imageColumn">
              <img src={ERPImage} alt="CRM Diagram" className="ERP-image img-fluid" />
            </Col>
          </Row>
        </section>

        <footer className="ERP-footer">
          <h2 className="ERP-footerTitle text-white mb-5 fs-3">Looking for Content Management System services?</h2>
          <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
        </footer>
      </Container>
    </div>
  );
}

export default OnlineTest;
