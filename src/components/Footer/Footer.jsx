import React from "react";

const Footer = () => {
  return (
    <div className="px-3">
      <div className="place-items-center ">
      <h1 className="text-[20px] lg:max-w-[700px] lg:text-[40px] font-medium ">
        Open the door to a <span className="text-[#4208B3]">new world</span> by learning English
      </h1>

      </div>
      <div className="flex justify-center items-center my-1">
        <button className="my-2 lg:py-3 lg:px-8 py-1 px-4 bg-[#4208B3] rounded-full lg:text-[16px] text-[12px] font-semibold leading-5 text-white">
          Get Start
        </button>
      </div>
      <div className=" grid grid-cols-3">
        <div className="place-items-center">
          <h1 className="text-[13px] lg:text-[20px] font-medium">Support</h1>
          <div className="text-[10px] flex gap-2 flex-col  lg:text-[20px] font-normal">
            <div>Help Center</div>
            <div>Chat</div>
            <div>Report a Bug</div>
          </div>
        </div>
        <div className="place-items-center">
          <h1 className="text-[13px] lg:text-[20px] font-medium">Product</h1>
          <div className="text-[10px] flex gap-2 mt-2 flex-col  lg:text-[20px] font-normal">
            <div>Feature</div>
            <div>Work</div>
            <div>Career</div>
            <div>Money</div>
            <div>Benefits</div>
          </div>
        </div>
        <div className="place-items-center">
          <h1 className="text-[13px] lg:text-[20px] font-medium">
            Get in Touch
          </h1>
          <div className="text-[10px] flex gap-2 mt-2 flex-col  lg:text-[20px] font-normal">
            <div>Contact</div>
            <div>Sales</div>
            <div>Prices</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
