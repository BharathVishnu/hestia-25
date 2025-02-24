import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import DottedLine from "./DottedLine";
import HomeMarque from "./HomeMarque";

import { LoaderContext } from "../../context/loader";
import "../../styles/hero.css";
import TextScramble from "./TextScramble";
/**
 * Render a hero section with a title.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display in the hero section.
 * @param {string} [props.textSize="330px"] - The font size of the title.
 * @param {number} props.keyC - The unique key for the component instance.
 * @returns {JSX.Element} The JSX element representing the hero section.
 */
function Hero({ title, subtitle, keyC }) {


  return (
    <div className="hero-section w-full relative flex flex-col items-center">
      <div
        className="pl-[2%] md:pl-[1%]  grid-container w-full h-[480px] md:h-[400px] max-h-screen overflow-y-hidden"
        ref={heroSectionRef}
      >
        {renderGridItems()}
      </div>

    </div>
  );
}

export default Hero;
