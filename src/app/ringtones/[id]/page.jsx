"use client"

import { useEffect, useState, useRef} from "react";
import { fetchRingtone } from "@/app/utils/api";
import { Play, Pause, Heart, Share2 } from "lucide-react"; // Importing icons
import { useParams } from 'next/navigation';
import Navbar from "@/app/components/Navbar";

function Ringtone() {

  const [ringtone, setRingtone] = useState([]);
  const [error, setError] = useState(null);
  const [playing, setPlaying] = useState(null);
  const audioRefs = useRef({});

  

  useEffect(()=>{

    console.log(ringtone);
    

    const getRingtone = async () => {
      try {
        const data = await fetchRingtone("44ad70b9-6044-42b5-8b2a-7819b0e8587e");
        setRingtone(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getRingtone();

  }, [])

  const togglePlayPause = (fileUrl, id) => {
    const currentAudio = audioRefs.current[id];
    const previousAudio = audioRefs.current[playing];

    // Pause the previous ringtone if it's playing
    if (previousAudio && previousAudio !== currentAudio) {
      previousAudio.pause();
    }

    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
        setPlaying(id);
      } else {
        currentAudio.pause();
        setPlaying(null);
      }
    }
  };

  
  return (
    <>
    <div className='font-["Inter"]'>
    <Navbar />
    <div className="container mx-auto p-6">
    <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12 dark:text-white">Discover Awesome Ringtones</h1>
        
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
    <div
      key={ringtone.id}
      className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden group dark:bg-yellow-50 w-full"
    >
      <div className="relative">
        {/* Play/Pause Button */}
        <button
          onClick={() => togglePlayPause(ringtone.file, ringtone.id)}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        >
          {playing === ringtone.id ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{ringtone.name}</h2>
        <p className="text-md text-gray-500 mt-2">{ringtone.description || "No description available."}</p>
        <p className="text-md text-gray-600 mt-1">
          Genre: <span className="font-semibold">{ringtone.genre}</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Uploaded: {new Date(ringtone.date_uploaded).toLocaleString()}
        </p>

        {/* Audio Element */}
        <audio
          ref={(el) => (audioRefs.current[ringtone.id] = el)}
          src={`${ringtone.file}`}
          preload="auto"
          className="mt-4 w-full"
        ></audio>

        {/* Like and Share Buttons */}
        <div className="mt-4 flex justify-between items-center">
          {/* Like Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-gray-400 transition-all"
          >
            <Heart size={20} className="text-red-500" /> Like
          </button>

          {/* Share Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-gray-400 transition-all"
          >
            <Share2 size={20} className="text-blue-500" /> Share
          </button>
        </div>

        {/* Download Button */}
        <a
          href={`http://localhost:8000/api/v1/ringtones/${ringtone.id}/download/`}
          className="inline-block mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 w-full text-center transition-all"
          download
        >
          Download
        </a>
      </div>                
  </div>
  </div>
  </div>
  </div>
  </>
  );
}

export default Ringtone;
