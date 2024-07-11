import React from 'react';
import './ReadMore.css';
import { Container,Image } from 'react-bootstrap';
import Saleforce_blog1 from '../../Images/saleforceblog1.png'
import Saleforce_blog2 from '../../Images/saleforceblog2.png'
import Saleforce_blog3 from '../../Images/salesforceskill.webp'
import salesforcesalesrevenue from '../../Images/salesforce-sales-revenue.png'


function EcommerceSolution() {
  return (
    <div className="container-fluid ReadMoreMobileDescription-container m-0 p-0">
      <section className="ReadMoreMobileDescription-us-section">
        <h1 id="animatedText">Blogs <span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg ReadMoreMobile__section p-5 bg-white rounded'>
        <header className="ReadMoreMobile-header my-3">
          <p className='fs-4 fw-bold'>Salesforce: A Comprehensive Guide.</p>
        </header>

        <nav className="ReadMoreMobile-navigation my-4">
          <ul className="fs-6 fw-bold">
            <li><a href="#what-is-salesforce">What is Salesforce  <span className='Red'>?</span></a></li>
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
              <p className="fs-6 fw-normal text-light-emphasis">
                Salesforce is a management of customer relationships, which is cloud based platform. It enables business to manage customer data sales operation and marketing campaign it provides customer with a platform to develop their own application without following the tough step that they have used to follow in legacy system. It enables business to manage customer data sales operation and marketing campaign it provides customer with a platform to develop their own application without following the tough step that they have used to follow in the legacy system. Once the application is created it can be uploaded on to the cloud, so that and users can view them. It help are marketing, sales, commerce, service and IT team work as one from anywhere.
                <br />
                It is also called CRM (Customer Relationship Management), which is a technology for managing all company relationships and interactions with potential customers. The goal is to improve business interactions. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability. You can access Salesforce through a web browser, mobile app, or desktop application. Salesforce stores data in a single database schema.
              </p>
              
              <h2 id="importance">Salesforce servic</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
                <ul className="fs-6 fw-normal text-light-emphasis Ecommerce_list">
                  <li>SAAS(Salesforce As A Service)- You can directly obtained the build in software and made use of it.</li>
                  <li>PAAS (Platform As A Service)- it offers you the same work and platform to build your apps and websites.</li>
                  <li>IAAS(Infrastructure As A Service)- it place or vital role in sales force development, although not very widely used.</li>
                </ul>
              </p>

              <h2 id="importance">Importance of Salesforce</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
                It allows growing the business with its flexibility for business service and process.
                <ul className="fs-6 fw-normal text-light-emphasis Ecommerce_list">
                  <li>EFFECTIVE: Easily customized to meet the requirements of any organization.</li>
                  <li>EASY: Easy to use; users can save a lot of time.</li>
                  <li>FAST: It is quick in comparison to traditional CRM.</li>
                  <li>Can have an overview of competitors in the same industry.</li>
                  <li>Analyze growth and decline of business tracking performance.</li>
                </ul>
              </p>
              <h3>BENEFITS OF SALESFORCE</h3>
              <ul className="fs-6 fw-normal text-light-emphasis Ecommerce_list">
                <li>Better Time Management.</li>
                <li>Ultimate Accessibility.</li>
                <li>Increased Revenue.</li>
                <li>Greater Customer Satisfaction.</li>
                <li>Simple Account Planning.</li>
                <li>Trusted Reporting.</li>
                <li>Improved Team Collaboration.</li>
              </ul>
              <h3>SALESFORCE CLOUD SERVICES</h3>
              <ul className="fs-6 fw-normal text-light-emphasis Ecommerce_list">
                <li className='my-1'><strong>SALESFORCE CLOUD:</strong> The most essential and popular product of Salesforce, used to manage company’s sales.</li>
                <li className='my-1'><strong>MARKETING CLOUD:</strong> Crucial for business operations, enabling campaign management and email marketing.</li>
                <li className='my-1'><strong>ANALYTICS CLOUD:</strong> Allows users to create visually appealing dashboards to analyze business trends.</li>
                <li className='my-1'><strong>SALESFORCE APP CLOUD:</strong> Enables development of custom apps that run on the Salesforce platform.</li>
                <li className='my-1'><strong>SALESFORCE SERVICE CLOUD:</strong> Supports customer service teams in managing customer interactions and support.</li>
              </ul>

              <h2 id="job-opportunities">Job Opportunities in Salesforce</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
                As already mentioned above, it offers diverse Salesforce jobs and growth trajectories to its employees. Some of the major ones have been discussed below:
              </p>
              <ul className="fs-6 fw-normal text-light-emphasis Ecommerce_list">
                <li>Salesforce Administrator</li>
                <li>Salesforce Business Analyst</li>
                <li>Salesforce Developer</li>
                <li>Salesforce Consultant</li>
                <li>Salesforce Platform Manager</li>
                <li>Salesforce Solution Architect</li>
              </ul>

              <p className="fs-6 fw-normal text-light-emphasis">
                Job opportunities posted: According to IDC, the Salesforce Economy will provide over 548,400 new direct jobs in India from 2019 through 2024.
              </p>

              <h2 id="statistical-data">Statistical Data</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
               <Image src={salesforcesalesrevenue} width={"500vh"}></Image>
              </p>

              <h2 id="emerging-career">Value in Emerging Career</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
                A Salesforce Developer: Salesforce development role needs someone who is good at Salesforce admin and also can do coding and object-oriented programming. Apex is the coding language in the Salesforce, however, you don’t need to be an expert.
                <br />
                Enhancement of Your Career Growth: It is highly advisable to learn advanced Salesforce development for a high increase in salary but it also comes with higher responsibility depending on your organization's goals and project scope.
              </p>

              <h2>Industries Making Salesforce a Core Performer</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
              Tab-key focus is captured inside an element by FocusTrap's cdkTrapFocus directive in Angular. This is meant to be used to make components like modal dialogues, where emphasis needs to be limited, more accessible.

.
              </p>
              <div>
              <h2>Announce changes with LiveAnnouncer
              </h2>
              <p className="fs-6 fw-normal text-light-emphasis">
              When something on the website changes, screen readers must be notified of the change. Imagine trying to submit a form or finish a transaction wit hout being aware that an error has appeared and prevented it. That is annoying!
To make sure screen readers are informed of notifications and real-time page changes, an aria-live region is utilised with LiveAnnouncer to announce messages for users of screen readers.



.
              </p>
              <Image src={Saleforce_blog1}></Image>
              <p>Job opportunities posted : According to IDC, the Salesforce Economy will provide over 548,400 new direct jobs in India from 2019 through 2024.

</p>
              </div>
              <div>
              <h2>Announce changes with LiveAnnouncer</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
                There are many organizations who are investing in Salesforce to shift from IT to cloud and CRM is performing greatly in every sector.
              </p>
              <Image src={Saleforce_blog2}></Image>
              </div>
      
       <div>    
<h2>ENHANCEMENT OF YOUR CAREER GROWTH:- it is highly advisable to learn
</h2>
<Image src={ Saleforce_blog3 }></Image>
</div>           <h2>Control focus with FocusTrap
              </h2>
              <p className="fs-6 fw-normal text-light-emphasis">
                There are many organizations who are investing in Salesforce to shift from IT to cloud and CRM is performing greatly in every sector.
              </p>


              <h2>A Salesforce Career Gives Candidates High Potential</h2>
              <p className="fs-6 fw-normal text-light-emphasis">
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
