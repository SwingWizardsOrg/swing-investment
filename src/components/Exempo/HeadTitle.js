import React from "react";

const HeadTitle = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-start top-0 mt-5 ">
      <div className=" flex justify-center items-center xl:my-10 md:my-5 ">
        <h1 className=" uppercase  xl:text-8xl text-3xl  md:text-6xl leading-loose transition font-[1000] tracking-wider text-[#002060]    ">
          <span className=" md:px-[100px] px-5  hover:border-b-2     py-[3px]">
            {title}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeadTitle;
