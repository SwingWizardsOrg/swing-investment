



import React from 'react';



import LoginForm from './LoginForm';
import { Button } from '../Models/button';



const LoginCard = () => {
  return (
    <div className=' flex flex-col w-full overflow-y-scroll gap-4  '>

      <div className='  '>

        <LoginForm />
      </div>
      <div>
        <div className=' flex  justify-center items-center'>
          <h1 className=' text-[15px] tracking-wide font-thin text-white'>Don't have account </h1>
        </div>
      </div>
    
        <div className=' flex  justify-center items-center rounded-md p-0 cursor-pointer'>
          {/* a module of button  with variant, size ,... */}
          <Button className=' rounded-md text-sm font-thin text-white bg-[#991B1B] '   >Sign Up</Button>

        </div>
    
    </div>
  )
}

export default LoginCard
