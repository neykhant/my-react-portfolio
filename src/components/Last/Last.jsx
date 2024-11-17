import React from "react";
import facebook from "../../assets/facebook.png";
import linkin from "../../assets/linkin.png";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";

const Last = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row justify-between items-center my-10 lg:my-4">
      <div className="text-[10px] lg:text-[16px] font-normal">© Copywriting | All Rights Reserved</div>
      <div className="flex justify-evenly my-2 lg:my-0 lg:justify-center items-center lg:gap-4 gap-1">
        <div >
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={linkin} alt="" />
        </div>
        <div>
          <img src={telegram} alt="" />
        </div>
      </div>
      <div className="text-[10px] lg:text-[16px] font-normal">
      Terms of Use | Privacy
      </div>
    </div>
  );
};

export default Last;
