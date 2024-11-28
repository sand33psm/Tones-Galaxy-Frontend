"use client";

import UploadRingtone from "@/components/UploadRingtone/UploadRingtone";
import Navbar from "@/components/Navbar/Navbar";

const UploadRingtonePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex-grow flex justify-center items-center py-10 bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-4xl px-4">
          <UploadRingtone />
        </div>
      </div>
    </div>
  );
};

export default UploadRingtonePage;
