import React from "react";

const InvestText = () => {
  return (
    <div className="flex flex-col mt-0 w-full mb-10    ">
      <h1 className="flex md:justify-start md:items-start justify-center items-center flex-col text-[#ffff] font-extrabold text-start gap-4">
        <span className="gap-2 flex-wrap flex text-[40px] md:text-[60px] xl:text-9xl font-extrabold text-center mb-1 transition-all duration-300 delay-300  ">
          <span>The</span>
          <span>
            <span className="text-[#002060]">S</span>
            <span>wing</span>
          </span>

          <span>
            <span className="text-[#002060]">W</span>
            <span>iz</span>
          </span>
        </span>

        <span className="flex md:ml-10  lg:ml-5    items-center justify-center text-center gap-2 mt-0 text-base md:text-5xl xl:text-5xl text-[#4472c4] tracking-wide font-extrabold ">
          <span className=" mx-auto"> TradeShare</span>
        </span>
      </h1>
    </div>
  );
};

export default InvestText;
