import React from 'react'
import '../../styles/NewHero.css'
import Headerbackground from "../../assets/images/hero/background.webp"
import Headerbackground2 from "../../assets/images/hero/background2.webp"

const Hero = () => {
  return (
    <div className='section relative min-h-screen' style={{ fontFamily: 'rubik' }}>
      <img src={Headerbackground} className='w-full h-80 absolute z-10' />

      <div className="text-center absolute inset-0 flex items-center justify-center">
        <h1 className='text-7xl md:text-9xl lg:text-[160px] z-20 absolute'>HESTIA</h1>

      </div>
      <div className='halftone'></div>
      <img src={Headerbackground2} className='w-full h-80 absolute z-10 -bottom-16' />
      <div className="absolute w-full bg-black h-[158px] -bottom-16 rotate-3 "></div>
    </div>
  )
}

export default Hero
