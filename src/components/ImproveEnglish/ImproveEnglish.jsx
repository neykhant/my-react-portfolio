import React from 'react'

const ImproveEnglish = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 px-3 lg:px-0">
    <span className="lg:p-9 p-2 bg-[#FFBB22]  lg:min-w-[900px] text-center rounded-l-full rounded-tr-full text-[13px] lg:text-[64px] text-[#000000] font-bold">
      Improve your English level
    </span>
    <div className=" flex justify-end">
      <span className=" text-[12px] lg:text-[18px] text-justify font-medium max-w-[414px] leading-4 lg:leading-7">
        We have published more than
        <span className=" text-[#4208B3] px-1">650 episodes</span>
        of educational materials, every day more than{" "}
        <span className="text-[#4208B3] px-1">
          1.2k teachers work on our materials
        </span>
      </span>
    </div>
  </div>
  )
}

export default ImproveEnglish