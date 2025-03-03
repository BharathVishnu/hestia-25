import React,{useState} from "react";
import img1 from "../../assets/images/shirt1.png";
import arrow from "../../assets/images/Arrow 1.svg";

function MerchCard({ merch, index ,img,onClick}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-auto w-auto flex flex-col gap-0 group">
    <div
      className={`p-2 w-full md:w-full h-auto flex flex-col justify-between hover:bg-white  transition-all duration-100`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-2 flex justify-center items-center h-64 lg:h-96 transition-transform duration-100  ${
          isHovered ? "opacity-100 translate-x-4 translate-y-4" : "opacity-100"
        }`}>
        <div className=" bg-white group-hover:p-4 group-hover:bg-[#720A08] h-64 lg:h-96">
            <div className=" group-hover:border-white  w-full h-full"><img src={img} className="object-fill w-auto h-full" alt="Event" /></div>
        </div>
      </div>

      <h2 className={`p-8  text-xl md:text-3xl tracking-wider flex-justify text-center text-white bg-black border-2  group-hover:border-0 font-rubik uppercase group-hover:text-black group-hover:font-bold group-hover:bg-white 
      ${index % 2 === 0 ? "border-[#720A08] border-t-0 border-2" : "border-white border-t-0 border-2"}`}>
        {merch.name}
      </h2>

      
    </div>
    <div onClick={onClick} className="bg-[#720A08] uppercase font-bold  w-full p-3 opacity-0 group-hover:opacity-100 flex flex-row justify-between" style={{clipPath:"polygon(0 0, 100% 0, 100% 59%, 82% 100%, 0 100%, 0% 50%)"}}>
        check it out<span><img src={arrow} alt="arrow" /></span>
    </div>
    </div>
  );
}

const merchs = [
  { id: 1, name: "T-shirt" },
  { id: 2, name: "Name" },
  { id: 3, name: "Name"},
  
];

function Mcard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-14 p-4 mb-6">
      {merchs.map((merch, index) => (
        <MerchCard key={merch.id} merch={merch} index={index} img={img1}/>
      ))}
    </div>
  );
}

export default Mcard;