import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-60 bg-black text-white h-screen fixed left-0 top-0 p-5 border-r border-gray-800">

      {/* LOGO */}
      <h1 className="text-green-400 text-2xl mb-10 font-bold">
        🎧 MusicAI
      </h1>

      {/* MENU */}
      <ul className="space-y-6 text-gray-300">

        <li
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-green-400"
        >
          🏠 Home
        </li>

        <li
          onClick={() => navigate("/music")}
          className="cursor-pointer hover:text-green-400"
        >
          🔍 Search
        </li>

        <li
          onClick={() => navigate("/favorites")}
          className="cursor-pointer hover:text-green-400"
        >
          ❤️ Favorites
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;