import React from "react";
import image1 from "../assets/image_1.png";

const Navbar = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-between items-center m-4 w-full">
        <div className=" bg-[#EFEFED] px-3 py-2 w-52 flex items-center justify-evenly rounded-full">
          <img src={image1} className="" alt="" />
          <p className=" text-[16px] font-semibold leading-5">+1.2k Authors</p>
        </div>
        <div className="flex gap-4">
          <button className=" py-3 px-8 border rounded-full text-[16px] font-semibold leading-5 text-[#4208B3] border-[#4208B3]">
            Sign in
          </button>
          <button className=" py-3 px-8 bg-[#4208B3] rounded-full text-[16px] font-semibold leading-5 text-white">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
