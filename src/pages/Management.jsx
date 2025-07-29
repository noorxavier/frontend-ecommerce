import React from 'react'
import NewsLetterBox from '../components/NewsLetterBox'
import Banner from '../components/Banner'
const Management = () => {
  return (
    <div>
      <Banner image="https://erlendissolutions.com/assets/img/team.png">
                      <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
                    </Banner>
      <NewsLetterBox />
    </div>
  )
}

export default Management
