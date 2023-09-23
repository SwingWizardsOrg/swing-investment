import React, { useEffect, useState } from 'react'
import { easeIn, motion } from "framer-motion"


import Welcome from '../components/Investment/Welcome'

import Exemporaly from '../components/Exempo/Exemporaly'
import LoginPage from '../components/Login/LoginPage'


import Card4Cards from '../components/Card4Page/Card4Cards'
import PlayStore from '../components/DownloadApp/PlayStore'




const Investment = () => {
  const [addmargin, setaddmargin] = useState(false)

  const ScrollLength = window.screenY

  useEffect(() => {
    // get scroll
    if (ScrollLength > 40) {
      setaddmargin(true)

    }
    console.log(ScrollLength);
    // add listener






  }, [ScrollLength, addmargin])
  console.log("matgin", addmargin);
  return (
    // bg-[#0D0D0D]/500 
    <motion.div className='w-full h-full bg-[#0D0D0D]  overflow-hidden '
      initial={{
        opacity: 0,



      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2, delay: 0.5, easings: easeIn
        }
      }}
    >
      <div className=' md:ml-5 xl:ml-10 ml-2  w-full  mt-100vh]'>


        <Welcome />
      </div>
      <div className=' mx-4'>
        <Exemporaly />
      </div>
      <div className=' mb-20'>

        <LoginPage />
      </div>
      <div className=' mt-[180px] '>
        <Card4Cards />
      </div>
      <div>
        <PlayStore />
      </div>









    </motion.div>

  )
}

export default Investment
