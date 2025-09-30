import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-blue-600 font-bold text-xl">
            <a href="#hero" className="hover:text-blue-600">
              Yugal Kosamshile
            </a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#education" className="hover:text-blue-600">
              Education
            </a>
            <a href="#experience" className="hover:text-blue-600">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#education" className="hover:text-blue-600">
            Education
          </a>
          <a href="#experience" className="hover:text-blue-600">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;