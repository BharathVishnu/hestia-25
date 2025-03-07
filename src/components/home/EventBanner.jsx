import React from 'react';

function EventBanner() {
  return (
    <div className="relative mt-8 w-full text-white">
      <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row justify-between items-center xl:items-start">
        <div className="flex flex-col w-full xl:w-1/2 text-center xl:text-left">
          <div className="font-bold font-poppins flex items-center justify-center xl:justify-start">
            <h2 className="text-3xl md:text-6xl lg:text-7xl text-center xl:text-left">04.04</h2>
            <div className="w-16 md:w-32 lg:w-40 xl:w-96 h-2 md:h-3 ml-4 sm:ml-6 md:ml-8 bg-white relative top-2 md:top-4"></div>
          </div>
          <div className="font-bold font-poppins text-center xl:text-left text-3xl md:text-6xl lg:text-7xl">06.04.2025</div>
        </div>

        <div className="font-bold relative bg-[#720A08] text-[#0A0A0A] text-4xl sm:text-6xl md:text-[80px] lg:text-[80px] w-full xl:w-1/2 tracking-widest md:tracking-wider p-4 text-center xl:text-left">
          <div className="font-poppins flex flex-col">
            <span c>CHAOS</span>
            <span className="xl:text-right">CREATION</span>
          </div>
          <span
            className="font-rubik font-normal absolute text-3xl sm:text-5xl md:text-6xl lg:text-[65px] text-white"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            BECOMES
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-full h-8 sm:h-10 md:h-12">
        <div className="bg-white"></div>
        <div className="bg-transparent"></div>
        <div className="bg-transparent"></div>
        <div className="bg-white"></div>
      </div>
    </div>
  );
}

export default EventBanner;