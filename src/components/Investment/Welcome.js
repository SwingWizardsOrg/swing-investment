import React from "react";
import InvestText from "./InvestText";
import InvestDescription from "./InvestDescription";
import SignUp from "./SignUp";
import image from "../../images/RiskManage.png";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="w-full h-screen  flex justify-start relative bg-slate-900/60">
      {/* background image */}
      <motion.div className=" bg-[#0D0D0D] absolute transition duration-300 delay-300  flex md:justify-center md:items-center w-full h-[100vh] z-40 "
      
      initial={{
        opacity: 0,
        x: -100,
       
      }}
      animate={{
        opacity: 1,
      
        x: 0,
       
      }}
      transition={{
        duration: 0.5,
        delay: 1.5,
        easings: "easeIn",
        smooth: "true",

      }}
      >
        <div className=" bg-blue-500/40 opacity-5 ">
          <img
            src={image}
            alt="Investment"
            className="md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] object-fill w-full h-full "
          />
        </div>
      </motion.div>

      <div className="md:flex flex-col md:flex-row w-full z-50">
        <div className="md:w-[60%] w-full h-screen flex flex-col items-start  md:mb-10 justify-center  ">
          <div className=" w-full ">
            <InvestText />
          </div>
          <div className="  w-full  ">
            <div className="     mt-10 mb-10   ">
              <InvestDescription />
            </div>
          </div>

          <div className=" md:mt-16 mt-[50px]    flex  justify-center items-center   ">
            <SignUp />
          </div>
        </div>

        <div className="hidden  w-[40%] justify-center md:flex items-center  ">
          {/* Your photo component */}
          {/* image */}
          <div className="mx-10 bg-transparent flex items-center justify-center">
            <img
              src={image}
              alt="Investment"
              className="xl:w-[500px] xl:h-[500px] mx-10 object-center object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
