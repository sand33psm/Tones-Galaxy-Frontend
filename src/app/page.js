import React from 'react';
import { Music, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Link from "next/link";

const HomePage = () => {
  return (
    <div className='home-container font-["Inter"]'>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-normal tracking-tight">
                Your Ultimate Ringtone Destination
              </h1>
              <p className="text-lg md:text-xl font-light">
                Discover, Download, and Personalize Your Perfect Ringtones. Elevate Your Mobile Sound Experience.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link href={'/ringtones'} className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-lg flex items-center justify-center md:justify-start space-x-2">
                  <Music className="mr-2" />
                  Browse Ringtones
                </Link>
                <Link href={'/download'} className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 text-lg flex items-center justify-center md:justify-start space-x-2 dark:text-white">
                  {/* <Download className="mr-2" /> */}
                  Upload Ringtone
                </Link>
              </div>
            </div>
          </div>

          {/* Right Music Visualization Section */}
          <div className="flex-1 relative w-full md:w-auto">
            <div className="bg-purple-50 rounded-lg p-6 overflow-hidden dark:bg-medium">
              <div className="flex space-x-2 items-end h-48 justify-center md:justify-start">
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '30%' }}></div>
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '50%' }}></div>
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '20%' }}></div>
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '70%' }}></div>
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '40%' }}></div>
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '60%' }}></div>
                <div className="w-6 md:w-8 bg-purple-600 animate-pulse" style={{ height: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
