import React from 'react';
import './ReadMore.css';
import { Container } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';

function EcommerceSolution() {
  return (
    <div className="container-fluid ReadMoreMobileDescription-container bg-light m-0 p-0">
      <section className="ReadMoreMobileDescription-us-section">
        <h1 id="animatedText">Blogs<span className='Red'>.</span></h1>
      </section>
      <Container className='shadow-lg ReadMoreMobile__section p-5 bg-white rounded'>
        <header className="ReadMoreMobile-header my-3">
          <p className='fs-2 fw-bold'>e-COMMERCE Design Trends.</p>
        </header>

        <section className="ReadMoreMobile-servicesSection">
          <div>
            <div className="ReadMoreMobile-servicesColumn my-4 text-black fw-bold">
              <h2>Omnichannel Presence</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Omnichannel shopping is more prevalent than ever these days. In-store shoppers utilised their smartphones 56% of the time to look up products or do product research.
                The following 4 tactics will help you improve omnichannel client engagement:
              </p>
              <ul className="fs-5 fw-normal text-light-emphasis Ecommerce_list">
                <li>Personalise the purchasing experience for your customers</li>
                <li>A mobile-friendly website is a must</li>
                <li>Building "bridges" that offer services like easy returns and shipping to a range of locations between physical stores and online channels</li>
                <li>Offer client service through social media</li>
              </ul>
              <p className="fs-5 fw-normal text-light-emphasis">Windows Azure Storage Blobs</p>

              <h2>Mobile Commerce</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Technology advancements lead to an increase in mobile commerce. Including smart and basic phones, there are currently 7.26 billion mobile phone users globally. Therefore, 91% of people on the planet are smartphone owners. Furthermore, it is expected that there will be 7.516 billion mobile device users by 2026.
                As an online seller, this means that more and more customers can buy your goods or services from you via their mobile devices, and they choose mobile commerce as a channel for doing so.
              </p>
              <ul className="fs-5 fw-normal text-light-emphasis  Ecommerce_list">
                <li>Improve the loading time of your website</li>
                <li>Make your navigation menu simple</li>
                <li>Make your pop-ups mobile friendly</li>
              </ul>

              <h2>Social Commerce</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Social media has already been used by brands to boost brand recognition and provide leads. eCommerce companies have started to increase revenues in recent years by offering direct product sales through social media platforms. As a result, customers use social media sites on their mobile devices to easily search and buy their favourite goods.
                The most popular social media platforms that offer social commerce are Instagram, Facebook, TikTok, Pinterest, Snapchat, and now also Twitter. Don’t leave them out of your eCommerce strategy.
              </p>

              <h2>Artificial Intelligence (AI)</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                The ability of eCommerce businesses to provide better client experiences and come up with innovative solutions is significantly impacted by AI. There is a lot of potential for AI solutions to assist eCommerce businesses with their daily operations and make them more focused and effective.
              </p>

              <h2>Live Shopping</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Live shopping is the practise of merchants showcasing their goods via a livestream, frequently on a social media site. Customers can ask inquiries, get answers, and make purchases in real-time using this method. Social interaction is the key to live selling.
                Live shopping is becoming increasingly popular. By 2027, it is expected that the market for live streaming would be worth €237 billion.
              </p>

              <h2>Payment Methods</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Did you know that one of the top reasons people leave their shopping carts in the middle of the checkout or payment process? If a customer finds it difficult to complete their digital purchase, they will leave the things in their shopping cart and hunt for an online store that makes the process simple.
                Around 50% of all eCommerce payment transactions worldwide in 2021 were made using digital wallets. Making the digital wallet the most commonly utilised method of online payment worldwide. According to the forecast, this percentage would rise by more than 53% by 2025.
                The most common payment types for eCommerce are:
              </p>
              <ul className="fs-5 fw-normal text-light-emphasis blue-bullets">
                <li>Digital wallets (PayPal, Google Pay, Amazon Pay, Mobilepay)</li>
                <li>Cards (Visa, Mastercard, Dankort, Maestro)</li>
                <li>Buy now pay later (Klarna, Walley, AfterPay & ClearPay)</li>
                <li>Vouchers (PaySafeCard)</li>
                <li>Online banking</li>
              </ul>

              <h2>Google Local Inventory Ads (LIA)</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                How does the Google LIA function? 
                A user's local store options will be highlighted when they conduct a Google search for a desired product. As a result, the customer has the opportunity to visit the store to check out or test the product before making a purchase, which helps to cut down on unnecessary spending. According to Google, people are more likely to buy a product if they have the opportunity to physically inspect it.
              </p>

              <h2>Sustainability</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                It shouldn't come as a surprise that sustainability has become more and more popular over the past several years and will continue to do so. Did you know that, globally, 73% of consumers said they would be willing to alter their purchasing habits in order to lessen their environmental impact? The time is now for your eCommerce company to consider implementing a sustainable strategy.
                Probably, you're trying to figure out what a sustainable business is. This eCommerce company focuses on operating with as little negative influence on the environment as possible in order to meet the requirements of the present without endangering the welfare of future generations.
              </p>
            </div>
          </div>
        </section>
        
        <MDBFooter className='text-center text-lg-left ReadMorecustom-footer'>
          <div className='text-center p-3 my-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h2>Conclusions</h2>
            <p className='fs-5 fw-normal text-light-emphasis'>
              The digital world is no exception to the constant changing of trends. If you want to enhance your eCommerce business strategy and boost sales, you must adopt one or more of the above trends.
            </p>
            <p className='fs-5 fw-normal text-light-emphasis'>
              Remember to keep a customer-centric experience in mind when you build your eCommerce strategy. After all, why not improve your customers' online shopping experience if you have the means to do so? By doing this, you may make your eCommerce company stand out from the crowd.
            </p>
          </div>
        </MDBFooter>
      </Container>
    </div>
  );
}

export default EcommerceSolution;
