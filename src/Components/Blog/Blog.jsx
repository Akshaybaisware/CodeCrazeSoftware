import React from 'react';
import './Blog.css';
import { Container, Button } from 'react-bootstrap';
import MobileApp from '../../Images/MobileApp.jpg';
import Saleforce from '../../Images/Salesforce.png';
import SoftwareDeveloper1 from '../../Images/SoftwareDeveloper1.webp';
import ecommercewebsitedevelopment from '../../Images/e-commerce-website-development.png';
import Angular from '../../Images/Angular.webp';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    title: "Role of Mobile Apps in Construction Industry",
    description: "One of the important roles of mobile apps in the construction industry is to simplify the sharing of information about daily reports made on the job with various stakeholders. Communication among project stakeholders is made simple as a result.",
    buttonText: "Read More",
    imgSrc: MobileApp,
    navigateTo: "/readmoremobileapp"
  },
  {
    title: "Latest Software Testing Trends",
    description: "The path of accelerated innovation in software testing will significantly impact how you need to test software. You'll become ready for new trends to quickly be adopted because software has become digitalized; you now see huge changes in technical breakthroughs.",
    buttonText: "Read More",
    imgSrc: Saleforce,
    navigateTo: "/readmoresoftwaretesting"
  },
  {
    title: "e-COMMERCE Design Trends for 2020",
    description: "Online experiences that foster strong relationships with consumers keep them coming back when they shop online. Our new ecommerce design trends for 2020 focus on increasing the individual-level connection with your clients.",
    buttonText: "Read More",
    imgSrc: ecommercewebsitedevelopment,
    navigateTo: "/readmoreecommerce"
  },
  {
    title: "Provide Accessibility in Angular Applications",
    description: "With the addition of accessibility in Angular applications, it becomes easier for users including disabled people. Read this post to learn how your tools are now following WCAG 2.1 standards.",
    buttonText: "Read More",
    imgSrc: Angular,
    navigateTo: "/readmoreangular"
  },
  {
    title: "Salesforce as an emerging career",
    description: "Salesforce is a management of customer relationships, business automation, and analytics, and it has evolved from being a cloud-based platform to a full-fledged development platform that provides countless career opportunities.",
    buttonText: "Read More",
    imgSrc: SoftwareDeveloper1,
    navigateTo: "/readmoresalesforce"
  },
];

const Card = ({ title, description, buttonText, imgSrc, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
  
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3 ">
      <div className="BlogCard">
        <img src={imgSrc} alt={title} className="BlogCard-img" />
        <div className="BlogCard-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className='Blog__Button' onClick={handleClick}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

function BlogDescription() {
  return (
    <div className="container-fluid BlogDescription-container m-0 p-0 bg-light">
      <section className="BlogDescription-us-section">
        <h1 id="animatedText">Blog <span className="Red">.</span></h1>
      </section>
      <Container className="shadow-lg BlogDescription__section p-5 bg-white rounded">
        <section className="BlogDescription-servicesSection">
          <div className="row flex-row flex-lg-row">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                imgSrc={card.imgSrc}
                navigateTo={card.navigateTo}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default BlogDescription;
