
import Search from "../../components/events/Search.jsx";
import Sort from "../../components/events/Sort.jsx";
import Carousel from "../../components/home/HeroCarousel";
import MainHero from "../../components/home/MainHero.jsx";
import React, { useState } from "react";
import Card from "../../components/events/Card.jsx";
import Hero from "../../components/home/Hero.jsx";

function Events() {
  

  return (
    <div className="h-auto flex flex-col w-screen">
      
      <Hero title={"MAJOR"} secondtext={"EVENTS"} color={"#720A08"} />
      <div className="mt-10" />
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

    </div>
  );
}

export default Events;