import React from "react";

const ContentHeader = () => {
  return (
    <div className="my-1 px-3 flex flex-col lg:flex-row items-center">
      <div className="min-w-[60%] flex-col justify-center items-center font-semibold">
        <div className="text-center text-[18px] lg:text-[44px]">Get Started your day with us</div>
        <div className="text-center text-[18px] lg:text-[44px]">
          <span className="text-[#4208B3] px-1 ">01</span>
          <span>Podcasts on any topic</span>
        </div>
      </div>
      <div className="my-2 lg:my-0">
        <div className="text-[10px] lg:text-[18px] font-normal">
          The school's mission is to empower students with the language skills
          they need for personal and professional success.
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
