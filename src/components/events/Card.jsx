import React,{useState} from "react";
import img1 from "../../assets/images/eventSample/sampleImage.png";

function EventCard({ event, index ,img,onClick}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-auto w-auto flex flex-col gap-0 group">
    <div
      className={`p-2 w-56 md:w-full h-auto flex flex-col justify-between hover:bg-white  hover:border-white transition-all duration-300
        ${index % 2 === 0 ? "border-white border-4" : "border-[#720A08] border-2"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-2 flex justify-center items-center h-64 lg:h-96 transition-transform duration-300  ${
          isHovered ? "opacity-100 translate-x-4 translate-y-4" : "opacity-100"
        }`}>
        <div className="border-2 group-hover:border-0 bg-transparent group-hover:p-4 group-hover:bg-[#720A08] h-64 lg:h-96">
            <div className="group-hover:border-2 group-hover:border-white w-full h-full"><img src={img} className="object-fill w-auto h-full" alt="Event" /></div>
        </div>
      </div>

      <h2 className="p-1 group-hover:p-2 text-xl md:text-3xl tracking-wider flex-justify text-white font-poppins uppercase group-hover:text-black group-hover:font-bold">
        {event.name}
      </h2>

      <div className="p-1 group-hover:p-2 text-sm md:text-md text-gray-300 font-poppins flex-grow overflow-hidden text-balance group-hover:text-black">
        {event.description}
      </div>
    </div>
    <div onClick={onClick} className="bg-[#720A08] uppercase font-bold  w-full p-3 opacity-0 group-hover:opacity-100 flex flex-row justify-between" style={{clipPath:"polygon(0 0, 100% 0, 100% 59%, 82% 100%, 0 100%, 0% 50%)"}}>
        Register Now
    </div>
    </div>
  );
}

const events = [
  { id: 1, name: "Event One", description: "Description for event one." },
  { id: 2, name: "Event Two", description: "Description for event two." },
  { id: 3, name: "Event Three", description: "Description for event three." },
  { id: 4, name: "Event Four", description: "Description for event four." },
  { id: 5, name: "Event Five", description: "Description for event five." },
  { id: 6, name: "Event Six", description: "Description for event six." },
  { id: 1, name: "Event One", description: "Description for event one." },
  { id: 2, name: "Event Two", description: "Description for event two." },
  { id: 3, name: "Event Three", description: "Description for event three." },
  { id: 4, name: "Event Four", description: "Description for event four." },
  { id: 5, name: "Event Five", description: "Description for event five." },
  { id: 6, name: "Event Six", description: "Description for event six." },
];

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-14 p-4 mb-6">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} img={img1}/>
      ))}
    </div>
  );
}

export default Card;
