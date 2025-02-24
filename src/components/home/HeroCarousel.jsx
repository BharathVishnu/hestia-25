import React from "react";
import { motion } from "framer-motion";
import "../../styles/hero.css";
import "../../styles/carousel.css";

import logoHestia from "../../assets/icons/logo_hestia.png";
// Reusable Text Component
const MarqueeText = () => (
  <span className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'okami'}}>
    SOUTH INDIA'S LARGEST TECHNO CULTURAL FEST
  </span>
);

const MarqueeLogo = () => (
  <div className="w-8" >
    <img src={logoHestia}/>
  </div>
);

function Carousel() {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} 
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, 
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-8 md:gap-10">
            <MarqueeText />
            <MarqueeLogo />
            <MarqueeText />
            <MarqueeLogo />
            <MarqueeText />
            <MarqueeLogo />
            <MarqueeText />
            <MarqueeLogo />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
