'use client';

import { useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer = ({ fileUrl, id, currentPlaying, setCurrentPlaying }) => {
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (currentPlaying === id) {
      audio.pause();
      setCurrentPlaying(null);
    } else {
      if (currentPlaying !== null) {
        // Stop the previous audio if playing
        const previousAudio = document.querySelector(`audio[data-id="${currentPlaying}"]`);
        if (previousAudio) previousAudio.pause();
      }
      audio.play();
      setCurrentPlaying(id);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
      >
        {currentPlaying === id ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <audio
        ref={audioRef}
        src={fileUrl}
        preload="auto"
        data-id={id}
        className="mt-4 w-full"
      ></audio>
    </div>
  );
};

export default AudioPlayer;
