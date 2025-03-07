import React, { useEffect, useState } from "react";
import arrow from "../../assets/images/Arrow 1.svg";
import Carousel from "../../components/home/HeroCarousel";
import Hero from "../../components/home/Hero.jsx";
import { BASE_URL } from "../../constants/urls.js";
import img from "../../assets/images/pastEvents/img19.JPG";
import "../../styles/home.css";
import axios from "axios";
import { ProgressSpinner } from "primereact/progressspinner";

const Proshow = () => {
  const [loading, setLoading] = useState(true);
  const [proshows, setProshow] = useState([]);

  useEffect(() => {
    const getAllProshow = async () => {
      try {
        const response = await axios.get(BASE_URL + "/api/events/category/PR/");
        console.log(response.data);
        setProshow(response.data.results);
      } catch (error) {
        console.error("Error fetching Proshow events", error);
      } finally {
        setLoading(false);
      }
    };
    getAllProshow();
  }, [proshows]);

  return (
    <div className="home flex flex-col w-screen h-auto">
      <Hero title={"Pro"} secondtext={"Show"} color={"#720A08"} />
      <div className="mt-10">
        <Carousel />
      </div>
      <div className="flex flex-col items-center relative px-4 md:px-8">
        <div className="relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute right-1 top-0 w-24 md:w-48 h-1/4"></div>
          <div className="bg-white absolute right-16 bottom-0 w-24 md:w-48 h-1/4"></div>
        </div>

        {loading ? (
          <ProgressSpinner />
        ) : (
          proshows.map((proshow, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <>
                  {/* Day One Section */}
                  <div className="relative w-full flex justify-center items-center mt-20">
                    <div className="relative w-full max-w-4xl bg-black border border-[#720A08] pl-4 md:pl-10 pr-4 md:pr-10 pt-8 md:pt-12 pb-8 md:pb-12 flex justify-center items-start mr-10 md:mr-36">
                      <img src={img} className="w-full h-auto object-contain" alt="event" />
                      <div className="absolute transform translate-x-12 md:translate-x-52 -translate-y-6 md:-translate-y-20 top-0 right-0 md:top-8 md:right-8 text-right tracking-widest">
                        <div className="font-poppins font-bold text-3xl md:text-7xl p-1 w-20 md:w-44 text-center bg-[#720A08] text-black">
                          DAY
                        </div>
                        <div className="font-rubik text-xl md:text-6xl mt-[-10px] md:mt-[-20px] ml-[40px] md:ml-[70px] text-white">
                          ONE
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-36 md:w-96 h-14 md:h-28 transform translate-x-32 md:translate-x-[400px] -translate-y-12 md:-translate-y-12 bg-white border-4 border-[#720A08] flex flex-col justify-center items-center mt-10">
                    <h1 className="text-black font-bold font-rubik text-xl md:text-4xl">
                      DJ STRELLA
                    </h1>
                    <p className="text-amber-400 font-poppins md:text-2xl">APRIL 19th</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-full flex justify-center items-center mt-20">
                    <div className="relative w-full max-w-4xl bg-black border border-[#720A08] pl-4 md:pl-10 pr-4 md:pr-10 pt-8 md:pt-12 pb-8 md:pb-12 flex justify-center items-start mr-10 md:mr-36">
                      <img src={img} className="w-full h-auto object-contain" alt="event" />
                      <div className="absolute transform -translate-x-[140px] md:-translate-x-[380px] -translate-y-[50px] md:-translate-y-[100px] tracking-widest">
                        <div className="font-rubik text-3xl md:text-7xl p-1 w-16 md:w-40 text-white">
                          DAY
                        </div>
                        <div className="font-poppins font-bold text-xl md:text-6xl mt-[-20px] ml-[30px] md:ml-[50px] bg-[#720A08] text-black text-center w-16 md:w-40">
                          TWO
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-36 md:w-96 h-14 md:h-28 transform -translate-x-[130px] md:-translate-x-[400px] -translate-y-10 md:-translate-y-10 bg-black border-4 border-[#720A08] flex flex-col justify-center items-center mt-10">
                    <h1 className="text-white font-bold font-rubik text-xl md:text-4xl">
                      DJ STRELLA
                    </h1>
                    <p className="text-amber-400 font-poppins md:text-2xl">APRIL 19th</p>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Proshow;
