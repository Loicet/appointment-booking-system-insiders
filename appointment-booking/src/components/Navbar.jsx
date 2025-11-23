import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-700">
          KigaliClinic
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <Link to="/services" className="hover:text-teal-600">Services</Link>
          <Link to="/about" className="hover:text-teal-600">About</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-teal-600 text-teal-700 rounded-md hover:bg-teal-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;