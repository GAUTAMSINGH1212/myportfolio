import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">JS Docs</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/topics" className="hover:text-orange-500">Topics</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 space-y-4 p-4">
          <Link to="/" className="block text-white hover:text-orange-500">Home</Link>
          <Link to="/about" className="block text-white hover:text-orange-500">About</Link>
          <Link to="/topics" className="block text-white hover:text-orange-500">Topics</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
