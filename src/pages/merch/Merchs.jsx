import React from "react";

import "../../styles/home.css";
import Carousel from "../../components/home/HeroCarousel";
import Hero from "../../components/home/Hero.jsx";
import Mcard from "../../pages/merch/Merchcard.jsx";
const Merchs = () => {
  return (
    <div className="h-auto flex home flex-col w-screen  text-white">
      <Hero title="MERCHANDISE" />
      <div className="mt-10">
      <Carousel />
      </div>
      
      
      <div className="flex flex-col items-center  py-24">
        <div className="relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute right-1 top-0 w-24 md:w-48 h-1/4 "></div>
          <div className="bg-white absolute right-16 bottom-0 w-24 md:w-48 h-1/4 "></div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-widest font-bold text-center uppercase font-poppins">Available Now</h1>
        
        <div className="relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute left-16 top-0 w-24 md:w-48 h-1/4 "></div>
          <div className="bg-white absolute left-1 bottom-0 w-24 md:w-48 h-1/4 "></div>
        </div>
        
        
        <Mcard/>


        
      
        <div className="flex flex-row items-center mx-auto justify-center  w-auto lg:w-[800px] xl:w-[1200px] h-1 md:h-4 bg-[#720A08]"></div>
      <div className="flex flex-col gap-8 relative w-screen h-10 md:h-14">
        <div className="bg-white absolute left-0 top-0 w-24 md:w-64 h-1/4 "></div>
        <div className="bg-white absolute right-1 bottom-0 w-24 md:w-64 h-1/4 "></div>
      </div>
      </div>
    </div>
  );
};

export default Merchs;