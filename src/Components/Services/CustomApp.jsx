import React from 'react';
import { Container, Button } from 'react-bootstrap';
import DesktopScreen from '../../Images/center_1.png';
import Img1 from '../../Images/ICON/img-1.svg';
import Img2 from '../../Images/ICON/img-2.svg';
import Img3 from '../../Images/ICON/img-3.svg';
import Img4 from '../../Images/ICON/img-4.svg';
import Img5 from '../../Images/ICON/img-5.svg';
import './CustomApp.css';

function CustomApp() {
  return (
    <div className='m-0 p-0  bg-light'>
      <section className="custom-app-page-feature-mobile">
        <Container>
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <h1 className="custom-app-breadcrumbs-txt">
                Custom Application Development<span className="Red">.</span>
              </h1>
              <div className="custom-app-breadcrumb">
                <p className="custom-app-why-para text-white mt-2">
                  We help you build high-end, technology-driven, and result-oriented solutions that empower you to gain competitive advantages. Our experts and highly skilled developers help you develop and align solutions to your business needs. Custom Application Development&nbsp;is the designing of software applications as per user requirement. In contrast to the more conventional, standard software that is used by the majority, this customized software is made to meet specific requirements within an organization.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12 custom-app-img-banner-section">
              <img src={DesktopScreen} alt="Desktop Screen" width="100%" className="custom-app-img-mobile" />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="custom-app-bg-all">
          <div className="custom-app-card-body p-5">
            <div className="py-4">
              <h3 className="mb-3 custom-app-about-heading">
                Here are six benefits of custom application development compared to off-the-shelf software<span className="custom-app-extra">.</span>
              </h3>
            </div>
            <div className="row px-5 custom-app-padding-platform">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 custom-app-padding-custom">
                <div className="custom-app-geek">
                  <img src={Img1} alt="Tailor-made" width="30%" />
                  <h4 className="custom-app-custom-heading-new">It’s tailor-made</h4>
                  <p className="custom-app-para-custom mt-3">
                    Custom application development's first benefit is, it is created for your organization's exact needs. This means all your needs will be met, will save time and cost efficient as well.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 custom-app-padding-custom-left">
                <div className="custom-app-geek">
                  <img src={Img2} alt="Adaptable" width="30%" />
                  <h4 className="custom-app-custom-heading-new">It’s adaptable</h4>
                  <p className="custom-app-para-custom mt-3">
                    Custom applications can be tailored to meet your present and future requirements. As the application is developed for you and your company you can handle any issues or changes required with the help of your own development team.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 custom-app-padding-custom mt-5">
                <div className="custom-app-geek">
                  <img src={Img3} alt="Compatible" width="30%" />
                  <h4 className="custom-app-custom-heading-new">It’s compatible</h4>
                  <p className="custom-app-para-custom mt-3">
                    Most businesses are using different software to handle various operations within various departments which creates compatibility issues. Custom application helps you overcome this drawback.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 custom-app-padding-custom-left mt-5">
                <div className="custom-app-geek">
                  <img src={Img4} alt="Secure" width="30%" />
                  <h4 className="custom-app-custom-heading-new">It’s more secure</h4>
                  <p className="custom-app-para-custom mt-3">
                    Standard software is more vulnerable to hackers, as many businesses are using it. But, custom applications are much more secure as it is used within the company with layers of protection.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 custom-app-padding-custom mt-5">
                <div className="custom-app-geek">
                  <img src={Img5} alt="Easy to use"  width="30%" />
                  <h4 className="custom-app-custom-heading-new">It’s easy to use</h4>
                  <p className="custom-app-para-custom mt-3">
                  Understanding a new program is always difficult, but it becomes even more time- consuming and confusing when it wasn’t purpose-built for your business. Every person would need to be trained in it, and when it comes to software that contains more high- level information — for example, a database — it would be extremely arduous to coach someone who has no experience in the field to use it. Take a salesperson who wants to reach the data contained in a database — they may need help from your data specialists for a long time before they can use it themselves. Custom applications can negate this by using a friendly language that describes the needs of its users, opening it up to every stakeholder rather than only professionals.


                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 custom-app-padding-custom-left mt-5">
                <div className="custom-app-geek">
                  <img src={Img5} alt="Automated" width="30%" />
                  <h4 className="custom-app-custom-heading-new">It’s automated</h4>
                  <p className="custom-app-para-custom mt-3">
                  We briefly mentioned workflows before, but it’s such a huge part of business efficiency that it has to be stressed. With custom application development, you can ensure that manual and repetitive tasks are being automated, saving you time and freeing up your employees to deal with the important things that only humans can do. Whether it’s sending emails or automatically moving data, custom software can remove the boring chores and make your business more effective.


                  </p>
                </div>
              </div>
              <p className="custom-app-why-para mt-5 mb-5">
                We help you build high-end, technology-driven, and result-oriented solutions that empower you to gain competitive advantages. Our experts and highly skilled developers help you develop and align solutions to your business needs.
                <br />
                <br />
                We take a consultative and collaborative approach to custom application development while following best practices to ensure your final solutions meets all of your business requirements and is secure and reliable.&nbsp; Your custom application will be put through an extensive quality assurance (QA) testing process to ensure our software components are stable, error-free, and optimized for performance. We also conduct user training and provide ongoing post-implementation support to make sure your solution is well received and all issues are resolved in a timely manner.
              </p>
            </div>
            <footer className="mobile-app-footer">
              <h2 className="mobile-app-footer-title text-white mb-3 fs-3">Looking for Customer Relationship Management services?</h2>
              <Button variant="outline-light" onClick={() => window.location.href='/contact'}>Talk to an Expert</Button>
            </footer>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CustomApp;
