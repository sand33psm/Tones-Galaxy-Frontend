'use client';

import { useState } from "react";
import { Music, Search, X } from "lucide-react";
import Link from "next/link";

function SearchBar() {
  const [isSearchActive, setIsSearchActive] = useState(false); // Local state for search

  return (
    <div className="flex items-center space-x-2 w-full">
      {/* Conditional Rendering: Logo or Search Bar */}
      {!isSearchActive ? (
        // Logo and Search Button
        <>
          <Music className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          <Link href="/" className="text-xl md:text-2xl font-bold">
            Tones Galaxy
          </Link>
          <button
            onClick={() => setIsSearchActive(true)} // Show input field
            className="p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Search className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </>
      ) : (
        // Search Input and Cancel Button
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 rounded-lg shadow-md bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 
                       w-full md:w-96"
          />
          <button
            onClick={() => setIsSearchActive(false)} // Revert to logo and search button
            className="p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
