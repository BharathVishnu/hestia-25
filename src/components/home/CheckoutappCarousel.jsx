import React from "react";
import { motion } from "framer-motion";
import "../../styles/hero.css";
import "../../styles/carousel.css";
import logoHestia from "../../assets/images/hero/logo.png";
import appPic from "../../assets/images/app_pic.png";

const MarqueeText = () => (
  <span className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'okami'}}>
    CHECKOUT THE HESTIA APP
  </span>
);

const MarqueeLogo = () => (
  <div className="w-8">
    <img src={logoHestia} alt="Hestia Logo" />
  </div>
);

function Carousel() {
  return (
    <div className="overflow-hidden w-full flex">
      <motion.div
        className="flex w-max gap-0 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            <MarqueeText />
            <MarqueeLogo />
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
      <motion.div
        className="flex w-max gap-0 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            <MarqueeText />
            <MarqueeLogo />
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

const MarqueeAppLogo = () => (
  <div className="w-96 h-96 flex-shrink-0">
    <img src={appPic} className="w-full h-full object-contain" alt="App Screenshot" />
  </div>
);

const Hestiamarquee = () => {
  return (
    <div className="overflow-hidden w-full flex">
      <motion.div
        className="flex w-max gap-0 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            <MarqueeAppLogo />
            <MarqueeAppLogo />
            <MarqueeAppLogo />
            <MarqueeAppLogo />
            <MarqueeAppLogo />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex w-max gap-0 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            <MarqueeAppLogo />
            <MarqueeAppLogo />
            <MarqueeAppLogo />
            <MarqueeAppLogo />
            <MarqueeAppLogo />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CheckoutappCarousel = () => {
  return (
    <div className="flex-col relative">
      <Carousel />
      <div className="my-20"></div>
      <div className="flex flex-col gap-32">
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      <div className="absolute top-0 flex h-full flex justify-center items-center">
        <div className="">
          <Hestiamarquee />
        </div>
      </div>
    </div>
  );
};

export default CheckoutappCarousel;