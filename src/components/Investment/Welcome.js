









import React from 'react'
import InvestText from './InvestText'
import InvestDescription from './InvestDescription'
import SignUp from './SignUp'

const Welcome = () => {
  return (
    
    <div className='w-full h-screen  flex justify-start'>
      <div className='md:flex flex-col md:flex-row'>
        <div className='w-full h-screen flex flex-col items-start  md:mb-10 justify-center  '>
          <div>
            <InvestText />
          </div>
          <div className='    mt-4 flex  justify-start items-start  '>
            <InvestDescription />
          </div>
          <div className=' md:mt-16 mt-[50px]    flex  justify-center items-center  '>
            <SignUp/>
          </div>

        </div>

        <div className='hidden md:flex  md:justify-end md:items-end'>
          {/* Your photo component */}
          
        </div>
      </div>
    </div>
  )
}

export default Welcome
