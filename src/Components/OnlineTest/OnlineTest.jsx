import React from 'react';
import './OnlineTest.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ERPImage from '../../Images/online-test.png';
import Accordion from 'react-bootstrap/Accordion';

function OnlineTest() {
  return (
    <div className="container-fluid OnlineTest-us-container m-0 p-0">
      <section className="OnlineTest-us-section">
        <h1 id="animatedText">Online Test System</h1>
        <p className="OnlineTest-us-description my-3">
          Online Test Engine, as the name suggests, is a test engine where administrators can arrange online tests for their students. It is designed for educational institutes to hold all their exams online.
        </p>
      </section>
      <Container className="shadow-lg px-5 py-2 bg-white rounded">
        <header className="OnlineTest-header">
          <p className="OnlineTest-description fs-5 mt-5">
            A student can appear for exams online and get evaluated immediately. Enrolling students, creating tests, assigning them to students, and maintaining result history are all handled, reducing paperwork.
          </p>
        </header>

        <section className="OnlineTest-servicesSection">
          <Row className="flex-column flex-lg-row">
            <Col lg={6} className="OnlineTest-servicesColumn text-black fw-bold">
              <h2 className="OnlineTest-servicesTitle">Our Services</h2>
              <ul className="OnlineTest-servicesList">
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Manage Student list and give authentication to student.
                </li>
                <li className="OnlineTest-serviceItem1 my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Facility to activate user for particular time period or set expiry date.
                </li>
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Search student by Id, Name, College, Qualification, Mobile, Email, Registration Date etc.
                </li>
                <li className="OnlineTest-serviceItem1 my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Export to excel student list.
                </li>
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Track records of registered college user and Companies.
                </li>
                <li className="OnlineTest-serviceItem1 my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Search records by College Name, location, company name.
                </li>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="border-0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="OnlineTest-serviceItem my-3 fw-bold text-black">
                      <span className="OnlineTest-tick">&#10003;</span> Online Test System
                    </Accordion.Header>
                    <Accordion.Body>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Create Category, Sections.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Create Test Category wise like Full length test, Chapterwise, Sectionwise, company wise.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Facility to set expiry date for Test.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Upload Excel format Test Sheet to add questions.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Facility to create Free or Paid Test.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Manage Test like edit, delete, modify expiry date etc.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Assign test to students.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> View Assigned Test.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Facility to take print of Test Paper in proper format.
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="border-0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="OnlineTest-serviceItem my-3 fw-bold text-black">
                      <span className="OnlineTest-tick">&#10003;</span> Test Result Section
                    </Accordion.Header>
                    <Accordion.Body>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> View Test Appeared Students list.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> View students Score Test wise or Date wise.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Facility to export to excel result or print pages.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Graphical format Result generation.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Sectionwise Question Analysis.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Sectionwise Marks Analysis.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Aggregate Marks Analysis.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Comparative Marks Analysis.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Manual paper check facility for descriptive type questions.
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Generate Paper Set of Test, Assign Paper Set, Print Paper Set.
                </li>
                <li className="OnlineTest-serviceItem1 my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Track records of College Student Data list posted by Colleges.
                </li>
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Facility to search records, export to excel data, Assign records to selected companies.
                </li>
                <li className="OnlineTest-serviceItem1 my-3">
                  <span className="OnlineTest-tick">&#10003;</span> View Assigned Records to Companies.
                </li>
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Manage Job posted by Companies.
                </li>
                <li className="OnlineTest-serviceItem1 my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Manage Student Application for Job.
                </li>
                <li className="OnlineTest-serviceItem my-3">
                  <span className="OnlineTest-tick">&#10003;</span> Keep history of Students discussion forum.
                </li>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="border-0">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="OnlineTest-serviceItem1 fw-bold my-3 text-black">
                      <span className="OnlineTest-tick">&#10003;</span> E-learning Videos
                    </Accordion.Header>
                    <Accordion.Body>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Add Branch, Subject, Chapter name.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Add video chapterwise.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Manage video data like search, modify, delete etc.
                      </li>
                      <li className="OnlineTest-serviceItem1 my-3">
                        <span className="OnlineTest-tick">&#10003;</span> User Access rights.
                      </li>
                      <li className="OnlineTest-serviceItem my-3">
                        <span className="OnlineTest-tick">&#10003;</span> Facility to upload videos in Video gallery.
                      </li>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ul>
            </Col>
            <Col lg={6}>
              <img src={ERPImage} alt="Online Test" className="OnlineTest-image img-fluid p-3" />
            </Col>
          </Row>
        </section>

        <footer className="OnlineTest-footer text-center">
        <h2 className="OnlineTest-footerTitle text-white mb-5 fs-3">Looking for Content Management System services?</h2>
          <Button  variant="outline-light" className="  text-white  px-4 fw-bold">
            Register Now
          </Button>
        </footer>
      </Container>
    </div>
  );
}

export default OnlineTest;
