import React, { useState } from "react";
import { usePlayer } from "../context/PlayerContext";

function SongCard({ song }) {
  const { playSong } = usePlayer();
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={() => {
        playSong({
          title: song.title,
          image: song.thumbnail,
          videoId: song.videoId
        });
      }}
      className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer relative group"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={song.thumbnail}
          alt=""
          className="rounded w-full h-32 object-cover"
        />

        {/* ▶️ PLAY BUTTON (hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 important (double click avoid)
            playSong({
              title: song.title,
              image: song.thumbnail,
              videoId: song.videoId
            });
          }}
          className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:scale-110"
        >
          ▶️
        </button>
      </div>

      {/* TITLE */}
      <p className="mt-2 text-sm line-clamp-2">
        {song.title}
      </p>

      {/* ❤️ LIKE BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        className={`mt-2 transition ${
          liked ? "text-red-500 scale-110" : "text-gray-400"
        }`}
      >
        ❤️
      </button>
    </div>
  );
}

export default SongCard;