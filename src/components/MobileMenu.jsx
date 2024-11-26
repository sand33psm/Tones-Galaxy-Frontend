"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function MobileMenu() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Toggle Button */}
      <button
        className="text-purple-600 dark:text-purple-400 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
        aria-label="Toggle Menu" // Accessibility label for the button
      >
        {/* Display the menu or close icon based on the menu state */}
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="absolute top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-gray-50 dark:bg-dark shadow-lg z-50 p-6 flex flex-col space-y-4"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              className="text-purple-600 dark:text-purple-400 focus:outline-none"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              aria-label="Close Menu" // Accessibility label for the close button
            >
              {/* Close icon */}
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <a
            href="#"
            className="block mb-3 text-purple-600 dark:text-purple-400 hover:underline"
          >
            Browse
          </a>
          <a
            href="#"
            className="block mb-3 text-purple-600 dark:text-purple-400 hover:underline"
          >
            Categories
          </a>
          <a
            href="#"
            className="block mb-3 text-purple-600 dark:text-purple-400 hover:underline"
          >
            Popular
          </a>
          <a
            href="#"
            className="block mb-3 text-purple-600 dark:text-purple-400 hover:underline"
          >
            Upload
          </a>

          {/* Login Button */}
          <button className="w-full mt-3 mb-2 py-2 rounded-full bg-purple-600 dark:bg-purple-400 text-white hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors">
            Login
          </button>

          {/* Sign Up Button */}
          <button className="w-full py-2 rounded-full bg-purple-600 dark:bg-purple-400 text-white hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
