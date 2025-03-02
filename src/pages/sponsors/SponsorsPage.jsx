
import Search from "../../components/events/Search.jsx";
import Sort from "../../components/events/Sort.jsx";
import Carousel from "../../components/home/HeroCarousel";
import MainHero from "../../components/home/MainHero.jsx";
import React, { useState } from "react";
import Card from "../../components/events/Card.jsx";
import Hero from "../../components/home/Hero.jsx";

function Events() {
  

  return (
    <div className="h-auto ">
      <Hero title="SPONSORS" />
      <div className="mt-10"></div>
      <div className="flex flex-col gap-4 items-center w-screen">
      <Carousel />
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-12">
        <div className="bg-[#720A08] absolute right-1 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
        <div className="bg-white absolute right-16 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
      </div>
      <div className="flex flex-col justify-center items-center md:justify-center lg:items-start lg:justify-start mb-6 ml-0 md:ml-8 tracking-widest">
            <div className="font-rubik font-bold text-2xl md:text-7xl z-0">
                TITLE
            </div>
            <div className="font-poppins font-bold text-2xl md:text-7xl ml-0 lg:ml-48 w-auto p-2 md:p-4 mt-[-18px] md:mt-[-48px] text-black bg-[#720A08]">
                SPONSORS
            </div>
      </div>
      {/* <div>

      </div> */}
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-12">
            <div className="bg-[#720A08] absolute left-16 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
            <div className="bg-white absolute left-1 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
      </div>
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-8">
            <div className="bg-[#720A08] absolute left-0 top-0 w-1/2 h-1/2"></div>
            <div className="bg-white absolute right-1 bottom-0 w-1/2 h-1/2"></div>
      </div>
      <div className="mt-6 flex flex-col justify-end items-end text-right tracking-widest w-screen">
            <div className="font-poppins font-bold text-2xl md:text-6xl p-1 w-12 md:w-36 text-center mr-32 md:mr-72 z-0 bg-[#720A08] text-black">
                CO
            </div>
            <div className="font-rubik font-bold text-2xl md:text-6xl z-10 mt-[-14px]">
              SPONSORS
            </div>
      </div>
      {/* <div>

      </div> */}
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-8">
            <div className="bg-[#720A08] absolute right-1 top-0 w-1/2 h-1/2"></div>
            <div className="bg-white absolute left-0 bottom-0 w-1/2 h-1/2"></div>
      </div>
      <div className="mt-6 pl-0 md:pl-8 flex flex-col justify-start items-start text-right tracking-widest w-screen">
            <div className="font-rubik font-bold text-2xl md:text-6xl p-1 w-auto text-left md:text-center z-10 text-white">
                MERCH
            </div>
            <div className="font-poppins font-bold text-white bg-[#720A08] text-2xl md:text-6xl z-0 mt-[-24px] p-1 ml-12 md:ml-48 ">
              SPONSORS
            </div>
      </div>
      {/* <div>

      </div> */}
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-8 mb-12">
            <div className="bg-[#720A08] absolute left-0 top-0 w-1/2 h-1/2"></div>
            <div className="bg-white absolute right-1 bottom-0 w-1/2 h-1/2"></div>
      </div>
    </div>
    </div>
  );
}

export default Events;
