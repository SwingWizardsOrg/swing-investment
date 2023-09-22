



import React from 'react'
import { easeInOut, easeOut, motion } from "framer-motion"


const ExmpCard = ({ title, image, description }) => {
    return (
        <div className=' flex flex-col bg-stone-800/30   w-[250px] xl:w-[300px] h-[500px] xl:h-[500px] md:w-[250px] md:h-[500px] transition-all duration-200 delay-200 p-4 justify-center items-center rounded-md  '>
            <div className=' flex  flex-col justify-center items-center gap-4 h-full text-center bg-black p-2'>
                <motion.div initial={{
                    opacity: 0,
                    transition: {
                        duration: 4, delay: 3
                    }

                }}
                    animate={{
                        opacity: 1,
                        scale: 1.2,
                        transition: {
                            duration: 1, delay: 1, easings: easeInOut
                        }
                    }}
                    className=' mt-0 max-w-[100px] bg-transparent mb-10 rounded-md  '>
                    <img src={image} alt={title} className='  mt-0 rounded-sm' />
                </motion.div>
                <div className="mx-auto ">
                    <h1 className=' text-2xl text-center text-[#4472C4] font-[1000]'>
                        <span>
                            {title}
                        </span>
                    </h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <h2 className=' text-lg text-center text-[800]'>
                        <span>
                            {description}
                        </span>
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default ExmpCard
