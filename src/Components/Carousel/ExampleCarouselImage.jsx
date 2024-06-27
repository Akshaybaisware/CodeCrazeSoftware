import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import './ExampleCarouselImage.css'; // Ensure the correct path to your CSS file
import shipyaari from '../../Images/shipyaari.jpg';
import airrnp from '../../Images/airrnp.jpg';
import getmock from '../../Images/getmock.jpg';
import parkers from '../../Images/parkres.jpg';

const ExampleCarouselImage = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (image) => {
    setZoomedImage(zoomedImage === image ? null : image);
  };

  return (
    <div className="example-carousel-image__container">
      <div className={`example-carousel-image__wrapper example-carousel-image__wrapper--shipyaari ${zoomedImage === 'shipyaari' ? 'example-carousel-image__wrapper--zoomed' : ''}`} onClick={() => handleImageClick('shipyaari')}>
        <Image src={shipyaari} alt="Shipyaari" fluid />
      </div>
      <div className={`example-carousel-image__wrapper example-carousel-image__wrapper--airrnp ${zoomedImage === 'airrnp' ? 'example-carousel-image__wrapper--zoomed' : ''}`} onClick={() => handleImageClick('airrnp')}>
        <Image src={airrnp} alt="Airrnp" fluid />
      </div>
      <div className={`example-carousel-image__wrapper example-carousel-image__wrapper--getmock ${zoomedImage === 'getmock' ? 'example-carousel-image__wrapper--zoomed' : ''}`} onClick={() => handleImageClick('getmock')}>
        <Image src={getmock} alt="Getmock" fluid />
      </div>
      <div className={`example-carousel-image__wrapper example-carousel-image__wrapper--parkers ${zoomedImage === 'parkers' ? 'example-carousel-image__wrapper--zoomed' : ''}`} onClick={() => handleImageClick('parkers')}>
        <Image src={parkers} alt="Parkers" fluid />
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
