import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
      <div className="text-blue-600 text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
