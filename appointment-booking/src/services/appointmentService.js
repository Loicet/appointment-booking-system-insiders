import api from "../utils/api";

const appointmentService = {
  createAppointment: async (data) => {
    const res = await api.post("/appointments", data);
    return res.data;
  },

  getUserAppointments: async () => {
    const res = await api.get("/appointments/my");
    return res.data;
  },

  getAppointmentById: async (id) => {
    const res = await api.get(/appointments/${id});
    return res.data;
  },

  cancelAppointment: async (id) => {
    const res = await api.delete(/appointments/${id});
    return res.data;
  },

  updateAppointment: async (id, data) => {
    const res = await api.put(/appointments/${id}, data);
    return res.data;
  }
};

export default appointmentService;
