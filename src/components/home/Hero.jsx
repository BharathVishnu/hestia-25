import React from 'react'
import '../../styles/NewHero.css'

const Hero = () => {
  return (
    <div className='section' style={{ fontFamily: 'okami' }}>
      <div className="text-center absolute inset-0 flex items-center justify-center">
        <h1 className='md:text-[220px] text-9xl z-10 relative'>HESTIA</h1>
      </div>
      <div className='halftone'></div>
    </div>
  )
}

export default Hero