import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import "../../styles/events.css";

import img1 from "../../assets/images/pastEvents/img1.jpg";
import img2 from "../../assets/images/pastEvents/img2.JPG";
import img3 from "../../assets/images/pastEvents/img3.JPG";
import img4 from "../../assets/images/pastEvents/img4.jpg";
import img5 from "../../assets/images/pastEvents/img5.JPG";
import img6 from "../../assets/images/pastEvents/img6.jpg";
import img7 from "../../assets/images/pastEvents/img7.JPG";
import img8 from "../../assets/images/pastEvents/img8.JPG";
import img9 from "../../assets/images/pastEvents/img9.JPG";
import img10 from "../../assets/images/pastEvents/img10.JPG";
import img11 from "../../assets/images/pastEvents/img11.JPG";
import img12 from "../../assets/images/pastEvents/img12.JPG";
import img13 from "../../assets/images/pastEvents/img13.JPG";
import img14 from "../../assets/images/pastEvents/img14.JPG";
import img15 from "../../assets/images/pastEvents/img15.JPG";
import img16 from "../../assets/images/pastEvents/img16.JPG";
import img17 from "../../assets/images/pastEvents/img17.JPG";
import img18 from "../../assets/images/pastEvents/img18.JPG";
import img19 from "../../assets/images/pastEvents/img19.JPG";
import img20 from "../../assets/images/pastEvents/img20.JPG";
import img21 from "../../assets/images/pastEvents/img21.JPG";
import img22 from "../../assets/images/pastEvents/img22.JPG";
import img23 from "../../assets/images/pastEvents/img23.JPG";
import img24 from "../../assets/images/pastEvents/img24.JPG";
import img25 from "../../assets/images/pastEvents/img25.JPG";
import img26 from "../../assets/images/pastEvents/img26.JPG";
import img27 from "../../assets/images/pastEvents/img27.JPG";
import img28 from "../../assets/images/pastEvents/img28.JPG";


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28,
];

const PastEvents = () => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {<ScrollImageTrail images={images} />}
      <span className ="sub-title" style={{  
        display: "inline-block", 
        padding: "5px 10px",   
        position: "absolute",
        top: "81%",
        right: "4%",
        fontSize: "3.7vw",
        color: "transparent",
        WebkitTextStroke: "1px white",
        fontWeight:"bolder",
        mixBlendMode: "exclusion",
        backgroundColor: "black",
          }}>
            HESTIA THROUGH THE AGES.
      </span>
      <div style={{
          width: "20%",
          height: "2%",
          backgroundColor: "#720A08",
          position: "absolute",
          top: "30%",
          right: "0"
          }}>
      </div>
      <div style={{
          width: "30%",
          height: "2%",
          backgroundColor: "white",
          position: "absolute",
          top: "37%",
          right: "0"
        }}>
      </div>


      <span
        className="text-white text-4xl md:text-8xl text-center absolute"
        style={{ fontFamily: "rubik" }}
      >
        EXPLORE HESTIA
      </span>
      
      <div style={{
          width: "30%",
          height: "2%",
          backgroundColor: "white",
          position: "absolute",
          top: "60%",
          left: "0"
        }}>
      </div>
      <div style={{
          width: "20%",
          height: "2%",
          backgroundColor: "#720A08",
          position: "absolute",
          top: "67%",
          left: "0"
          }}>
      </div>
      <span className ="sub-title" style={{   
          display: "inline-block", 
          padding: "5px 10px",
          position: "absolute",
          top: "21%",
          left: "4%",
          fontSize: "3.7vw",
          fontWeight: "bolder",
          color: "transparent",
          WebkitTextStroke: "1px white",
          mixBlendMode: "difference"
          
          }}>MOMENTS THAT MATTERED.</span>
    </div>
  );
};

const ScrollImageTrail = ({ images }) => {
  const [trail, setTrail] = useState([]);
  const imageIndex = useRef(0);

const getRandomPosition = (max, padding = 50) =>
   Math.random() * (max - 2 * padding) + padding;


  useEffect(() => {
    const interval = setInterval(() => {

      const newImage = {
        id: Date.now(),
        x: getRandomPosition(window.innerWidth),
        y: getRandomPosition(window.innerHeight),
        moveX: Math.random() * 300 - 150, 
        moveY: Math.random() * 300 - 150,
        img: images[imageIndex.current % images.length],
        rotate: Math.random() * 30 - 15, 
      };

      setTrail((prevTrail) => [...prevTrail, newImage]);

      setTimeout(() => {
        setTrail((prevTrail) => prevTrail.slice(1));
      },1000);

      imageIndex.current++;
      
    }, 700); 
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="absolute  inset-0 overflow-hidden">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src={item.img}
            alt="Past Event"
            className="canvas absolute h-32 w-auto rounded-lg border-2 border-black shadow-lg"
            style={{ zIndex: item.id }}
            initial={{ opacity: 0, scale: 0.8, x: item.x, y: item.y,  rotate: 0 }}
              animate={{
                opacity: 1, 
                scale: 1.5,
                x: item.x + item.moveX,
                y: item.y + item.moveY,
                rotate: -item.rotate
               }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 2, }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PastEvents;