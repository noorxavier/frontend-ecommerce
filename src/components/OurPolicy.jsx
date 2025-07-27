import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title';
import { FaHeadset, FaPhoneAlt, FaUsers, FaTools, FaCogs, FaMapMarkerAlt } from 'react-icons/fa';


const services = [
  {
    icon: <FaHeadset size={50} />,
    title: 'INBOUND CALL CENTER SERVICES',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: <FaPhoneAlt size={50} />,
    title: 'OUTBOUND CALL CENTER SERVICES',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: <FaUsers size={50} />,
    title: 'LEAD GENERATION',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: <FaTools size={50} />,
    title: 'HELPDESK SERVICE',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: <FaCogs size={50} />,
    title: 'CONSTRUCTING',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: <FaMapMarkerAlt size={50} />,
    title: 'TELEPHONE SURVEY',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',
  },
];


const OurPolicy = () => {
  return (
     <section className="py-16 px-4">
      <div className='text-center text-3xl py-8'>
        <Title text1={'Our'} text2={'Policy'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
         We offer inbound and outbound call center services, including customer support, telesales, direct marketing, and surveys, ensuring efficient, personalized solutions for global clients. </p>
      </div>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-[#2b2c2e] p-6 text-center text-white shadow hover:shadow-lg transition">
            <div className="text-[#00c6ff] mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurPolicy
