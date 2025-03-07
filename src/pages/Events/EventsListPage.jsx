import React, { useState } from "react";
import Technicals from "../../assets/images/categoryBackgrounds/events/culturals_mask.png";
import Informals from "../../assets/images/categoryBackgrounds/events/informals.png";
import Proshow from "../../assets/images/categoryBackgrounds/events/proshow.png"
import { useNavigate } from "react-router-dom";

import Headerbackground from "../../assets/images/hero/background.webp";
const EventListing = () => {
  const navigate = useNavigate();
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const handleNavigation = (category) => {
    navigate(`/events/${category}`); // Navigate using route params
  };
  
  return (
    <div className="scroll-smooth mt-40 flex flex-col w-screen h-full md:h-screen text-xl md:text-2xl">
         <img
        src={Headerbackground}
        className="w-screen md:h-52  h-44 absolute top-0 z-10"
        alt="Background"
      />
        <div className="w-full h-[500px] md:h-1/2 flex flex-col md:flex-row transition-all duration-1000">
            
            <div className={`h-[250px] md:h-full relative overflow-hidden transition-all duration-1000 ${ hovered1 ? "md:flex-[9] border-4 border-white" : "md:flex-[2] border-2 border-[#720A08]"}`}>
                <div className="tracking-widest text-center flex items-center justify-center absolute top-0 w-full font-bold h-1/4 bg-black/20 font-poppins cursor-pointer" onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} >PROSHOWS &gt;</div>
                <img src={Proshow} className="object-fill h-full w-full"/>
            </div>
            <div className={`h-[250px] md:h-full relative overflow-hidden transition-all duration-1000 ${ hovered2 ? "md:flex-[9] border-4 border-white" : "md:flex-[3] border-2 border-yellow-600"}`}>
                <div className="tracking-widest text-center flex items-center justify-center absolute  right-0 w-1/4 font-bold h-full bg-black/20 font-poppins " onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} onClick={() => handleNavigation("technical")}><p className="rotate-90">TECHNICAL &gt;</p></div>
                <img src={Informals} className="object-fill h-full w-full"/>
            </div>
        </div>

        <div className="w-full h-[500px] md:h-1/2 flex flex-col md:flex-row transition-all duration-1000">
            <div className={`h-[250px] md:h-full relative overflow-hidden transition-all duration-1000 ${ hovered3 ? "md:flex-[9] border-4 border-white" : "md:flex-[3] border-2 border-yellow-600"}`}>
                <div className="tracking-widest text-center flex items-center justify-center absolute left-0 w-1/4 font-bold h-full bg-black/20 font-poppins" onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)} onClick={() => handleNavigation("culturala")}><p className="rotate-90">CULTURALS &gt;</p></div>
                <img src={Informals} className="object-fill h-full w-full"/>
            </div>
            <div className={`h-[250px] md:h-full relative overflow-hidden transition-all duration-1000 ${ hovered4 ? "md:flex-[9] border-4 border-white" : "md:flex-[2] border-2 border-[#720A08] "}`}>
                <div className="tracking-widest text-center flex items-center justify-center absolute top-0 w-full font-bold h-1/4 bg-black/20 font-poppins" onMouseEnter={() => setHovered4(true)} onMouseLeave={() => setHovered4(false)} onClick={() => handleNavigation("informals")}>INFORMALS &gt;</div>
                <img src={Informals} className="object-fill h-full w-full"/>
            </div>
        </div>
    </div>
  );
};

export default EventListing;
