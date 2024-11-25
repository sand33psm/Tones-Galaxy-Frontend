// components/AudioPlayer.js
'use client'

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const AudioPlayer = ({ fileUrl, id }) => {
  const [playing, setPlaying] = useState(null);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const currentAudio = audioRef.current;

    if (currentAudio.paused) {
      currentAudio.play();
      setPlaying(id);
    } else {
      currentAudio.pause();
      setPlaying(null);
    }
  };

  return (
    <div className="relative">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
      >
        {playing === id ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={fileUrl}
        preload="auto"
        className="mt-4 w-full"
      ></audio>
    </div>
  );
};

export default AudioPlayer;
