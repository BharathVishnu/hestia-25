import React from "react";
import shirt1 from "../../assets/images/shirt1.png";
import shirt2 from "../../assets/images/shirt2.png";
import shirt3 from "../../assets/images/shirt3.png";
import arrow from "../../assets/images/Arrow 1.svg";
import Carousel from "../../components/home/HeroCarousel";
import MainHero from "../../components/home/MainHero.jsx";

const Merchs = () => {
  return (
    <div className="h-auto flex flex-col w-screen bg-black text-white">
      <MainHero title="MERCHANDISE" />
      <Carousel />
      
      <div className="flex flex-col items-center bg-[url(/src/assets/images/faqbg.png)] py-24">
        <div className="relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute right-1 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
          <div className="bg-white absolute right-16 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-widest font-bold text-center uppercase font-poppins">Available Now</h1>
        
        <div className="relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute left-16 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
          <div className="bg-white absolute left-1 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mt-10  w-full pl-5 pr-5 ">
          
          <div className="relative bg-[#ffffff]   text-center ">
            <img src={shirt1} alt="T-Shirt" className="w-full h-auto mt-6 ml-6 bg-[#720A08]" />
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl py-5 font-bold uppercase text-black " style={{ fontFamily: 'Rubikvinyl' }}>T-SHIRT</h2>
            <button 
              style={{clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0% 100%)", width: "100%"}} 
              className="absolute bottom-[-40px] left-0 bg-[#720A08] text-white 2xl:text-2xl xl:text-xl lg:text-xl  py-2 font-bold uppercase flex items-center justify-start gap-48 pl-5 pr-5"
            >
              CHECK IT OUT <span><img src={arrow} alt="arrow" /></span>
            </button>
          </div>
          
          
          <div className="relative flex flex-col items-center w-full pr-5">
            <div className="bg-white p-4 text-center text-black w-full h-full">
              <img src={shirt2} alt="Product" className="w-full h-auto" />
            </div>
            <div className="bg-black p-8 w-full border-2 border-white mt-[-20px]">
              <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl  leading-[1.2] font-normal uppercase text-white text-center" style={{ fontFamily: 'Rubikvinyl' }}>NAME</h2>
            </div>
          </div>
          
          
          <div className="relative flex flex-col items-center w-full pr-5">
            <div className="bg-white p-4 text-center text-black w-full h-full">
              <img src={shirt3} alt="Product" className="w-full h-auto" />
            </div>
            <div className="bg-black p-8 w-full border-2 border-[#720A08] mt-[-20px]">
              <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl  leading-[1.2] font-normal uppercase text-white text-center" style={{ fontFamily: 'Rubikvinyl' }}>NAME</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchs;