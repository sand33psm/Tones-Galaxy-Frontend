// components/RingtoneCard.jsx
import { Button } from '@/components/ui/button';
import { Play, Pause, Heart, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RingtoneCard = ({ ringtone, togglePlayPause, currentPlaying, toggleLike, likedRingtones, audioRefs }) => {

    console.log("Ringtone-id -> ", ringtone);
    

  return (
    <div className="group bg-white dark:bg-medium dark:border-white/20 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
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
      </div>
      <Link href={`/ringtones/${ringtone.id}`} className="block">
        <div className="p-4">
          <h2 className="text-xl font-semibold cursor-pointer">{ringtone.name}</h2>
          <p className="text-md text-gray-600 text-xl dark:text-white">
            Genre: <span className="font-medium">{ringtone.genre}</span>
          </p>
        </div>
      </Link>
      <div className="p-4">
        <audio
          ref={(el) => (audioRefs.current[ringtone.id] = el)}
          src={ringtone.file}
          preload="auto"
          className="mt-4 w-full"
        ></audio>
        <div className="mt-4 flex justify-between">
          <Button
            variant="ghost"
            className={`flex items-center gap-2 ${
              likedRingtones[ringtone.id] ? 'text-red-500' : 'text-gray-500 dark:text-white'
            }`}
            onClick={() => toggleLike(ringtone.id)}
            style={{
              backgroundColor: 'transparent', // No background on hover
            }}
          >
            <Heart
              size={20}
              fill={likedRingtones[ringtone.id] ? 'red' : 'none'} // Red fill when liked
              className="transition-all duration-200"
            />
            Like - {ringtone.total_likes}
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Share2 size={20} className="dark:text-white" /> Share
          </Button>
          <Button variant="default" asChild className="ml-auto">
            <Link
              className="bg-purple-500 dark:bg-white hover:bg-gray-200"
              href={`http://localhost:8000/api/v1/ringtones/${ringtone.id}/download/`}
              download
            >
              Download
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RingtoneCard;
