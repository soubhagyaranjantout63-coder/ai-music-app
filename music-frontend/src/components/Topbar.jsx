import React from "react";

function Topbar() {
  return (
    <div className="bg-black p-4 flex justify-between items-center border-b border-gray-800">

      <input
        placeholder="What do you want to play?"
        className="bg-gray-800 px-4 py-2 rounded w-96"
      />

      <button className="bg-white text-black px-4 py-1 rounded">
        Explore Premium
      </button>

    </div>
  );
}

export default Topbar;