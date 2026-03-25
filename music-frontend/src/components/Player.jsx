import React from "react";
import { usePlayer } from "../context/PlayerContext";

function Player() {
  const { currentSong } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="bg-gray-900 p-4 rounded-xl h-full">

      <img
        src={currentSong.image}
        className="rounded-lg mb-4 w-full object-cover"
      />

      <h2 className="text-lg font-semibold mb-3">
        {currentSong.title}
      </h2>

      <iframe
        width="100%"
        height="300"
        src={`https://www.youtube.com/embed/${currentSong.videoId}?autoplay=1`}
        allow="autoplay"
        className="rounded-lg"
      ></iframe>

    </div>
  );
}

export default Player;