



import React from 'react'
import Card4 from './Card4'
import { Button } from '../Models/button'

const Card4Cards = () => {
  return (
    <div className=' w-full  h-screen overflow-y-scroll   '>
      <div className=' '>
        <Card4/>
      </div>
      <div className=' my-28 flex justify-center items-center '>
        <Button className="bg-[#991B1B] tracking-wide ">
        Terms and Conditions
        </Button>
      </div>
    </div>
  )
}

export default Card4Cards
