import React from 'react'
// import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import SlideshowBanner from '../components/Slideshow'

const Home = () => {
   const images = ["https://th.bing.com/th/id/R.d4958e6af9260495eea388c02b1068b3?rik=K7A0tiTzRCISYg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f8%2f87%2fTower_Bridge_sunset_December_2006.jpg&ehk=QNcY0QFMj7xzoK%2bG8kkiIoGAaGpMeP0JAT8k2q0Vhm4%3d&risl=1&pid=ImgRaw&r=0","https://www.racksolutions.com/news/app/uploads/AdobeStock_90603827-scaled.jpeg","https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg"];
  return (
    <div>
      
      <SlideshowBanner images={images} />
      <div className="p-4">
        {/* <h2 className="text-2xl">Home Page Content</h2> */}
      </div>
   
      {/* <Hero /> */}
      <LatestCollection/>
      {/* <BestSeller/> */}
      <OurPolicy/>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Home
