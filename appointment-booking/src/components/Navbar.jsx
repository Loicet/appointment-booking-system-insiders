import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold">KigaliClinic</h1>
      <ul className="flex gap-8 text-lg">
        {/* <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/book" className="hover:text-gray-200">Book</Link></li>
        <li><Link to="/chat" className="hover:text-gray-200">Chat</Link></li>
        <li><Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
