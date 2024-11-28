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
    try {
      const res = await authApiClient.post(`api/v1/ringtones/${id}/like/`);
      setLikedRingtones((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    } catch (error) {
      if (error.status === 401) {
        router.push("auth/login");
      }
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!ringtone) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Card className="dark:bg-slate-800/50 shadow-lg transition-all duration-300 w-full max-w-3xl mx-auto rounded-lg border border-gray-300 dark:border-slate-700">
          <CardHeader className="relative p-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-t-lg">
            <h2 className="text-3xl font-bold">{ringtone.name}</h2>
            <p className="text-md mt-2">{ringtone.description || "No description available."}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 z-10 bg-white text-purple-500 hover:text-purple-700 hover:bg-gray-100"
              onClick={() => togglePlayPause(ringtone.file, ringtone.id)}
            >
              {playing === ringtone.id ? <Pause size={24} /> : <Play size={24} />}
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Genre:</strong> {ringtone.genre}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              <strong>Uploaded:</strong> {new Date(ringtone.date_uploaded).toLocaleString()}
            </p>
            <audio
              ref={(el) => (audioRefs.current[ringtone.id] = el)}
              src={ringtone.file}
              preload="auto"
              className="mt-6 w-full rounded-lg"
            ></audio>
            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="ghost"
                className={`flex items-center gap-2 ${
                  likedRingtones[ringtone.id] ? "text-red-500" : "text-gray-500 dark:text-gray-300"
                }`}
                onClick={() => toggleLike(ringtone.id)}
              >
                <Heart
                  size={20}
                  fill={likedRingtones[ringtone.id] ? "red" : "none"}
                  className="transition-all duration-200"
                />
                Like - {ringtone.total_likes}
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Share2 size={20} className="text-blue-500" />
                Share
              </Button>
              <Button variant="default" className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-4 py-2">
                <a href={`http://localhost:8000/api/v1/ringtones/${ringtone.id}/download/`} download>
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
