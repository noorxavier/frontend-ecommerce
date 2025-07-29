import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/OurManagement'
import Banner from '../components/Banner'

const About = () => {
  return (
    
      <div >
         <Banner image="https://erlendissolutions.com/assets/img/about.png">
                <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
              </Banner>
      <div className='txt-5xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px]'
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
          alt=""
        />
        <div className='flex flex-col justify-center gap-6 md: w-2/4 text-gray-600'>
          <p>
            Erlendis Solutions India is an integrated er providing call center customer services by combining best available technology, processes and people. It is an International Call Center located at Kolkata, India. Erlendis Solutions India mission is to provide high-end call center customer services through our Contact Center. Our Inbound and Outbound Call Center in India are in a unique position to provide our clients with the best e-CRM call center services round the globe by utilizing one to one experience across every point of the customer relationship lifecycle.
          </p>
          <p>
            Our Inbound Call Center Services include direct marketing, telesales, customer services, surveys, etc. Our call Centers in India provide solutions to our International Clients wherever they have their customers.Our Call Centers seek ways to improve inbound service quality while reducing costs for our clients through disciplined management techniques such as regular monitoring and measurement of agent’s performance.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Erlendis Solutions India aims to deliver high-quality call center services by combining advanced technology, skilled teams, and efficient processes. Based in Kolkata, we provide personalized inbound and outbound solutions that enhance customer experiences. Our focus is on continuous improvement, client satisfaction, and cost-effective service for global partners.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident neque ut, unde veniam animi eveniet expedita! Quia placeat veniam fuga minima illum architecto aut facilis deleniti perspiciatis accusantium, error eius.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident neque ut, unde veniam animi eveniet expedita! Quia placeat veniam fuga minima illum architecto aut facilis deleniti perspiciatis accusantium, error eius.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quis! Beatae similique earum dolor esse voluptate quos veritatis. Doloremque voluptatum odit aut accusantium numquam iusto dolorum commodi. Aut, adipisci porro.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  
  )
}

export default About
