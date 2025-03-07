import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../../components/home/Hero';
import Carousel from '../../components/home/HeroCarousel.jsx';
import TwoLine from '../../components/Proshow/TwoLine.jsx';
import bg from '../../assets/images/bg.avif';
import { BASE_URL } from '../../constants/urls';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useParams } from 'react-router-dom';




const EventDetailViewPage = () => {
  const [eventdetails, seteventdetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  useEffect(() => {
    console.log(slug)
    const getIndividualDetails = async () => {

      try {
        setLoading(true);
        const response = await axios.get(BASE_URL + '/api/events/event/' + slug);
        console.log(response.data)
        seteventdetails(response.data);
      } catch (e) {
        console.error("Error fetching event details:", e);
      } finally {
        setLoading(false);
      }
    };

    getIndividualDetails();
  }, []);



  return (
    <div className="relative h-fit pb-32" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Hero title={eventdetails?.title || "Event Name"} desc={eventdetails?.event_category || "Type of events"} />

      <div className='mt-10'>
        <Carousel />
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <ProgressSpinner />
        </div>
      ) : (
        <>
          <div className='mt-10'></div>
          <TwoLine position={"right"} />
          <TwoLine position={"left"} />
          <div className='mt-10'></div>

          <div className='flex flex-col md:flex-row justify-between'>
            <div className='md:w-1/2 w-full flex justify-start relative mb-28'>
              <div className='md:ml-20 ml-5 xl:h-96 xl:w-96 h-72 w-72 bg-white'></div>
              <div className='md:left-40 left-20 absolute mt-20 bg-[#720A08] xl:h-96 xl:w-96 h-72 w-72 pb-10 pr-4 pt-4 pl-4'>
                <img src={eventdetails?.image} className='w-full h-full' alt="Event" />
              </div>
            </div>
            <div className='md:w-1/2 w-full flex justify-center items-center' >
              <div className='flex flex-col w-full h-full justify-center items-center'>
                <h1 className='xl:text-8xl sm:text-3xl text-5xl font-rubik'>{eventdetails?.title || "Event Name"}</h1>
                <div className="relative mr-56">
                  <svg height="80" width="200" xmlns="http://www.w3.org/2000/svg" className="absolute mt-16 z-10">
                    <polygon points="0 0, 200 0, 200 40, 178 75, 0 75" style={{ fill: "transparent", stroke: "white", strokeWidth: 2 }} />
                    <foreignObject x="6" y="6" width="188" height="60">
                      <div className="w-full h-full flex justify-between items-center font-poppins text-white px-6 py-3 bg-[#720A08]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)" }}>
                        {eventdetails?.is_reg_open ? <div className='w-full flex justify-between items-center h-full'>
                          <h1 className='font-poppins'>Register Now</h1>
                          <h1>→</h1>
                        </div> : <div className='w-full flex justify-between items-center h-full'>
                          <h1 className='font-poppins'>Closed</h1>
                          <h1>→</h1>
                        </div>
                        }
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Another two-line section and description */}
          <div className='flex flex-col lg:flex-row h-fit md:mt-0 mt-40'>
            <div className='md:w-5/12 w-full h-full'>
              <div className='h-full w-full flex flex-col gap-4'>
                <div className='w-2/4 h-8 bg-white'></div>
                <div className='w-3/4 h-4 bg-[#720A08]'></div>
              </div>
            </div>

            {/* Event Details Section */}
            <div className='p-10 md:w-7/12 w-full h-full relative flex justify-start items-center'>
              <div className='absolute 2xl:w-[800px] 2xl:h-[500px] xl:w-[600px] h-[500px] lg:w-[500px] w-[300px]  bg-[#720A08] z-0'></div>

              {/* Details */}
              <div className='   2xl:w-[800px] 2xl:h-[500px] xl:w-[600px] h-[500px] sm:w-[500px]  w-[300px] bg-white z-10 mt-10 ml-10 p-2 text-black flex flex-col gap-2 justify-between'>
                <h1 className='font-poppins font-bold text-2xl'>ABOUT</h1>
                <p className='text-wrap text-left font-poppins'>{eventdetails?.description || "Event description goes here..."}</p>
                <h1 className='font-poppins font-bold text-2xl'>Venue</h1>
                <p>{eventdetails?.venue.title || "Venue details not available"}</p>
                <div className='flex justify-evenly'>
                  <div className='flex justify-center items-center relative'>
                    <div className='lg:w-32 lg:h-32 sm:w-20 sm:h-20 w-16 h-16 text-2xl bg-white font-poppins flex flex-col text-center text-black border border-[#720A08] z-20 font-fol justify-center items-center capitalize font-bold'>
                      <h1 className='text-black text-sm'>Time</h1>
                      <h1 className='text-[#720A08] text-sm'>{new Date(eventdetails.event_start).toLocaleTimeString([], { hour: '2-digit' })}</h1>
                    </div>
                    <div className='absolute ml-2 mt-2 lg:w-32 lg:h-32 sm:w-20 sm:h-20 w-16 h-16 text-2xl bg-black font-poppins flex flex-col text-center text-black border  z-10  '>
                    </div>
                  </div>
                  <div className='flex justify-center items-center relative'>
                    <div className='lg:w-32 lg:h-32 sm:w-20 sm:h-20 w-16 h-16 lg:text-2xl text-sm bg-[#720A08] font-poppins flex flex-col text-center text-black border border-[#720A08] z-20 font-fol justify-center items-center capitalize font-bold'>
                      <h1 className='text-white text-sm'>Date</h1>
                      <h1 className='text-white text-sm'>
                        {(() => {
                          const date = new Date(eventdetails.event_start);
                          const day = date.getDate();
                          const month = date.toLocaleString('en-US', { month: 'long' });

                          const getOrdinalSuffix = (day) => {
                            if (day > 3 && day < 21) return "th";
                            switch (day % 10) {
                              case 1: return "st";
                              case 2: return "nd";
                              case 3: return "rd";
                              default: return "th";
                            }
                          };

                          return `${day}${getOrdinalSuffix(day)} ${month}`;
                        })()}
                      </h1>

                    </div>
                    <div className='absolute ml-2 mt-2 lg:w-32 lg:h-32 sm:w-20 sm:h-20 w-16 h-16 text-2xl bg-black font-poppins flex flex-col text-center text-black border  z-10  '>
                    </div>
                  </div>
                  <div className='flex justify-center items-center relative'>
                    <div className='lg:w-32 lg:h-32 sm:w-20 sm:h-20 w-16 h-16 text-2xl bg-white font-poppins flex flex-col text-center text-black border border-[#FBAD44] z-20 font-fol justify-center items-center capitalize font-bold'>
                      <h1 className='text-black text-sm'>REG FEE</h1>
                      <h1 className='text-[#FBAD44] text-sm'>{eventdetails?.fees} Rs</h1>
                    </div>
                    <div className='absolute ml-2 mt-2 lg:w-32 lg:h-32 sm:w-20 sm:h-20 w-16 h-16 text-2xl bg-black font-poppins flex flex-col text-center text-black border  z-10  '>
                    </div>
                  </div>

                </div>
                {/* contact */}
                <div className='flex flex-col '>
                  <h1 className='capitalize text-black font-poppins text-2xl'>Contact</h1>
                  <div className='w-full bg-[#720A08] h-auto text-white font-bold pl-5 pr-5 pt-2 pb-2'>
                        <div className='flex flex-col sm:flex-row justify-between gap-10'>
                          <div className='flex flex-col'>
                            <h1 className='text-xl'>{eventdetails?.coordinator_1.name}</h1>
                            <h1 className='text-sm'>{eventdetails?.coordinator_1.email}</h1>
                            <h1 className='text-sm'>{eventdetails?.coordinator_1.phone_number}</h1>
                          </div>
                          <div className='flex flex-col'>
                            <h1 className='text-xl'>{eventdetails?.coordinator_2.name}</h1>
                            <h1 className='text-sm'>{eventdetails?.coordinator_2.email}</h1>
                            <h1 className='text-sm'>{eventdetails?.coordinator_2.phone_number}</h1>
                          </div>
                        </div>
                  </div>
                  {/* prize */}
                  {eventdetails.prize >0 && <div className='flex justify-end mr-20'>
                        <div className='flex flex-col gap-10 justify-between'> 
                            <h1 className='text-black font-bold text-xl font-poppins'>PRICES WORTH</h1>
                           <h1 className='text-center font-bold text-[#FBAD44] text-6xl'>{eventdetails?.prize}K</h1>
                        </div>
                  </div>  } 
                </div>
              </div>

            </div>

          </div>
          <div className='flex flex-col right-0 items-end gap-10 w-full'>
                    <div className="bg-[#720A08] h-4 w-6/12">
                    </div>
                    <div className="bg-white h-4 w-3/12">
                    </div>
          </div>

        </>
      )}
    </div>
  );
};

export default EventDetailViewPage;
