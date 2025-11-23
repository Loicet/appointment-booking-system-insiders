import React from "react";

const AppointmentCard = ({ doctor, date, time, status }) => {
  const statusColor = {
    upcoming: "text-green-600",
    completed: "text-blue-600",
    cancelled: "text-red-600",
  };

  return (
    <div className="bg-white shadow-sm p-4 rounded-xl flex justify-between items-center mb-3">
      <div>
        <h4 className="font-semibold">{doctor}</h4>
        <p className="text-gray-500 text-sm">
          {date} • {time}
        </p>
      </div>
      <span className={${statusColor[status]} font-medium capitalize}>
        {status}
      </span>
    </div>
  );
};

export default AppointmentCard;