import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Headerbackground from "../../assets/images/hero/background.webp"
import Headerbackground2 from "../../assets/images/hero/background2.webp"

gsap.registerPlugin(ScrollTrigger);

import { LoaderContext } from "../../context/loader";
import "../../styles/hero.css";
import TextScramble from "./TextScramble";
import Carousel from "./HeroCarousel";
/**
 * Render a hero section with a title.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display in the hero section.
 * @param {string} [props.textSize="330px"] - The font size of the title.
 * @param {number} props.keyC - The unique key for the component instance.
 * @returns {JSX.Element} The JSX element representing the hero section.
 */
function MainHero({ title, subtitle, keyC }) {
  return (
    <div className="section relative min-h-screen overflow-hidden" style={{ fontFamily: "rubik" }}>
    
      <img src={Headerbackground} className="w-full h-56 absolute top-0 z-10" />

    
      <div className="text-center inset-0 flex items-center justify-center">
        <h1 className="text-center w-full top-72 md:top-[17%] text-[25vw] md:text-[200px] lg:text-[250px] md:py-20 z-10">
          {title}
          <h1 className="md:mt-10">
            {subtitle && <TextScramble phrases={[subtitle]} />}
          </h1>
        </h1>
      </div>

      <div className="halftone"></div>

      <div className="relative w-full z-20">
        <img src={Headerbackground2} className="w-full h-80 absolute bottom-0 z-10" />
        <div className="absolute w-full bg-black xl:h-[148px] md:h-[160px] h-[164px] bottom-0 overflow-hidden rotate-[3deg] -ml-1"></div>
        <div className="absolute w-full bg-black h-[140px] bottom-0 overflow-hidden"></div>
      </div>
    </div>
  );
}

export default MainHero;
