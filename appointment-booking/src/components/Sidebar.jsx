import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ role = "patient" }) => {
  const location = useLocation();

  const links = role === "patient"
    ? [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Book Doctor", path: "/book-doctor" },
        { name: "Chat", path: "/chat" },
        { name: "AI Health Bot", path: "/ai-chatbot" },
      ]
    : [
        { name: "Dashboard", path: "/doctor-dashboard" },
        { name: "Appointments", path: "/doctor-appointments" },
        { name: "Chat", path: "/doctor-chat" },
      ];

  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col gap-6 min-h-screen">
      <h2 className="text-2xl font-bold text-teal-700">KigaliClinic</h2>

      <nav className="flex flex-col gap-3 mt-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 rounded hover:bg-teal-100 transition ${
              location.pathname === link.path ? "bg-teal-50 font-semibold text-teal-700" : "text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;