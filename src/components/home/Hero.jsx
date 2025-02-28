import React from 'react'
import '../../styles/NewHero.css'
import Headerbackground from "../../assets/images/hero/background.webp"
import Headerbackground2 from "../../assets/images/hero/background2.webp"

const Hero = () => {
  return (
    <div className='section relative' style={{ fontFamily: 'rubik' }}>
      <img src={Headerbackground} className='w-full h-80 absolute z-10' />
      <div className="text-center absolute inset-0 flex items-center justify-center">
        <h1 className='md:text-[220px] text-9xl z-20 absolute'>HESTIA</h1>
      </div>
      <div className='halftone'></div>
      <img src={Headerbackground2} className='w-full h-80 absolute z-10 -bottom-16' />
      <div className="absolute w-full bg-black h-[160px] -bottom-16"></div>
    </div>
  )
}

export default Hero
