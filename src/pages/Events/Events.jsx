
import Search from "../../components/events/Search.jsx";
import Sort from "../../components/events/Sort.jsx";
import Carousel from "../../components/home/HeroCarousel";
import MainHero from "../../components/home/MainHero.jsx";
import React, { useState } from "react";
import Card from "../../components/events/Card.jsx";
import Hero from "../../components/home/Hero.jsx";
function Events() {
  return (
    <div className="h-auto">
      <Hero title={"MAJOR"} secondtext={"EVENTS"} color={"#720A08"} />
      <div className="mt-10"></div>
      <div className=" flex flex-col items-center w-screen">
      <Carousel />
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-12">
        <div className="bg-[#720A08] absolute right-1 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
        <div className="bg-white absolute right-16 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
      </div>
      <Search/>
      <div className="flex flex-col gap-4 relative w-screen h-4 md:h-12">
            <div className="bg-[#720A08] absolute left-16 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
            <div className="bg-white absolute left-1 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
      </div>
      <Sort/>
      <Card/>
      <div className="flex flex-row items-center mx-auto justify-center  w-auto lg:w-[800px] xl:w-[1200px] h-1 md:h-4 bg-[#720A08]"></div>
      <div className="flex flex-col gap-8 relative w-screen h-10 md:h-14">
        <div className="bg-white absolute left-0 top-0 w-24 md:w-64 h-1/4 "></div>
        <div className="bg-white absolute right-1 bottom-0 w-24 md:w-64 h-1/4 "></div>
      </div>
      </div>
    </div>
  );
}

export default Events;