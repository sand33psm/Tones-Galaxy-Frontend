// src/app/ringtones/[id]/page.server.js
import { fetchRingtone } from "@/services/ringtonesService";
import RingtoneClient from "@/components/RingtoneClient/RingtoneClient"; // Import the client component

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const ringtone = await fetchRingtone(id);
    return {
      title: `${ringtone.name} - Free Ringtone Download | Ringtones Glitch`,
      description: `Download the ringtone "${ringtone.name}" for free. Explore more ringtones on Ringtones Glitch.`,
      keywords: `${ringtone.name}, free ringtone, download ringtone, ${ringtone.genre}`,
      openGraph: {
        title: `${ringtone.name} - Free Ringtone Download`,
        description: `Download the ringtone "${ringtone.name}" for free. Perfect for your phone!`,
        url: `https://www.ringtonesglitch.com/ringtones/${ringtone.id}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${ringtone.name} - Free Ringtone Download`,
        description: `Download the ringtone "${ringtone.name}" for free at Ringtones Glitch.`,
      },
    };
  } catch (err) {
    console.error("Error fetching ringtone metadata:", err);
    return {
      title: "Ringtone Not Found | Ringtones Glitch",
      description: "The requested ringtone could not be found.",
    };
  }
}

export default async function RingtonePage({ params }) {
  const { id } = params;

  try {
    const ringtone = await fetchRingtone(id);

    return (
      <RingtoneClient ringtone={ringtone} /> // Pass ringtone as prop to the client component
    );
  } catch (error) {
    return <div>Error loading ringtone: {error.message}</div>;
  }
}
