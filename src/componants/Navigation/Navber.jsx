import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-red-600">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to={'/home'} className="text-gray-700 hover:text-red-600 transition">Home</Link>
            <Link to={'/from'} className="text-gray-700 hover:text-red-600 transition">From</Link>
            <Link to={'/products'} className="text-gray-700 hover:text-red-600 transition">Products</Link>
            <Link to={'/Blogs'} className="text-gray-700 hover:text-red-600 transition">Blogs</Link>
            <Link to={'/about'} className="text-gray-700 hover:text-red-600 transition">About</Link>
            <Link to={'/contact'} className="text-gray-700 hover:text-red-600 transition">Contact</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#" className="block px-4 py-2 hover:bg-red-50">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-red-50">Products</a>
          <a href="#" className="block px-4 py-2 hover:bg-red-50">Blogs</a>
          <a href="#" className="block px-4 py-2 hover:bg-red-50">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-red-50">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
