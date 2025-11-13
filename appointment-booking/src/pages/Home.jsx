import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-10 py-20">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book your appointment easily
          </h1>
          <p className="text-gray-600 mb-6">
            Get connected to professional doctors anytime, anywhere. Choose your preferred specialist and schedule your appointment in seconds.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700">
            Book Now
          </button>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/20/56/doctor-1295567_1280.png"
          alt="Doctor"
          className="w-full md:w-1/3 mt-10 md:mt-0 rounded-xl"
        />
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-10 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <i className="fa-solid fa-stethoscope text-teal-600 text-4xl mb-4"></i>
            <h3 className="font-bold text-xl mb-2">General Consultation</h3>
            <p className="text-gray-600">Connect with general practitioners for regular checkups and health advice.</p>
          </div>

          <div className="shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <i className="fa-solid fa-tooth text-teal-600 text-4xl mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Dental Care</h3>
            <p className="text-gray-600">Book appointments with dental specialists to maintain a healthy smile.</p>
          </div>

          <div className="shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <i className="fa-solid fa-heart-pulse text-teal-600 text-4xl mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Cardiology</h3>
            <p className="text-gray-600">Access top cardiologists for heart health assessments and treatments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
