import React, { useEffect,useState } from 'react'
import { easeIn, motion } from "framer-motion"


import Welcome from '../components/Investment/Welcome'

const Investment = () => {
  const [addmargin, setaddmargin] = useState(false)

  const ScrollLength=window.screenY

  useEffect(()=>{
    // get scroll
    if(ScrollLength>40){
      setaddmargin(true)

    }
    console.log(ScrollLength);
    // add listener
   
    
    



  },[ScrollLength, addmargin])
  console.log("matgin",addmargin);
  return (
    <motion.div className='w-full h-full bg-[#0D0D0D] '
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
      <div className=' ml-5 xl:ml-10  '>


        <Welcome />
      </div>








    </motion.div>
  )
}

export default Investment
