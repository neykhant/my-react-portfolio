import React from "react";
import underarrow from "../../assets/arrow-down.png";
import rightarrow from "../../assets/arrow-right.png";

const ContentNav = () => {
  return (
    <div className="w-full my-1 px-2 flex justify-between items-center ">
      <div className=" w-[100px] lg:w-[126px] flex gap-2">
        <button className="border border-[#4208B3] text-[#4208B3] rounded-full text-[8px] lg:text-[16px] font-semibold lg:py-[12px] lg:px-[32px] text- py-[5px] px-[14px] ">
          Popular
        </button>
        <div className="bg-[#4208B3] rounded-full w-6">
          <img src={underarrow} alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="text-[18px] font-semibold">Podcast</div>
        <div className="flex justify-center gap-3 items-center">
          <div className="bg-[#4208B3] w-3 h-3 rounded-full"></div>
          <div className="bg-[#D2BBFF] w-3 h-3 rounded-full"></div>
        </div>
      </div>
      <div className="w-[100px] lg:w-[126px] flex gap-2">
        <div className="bg-[#4208B3] rounded-full w-6">
          <img src={rightarrow} alt="" />
        </div>
        <button className="border border-[#4208B3] text-[#4208B3] rounded-full text-[8px] lg:text-[16px] font-semibold lg:py-[12px] lg:px-[32px] text- py-[5px] px-[14px] ">
          Popular
        </button>
      </div>
    </div>
  );
};

export default ContentNav;
