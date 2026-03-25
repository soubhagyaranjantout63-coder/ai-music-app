import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Player from "../components/Player";
import { usePlayer } from "../context/PlayerContext";

function Home() {
  const [songs, setSongs] = useState([]);
  const { playSong, currentSong } = usePlayer();

  useEffect(() => {
    loadSongs("love songs");
  }, []);

  const loadSongs = async (query) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/music/search?q=${query}`
      );
      setSongs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="ml-60 flex w-full">

        {/* LEFT SIDE */}
        <div className={`${currentSong ? "w-[70%]" : "w-full"} p-6 transition-all`}>

          <Topbar />

          <h1 className="text-3xl font-bold mb-6">
            Good Evening 🎧
          </h1>

          {/* BUTTONS */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {["love", "sad", "romantic", "chill", "party", "odia"].map(
              (mood) => (
                <button
                  key={mood}
                  onClick={() => loadSongs(mood + " songs")}
                  className="bg-gray-800 px-4 py-2 rounded hover:bg-green-500"
                >
                  {mood}
                </button>
              )
            )}
          </div>

          {/* SONG GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {songs.map((song, index) => (
              <div
                key={index}
                onClick={() =>
                  playSong({
                    title: song.title,
                    image: song.thumbnail,
                    videoId: song.videoId
                  })
                }
                className="bg-gray-900 p-3 rounded hover:bg-gray-800 cursor-pointer"
              >
                <img src={song.thumbnail} className="rounded" />
                <p className="mt-2 text-sm">{song.title}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ✅ ONLY RIGHT PLAYER */}
        {currentSong && (
          <div className="w-[30%] p-4 border-l border-gray-800">
            <Player />
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;