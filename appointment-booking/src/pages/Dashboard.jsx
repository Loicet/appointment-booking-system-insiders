import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

// Mock data for demo
const appointments = [
  { id: 1, doctor: "Dr. Marie U.", specialty: "Cardiology", date: "2025-12-05", time: "10:00 AM" },
  { id: 2, doctor: "Dr. Kevin M.", specialty: "Dermatology", date: "2025-12-07", time: "02:30 PM" },
  { id: 3, doctor: "Dr. Aline I.", specialty: "Pediatrics", date: "2025-12-10", time: "09:00 AM" },
];

const recentActivities = [
  { id: 1, activity: "Booked a Cardiology appointment with Dr. Marie U.", date: "2025-11-20" },
  { id: 2, activity: "Viewed your lab results.", date: "2025-11-18" },
  { id: 3, activity: "Sent a message to Dr. Kevin M.", date: "2025-11-17" },
];

const Dashboard = () => {
  const { user} = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-teal-700">Welcome, {user?.name || user?.email}</h1>
        
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h3 className="text-3xl font-bold text-teal-600">{appointments.length}</h3>
          <p className="text-gray-600 mt-2">Upcoming Appointments</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h3 className="text-3xl font-bold text-teal-600">5</h3>
          <p className="text-gray-600 mt-2">Messages</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <h3 className="text-3xl font-bold text-teal-600">3</h3>
          <p className="text-gray-600 mt-2">AI Health Tips Today</p>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-teal-700">{appt.doctor}</h3>
              <p className="text-gray-600">{appt.specialty}</p>
              <p className="text-gray-500 mt-1">{appt.date} | {appt.time}</p>
              <Link
                to="/doctor-details"
                className="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activities */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
        <ul className="space-y-4">
          {recentActivities.map((act) => (
            <li
              key={act.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex justify-between"
            >
              <span>{act.activity}</span>
              <span className="text-gray-400">{act.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="text-center py-10 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">Quick Actions</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/book-doctor"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Book a Doctor
          </Link>
          <Link
            to="/chat"
            className="bg-teal-100 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-200 transition"
          >
            Chat with Doctors
          </Link>
          <Link
            to="/ai-chatbot"
            className="bg-teal-100 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-200 transition"
          >
            Ask AI Health Bot
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;