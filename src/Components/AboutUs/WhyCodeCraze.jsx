import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCogs, faUsers, faBuilding, faCheckCircle, faGlobe, 
  faThumbsUp, faLaptop, faMobileAlt, faGraduationCap, faUserShield, 
  faClipboardCheck, faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

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
    <div className="container card_body p-5">
      <div className="py-4">
        <h3 className="mb-3 aboutheading">Who we are<span className="extra">.</span></h3>
      </div>
      <div className="row row_width">
        {infoData.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card card_property_why" style={{ marginBottom: '20px', width: '100%', maxWidth: '250px' }}>
              <div className="icon_why d-flex align-items-center justify-content-center" style={{ 
                background: 'linear-gradient(to right bottom, #595ea5 25%, #ff3a4c 50%, #595ea5 100%)', 
                borderRadius: '50%', 
                padding: '20px',
                width: 'fit-content'
              }}>
                <FontAwesomeIcon icon={item.icon} className="icon_why_inner" style={{ fontSize: '3rem', color: '#ffffff' }} />
              </div>
              <div className="text-center">
                <h4 className="name">{item.title}</h4>
                <p className="why_para">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
