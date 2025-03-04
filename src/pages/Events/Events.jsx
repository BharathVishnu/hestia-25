import React, { useState, useEffect } from "react";
import Search from "../../components/events/Search.jsx";
import Sort from "../../components/events/Sort.jsx";
import Carousel from "../../components/home/HeroCarousel";
import Hero from "../../components/home/Hero.jsx";
import Card from "../../components/events/Card.jsx";
import "../../styles/home.css";
import { BASE_URL } from "../../constants/urls.js";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState([]); 
  const [selectedDates, setSelectedDates] = useState([]); 
  const [query, setQuery] = useState(""); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(BASE_URL + "/api/events/all/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Events from API:", data);
        setEvents(data.results);
        setFilteredEvents(data.results);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, []);

  const toggleFilterByDate = (dateString) => {
    let updatedDates = [...selectedDates];

    if (updatedDates.includes(dateString)) {
      updatedDates = updatedDates.filter((date) => date !== dateString);
    } else {
      updatedDates.push(dateString);
    }

    setSelectedDates(updatedDates);
    applyFilters(query, updatedDates);
  };

  const applyFilters = (searchQuery, selectedDates) => {
    console.log("Applying Filters -> Query:", searchQuery, "Dates:", selectedDates);
    console.log("Events Before Filtering:", events);
  
    let filtered = events;
  
    if (selectedDates.length > 0) {
      filtered = filtered.filter((event) =>
        selectedDates.some((date) => event.event_start.startsWith(date))
      );
    }
  
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    console.log("Filtered Events After Search:", filtered);
    setFilteredEvents(filtered);
  };
  

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    console.log("Search Query Entered:", searchQuery);
    setQuery(searchQuery);
    applyFilters(searchQuery, selectedDates);
  };
  

  return (
    <div className="home h-auto">
      <Hero title={"MAJOR"} secondtext={"EVENTS"} color={"#720A08"} />
      <div className="mt-10"></div>
      <div className="flex flex-col items-center w-screen relative">
        <Carousel />
        <div className="flex flex-col gap-4 relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute right-1 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
          <div className="bg-white absolute right-16 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
        </div>
         <Search query={query} handleSearch={handleSearch} />
        <div className="flex flex-col gap-4 relative w-screen h-4 md:h-12">
          <div className="bg-[#720A08] absolute left-16 top-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
          <div className="bg-white absolute left-1 bottom-0 w-24 md:w-48 h-1/4 rounded-2xl"></div>
        </div>
        <Sort toggleFilterByDate={toggleFilterByDate} selectedDates={selectedDates} />



        
        {loading ? (
          <p className="text-center text-white">Loading events...</p>
        ) : (
          <Card events={filteredEvents} />
        )}

        <div className="flex flex-row items-center mx-auto justify-center w-auto lg:w-[800px] xl:w-[1200px] h-1 md:h-4 bg-[#720A08]"></div>
        <div className="flex flex-col gap-8 relative w-screen h-10 md:h-14">
          <div className="bg-white absolute left-0 top-0 w-24 md:w-64 h-1/4"></div>
          <div className="bg-white absolute right-1 bottom-0 w-24 md:w-64 h-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
