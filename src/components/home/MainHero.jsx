import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
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
    <div className="main-hero w-full relative flex flex-col items-center" >
      <div
        className="pl-[2%] md:pl-[1%]  grid-container w-full h-[660px] max-h-screen overflow-y-hidden md:h-screen "
      >
      </div>
      <h1 className="text-center w-full absolute top-72 md:top-[17%] text-[25vw] md:text-[200px] lg:text-[250px] md:py-20 z-10" style={{ fontFamily: 'okami' }}>{title}
        <h1 className=" md:mt-10">{subtitle && <TextScramble phrases={[subtitle]} />}</h1>
      </h1>
      {/* <h1 className="text-white text-6xl absolute top-[25rem] ml-[43rem] text-center text-proshowcard animate animate-pulse text-[40px] md:text-[100px] z-10" style={{ fontFamily: "dynalight", color: "#3A0A6E" }}>'25</h1> */}
    </div>
  );
}

export default MainHero;
