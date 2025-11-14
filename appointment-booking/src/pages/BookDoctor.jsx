import { useState } from "react";

const BookDoctor = () => {
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Book a Doctor</h1>

      <div className="bg-white p-8 rounded-lg shadow-md grid md:grid-cols-2 gap-8">
        
        {/* Left Form Section */}
        <div>
          {/* Department */}
          <label className="block text-gray-700 font-medium mb-2">Select Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Choose department</option>
            <option value="internal">Internal Medicine</option>
            <option value="cardiology">Cardiology</option>
            <option value="pediatrics">Pediatrics</option>
          </select>

          {/* Date */}
          <label className="block text-gray-700 font-medium mt-6 mb-2">Date</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Time */}
          <label className="block text-gray-700 font-medium mt-6 mb-2">Time</label>
          <select
            className="w-full border rounded-lg px-4 py-3"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Choose time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        {/* Right - Doctors List */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-gray-700">Available Doctors</h3>

          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <img src="/doctor1.jpg" alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">Dr. John Doe</p>
              <p className="text-sm text-gray-500">Internal Medicine</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <img src="/doctor2.jpg" alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">Dr. Sarah Lee</p>
              <p className="text-sm text-gray-500">Cardiology</p>
            </div>
          </div>

        </div>
      </div>

      <button className="mt-8 bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700">
        Next
      </button>
    </div>
  );
};

export default BookDoctor;
