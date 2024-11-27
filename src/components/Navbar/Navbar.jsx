import ThemeToggle from './ThemeToggle';
import MobileMenu from '../MobileMenu/MobileMenu';
import SearchBar from './SearchBar'; // Import the client SearchBar

function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-3 bg-gray-100 dark:bg-dark shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-4">
          <SearchBar />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
            Browse
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
            Categories
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
            Popular
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
            Upload
          </a>
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
