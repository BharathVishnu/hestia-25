import React, { useState } from "react";

function HoverEffectBox({ toggleFilterByDate, selectedDates }) {
  const dates = [
    { label: "April 28th", value: "2025-04-28" },
    { label: "April 29th", value: "2025-04-29" },
    { label: "April 30th", value: "2025-04-30" },
  ];

  return (
    <div className="mb-6 font-poppins uppercase flex flex-row items-center justify-center gap-6 nd:gap-12 lg:gap-24 h-auto w-screen p-4">
      {dates.map((date, index) => (
        <HoverBox
          key={index}
          date={date}
          toggleFilterByDate={toggleFilterByDate}
          isActive={selectedDates.includes(date.value)} // Check if selected
        />
      ))}
    </div>
  );
}

function HoverBox({ date, toggleFilterByDate, isActive }) {
  return (
    <div
      className={`relative mt-4 text-xs sm:text-sm md:text-md lg:text-lg w-20 sm:w-24 md:w-48 h-6 md:h-12 cursor-pointer shadow-lg flex items-center justify-center font-bold transition-all duration-300 ${
        isActive ? "bg-white text-white" : "bg-white text-gray-800"
      }`}
      onClick={() => toggleFilterByDate(date.value)}
    >
      {date.label}
      <div
        className={`absolute top-1 left-1 w-20 sm:w-24 md:w-48 h-6 md:h-12 bg-[#720A08] text-white flex items-center justify-center shadow-xl transition-transform duration-300 ${
          isActive ? "opacity-100 translate-x-1 translate-y-1" : "opacity-0"
        }`}
      >
        {date.label}
      </div>
    </div>
  );
}

export default HoverEffectBox;
