


// mpesa logo img
import React from 'react'
import MpesaLogo from "../../images/Mpesalogo.png"

const LogoImage = () => {
  return (
    <div className=' flex justify-center items-start mt-4  w-[168px]  h-[100px] xl:h-[150px] transition-all   p-0 bg-gradient-to-r from-[#0D0D0D] via-stone-600 to-black pb-1 '>
      <img src={MpesaLogo} alt='Mpesa logo' className=' w-full h-full bg-[#0D0D0D]  '/>
    </div>
  )
}

export default LogoImage
