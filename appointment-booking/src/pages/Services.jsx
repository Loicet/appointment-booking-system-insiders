import React from "react";

const services = [
  {
    title: "General Consultation",
    icon: "fa-stethoscope",
    description: "Routine checkups, diagnosis, and general health assessments."
  },
  {
    title: "Dental Care",
    icon: "fa-tooth",
    description: "Professional dental cleaning, whitening, extraction & more."
  },
  {
    title: "Cardiology",
    icon: "fa-heart-pulse",
    description: "Heart health assessments and cardiology consultations."
  },
  {
    title: "Pediatrics",
    icon: "fa-baby",
    description: "Quality healthcare services for newborns, infants & children."
  },
  {
    title: "Dermatology",
    icon: "fa-spa",
    description: "Skin treatment, acne care, allergy testing & more."
  },
  {
    title: "Gynecology",
    icon: "fa-female",
    description: "Women's reproductive health, checkups, and treatment."
  }
];

const Services = () => {
  return (
    <div className="pt-28 pb-20 px-8 md:px-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-12">
        Our Medical Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-10 bg-white shadow-md border rounded-xl hover:shadow-xl transition"
          >
            <i className={`fa-solid ${service.icon} text-teal-600 text-5xl mb-6`}></i>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;