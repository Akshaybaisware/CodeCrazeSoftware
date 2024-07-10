  import React from 'react';
  import './CentermanagementSoftware.css';
  import { Container,Accordion } from 'react-bootstrap';
  import Button from 'react-bootstrap/Button';
  import DesktopScreen from '../../Images/Desktop-screen.jpg'; 

  function Centermanagement() {
    return (
      <div  className="container-fluid centermanagement-management-container m-0 p-0">
        <section className="centermanagement-management-section">
          <h1 id="animatedText">Center Management System. </h1>
          <p className="centermanagement-management-description mt-5">
          Center Management System Software Offers A Feature-Rich Solution For Any Institute, Center, With Integrated Registration, Enquiry Details, User Relationship Management & More!


          </p>
        </section>
        <Container className='shadow-lg p-5 bg-white rounded'>
          

          <section className="centermanagement-management-services-section">
            <div className="row flex-column flex-lg-row">
              <div className="col-lg-6 centermanagement-management-services-column text-black fw-bold">
                <ul className="centermanagement-management-services-list">
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add courses and set fee ranges .

                  </li>
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add joining status of regiistrations.

                  </li>
                  <li className="centermanagement-management-service-item1 my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add mode of enquiry.

                  </li>
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add stream of courses.

                  </li>
                  <li className="centermanagement-management-service-item1 my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can create new center and add center details-Address,head of center,center name,contact no. etc.

                  </li>
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Facility to add discount details.
                  </li>
                  <li className="centermanagement-management-service-item1 my-3"><span className="centermanagement-management-tick">&#10003;</span> Facility to add product units.
                  </li>
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add user details of perticular academy,user can be user or manager, and create their username and password for login.

                  </li>
                  <li className="centermanagement-management-service-item1 my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can create new batch of perticular venues.

                  </li>
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add venue detail.

                  </li>
                  <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                  <Accordion.Header className="centermanagement-management-service-item1 my-3 text-black"><span className="centermanagement-management-tick">&#10003;</span> Inventory
                  </Accordion.Header >
                  <Accordion.Body>
                    
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add venue detail.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add inventory details such as student study materials, papers, etc.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Add video chapterwise.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Add video size limitations.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Assign video to students.</li>

        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
     
        
                     <Accordion.Header className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Transaction
                  </Accordion.Header>
                  <Accordion.Body>
                  <li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add student registration of a particular academy.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can add payment details of a student in a particular academy.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can update student details.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can update payment details.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can issue inventory to students.</li>
<li className="centermanagement-management-service-item my-3"><span className="centermanagement-management-tick">&#10003;</span> Admin can insert and update student photo and signature.</li>

        </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
                
                </ul>
              </div>
              <div className="col-lg-6 centermanagement-management-image-column">
                <img src={DesktopScreen} alt="CRM Diagram" className="centermanagement-management-image img-fluid" />
              </div>
            </div>
          </section>

          <footer className="centermanagement-management-footer">
            <h2 className="centermanagement-management-footer-title text-white mb-5 fs-3">Looking for Content Management System services?</h2>
            <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
          </footer>
        </Container>
      </div>
    );
  }

  export default Centermanagement;
