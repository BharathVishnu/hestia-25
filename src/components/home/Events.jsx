import React, { useState, useEffect } from "react";
import Majorcard from "../events/MajorCard";
import { BASE_URL } from "../../constants/urls";
import stickSvg from "../../assets/svgs/elements/stick.svg";
import logo_hestia from "../../assets/icons/logo_hestia.png"
import "../../styles/majorevents.css";
import Culturals from "../../assets/images/Events/Culturals.png";
import Technicals from "../../assets/images/Events/Technicals.png";
import Workshop from "../../assets/images/Events/Workshops.png";
import Proshow from "../../assets/images/Events/pro1.png";
import { Link, useNavigate, useMatch, Navigate } from "react-router-dom";
import "../../styles/home.css";

const Card = ({ title, imageSrc }) => (
  <div className="w-[228px] h-[295px] sm:w-[292px] sm:h-[295px] md:w-[305px] md:h-[395px] flex flex-col items-center relative">
    <div className="w-56 h-72 sm:w-72 sm:h-72 md:w-90 md:h-96 bg-white relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-16 transform -rotate-90">
        <h3 className="text-white tracking-wide text-xl md:text-3xl font-bold text-center font-poppins uppercase">
          {title}
        </h3>
      </div>
    </div>
    <div className="w-32 flex items-center justify-center absolute bottom-0 right-0 bg-red-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 57%, 80% 100%, 1% 100%)" }}>
      Check Out
    </div>
  </div>
  
);


const Events = () => (
  <div className="container mx-auto flex items-center justify-center mt-6 mb-7">
    <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      <Card title="Technicals" imageSrc={Technicals} />
      <Card title="Culturals" imageSrc={Culturals} />
      <Card title="Workshops" imageSrc={Workshop} />
    </div>
  </div>
);

export default Events;















































// function Cube(props) {

//   var cubeStyle = {
//     width: props.size + "px",
//     height: props.size + "px",
//     transform: `rotateY(${props.rotation}deg)`,

//   };

//   return (
//     <div className="cube" style={cubeStyle}
//     >
//       <div className="front">
//         <Link to="/events/technical">
//           <img src={Technicals} />
//         </Link>  
//       </div>
//       <div className="back">
//         <Link to="/events/general">
//           <img src={Culturals} />
//         </Link>  
//       </div>
//       <div className="top overflow-hidden relative">
//         <img src={logo_hestia} className="w-[50%] h-[50%] absolute top-[35%] left-[25%]" />
//       </div>
//       <div className="bottom"></div>
//       <div className="left">
//         <Link to="/events/workshops">
//           <img src={Workshop} />
//         </Link>  
//       </div>
//       <div className="right">
//         <Link to="/events/proshows">
//           <img src={Proshow} />
//         </Link>  
//       </div>
//     </div>
//   );
// }

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [windowSize, setWindowSize] = useState(300);
//   const [scrollPosition, setScrollPosition] = useState(window.scrollY);
//   //const windowSize = window.innerWidth;

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch(BASE_URL + "/api/events/trending/");
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth > 768) {
//       setWindowSize(250);
//     } else {
//       setWindowSize(200);
//     }
//   }, []);

//   return (
//     <div className="mb-32 hero-section h-screen md:h-[820px] flex flex-col justify-around items-center w-full max-w-screen ">
//       <div className="flex flex-col items-center md:flex-row justify-center md:justify-between">
//         <span
//           className="h-16 md:h-auto text-[100px] md:text-[150px]  md:pr-6"
//           style={{ fontFamily: "CharlieDotted", color: "#741BD4" }}
//         >
//           MAJOR
//         </span>
//         <span
//           className="text-[100px] md:text-[150px]"
//           style={{ fontFamily: "CharlieDotted", color: "#FBF0C2" }}
//         >
//           EVENTS
//         </span>
//       </div>
//       <div className="pb-16 md:pb-24">
//         <div className="container">
//             <Cube size={windowSize} rotation={-scrollPosition}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Events;
