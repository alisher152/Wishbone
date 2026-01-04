import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-4">
        <div>
          <img
            src="/assets/IMAGE (1).svg"
            alt="Logo"
            className="w-32 md:w-40 lg:w-auto"
          />
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          <div className="hidden sm:flex gap-2 md:gap-4">
            <button className="text-sm md:text-base hover:text-gray-600">
              Projects
            </button>
            <button className="text-sm md:text-base hover:text-gray-600">
              About
            </button>
            <button className="text-sm md:text-base hover:text-gray-600">
              News
            </button>
            <button className="text-sm md:text-base hover:text-gray-600">
              Team
            </button>
            <button className="text-sm md:text-base hover:text-gray-600">
              Contact
            </button>
          </div>

          <button className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl text-sm md:text-base hover:bg-gray-800 whitespace-nowrap">
            Get template
          </button>

          <button
            onClick={toggleMenu}
            className="sm:hidden ml-2 text-2xl focus:outline-none transition-transform hover:scale-110"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <span className="text-xl">✕</span> : <span>☰</span>}
          </button>
        </div>
      </div>

      {/* Анимированное мобильное меню */}
      <div
        className={`sm:hidden bg-white shadow-lg border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left py-2 hover:text-gray-600 hover:bg-gray-50 rounded px-2"
          >
            Projects
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left py-2 hover:text-gray-600 hover:bg-gray-50 rounded px-2"
          >
            About
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left py-2 hover:text-gray-600 hover:bg-gray-50 rounded px-2"
          >
            News
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left py-2 hover:text-gray-600 hover:bg-gray-50 rounded px-2"
          >
            Team
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-left py-2 hover:text-gray-600 hover:bg-gray-50 rounded px-2"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
