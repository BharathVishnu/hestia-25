import React from "react";

const events = [
  { id: 1, name: "Event One", description: "Description for event one." },
  { id: 2, name: "Event Two", description: "Description for event two." },
  { id: 3, name: "Event Three", description: "Description for event three." },
  { id: 4, name: "Event Four", description: "Description for event four." },
  { id: 5, name: "Event Five", description: "Description for event five." },
  { id: 6, name: "Event Six", description: "Description for event six." },
];

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 p-4 ml-4 md:ml-6 mr-4 md:mr-6">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`border-2 p-4 h-72 md:h-96 w-auto ${
            index % 2 === 0 ? "border-white" : "border-red-500"
          }`}
        >
          <div className="border-2 p-2 border-white mb-3 h-48">

          </div>
          <h2 className="text-xl font-bold text-white font-poppins uppercase">{event.name}</h2>
          <p className="text-gray-300 font-poppins">{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
