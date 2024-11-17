import React from "react";
import Logo from "../../assets/Logo.jpg";
import Menu from "../../assets/menu.jpg";

const NavMobile = () => {
  return (
    <div className="blog  lg:hidden bg-wh p-4 gap-5 flex justify-between items-center">
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div className="w-full">
        <input type="text" className=" rounded-full min-h-[30px] border-2 w-full border-[#EFEFED]" />
      </div>
      <div className="bg-[#EFEFED] rounded-full">
        <img src={Menu} alt="" />
      </div>
    </div>
  );
};

export default NavMobile;
