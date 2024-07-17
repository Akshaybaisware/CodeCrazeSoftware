import React from 'react';
import './FAQ.css';
import { Container } from 'react-bootstrap';

function JobDescription() {
  return (
    <div className="container-fluid FAQ-container m-0 p-0">
      <section className="FAQ-us-section">
        <h1 id="animatedText">FAQs <span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg FAQ__section p-5 bg-white rounded'>

        <section className="FAQ-servicesSection">
          <div className="row flex-column flex-lg-row">
            <div className=" FAQ-servicesColumn text-black fw-bold">
              <h2 className='text-black-50 my-4 large-text'>FAQ for AISOFTSoftware Solutions</h2>
              <ul className='fw-normal large-text FAQ-content fs-5 my-5'>
              <li class="my-2"><strong>What services does AISOFTSoftware Solutions offer?</strong> AISOFTSoftware Solutions provides a range of IT services including mobile application development (iOS, Android, Cross Platform), custom application development, website programming, software testing, and UI/UX designing.</li>
<li class="my-2"><strong>What products are available?</strong> They offer various products such as e-commerce solutions, CRM, CMS, ERP, online test systems, restaurant management software, supermarket software, and center management software.</li>
<li class="my-2"><strong>Do they provide cloud services?</strong> Yes, AISOFTSoftware Solutions offers cloud services, specifically Salesforce and Microsoft Azure.</li>
<li class="my-2"><strong>Who are their typical clients?</strong> They work with large enterprises, small & medium-sized enterprises, consulting companies, independent software vendors, and tech startups.</li>
<li class="my-2"><strong>How can I contact AISOFTSoftware Solutions?</strong> You can reach them via email at CodeSoftwareSolution@gmail.com, or call 9503007527/9403452788. Their office is located at address Nagpur medical square.</li>
<li class="my-2"><strong>What industries do you specialize in?</strong> AISOFTSoftware Solutions specializes in various industries including healthcare, retail, finance, education, and hospitality.</li>
<li class="my-2"><strong>Do you offer consulting services?</strong> Yes, they provide consulting services to help businesses optimize their IT strategies and solutions.</li>
<li class="my-2"><strong>What is your approach to project management?</strong> They use agile methodology to ensure flexibility and efficient project delivery.</li>
<li class="my-2"><strong>Can I see examples of your work?</strong> Yes, they have a portfolio showcasing their past projects, available upon request.</li>
<li class="my-2"><strong>How do I start a project with AISOFTSoftware Solutions?</strong> You can start by contacting them through email or phone to discuss your project requirements and goals.</li>
<li class="my-2"><strong>Do you offer maintenance and support services?</strong> Yes, they provide ongoing maintenance and support for all their products and services.</li>
<li class="my-2"><strong>Are your services customizable?</strong> Absolutely, they tailor their solutions to meet the specific needs of each client.</li>
<li class="my-2"><strong>What is your pricing model?</strong> Pricing varies depending on the project scope and requirements. They offer competitive rates and flexible payment options.</li>
<li class="my-2"><strong>Do you offer training for your software products?</strong> Yes, training sessions are available to help clients effectively use and manage the software solutions provided.</li>
<li class="my-2"><strong>How can I stay updated with your latest offerings?</strong> You can subscribe to their newsletter or follow them on social media for the latest updates and announcements.</li>

              </ul>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default JobDescription;
