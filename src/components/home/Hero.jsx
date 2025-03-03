import React from 'react'
import '../../styles/NewHero.css'
import Headerbackground from "../../assets/images/hero/background.webp"
import Headerbackground2 from "../../assets/images/hero/background2.webp"

const Hero = ({ title, secondtext, upper, color, desc }) => {
  return (
    <div className='section relative h-[70vh]' style={{ fontFamily: 'rubik' }}>
      <img src={Headerbackground} className='w-full h-40 absolute z-10' />


      <div className="text-center absolute inset-0 flex items-center justify-center flex-col">
        {upper &&  <p className=" mt-4 text-[#720A08] z-50 lg:text-5xl md:text-4xl text-3xl font-bold font-poppins">{upper}</p>}
        <h1 className='text-5xl md:text-8xl lg:text-[135px] z-20  gap-8 flex flex-wrap md:flex-nowrap justify-center items-center'>
          {title}
          {secondtext ? <div style={{ color: color }}>{secondtext}</div> : null}
        </h1>

        {desc && <p className=" mt-4 text-[#720A08] z-50 lg:text-5xl md:text-4xl text-3xl font-bold font-poppins">{desc}</p>}

      </div>

      <div className='halftone'></div>
      <img src={Headerbackground2} className='w-full h-40 absolute z-20 -bottom-16' />
      {/* <div className="absolute w-full bg-[#1c1b22] xl:h-[10px] md:h-[20px] h-[20px] bottom-0 overflow-hidden rotate-[3deg] -ml-1"></div> */}
      <div className="absolute w-full bg-[#1c1b22] h-[20px] bottom-0 overflow-hidden z-10"></div>
    </div>
  )
}

export default Hero;
