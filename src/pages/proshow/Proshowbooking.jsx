import React, { useEffect } from 'react'
import Hero from '../../components/home/Hero'
import Carousel from '../../components/home/HeroCarousel';
import TwoLine from '../../components/Proshow/TwoLine';
import ProshowbookingCard from '../../components/Proshow/ProshowbookingCard';
import bg from '../../assets/images/bg.avif'
const Proshowbooking = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return (
        <div className='' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Hero title={"Pro"} secondtext={"show"} color={"#720A08"} />
            <div className='mt-10'>
                <Carousel />
            </div>
            <div className='mt-10'></div>
            <TwoLine position={"right"} />
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
                <div></div>
            </div>
            <div className='mt-10'></div>
            <ProshowbookingCard />
            <div className='mt-20'></div>
            {/* venue */}
            <div className='mt-10 h-fit '>
                <div className='sm:w-40 w-32 text-3xl   bg-white ml-10 text-black h-20 flex justify-center items-center -mt-10 font-poppins sm:text-4xl font-bold'>
                    <h1 style={{ fontFamily: 'rubik' }}>VENUE</h1>
                </div>
                <div className='     font-poppins lg:text-4xl xl:text-5xl md:text-2xl sm:text-xl text-sm font-bold ml-36 -mt-5 flex  '>
                    <div className='  w-fit   p-3    bg-[#720A08]  text-black h-20 flex justify-center items-center   font-poppins font-bold'>
                        <h1>TKM COLLEGE OF ENGINEERING,</h1>
                    </div>
                    <div className='flex justify-center items-center p-5 h-full w-fit'>
                        <h1 className='' style={{ fontFamily: 'rubik' }}>Main Ground</h1>
                    </div>
                </div>
            </div>
            {/* select tickets */}
            <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 mt-10 sm:mt-16 md:mt-20 pb-20">
                <div className="flex flex-wrap items-center" style={{ fontFamily: 'rubik' }}>

                    <h1 className="text-3xl  md:text-6xl lg:text-7xl xl:text-8xl  mr-2 sm:mr-4 md:mr-6 lg:mr-8">
                        SELECT
                    </h1>

                    <h2 className="text-[#720A08] text-xl  md:text-4xl lg:text-6xl xl:text-7xl  font-poppins font-bold relative sm:top-4 md:top-4 lg:top-4 xl:top-12 2xl:top-16 -ml-0 sm:-ml-2 md:-ml-4 lg:-ml-6 xl:-ml-8 2xl:-ml-12">
                        NO OF
                    </h2>


                    <h1 className="text-3xl  md:text-6xl lg:text-7xl xl:text-8xl  z-10 -ml-0 sm:-ml-2 md:-ml-4 lg:-ml-6 xl:-ml-8 2xl:-ml-12">
                        TICKETS
                    </h1>

                    <div className="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-52 2xl:w-56 bg-[#720A08] h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 relative sm:top-10 top-8 md:top-10 lg:top-10 xl:top-16  z-0 -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-5 font-poppins flex justify-center items-center">
                        <select className="bg-transparent text-white w-full h-full px-2 appearance-none cursor-pointer text-center">
                            <option value="">NO OF TICKETS</option>
                            <option value="1">1 Ticket</option>
                            <option value="2">2 Tickets</option>
                            <option value="3">3 Tickets</option>
                            <option value="4">4 Tickets</option>
                        </select>
                    </div>

                </div>
                <div className='flex w-screen justify-center mt-20 mb-20' style={{ fontFamily: 'rubik' }}>
                    <div className='bg-[#720A08] md:w-80 w-40  h-16'>
                    </div>
                    <div className='bg-white absolute mt-5 ml-5 md:w-80 w-40 h-16 flex justify-center items-center z-10'>
                        <h1 className='text-black  text-2xl'>Price : <span className='text-[#FBAD44] text-2xl font-bold font-poppins'>300rs</span></h1>
                    </div>

                    <div className="relative mr-56">
                        <svg height="80" width="200" xmlns="http://www.w3.org/2000/svg" className="absolute mt-16  z-10 ">
                          
                            <polygon
                                points="0 0, 200 0, 200 40, 178 75, 0 75"
                                style={{ fill: "transparent", stroke: "white", strokeWidth: 2 }}
                            />

                            <foreignObject x="6" y="6" width="188" height="60">
                                <div
                                    className="w-full h-full flex justify-between items-center font-poppins text-white px-6 py-3 bg-[#720A08]"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)"
                                    }}
                                >
                                    BOOK NOW →
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proshowbooking;
