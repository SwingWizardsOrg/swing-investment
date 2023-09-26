import React from "react";
import LogoImage from "./LogoImage";
import LoginCard from "./LoginCard";
import Logo from "../../images/Dollar.png";

const LoginPage = () => {
  return (
    <div className=" w-full h-[100vh] mb-10 ">
      <div className=" top-0 flex justify-center items-center w-full  ">
        {/* mpesa title logo */}
        <LogoImage />
      </div>
      {/* login card 1st card hidden on sm screen */}
      <div className="  flex justify-center  mt-20 mb-10   ">
        <div className=" flex flex-row rounded-md gap-4 items-center bg-stone-600/20     ">
          <div className="  hidden mx-4 md:flex justify-center items-center  py-5    transition">
            <img
              src={Logo}
              alt="swing wizard logo"
              className=" object-contain  flex justify-center items-center bg-transparent  "
            />
          </div>
          <div className=" flex justify-start items-center h-full  md:px-28  px-10  py-5   bg-gradient-to-b from-blue-600 via-blue-700 to-blue-950  ">
            {/* login card with login form and signup button  group hovfer on login button */}
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
