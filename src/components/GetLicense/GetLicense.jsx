import React from "react";
import image2 from "../../assets/image_2.png";
import rightarrow from "../../assets/arrow-right.png";

const GetLicense = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="bg-[#D2BBFF] h-36 lg:h-44 rounded-2xl max-w-[300px] flex justify-between p-4">
        <div className="h-full w-full">
          <img src={image2} alt="" className="h-full w-full" />
        </div>
        <div className="p-1">
          <h2 className="text-[13px] lg:text-[18px] font-semibold text-[#4208B3]">Blog</h2>
          <span className="text-[10px] lg:text-[14px] font-normal leading-2 lg:leading-5 text-[#4208B3]">
            More than 500 articles on educational topics
          </span>
          <div className="flex justify-between items-center">
            <h2 className="text-[13px] lg:text-[18px] font-medium text-[#4208B3] ">
              View All
            </h2>
            <div className=" bg-[#4208B3] rounded-full w-6 h-6">
              <img src={rightarrow} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 lg:my-10">
        <span className="text-[13px] text-white lg:text-[64px] font-bold bg-[#3939FF] lg:p-10 p-3 rounded-l-full rounded-tr-full">
          Get a license and teach
        </span>
      </div>
      <div className="bg-[#D2BBFF] rounded-full w-[150px] lg:w-[181px] flex justify-center items-center">
        <div className=" lg:px-8 lg:py-11 px-4\3 py-2 flex justify-between items-center gap-[5px]">
          <span>Let’s Go</span>
          <div className=" bg-[#4208B3] rounded-full w-6 h-6">
            <img src={rightarrow} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetLicense;
