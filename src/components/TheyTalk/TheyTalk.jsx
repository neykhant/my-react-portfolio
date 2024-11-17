import React from "react";

const TheyTalk = () => {
  return (
    <div className="px-3 my-2 gap-5 bg-white h-full flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full  flex flex-col first:justify-end gap-4  ">
        <div className="text-[12px] lg:p-2 lg:w-[70%] flex justify-end self-end  lg:text-[18px]  font-normal bg-[#F7F7F5] px-1 rounded-xl">
          As a recent graduate of this English language school, I can
          confidently say that it has exceeded my expectations. The teachers are
          not only knowledgeable and passionate about teaching but also go above
          and beyond to ensure that each student receives personalized
          attention.
        </div>
        <div className="text-[12px] lg:p-2 lg:w-[70%]  flex self-start lg:text-[18px] font-normal bg-[#F7F7F5] px-1 rounded-xl">
          As a recent graduate of this English language school, I can
          confidently say that it has exceeded my expectations. The teachers are
          not only knowledgeable and passionate about teaching but also go above
          and beyond to ensure that each student receives personalized
          attention.
        </div>
      </div>
      <div className="py-4">
        <div className="text-[25px] lg:text-[120px] font-bold text-[#4208B3]">
          200K+
        </div>
        <div className="text-[20px] lg:text-[64px] font-medium py-1 text-[#4208B3]">
          Reviews
        </div>
        <div className="text-[10px] font-normal lg:text-[18px]">
          The English language school has received overwhelmingly positive
          reviews from its students. Many have praised the school's experienced
          and knowledgeable teachers, who are able to cater to the individual
          needs of each student.
        </div>
      </div>
    </div>
  );
};

export default TheyTalk;
