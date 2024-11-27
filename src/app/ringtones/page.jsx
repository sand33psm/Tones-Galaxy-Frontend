import { fetchRingtones } from "@/services/ringtonesService";
import Navbar from "../../components/Navbar/Navbar";
import RingtoneGrid from "../../components/RingtoneGrid/RingtoneGrid";

export default async function Ringtones() {

  return (
    <div className="font-['Inter']">
      <Navbar />
      <div className="container mx-auto p-6">
        <RingtoneGrid />
      </div>
    </div>
  );
}
