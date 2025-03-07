import React from "react";

export default function Search({ query, handleSearch }) {
  return (
    <div className="flex items-center justify-center w-full py-4">
      <div className="relative w-full max-w-md md:max-w-2xl lg:max-w-4xl">
        <input
          type="text"
          value={query}
          onChange={handleSearch} // Use handleSearch from props
          placeholder="Search for any event"
          className="font-poppins w-full p-3 text-white bg-transparent border-2 border-yellow-500 focus:outline-none focus:ring-yellow-400 rounded-3xl placeholder-gray-300"
        />
      </div>
    </div>
  );
}
