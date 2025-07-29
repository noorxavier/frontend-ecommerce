import React from 'react'
import WorkWithUs from '../components/WorkWithUs'
import Banner from '../components/Banner'
const Career = () => {
  return (
    <div>
         <Banner image="https://static.vecteezy.com/system/resources/previews/007/149/650/non_2x/career-growth-concept-wooden-block-bar-chart-graph-with-text-and-upward-trend-line-drawn-on-background-photo.jpg">
                        <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
                     </Banner>
       <div className="min-h-screen bg-gray-100 py-10 px-4">
      <WorkWithUs />
    </div>
    </div>
  )
}

export default Career
