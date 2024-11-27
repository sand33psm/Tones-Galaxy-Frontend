'use client';

import { useState, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';

const RingtoneGrid = ({ ringtones }) => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRefs = useRef({});

  const togglePlayPause = (fileUrl, id) => {
    const currentAudio = audioRefs.current[id];

    if (currentPlaying === id) {
      currentAudio.pause();
      setCurrentPlaying(null);
    } else {
      if (currentPlaying !== null && audioRefs.current[currentPlaying]) {
        audioRefs.current[currentPlaying].pause();
      }
      currentAudio.play();
      setCurrentPlaying(id);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {ringtones.map((ringtone) => (
        <Card key={ringtone.id}   className="bg-white dark:bg-medium dark:border-white/20 group shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Entire clickable area wrapped in Link */}
            <CardHeader className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-12 right-6 z-10 w-10 h-10 border-black/50 dark:border-gray-200 bg-white dark:bg-gray-800"
              onClick={(e) => {
                e.stopPropagation(); // Prevent Link navigation
                togglePlayPause(ringtone.file, ringtone.id);
              }}
            >
              {currentPlaying === ringtone.id ? (
                <Pause className="w-9 h-9 text-black dark:text-white fill-current" size={36} />
              ) : (
                <Play className="w-9 h-9 text-black dark:text-white fill-current" size={36} />
              )}
            </Button>

            </CardHeader>
          <Link href={`/ringtones/${ringtone.id}`} className="block">
            <CardContent>  
            <h2 className="text-xl font-semibold cursor-pointer">{ringtone.name}</h2>
            {/* <p className="text-sm">{ringtone.description || "No description available."}</p> */}
              <p className="text-md text-gray-600 text-xl dark:text-white">
                Genre: <span className="font-medium">{ringtone.genre}</span>
              </p>
              {/* <p className="text-sm text-gray-600">
                Uploaded: {new Date(ringtone.date_uploaded).toLocaleString()}
              </p> */}
            </CardContent>
          </Link>
          <CardContent>
            {/* Audio Element */}
            <audio
              ref={(el) => (audioRefs.current[ringtone.id] = el)}
              src={ringtone.file}
              preload="auto"
              className="mt-4 w-full"
            ></audio>

            {/* Like, Share, and Download Buttons */}
            <div className="mt-4 flex justify-between">
              <Button variant="ghost" className="flex items-center gap-2">
                <Heart size={20} className="dark:text-white" /> Like
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Share2 size={20} className="dark:text-white" /> Share
              </Button>
              <Button
                variant="default"
                asChild
                className="ml-auto"
              >
                <Link
                  className='bg-purple-500 dark:bg-white hover:bg-gray-200'
                  href={`http://localhost:8000/api/v1/ringtones/${ringtone.id}/download/`}
                  download
                >
                  Download
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RingtoneGrid;
