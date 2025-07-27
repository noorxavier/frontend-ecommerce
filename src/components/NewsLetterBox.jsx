import React from 'react'
import { assets } from '../assets/assets';
const NewsLetterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
       
    }
  return (
  <div class="text-center my-12">
  {/* <!-- Heading --> */}
  <h2 class="text-3xl font-semibold">
    <span class="text-cyan-500 font-bold">Our</span> <span class="text-gray-800">Management</span>
  </h2>

  {/* <!-- Management Cards --> */}
  <div class="mt-10 flex justify-center gap-10 flex-wrap">
    {/* <!-- Card 1 --> */}
    <div class="bg-white shadow-md p-6 w-60">
      <img src={assets.c} alt="Pinak Ranjan Shome" class="mx-auto w-32 h-32 mb-4" />
      <h3 class="text-cyan-500 font-bold text-lg">PINAK RANJAN SHOME</h3>
      <p class="text-gray-700 font-medium mt-1">Managing Director</p>
    </div>

    
    <div class="bg-white shadow-md p-6 w-60">
      <img src="manager2.png" alt="Rupavikram Das" class="mx-auto w-32 h-32 mb-4" />
      <h3 class="text-cyan-500 font-bold text-lg">RUPAVIKRAM DAS</h3>
      <p class="text-gray-700 font-medium mt-1">Center Manager</p>
    </div>
  </div>
</div>
  )
}

export default NewsLetterBox
