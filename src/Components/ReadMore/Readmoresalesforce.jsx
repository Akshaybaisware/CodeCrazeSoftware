import React from 'react';
import './ReadMore.css';
import { Container } from 'react-bootstrap';

function EcommerceSolution() {
  return (
    <div className="container-fluid ReadMoreMobileDescription-container m-0 p-0">
      <section className="ReadMoreMobileDescription-us-section">
        <h1 id="animatedText">Blogs.</h1>
      </section>
      <Container className='shadow-lg ReadMoreMobile__section p-5 bg-white rounded'>
        <header className="ReadMoreMobile-header my-3">
          <p className='fs-2 fw-bold'>Salesforce: A Comprehensive Guide.</p>
        </header>

        <nav className="ReadMoreMobile-navigation my-4">
          <ul className="fs-5 fw-bold">
            <li><a href="#what-is-salesforce">What is Salesforce?</a></li>
            <li><a href="#importance">Importance</a></li>
            <li><a href="#job-opportunities">Job opportunities in Salesforce</a></li>
            <li><a href="#statistical-data">Statistical data</a></li>
            <li><a href="#emerging-career">Value in emerging career</a></li>
          </ul>
        </nav>

        <section className="ReadMoreMobile-servicesSection">
          <div>
            <div className="ReadMoreMobile-servicesColumn my-4 text-black fw-bold">
              <h2 id="what-is-salesforce">What is Salesforce?</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Salesforce is a management of customer relationships, which is cloud based platform. It enables business to manage customer data, sales operations, and marketing campaigns. It provides customers with a platform to develop their own applications without following the tough steps that they used to follow in legacy systems. Once the application is created, it can be uploaded onto the cloud, so that end users can view them. It helps marketing, sales, commerce, service, and IT teams work as one from anywhere.
                <br />
                It is also called CRM (Customer Relationship Management), which is a technology for managing all company relationships and interactions with potential customers. The goal is to improve business interactions. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability. You can access Salesforce through a web browser, mobile app, or desktop application. Salesforce stores data in a single database schema.
              </p>

              <h2 id="importance">Importance of Salesforce</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                It allows growing the business with its flexibility for business service and process.
                <ul className="fs-5 fw-normal text-light-emphasis blue-bullets">
                  <li>EFFECTIVE: Easily customized to meet the requirements of any organization.</li>
                  <li>EASY: Easy to use; users can save a lot of time.</li>
                  <li>FAST: It is quick in comparison to traditional CRM.</li>
                  <li>Can have an overview of competitors in the same industry.</li>
                  <li>Analyze growth and decline of business tracking performance.</li>
                </ul>
              </p>

              <h2 id="job-opportunities">Job Opportunities in Salesforce</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                As already mentioned above, it offers diverse Salesforce jobs and growth trajectories to its employees. Some of the major ones have been discussed below:
              </p>
              <ul className="fs-5 fw-normal text-light-emphasis blue-bullets">
                <li>Salesforce Administrator</li>
                <li>Salesforce Business Analyst</li>
                <li>Salesforce Developer</li>
                <li>Salesforce Consultant</li>
                <li>Salesforce Platform Manager</li>
                <li>Salesforce Solution Architect</li>
              </ul>

              <p className="fs-5 fw-normal text-light-emphasis">
                Job opportunities posted: According to IDC, the Salesforce Economy will provide over 548,400 new direct jobs in India from 2019 through 2024.
              </p>

              <h2 id="statistical-data">Statistical Data</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                [Include relevant statistical data here.]
              </p>

              <h2 id="emerging-career">Value in Emerging Career</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                A Salesforce Developer: Salesforce development role needs someone who is good at Salesforce admin and also can do coding and object-oriented programming. Apex is the coding language in the Salesforce, however, you don’t need to be an expert.
                <br />
                Enhancement of Your Career Growth: It is highly advisable to learn advanced Salesforce development for a high increase in salary but it also comes with higher responsibility depending on your organization's goals and project scope.
              </p>

              <h2>Industries Making Salesforce a Core Performer</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                There are many organizations who are investing in Salesforce to shift from IT to cloud and CRM is performing greatly in every sector.
              </p>

              <h2>A Salesforce Career Gives Candidates High Potential</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                A Salesforce employee has a high earning potential not only in the present but also in the future. Working in any of the Salesforce roles helps the candidate to gain a strong skill set. Hence he/she can aim for higher salaries after gaining experience.
                <br />
                Salesforce jobs are some of the most secure and fastest-growing jobs in the world.
                <br />
                For many years Salesforce has been the most popular CRM tool for businesses, and the reason for this is the extensive range of services accessible to businesses of all types and sizes.
                <br />
                Employers highly value Salesforce certification, which gives you a leg up on the competition by aligning yourself with the world’s first CRM platform, which continues to expand year after year.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default EcommerceSolution;
