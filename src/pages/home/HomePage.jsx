import React, { useRef, useEffect, useState, useContext } from "react";
import About from "../../components/home/About.jsx";
import LatestEvents from "../../components/home/LatestEvents.jsx";
import MainHero from "../../components/home/MainHero.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "../../styles/home.css";
import PastEvents from "../../components/home/PastEvents.jsx";
import Proshow from "../../components/home/Proshow.jsx";
import Events from "../../components/home/Events.jsx";
import FaQ from "../../components/faq/Faq.jsx";
import { AlertBar } from "../../components/home/AlertBar.jsx";
import { BASE_URL } from "../../constants/urls.js";
import GetApp from "../../components/home/GetApp.jsx";
import HeroCarousel from "../../components/home/HeroCarousel.jsx"; 
import CheckoutCarousel from "../../components/home/CheckoutappCarousel.jsx"; 
import { DialogPopup } from '../../context/dialog.jsx';
import { ModalContext } from "../../context/modal.jsx";
import { PopUpContext } from "../../context/popup.jsx";
import { UserContext } from "../../context/user.jsx";
import Faq from "../../components/home/faq.jsx";
import EventBanner from "../../components/home/EventBanner.jsx";
import Hero from "../../components/home/Hero.jsx";



const HomePage = () => {
  // const [questions, setQuestions] = useState([]);
  // const { showDialog } = useContext(DialogPopup);
  // const [firstTimeUser, setFirstTimeUser] = useState(false);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/api/contact/faq`);
  //       const data = await response.json();
  //       setQuestions(data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchQuestions();
  // }, []);



  return (
    <div className=" w-full max-w-screen overflow-hidden h-full home" >
          <MainHero title="Hestia" />
          <HeroCarousel  />
          <EventBanner/>
          <Events/>
          <Proshow />
          <PastEvents/>
          <CheckoutCarousel/>
          <Faq />
          {/* <PastEvents/>
          

          <PastEvents/>

          {/*<Carousel /> */}

          {/* <About /> */}
          {/* <Events /> */}
          {/* <Proshow />

          
          <PastEvents /> */}
          {/* <div ref={getAppRef}>
            <GetApp />
          </div> */}
          {/* <AlertBar /> */}
          {/* <FaQ questions={questions} /> */}

    </div>

  )
}

export default HomePage;