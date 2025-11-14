import React from "react";

const DoctorCard = ({ image, name, specialty, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-blue-600 text-sm">{specialty}</p>
      <p className="text-yellow-500 text-sm mt-1"> {rating}</p>
    </div>
  );
};

export default DoctorCard;
