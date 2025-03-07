import React from "react";
import Headerbackground from "../../assets/images/hero/background.webp";
import Headerbackground2 from "../../assets/images/hero/background2.webp";
import "../../styles/hero.css";
import "../../styles/home.css";
import TextScramble from "./TextScramble";

/**
 * Render a hero section with a title.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display in the hero section.
 * @param {string} [props.subtitle] - The subtitle to display below the title.
 * @param {number} props.keyC - The unique key for the component instance.
 * @returns {JSX.Element} The JSX element representing the hero section.
 */
function MainHero({ title, subtitle, keyC }) {
  const renderTitle = () => {
    if (title === "HESTIA") {
      return <span>{title}</span>;
    } else {
      const words = title.split(" ");
      return words.map((word, index) => (
        <span
          key={index}
          className={index % 2 === 0 ? "text-white" : "text-[#720A08]"}
        >
          {word}{" "}
        </span>
      ));
    }
  };

  return (
    <div
      className="section relative min-h-screen overflow-hidden w-screen"
      style={{ fontFamily: "rubik" }}
    >
      <img
        src={Headerbackground}
        className="w-screen md:h-52  h-44 absolute top-0 z-10"
        alt="Background"
      />

      <div className="text-center inset-0 flex items-center justify-center">
        <h1
          className={`text-center w-full top-72 md:top-[17%] ${
            title === "HESTIA"
              ? "text-[25vw] md:text-[200px] lg:text-[250px]"
              : "text-[20vw] md:text-[100px] lg:text-[160px]"
          } md:py-20 z-10`}
        >
          {renderTitle()}
          <h1 className="md:mt-10">
            {subtitle && <TextScramble phrases={[subtitle]} />}
          </h1>
        </h1>
      </div>

      <div className="halftone"></div>

      <div className="relative w-full z-20">
        <img
          src={Headerbackground2}
          className="w-full h-80 absolute bottom-0 z-10"
          alt="Background 2"
        />
        <div className="home absolute w-full bg-[#1c1b22] xl:h-[148px] md:h-[160px] h-[164px] bottom-0 overflow-hidden rotate-[3deg] -ml-1"></div>
        <div className="home absolute w-full bg-[#1c1b22] h-[140px] bottom-0 overflow-hidden"></div>
      </div>
    </div>
  );
}

export default MainHero;
