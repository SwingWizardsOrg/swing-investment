import React from 'react'
import invest from '../images/invest.png'

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center">
          <img width={600} height={600} src={invest} alt="investment" />
        </div>
      </div>
    </div>
  )
}

export default Home
