"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Hook for redirection

  const handleHomeClick = () => {
    setIsMenuOpen(false); // Close the menu
    router.push("/"); // Redirect to login
  }

  // Function to handle redirection to login
  const handleLoginClick = () => {
    setIsMenuOpen(false); // Close the menu
    router.push("/auth/login"); // Redirect to login
  };

  // Function to handle redirection to register
  const handleRegisterClick = () => {
    setIsMenuOpen(false); // Close the menu
    router.push("/auth/register"); // Redirect to register
  };

  // Function to handle redirection to upload
  const handleUploadClick = () => {
    setIsMenuOpen(false); // Close the menu
    router.push("/upload"); // Redirect to upload page
  };

  const handleAboutUsClick = () => {
    setIsMenuOpen(false)
    router.push("/about-us")
  }

  const handlePrivacyPolicy = () => {
    setIsMenuOpen(false)
    router.push("/privacy-policy")
  }

  const handleTermsOfService = () => {
    setIsMenuOpen(false)
    router.push("/terms-of-service")
  }

  const handleDmca = () => {
    setIsMenuOpen(false)
    router.push("/dmca")
  }

  const handleContactUs = () => {
    setIsMenuOpen(false)
    router.push("/contact-us")
  }

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        className="p-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-72 h-screen bg-white dark:bg-gray-900 shadow-lg z-50 p-6 flex flex-col space-y-6" id="mobile-menu">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 dark:border-gray-700" />

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
          <button
              onClick={handleHomeClick} // Trigger upload redirection
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Home
            </button>

            {/* Upload Button */}
            <button
              onClick={handleUploadClick} // Trigger upload redirection
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Upload
            </button>

            <button
              onClick={handleDmca}
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              DMCA
            </button>

            <button
              onClick={handlePrivacyPolicy}
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Privacy Policy
            </button>

            <button
              onClick={handleTermsOfService}
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Terms of service
            </button>

            <button
              onClick={handleContactUs}
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Contact Us
            </button>

            <button
              onClick={handleAboutUsClick}
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              About us
            </button>

            {/* Login Button */}
            <button
              onClick={handleLoginClick} // Trigger login redirection
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Login
            </button>

            {/* Sign Up Button */}
            <button
              onClick={handleRegisterClick} // Trigger register redirection
              className="w-full py-3 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
