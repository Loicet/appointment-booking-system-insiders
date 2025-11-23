import React from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const PatientLayout = ({ children }) => {
  const { logout, user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar role={user?.role || "patient"} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-700">
            {user?.role === "doctor" ? "Doctor Dashboard" : "Patient Dashboard"}
          </h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default PatientLayout;