import React from "react";

function EventHeader()
{
    return(
        <div className="flex flex-col justify-center items-center md:justify-center lg:items-start lg:justify-start mb-6 ml-0 md:ml-8 tracking-widest">
            <div className="font-rubik text-5xl md:text-7xl z-0">
                MAJOR
            </div>
            <div className="font-poppins font-bold text-5xl md:text-7xl ml-0 md:ml-60 md:w-72 p-2 md:p-1 md:pt-12 mt-[-15px] md:mt-[-48px] text-black bg-[#720A08]">
                EVENTS
            </div>
        </div>
    );
};

export default EventHeader