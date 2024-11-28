// pages/ringtones/RingtoneGrid.jsx
'use client'

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { authApiClient } from '@/utils/api';
import { fetchRingtones } from '@/services/ringtonesService';
import RingtoneCard from '../RingtoneCard/RingtoneCard';

const RingtoneGrid = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [likedRingtones, setLikedRingtones] = useState({});
  const [ringtones, setRingtones] = useState([]);
  const audioRefs = useRef({});

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const ringtonesData = await fetchRingtones();
      setRingtones(ringtonesData);
    };

    fetchData();
  }, [likedRingtones]);

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
    const updatedRingtone = res.data; // Assuming your API returns the updated ringtone object

    // Update the likedRingtones and ringtone data in the state
    setLikedRingtones((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the like status
    }));

    setRingtones((prevRingtones) =>
      prevRingtones.map((ringtone) =>
        ringtone.id === id
          ? { ...ringtone, total_likes: updatedRingtone.total_likes } // Update like count
          : ringtone
      )
    );
  } catch (error) {
    if (error.status === 401) {
      console.log(error.status, 'Error occurred');
      router.push('auth/login');
    }
  }
};


  return (
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
  );
};

export default RingtoneGrid;
