"use client";

import { useEffect, useState, useRef } from "react";
import { fetchRingtone } from "@/services/ringtonesService";
import { Play, Pause, Heart, Share2 } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import { authApiClient } from "@/utils/api";

function Ringtone() {
  const [ringtone, setRingtone] = useState(null);
  const [error, setError] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [likedRingtones, setLikedRingtones] = useState({});

  const audioRefs = useRef({});
  const { id } = useParams();

  useEffect(() => {
    const getRingtone = async () => {
      try {
        const data = await fetchRingtone(id);
        setRingtone(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getRingtone();
  }, [likedRingtones]);

  const togglePlayPause = (fileUrl, id) => {
    const currentAudio = audioRefs.current[id];
    const previousAudio = audioRefs.current[playing];

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

  const toggleLike = async (id) => {

    console.log("clicked on like", id);
    
    try {
      const res = await authApiClient.post(`api/v1/ringtones/${id}/like/`);
      console.log(res);

      setLikedRingtones((prev) => ({
        ...prev,
        [id]: !prev[id], // Toggle the like status
      }));
    } catch (error) {
      if (error.status == 401) {
        console.log(error.status, 'Error occured');
        router.push('auth/login');
      }
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!ringtone) return <div>Loading...</div>;



  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12 dark:text-white">
          Ringtone Details
        </h1> */}
        <Card className="dark:bg-slate-800/50 group shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-lg mx-auto">
          <CardHeader className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-8 right-6 z-10 "
              onClick={() => togglePlayPause(ringtone.file, ringtone.id)}
            >
              {playing === ringtone.id ? <Pause size={24} /> : <Play size={24} />}
            </Button>
            <h2 className="text-xl font-semibold">{ringtone.name}</h2>
            {/* <p className="text-sm">{ringtone.description || "No description available."}</p> */}
          </CardHeader>
          <CardContent>
            <p className="text-md text-gray-600">
              Genre: <span className="font-medium">{ringtone.genre}</span>
            </p>
            <p className="text-sm text-gray-600">
              Uploaded: {new Date(ringtone.date_uploaded).toLocaleString()}
            </p>
            <audio
              ref={(el) => (audioRefs.current[ringtone.id] = el)}
              src={ringtone.file}
              preload="auto"
              className="mt-4 w-full"
            ></audio>
            <div className="mt-4 flex justify-between">
              <Button variant="ghost" 
              className={`flex items-center gap-2 ${
                likedRingtones[ringtone.id] ? 'text-red-500' : 'text-gray-500 dark:text-white'
              }`}
              onClick={() => toggleLike(ringtone.id)}
              style={{
                backgroundColor: 'transparent', // No background on hover
              }}
              >
                <Heart size={20}
              fill={likedRingtones[ringtone.id] ? 'red' : 'none'} // Red fill when liked
              className="transition-all duration-200"/> Like - {ringtone.total_likes}
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Share2 size={20} className="text-blue-500" /> Share
              </Button>
              <Button variant="default" asChild>

                <a
                  className="bg-purple-500 hover:bg-purple-600"
                  href={`http://localhost:8000/api/v1/ringtones/${ringtone.id}/download/`}
                  download
                >
                  Download
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Ringtone;
