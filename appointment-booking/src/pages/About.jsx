import React from "react";

const About = () => {
  return (
    <div className="pt-28 pb-20 px-8 md:px-20 bg-gray-50">

      <h1 className="text-5xl font-bold text-teal-700 text-center mb-10">
        About KigaliClinic
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center leading-relaxed">
        KigaliClinic is a digital-first healthcare platform transforming the way
        Rwandans access medical services. Our mission is to make quality healthcare
        easy, fast, and accessible for everyone.
      </p>

      {/* Mission Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-10">

        <div className="bg-white p-10 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-teal-700 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To provide accessible, affordable, and high-quality health services
            through a seamless digital experience that connects patients with
            professional healthcare providers.
          </p>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-teal-700 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become Rwanda’s most trusted digital healthcare system,
            empowering communities to access medical care without barriers.
          </p>
        </div>

      </div>

      {/* Team Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-6">Our Team</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our platform is built and supported by experienced medical experts,
          software engineers, and health consultants dedicated to improving
          healthcare everywhere.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Dr. Marie U.</h3>
            <p className="text-gray-500">Chief Medical Officer</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Kevin M.</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Aline I.</h3>
            <p className="text-gray-500">Clinical Operations Lead</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;