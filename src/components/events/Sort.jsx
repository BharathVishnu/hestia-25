import React, { useState } from "react";

function HoverEffectBox() {
  const dates = ["April 28th", "April 29th", "April 30th"];

  return (
    <div className="mb-6 font-poppins uppercase flex flex-row items-center justify-center gap-6 nd:gap-12 lg:gap-24 h-auto w-screenp-4">
      {dates.map((date, index) => (
        <HoverBox key={index} date={date} />
      ))}
    </div>
  );
}

function HoverBox({ date }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mt-4 text-xs sm:text-sm md:text-md lg:text-lg w-20 sm:w-24 md:w-48 h-6 md:h-12 bg-white shadow-lg flex items-center justify-center font-bold text-gray-800 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {date}
      <div
        className={`absolute top-1 left-1 w-20 sm:w-24 md:w-48 h-6 md:h-12 bg-[#720A08] text-white flex items-center justify-center shadow-xl transition-transform duration-300 ${
          isHovered ? "opacity-100 translate-x-1 translate-y-1" : "opacity-0"
        }`}
      >
        {date}
      </div>
    </div>
  );
}

export default HoverEffectBox;
