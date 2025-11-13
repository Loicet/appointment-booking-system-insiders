import React from "react";
import Home from "./pages/Home";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold">KigaliClinic</h1>
      <ul className="flex gap-8 text-lg">
        <li>Home</li>
        <li>Book</li>
        <li>Chat</li>
        <li>Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;
