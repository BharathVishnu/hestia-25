import React, { useState } from "react";

function EventCard({ event, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-auto w-auto flex flex-col gap-0 group relative">
      <div
        className={`p-2 w-full md:w-full h-auto flex flex-col justify-between hover:bg-white hover:border-white transition-all duration-300
        ${index % 2 === 0 ? "border-white border-4" : "border-[#720A08] border-2"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div
          className={`mb-2 flex justify-center items-center h-64 lg:h-96 transition-transform duration-300 
          ${isHovered ? "opacity-100 translate-x-4 translate-y-4" : "opacity-100"}`}
        >
          <div className="border-2 bg-transparent group-hover:p-4 group-hover:bg-[#720A08] h-64 lg:h-96 relative w-full">
            <div className="group-hover:border-2 group-hover:border-white w-full h-full">
              {event.image ? (
                <img
                  src={event.image}
                  className="object-contain w-full h-full"
                  alt={event.title || "Event"}
                />
              ) : (
                <p className="text-center text-white">No Image</p>
              )}
            </div>
          </div>
        </div>

        
        <h2 className="p-1 group-hover:p-2 text-xl md:text-3xl tracking-wider text-white font-poppins uppercase group-hover:text-black group-hover:font-bold">
          {event.title || "No Title"}
        </h2>

        
        <div className="p-1 group-hover:p-2 text-sm md:text-md text-gray-300 font-poppins flex-grow overflow-hidden text-balance group-hover:text-black">
          {event.desc || "No Description Available"}
        </div>
      </div>

      
      <div
        className="bg-[#720A08] uppercase font-bold w-full p-3 opacity-0 group-hover:opacity-100 flex flex-row justify-between"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 59%, 82% 100%, 0 100%, 0% 50%)" }}
      >
        <span>Register Now</span>
        <span className="text-md">→</span>
      </div>
    </div>
  );
}

function Card({ events }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-14 p-4 mb-6">
      {events.length > 0 ? (
        events.map((event, index) => <EventCard key={event.id} event={event} index={index} />)
      ) : (
        <p className="text-center text-white">No events available</p>
      )}
    </div>
  );
}

export default Card;
