import React from 'react';
// import clientIcon from '../assets/client-icon.png'; // Make sure this image exists

export default function AustraliaClients() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Image */}
        <img src="https://erlendissolutions.com/uploads/testimonial/36011642238618client_logo.jpg" alt="Client Icon" className="w-20 h-20 object-contain" />

        {/* Quote Content */}
        <p className="text-gray-800 text-base">
          <span className="text-cyan-500 text-3xl font-bold">“</span>
          Erlendis Solution: has been working closely with multiple Australian companies
          to provide all kind of services. Our clients operate in the following sectors:
          <ul className="list-disc list-inside text-left mt-2">
            <li className="font-bold">
              Energy (Electricity & Gas retailers, Solar Panels)
            </li>
            <li>Telecom</li>
            <li>Loan</li>
          </ul>
          <span className="text-cyan-500 text-3xl font-bold"> ”</span>
        </p>

        {/* Footer Link */}
        <p className="text-cyan-600 font-bold uppercase text-sm tracking-wide">
          AUSTRALIA CLIENTS
        </p>
      </div>
    </div>
  );
}
