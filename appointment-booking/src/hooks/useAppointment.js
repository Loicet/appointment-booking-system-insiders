import { useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import { storage } from "../utils/storage";

const useAppointment = () => {
  const token = storage.get("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Book an appointment
  const bookAppointment = async (appointmentData) => {
    setLoading(true);
    try {
      const response = await fetchApi("/appointments/book", {
        method: "POST",
        body: JSON.stringify(appointmentData),
        headers: {
          Authorization: Bearer ${token},
        },
      });

      return response;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Cancel an appointment
  const cancelAppointment = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await fetchApi(/appointments/${appointmentId}, {
        method: "DELETE",
        headers: {
          Authorization: Bearer ${token},
        },
      });

      return response;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    bookAppointment,
    cancelAppointment,
    loading,
    error,
  };
};

export default useAppointment;
