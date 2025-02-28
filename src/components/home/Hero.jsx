import React from 'react'
import '../../styles/NewHero.css'

const Hero = () => {
  return (
    <div className='section overflow-hidden' style={{ fontFamily: 'okami', position: 'relative' }}>
      <div 
        className='w-screen absolute'
        style={{ 
          height: '947px',
          left: '0px',
          top: '-500px',
          backgroundImage: 'url(/src/assets/images/hero/background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
         <div 
        className='w-screen absolute'
        style={{ 
          height: '947px',
          top: '1091px',
          top: '1091px',
          backgroundImage: 'url(/src/assets/images/hero/background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      </div>
      <div className="text-center absolute inset-0 flex items-center justify-center">
        <h1 className='text-[220px] z-10 relative'>HESTIA</h1>
      </div>
      <div className='halftone'></div>
    </div>
  )
}

export default Hero