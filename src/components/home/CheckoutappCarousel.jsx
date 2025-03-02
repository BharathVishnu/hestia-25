import React from "react";
import { motion } from "framer-motion";
import "../../styles/hero.css";
import "../../styles/carousel.css";
import logoHestia from "../../assets/images/hero/logo.png";
import appPic from "../../assets/images/app_pic.png"; 

const MarqueeText = ({ text }) => (
  <span className="text-sm md:text-lg lg:text-2xl font-bold text-white" style={{ fontFamily: 'okami' }}>
    {text}
  </span>
);

const MarqueeLogo = () => (
  <div className="w-6 md:w-8">
    <img src={logoHestia} alt="Hestia Logo" className="w-full" />
  </div>
);

function Carousel() {
  return (
    <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden bg-black">
      
      <motion.div
        className="absolute top-0 w-full flex gap-6 md:gap-10 whitespace-nowrap opacity-100"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        <div className="flex gap-6 md:gap-10">
          {[...Array(6)].map((_, index) => (
            <>
              <MarqueeText key={`text-${index}`} text="CHECK OUT THE HESTIA APP" />
              <MarqueeLogo key={`logo-${index}`} />
            </>
          ))}
        </div>
      </motion.div>

      
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full flex gap-6 md:gap-10 whitespace-nowrap opacity-80"
          style={{ top: `${20 + i * 15}%` }}
          initial={{ x: i % 2 === 0 ? "100%" : "-100%" }}
          animate={{ x: i % 2 === 0 ? "-100%" : "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          <div className="flex gap-6 md:gap-10">
            {[...Array(4)].map((_, index) => (
              <>
                <MarqueeText key={`bg-text-${index}`} text="CHECK OUT THE HESTIA APP" />
                <MarqueeLogo key={`bg-logo-${index}`} />
              </>
            ))}
          </div>
        </motion.div>
      ))}

      
      <motion.div
        className="absolute top-[10%] left-0 w-full flex gap-6 md:gap-10 whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        <div className="flex gap-6 md:gap-10">
          {[...Array(10)].map((_, index) => (
            <img key={index} src={appPic} alt="App Screenshot" className="h-48 md:h-64 lg:h-72 mx-2 md:mx-4" />
          ))}
        </div>
      </motion.div>

      
      <motion.div
        className="absolute bottom-[5%] md:bottom-[8%] w-full flex gap-6 md:gap-10 whitespace-nowrap opacity-100"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        <div className="flex gap-6 md:gap-10">
          {[...Array(6)].map((_, index) => (
            <>
              <MarqueeText key={`bottom-text-${index}`} text="CHECK OUT THE HESTIA APP" />
              <MarqueeLogo key={`bottom-logo-${index}`} />
            </>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Carousel;
