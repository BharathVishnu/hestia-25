import React from 'react'
import img from "../../assets/images/pastEvents/img19.JPG"

const ProshowbookingCard = () => {
  return (
    <div className='w-screen min-h-full flex md:flex-row flex-col justify-center items-stretch p-3 md:p-0'>
        <div className='md:w-1/2 w-full border border-[#720A08] flex justify-center items-center md:pt-16 md:pb-16 pt-10 pb-10 pl-8 pr-8 md:ml-10 ml-0'>
          <img src={img} className='w-full h-full object-contain' />
        </div>
        {/* details */}
        <div className='md:w-1/2 w-full flex flex-col justify-between items-center  '>
            <div className='w-full flex justify-center items-center mt-8 md:mt-0'>
              {/* white with text */}
              <div className='lg:w-96 lg:h-28 w-72 h-20 bg-white flex flex-col justify-center items-center z-10'>
                  <h1 style={{ fontFamily: 'rubik' }} className='text-black font-bold lg:text-5xl text-3xl'>DJ STRELLA</h1>
                  <p className='text-[#E6B62E] font-poppins font-bold'>APRIL 19th 2025</p>
              </div>
              {/* redscreen */}
              <div className='absolute lg:w-96 lg:h-28 w-72 h-20 bg-[#720A08] flex flex-col justify-center items-center z-0 ml-10 mt-10'>
              </div>
            </div>
            {/* red and white line */}
            <div className='w-full flex justify-end gap-10 mt-10'>
              <div className='w-1/2 bg-white h-4'></div>
              <div className='w-1/2 bg-[#720A08] h-4'></div>
            </div>
            <div className='mt-10 flex justify-center items-center w-full h-full'>
            <p className='whitespace-nowrap text-wrap w-full text-left font-poppins pl-10 pr-10 font-semibold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            </p>
            </div>
            <div className='w-full flex justify-end gap-10 mt-auto pt-10 mb-8 md:mb-0'>
              <div className='w-1/2 bg-white h-4'></div>
              <div className='w-1/2 bg-[#720A08] h-4'></div>
            </div>
        </div>
    </div>
  )
}

export default ProshowbookingCard