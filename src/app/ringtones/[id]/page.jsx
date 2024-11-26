"use client";

import { useEffect, useState, useRef } from "react";
import { fetchRingtone } from "@/app/utils/api";
import { Play, Pause, Heart, Share2 } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

function Ringtone() {
  const [ringtone, setRingtone] = useState(null);
  const [error, setError] = useState(null);
  const [playing, setPlaying] = useState(null);
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
  }, [id]);

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
            <p className="text-sm">{ringtone.description || "No description available."}</p>
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
              <Button variant="ghost" className="flex items-center gap-2">
                <Heart size={20} className="text-red-500" /> Like
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
