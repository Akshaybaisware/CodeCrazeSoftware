import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '9403452788'; // Replace with the desired phone number

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        fontSize: '32px', // Increase font size
        cursor: 'pointer', 
        backgroundColor: '#25D366', // Set background color to green
        borderRadius: '50%', 
        paddingLeft:'20px',
        paddingRight:'20px',
        paddingTop:'10px',
        paddingBottom:'10px',

     
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }} 
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default WhatsAppButton;
