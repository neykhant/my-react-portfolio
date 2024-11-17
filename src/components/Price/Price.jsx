import React from "react";
import rightarrow from "../../assets/arrow-right.png";
import image6 from "../../assets/image_6.png";
import image7 from "../../assets/image_7.png";
import image8 from "../../assets/image_8.png";
import image9 from "../../assets/image_9.png";

import image10 from "../../assets/image_10.png";
import image11 from "../../assets/image_11.png";
import image12 from "../../assets/image_12.png";
import image13 from "../../assets/image_13.png";

const Price = () => {
  return (
    <div className="px-3 mb-2 w-full flex flex-col gap-5 justify-between items-center">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-1/2">
          <div className="flex pb-2 justify-between items-center">
            <span className="text-[14px] lg:text-[40px] font-medium lg:max-w[320px]">
              Get a License and become a teacher
            </span>
            <div className="bg-[#4208B3] rounded-full w-6">
              <img src={rightarrow} alt="" />
            </div>
          </div>
          <div className="text-[10px] lg:text-[18px]">
            The cost of obtaining an English teacher license can vary depending
            on the program and location. Some programs may require fees for
            application, examinations, and materials, while others may offer
            more affordable options.{" "}
          </div>
        </div>
        <div className="hidden lg:flex gap-2">
          <div className="flex flex-col gap-2">
            <img src={image6} alt="" className="rounded-xl" />
            <img src={image7} alt="" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={image8} alt="" className="rounded-xl" />
            <img src={image9} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden lg:flex gap-2">
          <div className="flex flex-col gap-2">
            <img src={image10} alt="" className="rounded-xl" />
            <img src={image11} alt="" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={image12} alt="" className="rounded-xl" />
            <img src={image13} alt="" className="rounded-xl" />
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="flex pb-2 justify-between items-center">
            <span className="text-[14px] lg:text-[40px] font-medium lg:max-w[320px]">
            Learn English and Pass international exams
            </span>
            <div className="bg-[#4208B3] rounded-full w-6">
              <img src={rightarrow} alt="" />
            </div>
          </div>
          <div className="text-[10px] lg:text-[18px]">
            The cost of obtaining an English teacher license can vary depending
            on the program and location. Some programs may require fees for
            application, examinations, and materials, while others may offer
            more affordable options.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
