import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";

function Music() {
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favSongs")) || []
  );

  // 🎧 Search Function
 const searchSongs = async (customQuery) => {
  try {
    const finalQuery = (customQuery || query) + " song";  
    // 👉 auto better results

    const res = await axios.get(
      `http://localhost:5000/api/music/search?query=${finalQuery}`
    );

    setSongs(res.data);
  } catch (err) {
    console.log(err);
  }
};

  // 🔥 Auto load from Home click
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("query");

    if (q) {
      setQuery(q);
      searchSongs(q);
    }
  }, [location]);

  // ❤️ Add to Favorites
  const addToFav = (song) => {
    const updated = [...favorites, song];
    setFavorites(updated);
    localStorage.setItem("favSongs", JSON.stringify(updated));
  };

  return (
    <div className="bg-black min-h-screen text-white flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-60 w-full p-6">

        {/* SEARCH BAR */}
        <div className="flex gap-2 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search songs..."
            className="p-3 w-full rounded bg-gray-800 outline-none"
          />
          <button
            onClick={() => searchSongs()}
            className="bg-green-500 px-6 rounded"
          >
            Search
          </button>
        </div>

        {/* TITLE */}
        <h2 className="text-xl mb-4">🎵 Songs</h2>

        {/* SONG GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-gray-900 p-3 rounded hover:bg-gray-800 transition"
            >
              {/* THUMBNAIL */}
              <img
                src={song.thumbnail}
                alt=""
                className="rounded"
              />

              {/* TITLE */}
              <p className="mt-2 text-sm line-clamp-2">
                {song.title}
              </p>

              {/* BUTTONS */}
              <div className="flex justify-between mt-2">

                <button
                  onClick={() => setCurrentSong(song)}
                  className="text-green-400"
                >
                  ▶️ Play
                </button>

                <button onClick={() => addToFav(song)}>
                  ❤️
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* 🎧 BOTTOM PLAYER */}
      <Player currentSong={currentSong} />

    </div>
  );
}

export default Music;