// src/components/SlideshowBanner.jsx
import React, { useEffect, useState } from 'react';

const SlideshowBanner = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
            {/* <h1 className="text-white text-4xl font-bold">Slide {index + 1}</h1> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideshowBanner;
