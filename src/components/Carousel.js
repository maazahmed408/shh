import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const Carousel = ({ images = [] }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
