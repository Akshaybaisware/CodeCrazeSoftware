import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCogs, faUsers, faBuilding, faCheckCircle, faGlobe, 
  faThumbsUp, faLaptop, faMobileAlt, faGraduationCap, faUserShield, 
  faClipboardCheck, faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import "./WhyCodeCraze.css"

const CompanyInfo = () => {
  const infoData = [
    { icon: faCogs, title: "Since", description: "2009 (10+ years in business)" },
    { icon: faUsers, title: "Team Size", description: "35+ Passionate Professionals." },
    { icon: faBuilding, title: "Infrastructure", description: "2000+ SQ. FT." },
    { icon: faCheckCircle, title: "Reliability & Efficiency", description: "CMMi Level 5" },
    { icon: faGlobe, title: "Clientele", description: "Over 856+ clients in 48+ countries" },
    { icon: faThumbsUp, title: "Proud Of", description: "85% Client Retention / Business comes from existing clients" },
    { icon: faLaptop, title: "Websites Designed & Developed", description: "3856+" },
    { icon: faMobileAlt, title: "Mobile Applications Published", description: "3128+" },
    { icon: faGraduationCap, title: "Extensive in-house Training", description: "To nurture talent with the latest technologies." },
    { icon: faUserShield, title: "Personnel Retention Rate", description: "Ensuring stability and highest quality of services." },
    { icon: faClipboardCheck, title: "Dedicated Quality Assurance Team", description: "Manual & Automated testing" },
    { icon: faMapMarkerAlt, title: "Present in", description: "Telecom Colony, Pratap Nagar, Nagpur" }
  ];

  return (
    <div className='WhyCodeCraze p-0 m-0'> 
      <div className='WhyCodeCraze__animatedText position-absolute w-100'>
    <Container>
        <p id="animatedText" className='fs-1  '>
            Why CodeCrazeSoftware Solution Pvt Ltd <span className="Red">.</span>
        </p>
    </Container>
</div>

<Container className="WhycodeCraze-container shadow-lg card_body p-4">
      <div>
        <h3 className="mb-3 fs-1 fw-bold WhycodeCraze-aboutheading">
          Who we are<span className="extra">.</span>
        </h3>
      </div>
      <Container>
        <Container>
          <Container>
            <Container>
              <div className="row WhycodeCraze-row_width mt-3">
                {infoData.map((item, index) => (
                  <div
                    key={index}
                    className="WhycodeCraze-info-card col-lg-3 col-sm-4 col-12 d-flex flex-column align-items-center p-2"
                  >
                    <div
                      className="card bg-light WhycodeCraze-card_property_why"
                      style={{
                        marginBottom: '10px',
                        width: '100%',
                        maxWidth: '200px',
                        height: '250px',
                      }}
                    >
                      <div
                        className="WhycodeCraze-icon_why d-flex align-items-center justify-content-center mx-auto"
                        style={{
                          background:
                            'linear-gradient(to right bottom, #595ea5 25%, #ff3a4c 50%, #595ea5 100%)',
                          borderRadius: '50%',
                          padding: '10px',
                          margin: '10px 0',
                          width: 'fit-content',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="WhycodeCraze-icon_why_inner"
                          style={{ fontSize: '2rem', color: '#ffffff' }}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="WhycodeCraze-name mb-3">{item.title}</h4>
                        <p className="WhycodeCraze-why_para text-secondary fs-5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>

    </div>
  );
};

export default CompanyInfo;
