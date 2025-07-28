// src/components/Banner.jsx
import React from 'react';

export default function Banner({ image, height = 'h-[300px]', children }) {
  return (
    <div
      className={`w-full ${height} bg-cover bg-center bg-no-repeat relative`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
