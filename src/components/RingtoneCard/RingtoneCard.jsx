// components/RingtoneCard.jsx
import { Button } from '@/components/ui/button';
import { Play, Pause, Heart, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RingtoneCard = ({ ringtone, togglePlayPause, currentPlaying, toggleLike, likedRingtones, audioRefs }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Play/Pause Button */}
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
          onClick={(e) => {
            e.stopPropagation(); // Prevent Link navigation
            togglePlayPause(ringtone.file, ringtone.id);
          }}
        >
          {currentPlaying === ringtone.id ? (
            <Pause className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          ) : (
            <Play className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          )}
        </Button>
      </div>

      {/* Card Content */}
      <Link href={`/ringtones/${ringtone.id}`} className="block">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {ringtone.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Genre: <span className="font-medium">{ringtone.genre}</span>
          </p>
        </div>
      </Link>

      {/* Audio Player and Actions */}
      <div className="p-6">
        <audio
          ref={(el) => (audioRefs.current[ringtone.id] = el)}
          src={ringtone.file}
          preload="auto"
          className="w-full rounded-lg"
        ></audio>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          {/* Like Button */}
          <Button
            variant="ghost"
            className={`flex items-center gap-2 ${
              likedRingtones[ringtone.id] ? 'text-red-500' : 'text-gray-500 dark:text-gray-300'
            }`}
            onClick={() => toggleLike(ringtone.id)}
          >
            <Heart
              size={20}
              fill={likedRingtones[ringtone.id] ? 'red' : 'none'}
              className="transition-all duration-200"
            />
            Like - {ringtone.total_likes}
          </Button>

          {/* Share Button */}
          <Button variant="ghost" className="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-purple-500">
            <Share2 size={20} />
            Share
          </Button>

          {/* Download Button */}
          <Button variant="default" asChild className="ml-auto">
            <Link
              href={`http://localhost:8000/api/v1/ringtones/${ringtone.id}/download/`}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
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
