import React from 'react'
import { assets } from '../assets/assets';
const NewsLetterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
       
    }
  return (
    <div className="text-center my-12">
      {/* <!-- Heading --> */}
      <h2 className="text-3xl font-semibold">
        <span className="text-cyan-500 font-bold">Our</span> <span className="text-gray-800">Management</span>
      </h2>

      {/* <!-- Management Cards --> */}
      <div className="mt-10 flex justify-center gap-10 flex-wrap">
        {/* <!-- Card 1 --> */}
        <div className="bg-white shadow-md p-6 w-60">
          <img  src="https://erlendissolutions.com/uploads/team/83381642247352u.png" alt="Pinak Ranjan Shome" className="mx-auto w-32 h-32 mb-4" />
          <h3 className="text-cyan-500 font-bold text-lg">PINAK RANJAN SHOME</h3>
          <p className="text-gray-700 font-medium mt-1">Managing Director</p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-white shadow-md p-6 w-60">
          <img src="https://erlendissolutions.com/uploads/team/83381642247352u.png" alt="Rupavikram Das" className="mx-auto w-32 h-32 mb-4" />
          <h3 className="text-cyan-500 font-bold text-lg">RUPAVIKRAM DAS</h3>
          <p className="text-gray-700 font-medium mt-1">Center Manager</p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterBox
