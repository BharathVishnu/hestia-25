import React from 'react'
import Hero from '../../components/home/Hero'
import Carousel from '../../components/home/HeroCarousel';
import TwoLine from '../../components/Proshow/TwoLine';

const Proshowbooking = () => {
  return (
    <div className='bg-black'>
        <Hero title={"Pro"} secondtext={"show"} color={"#720A08"}/>
        <div className='mt-10'>
            <Carousel />
        </div>
        <div className='mt-10'></div>
        <TwoLine position={"right"}/>
        <div className='mt-20'></div>
        <div className='flex sm:gap-20 gap-5 justify-between '>
            <TwoLine position={"left"} />
            {/* text Day one */}
            <div className='flex '>
                {/* textDay */}
                <div className='sm:w-40 w-32 text-3xl   bg-[#720A08] text-black h-20 flex justify-center items-center -mt-10 font-poppins sm:text-4xl font-bold'>
                    <h1>DAY</h1>
                </div>
                <div className='sm:w-40  w-32 text-3xl   text-white h-20 flex justify-items-start items-center -mt-10  sm:text-4xl font-bold' style={{ fontFamily: 'rubik' }}>
                    <h1>ONE</h1>
                </div>
                
            </div>
            <div>

            </div>
        </div>
       
    </div>
  )
}

export default Proshowbooking;
