import React, { useState, createContext, useEffect } from "react";
import "primereact/resources/primereact.min.css";
import logoHestia from "../assets/icons/logo_hestia.png";
import { motion } from 'framer-motion'
export const LoaderContext = createContext();

export const LoaderContextProvider = (props) => {
  const [show, setLoader] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setLoader(false);
      }, 0); 
      
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const getProgressStyles = () => {
    let rotation = (progress / 100) * 360;
    rotation = rotation + 360;
    return {
      background: "conic-gradient(from 90deg at 50% 50%, #bcbcbc, #a8a8a8, #818181, #5c5c5c, #3a3a3a, #bcbcbc)",
      transform: `rotate(${rotation}deg)`,
      animationDuration: '6s',
      animationTimingFunction: 'linear'
    };
  };

  const getRotationClass = () => {
    return "animate-spin";
  };

  return (
    <LoaderContext.Provider value={{ setLoader, setProgress }}>
      {show && (
        <div 
          className={`h-screen w-screen bg-[#141414] z-[999] fixed flex justify-center items-center transition-opacity duration-1500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Hestia logo */}
          <div className="left-10 top-10 absolute">
            <img src={logoHestia} className="md:w-32 w-16  h-auto" />
          </div>
          {/* {circle} */}
          <div className="relative flex justify-center items-center">
            <div className="text-gray-300 text-5xl font-semibold flex flex-col font-rubik mr-4">
              <span>LOAD -</span>
              <span className="ml-2">ING</span>
            </div>
            <div
              className="w-24 h-24 rounded-full"
              style={getProgressStyles()}
            ></div>
          </div>



          {/* progress kanikum */}
          <div className="bottom-10 right-10 absolute">
            <h1 className="font-poppins text-gray-300">{progress}/100</h1>
          </div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
      >
        {props.children}
      </motion.div>
    </LoaderContext.Provider>
  );
};