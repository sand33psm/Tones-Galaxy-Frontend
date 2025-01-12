'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { fetchRingtones } from '@/services/ringtonesService';
import RingtoneCard from '../RingtoneCard/RingtoneCard';

const RingtoneGrid = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [likedRingtones, setLikedRingtones] = useState({});
  const [ringtones, setRingtones] = useState([]);
  const [nextPage, setNextPage] = useState(1); // Start with page 1
  const [hasMore, setHasMore] = useState(true); // Track if there's more data
  const [loading, setLoading] = useState(true); // Initial loading state
  const [loadingMore, setLoadingMore] = useState(false); // Loading for "Show More"
  const audioRefs = useRef({});
  const router = useRouter();

  // Fetch ringtones for the current page
  const fetchData = async (isInitialLoad = false) => {
    if (!hasMore || loadingMore) return; // Prevent fetching if no more data or already loading

    if (isInitialLoad) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const ringtonesData = await fetchRingtones(nextPage);
      setRingtones((prevRingtones) => [...prevRingtones, ...ringtonesData.results]);
      setNextPage(nextPage + 1);
      setHasMore(ringtonesData.next !== null); // Check if there's more data
    } catch (error) {
      console.error('Error fetching ringtones:', error);
    } finally {
      if (isInitialLoad) {
        setLoading(false);
      } else {
        setLoadingMore(false);
      }
    }
  };

  useEffect(() => {
    fetchData(true); // Fetch initial ringtones on component mount
  }, []);

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

  const toggleLike = async (id) => {
    try {
      const res = await authApiClient.post(`api/v1/ringtones/${id}/like/`);
      const updatedRingtone = res.data;

      setLikedRingtones((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));

      setRingtones((prevRingtones) =>
        prevRingtones.map((ringtone) =>
          ringtone.id === id
            ? { ...ringtone, total_likes: updatedRingtone.total_likes }
            : ringtone
        )
      );
    } catch (error) {
      if (error.status === 401) {
        router.push('auth/login');
      }
    }
  };

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="text-center my-8">
          <p className="text-gray-600">Loading ringtones...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ringtones.map((ringtone) => (
              <RingtoneCard
                key={ringtone.id}
                ringtone={ringtone}
                togglePlayPause={togglePlayPause}
                currentPlaying={currentPlaying}
                toggleLike={toggleLike}
                likedRingtones={likedRingtones}
                audioRefs={audioRefs}
              />
            ))}
          </div>
          {hasMore && (
            <div className="text-center my-4">
              <button
                onClick={() => fetchData(false)}
                disabled={loadingMore}
                className="px-28 py-2 text-xl mt-6 w-80 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {loadingMore ? 'Loading...' : 'Show More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RingtoneGrid;
