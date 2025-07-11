import React from "react";
import { FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎣</span>
            <h1 className="text-2xl font-bold">Angler's Paradise</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-200 transition">
              Home
            </a>
            <a href="#spots" className="hover:text-blue-200 transition">
              Fishing Spots
            </a>
            <a href="#gear" className="hover:text-blue-200 transition">
              Gear Guide
            </a>
            <a href="#tips" className="hover:text-blue-200 transition">
              Tips
            </a>
            <a href="#contact" className="hover:text-blue-200 transition">
              Contact
            </a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-800 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a
            href="#home"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#spots"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Spots
          </a>
          <a
            href="#gear"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Gear
          </a>
          <a
            href="#tips"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Tips
          </a>
          <a
            href="#contact"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
