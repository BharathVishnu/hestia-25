import React from "react";
import "../../styles/events.css";

const EventCard = ({ title, imageSrc, onClick }) => (
  <div
    className="w-64 h-96 bg-transparent relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer font-poppins"
  >
    <div className="canvas w-full h-full relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[365px] object-cover"
      />
      <div className="absolute inset-16 transform -rotate-90">
        <h3 className="text-white text-2xl font-bold uppercase tracking-wider">
          {title}
        </h3>
      </div>
    </div>
    <div  onClick={onClick} style={{clipPath: "polygon(0 0, 100% 0, 100% 57%, 80% 100%, 1% 100%)",}} className="checkout-button uppercase absolute bottom-[-12px] right-[-8px] bg-[#720A08] text-white text-sm font-bold px-6 py-2 clip-polygon">
      Check Out
    </div>
  </div>
);

export default EventCard;