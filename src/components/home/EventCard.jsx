import React from "react";

const EventCard = ({ title, imageSrc, onClick }) => (
  <div className="w-48 h-48 md:w-72 md:h-72 bg-transparent relative cursor-pointer font-poppins">
    <div className="bg-white w-full h-full relative">
      <div className="w-full h-[365px] text-white"></div>
      <div className="absolute inset-4 transform -rotate-90 pl-1">
        <h3 className="text-black text-xl md:text-3xl font-bold uppercase tracking-wider">
          {title}
        </h3>
      </div>
    </div>
    <div className="relative">
      <div
        className="absolute bottom-[-20px] right-[-14px] w-[160px] h-[50px] border border-white  "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 57%, 80% 100%, 0% 100%)" }}
      >
        
      </div>
      <div
        onClick={onClick}
        className="absolute bottom-[-12px] right-[-8px] bg-[#720A08] text-white text-sm font-bold px-6 py-2 uppercase"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 57%, 80% 100%, 1% 100%)" }}
      >
        Check It Out
      </div>
    </div>
  </div>
);

export default EventCard;
