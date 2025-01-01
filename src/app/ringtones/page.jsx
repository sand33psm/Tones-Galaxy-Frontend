import Head from 'next/head';
import { fetchRingtones } from "@/services/ringtonesService";
import Navbar from "../../components/Navbar/Navbar";
import RingtoneGrid from "../../components/RingtoneGrid/RingtoneGrid";

export const metadata = {
  title: "Download Free Ringtones | Top Ringtones Collection - Ringtones Glitch",
  description: "Explore our wide collection of free ringtones across various genres. Download and customize your phone with top-quality ringtones only at Ringtones Glitch.",
  keywords: "free ringtones, ringtone downloads, mobile ringtones, custom ringtones, music ringtones, top ringtones, popular ringtones",
};

export default async function Ringtones() {

  return (

    <>
      <div className="font-['Inter']">
        <Navbar />
        <div className="container mx-auto p-6">
          <RingtoneGrid />
        </div>
      </div>
    </>
  );
}
