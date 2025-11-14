const DoctorDetails = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Doctor Details</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Doctor Image */}
          <img
            src=""
            alt="doctor"
            className="rounded-lg w-full h-64 object-cover"
          />

          {/* Doctor Info */}
          <div>
            <h2 className="text-2xl font-semibold">Dr. Ken Muhirwa</h2>
            <p className="text-yellow-500 text-lg my-2">★★★★★</p>
            <p className="text-gray-600 mb-4">Internal Medicine</p>

            <h3 className="font-medium text-gray-700 mb-2">
              Available Appointments
            </h3>

            <div className="space-y-3">
              <button className="w-full border px-4 py-2 rounded-lg hover:bg-gray-100">
                Monday, 10:00 AM
              </button>
              <button className="w-full border px-4 py-2 rounded-lg hover:bg-gray-100">
                Wednesday, 2:00 PM
              </button>
              <button className="w-full border px-4 py-2 rounded-lg hover:bg-gray-100">
                Friday, 4:00 PM
              </button>
            </div>

            <button className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
