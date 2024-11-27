// app/ringtones/page.jsx
import { fetchRingtones } from "../utils/api";
import Navbar from "../../components/Navbar/Navbar";
import RingtoneGrid from "../../components/RingtoneGrid/RingtoneGrid";

export default async function Ringtones() {
  // Fetch ringtone data
  const ringtones = await fetchRingtones();

  return (
    <div className="font-['Inter']">
      <Navbar />
      <div className="container mx-auto p-6">
          {/* <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12 dark:text-white">
            Discover Awesome Ringtones
          </h1> */}
        {/* Client-side Grid */}
        <RingtoneGrid ringtones={ringtones} />
      </div>
    </div>
  );
}
