import ThemeToggle from "./ThemeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "./SearchBar"; // Import the client SearchBar
import Link from "next/link";

function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-3 bg-white dark:bg-dark shadow-md">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo and Search */}
        <div className="flex items-center space-x-4">
          <SearchBar />
        </div>

        {/* Middle Section: Desktop Navigation */}
        {/* <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/browse"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Browse
          </Link>
          <Link
            href="/categories"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/popular"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Popular
          </Link>
          <Link
            href="/upload"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Upload
          </Link>
        </div> */}

        {/* Right Section: Theme Toggle, Login/Register, and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Link
              href="/auth/login"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Login
            </Link> */}
            {/* <Link
              href="/auth/register"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Register
            </Link> */}
          </div>
          {/* Mobile Menu for smaller screens */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
