import React from "react";
import image3 from "../../assets/Image_3.png";
import image4 from "../../assets/image_4.png";
import headphone from "../../assets/Headphones.png";
import rightarrow from "../../assets/arrow-right.png";
import hearicon from "../../assets/hear.png";

const ContentBody = () => {
  return (
    <div className="px-3 w-full  flex flex-col lg:flex-row items-center justify-between">
      <div className="bg-[#F7F7F5] lg:w-[30%] p-3 rounded-xl">
        <div className="hidden lg:block">
          <img
            src={image3}
            alt=""
            className="rounded-xl h-32 lg:h-full w-full"
          />
        </div>
        <div>
          <h1 className=" text-[15px] lg:text-[24px] font-semibold">
            Habit of Speaking
          </h1>
          <div className="lg:text-[16px] font-normal text-[12px]">
            The habitual use of descriptive language while speaking is commonly
            referred to as "descriptive speech." This communication style
            involves using vivid and detailed words to convey ideas,
          </div>
        </div>
        <button className="w-full lg:w-[200px] lg:text-[16px] text-[13px] font-semibold border border-1 border-[#4208B3] rounded-full">
          Go To Podcast
        </button>
      </div>

      <div className="bg-[#D2BBFF] lg:w-[30%] p-3 rounded-xl ">
        <div className=" text-[16px] lg:text-[28px] font-semibold">
          <h1 className="w-full lg:w-[200px]">Start your day With us</h1>
        </div>
        <div className="hidden lg:flex justify-center items-center py-3">
          <img src={image4} alt="" />
        </div>
        <div className="w-full hidden lg:block">
          <img src={headphone} alt="" />
        </div>
        <div className="flex justify-between items-center py-2">
          <h1 className="text-[12px] lg:text-[24px] font-semibold">
            Run and Talk
          </h1>
          <p className=" text-[10px] lg:text-[16px] font-normal ">
            Audio Podcast
          </p>
        </div>
        <div>
          <p className="text-[10px] lg:text-[16px] ">
            Running and talking simultaneously can be challenging, but with
            practice, it's possible to do both effectively. Here are some tips
            to help you run and talk at the same time:
          </p>
        </div>
        <button className="w-full lg:w-[200px] lg:text-[16px] text-[13px] font-semibold border border-1 border-[#4208B3] rounded-full">
          Go To Podcast
        </button>
      </div>

      <div className="lg:w-[30%] flex flex-col gap-5 p-3 ">
        <div className="bg-[#F7F7F5] p-3 rounded-xl">
          <div className="font-semibold text-[14px] lg:text-[26px] ">
            <h1 className="w-full lg:w-[200px]">The Lighthouse Conversation</h1>
          </div>
          <div className="text-[10px] font-normal lg:text-[16px] py-3">
            The group approached the lighthouse, marveling at its beauty and
            history. As they climbed the winding staircase, they couldn't help
            but feel a sense of awe and reverence.
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-[13px] lg:text-[18px] font-semibold">
              Read More
            </h1>
            <div className="bg-[#4208B3] rounded-full w-6">
              <img src={rightarrow} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F5] p-3 rounded-xl hidden lg:block">
          <div className="flex py-2 justify-between items-center">
            <img src={hearicon} alt="" />
            <div className="bg-[#4208B3] rounded-full w-6">
              <img src={rightarrow} alt="" />
            </div>
          </div>
          <div className=" text-[10px] py-1 lg:text-[16px] font-normal">
            Our podcasts can inspire you not only to speak English every day but
            also to think in it.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
