import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { usePlayer } from "../context/PlayerContext";

function Album() {
  const { state } = useLocation();
  const { songs, title } = state;
  const { playSong } = usePlayer();

  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="ml-60 w-full p-6">

        {/* HEADER */}
        <div className="flex gap-6 mb-8">

          <img
            src={songs[0]?.image}
            className="w-48 h-48 rounded"
          />

          <div>
            <p className="text-sm text-gray-400">Playlist</p>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-400 mt-2">
              {songs.length} songs
            </p>
          </div>

        </div>

        {/* SONG LIST */}
        <div className="space-y-3">

          {songs.map((song, i) => (
            <div
              key={i}
              onClick={() => playSong(songs, i)}
              className="flex items-center justify-between p-3 hover:bg-gray-800 rounded cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img src={song.image} className="w-12 rounded" />
                <p>{song.title}</p>
              </div>

              <button>❤️</button>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Album;