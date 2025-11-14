import api from "../utils/api";

const doctorService = {
  getDoctors: async () => {
    const res = await api.get("/doctors");
    return res.data;
  },

  getDoctorById: async (id) => {
    const res = await api.get(/doctors/${id});
    return res.data;
  },

  getDoctorAvailability: async (id) => {
    const res = await api.get(/doctors/${id}/availability);
    return res.data;
  }
};

export default doctorService;
