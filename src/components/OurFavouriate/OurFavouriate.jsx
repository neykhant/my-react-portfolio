import React from "react";
import topright from "../../assets/top-right.png";
import topleft from "../../assets/top-let.png";
import leftbottom from "../../assets/left-bottom.png";
import leftright from "../../assets/left-right.png";
import image5 from "../../assets/image_5.jpg";

const OurFavouriate = () => {
  return (
    <div className="px-3 relative">
      <div className="flex justify-between items-center py-2 border-b border-b-[#A4A4A4]">
        <button className=" border border-1 border-[#4208B3] text-[14px] text-[#4208B3] lg:text-[24px] font-semibold py-[2px] px-4 rounded-full">
          01/
        </button>
        <div className="text-[14px] lg:text-[64px] font-medium text-[#A4A4A4]">
          Entrepreneurship
        </div>
        <div className="text-[10px] lg:text-[14px] font-medium text-[#A4A4A4] flex justify-end text-right">
          <span>126 Podcasts</span>
        </div>
        <div className="h-6 w-10">
          <img src={topleft} alt="" className="h-6 w-6 lg:w-10 lg:h-10" />
        </div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-b-[#A4A4A4]">
        <button className=" border border-1 border-[#4208B3] text-[14px] text-[#4208B3] lg:text-[24px] font-semibold py-[2px] px-4 rounded-full">
          02/
        </button>
        <div className="text-[14px] lg:text-[64px] font-medium text-[#4208B3] text-right">
          Wellness
        </div>
        <div className="text-[10px] lg:text-[14px] font-medium text-[#A4A4A4] flex justify-end text-right">
          <span>126 Podcasts</span>
        </div>
        <div className="h-6 w-10">
          <img src={topright} alt="" className="h-6 w-6 lg:w-10 lg:h-10" />
        </div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-b-[#A4A4A4]">
        <button className=" border border-1 border-[#4208B3] text-[14px] text-[#4208B3] lg:text-[24px] font-semibold py-[2px] px-4 rounded-full">
          03/
        </button>
        <div className="text-[14px] lg:text-[64px] font-medium text-[#A4A4A4]">
          Food & Beverage
        </div>
        <div className="text-[10px] lg:text-[14px] font-medium text-[#A4A4A4] flex justify-end text-right">
          <span>126 Podcasts</span>
        </div>
        <div className="h-6 w-10">
          <img src={leftbottom} alt="" className="h-6 w-6 lg:w-10 lg:h-10" />
        </div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-b-[#A4A4A4]">
        <button className=" border border-1 border-[#4208B3] text-[14px] text-[#4208B3] lg:text-[24px] font-semibold py-[2px] px-4 rounded-full">
          04/
        </button>
        <div className="text-[14px] lg:text-[64px] font-medium text-[#A4A4A4]">
          Sustainability
        </div>
        <div className="text-[10px] lg:text-[14px] font-medium text-[#A4A4A4] flex justify-end text-right">
          <span>126 Podcasts</span>
        </div>
        <div className="h-6 w-10">
          <img src={leftright} alt="" className="h-6 w-6 lg:w-10 lg:h-10" />
        </div>
      </div>
      <div className="hidden lg:absolute top-[20%] left-1/3">
        <img src={image5} alt="" />
      </div>
    </div>
  );
};

export default OurFavouriate;
