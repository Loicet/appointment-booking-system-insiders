import api from "../utils/api";

const authService = {
  register: async (userData) => {
    const res = await api.post("/auth/register", userData);
    return res.data;
  },

  login: async (credentials) => {
    const res = await api.post("/auth/login", credentials);

    // Save token
    if (res.data?.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getCurrentUser: async () => {
    const res = await api.get("/auth/me");
    return res.data;
  }
};

export default authService;
