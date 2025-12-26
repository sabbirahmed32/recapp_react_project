import React, { useState } from "react";

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
            <a href="/home" className="text-gray-700 hover:text-red-600 transition">
              Home
            </a>
            <a href="/products" className="text-gray-700 hover:text-red-600 transition">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition">
              Blogs
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition">
              Contact
            </a>
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
