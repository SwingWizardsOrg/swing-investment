

"use client"


import React from 'react'
import { motion } from 'framer-motion'

const InvestDescription = () => {
    return (
        <motion.div className=' md:text-start mt-4 text-center  flex justify-center md:items-center md:justify-start items-center gap-4 leading-snug  tracking-tighter font-normal '>


            <p className=" md:text-4xl md:font-[16px] font-[8px] text-xl md:text-start md:text  flex flex-col gap-2 ">
                <span>
                    Pool cash with other investors
                </span>
                <span>
                    Receive trade relays
                </span>


                <span>
                    Simple and friendly
                </span>


            </p>

        </motion.div>
    )
}

export default InvestDescription
