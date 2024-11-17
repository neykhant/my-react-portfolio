import { useState } from "react";
import Navbar from "./components/Navbar";
import ImproveEnglish from "./components/ImproveEnglish/ImproveEnglish";
import TrainNative from "./components/TrainNative/TrainNative";

import GetLicense from "./components/GetLicense/GetLicense";
import Experience from "./components/Experience/Experience";
import NavMobile from "./mobile/NavMobile/NavMobile";
import EmailGet from "./components/EmailGet/EmailGet";
import ContentNav from "./components/ContentNav/ContentNav";
import ContentHeader from "./components/ContentHeader/ContentHeader";
import ContentBody from "./components/ContentBody/ContentBody";
import OurFavouriate from "./components/OurFavouriate/OurFavouriate";
import TheyTalk from "./components/TheyTalk/TheyTalk";
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";
import Last from "./components/Last/Last";

function App() {
  return (
    <div className=" container mx-auto ">
      <div className="h-screen">
        {/* for navbar */}
        <Navbar />
        <NavMobile />
        {/* for navbar */}
        <ImproveEnglish />
        <TrainNative />
        <GetLicense />
        <Experience />
        <EmailGet />
      </div>
      <div className="h-screen">
        <div className="flex justify-center items-center my-2">
          <div className=" w-[200px] lg:w-[534px] text-center text-[20px] lg:text-[60px] rounded-l-full rounded-tr-full font-bold  bg-[#D2BBFF] lg:px-[80px] lg:py-[3px] px-[20px] py-3">
            Our Content
          </div>
        </div>
        <ContentNav />
        <ContentHeader />
        <ContentBody />
      </div>
      <div className="h-auto">
        <div className="flex py-2 justify-center items-center my-2">
          <div className="lg:min-w-[900px] lg:w-[534px] text-center text-[20px] lg:text-[60px] rounded-l-full rounded-tr-full font-bold  bg-[#D2BBFF] lg:px-[80px] lg:py-[3px] px-[20px] py-3">
            Our favorite Topics
          </div>
        </div>
        <OurFavouriate />
      </div>
      <div className="h-auto">
        <div className="flex py-2 justify-center items-center my-2">
          <div className="lg:min-w-[900px] lg:w-[534px] text-center text-[20px] lg:text-[60px] rounded-l-full rounded-tr-full font-bold  bg-[#D2BBFF] lg:px-[80px] lg:py-[3px] px-[20px] py-3">
            They talk About Us
          </div>
        </div>
        <TheyTalk />
      </div>
      <div className="h-auto">
        <div className="flex py-2 justify-center items-center my-2">
          <div className="lg:min-w-[900px] lg:w-[534px] text-center text-[20px] lg:text-[60px] rounded-l-full rounded-tr-full font-bold  bg-[#D2BBFF] lg:px-[80px] lg:py-[3px] px-[20px] py-3">
            Prices
          </div>
        </div>
        <Price />
      </div>
      <div className="h-auto">
        <Footer/>
      </div>
      <div className="h-auto">
        <Last/>
      </div>
    </div>
  );
}

export default App;
