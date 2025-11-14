import api from "../utils/api";

const chatbotService = {
  sendMessage: async (message) => {
    const res = await api.post("/chatbot/message", { message });
    return res.data;
  },

  symptomCheck: async (symptoms) => {
    const res = await api.post("/chatbot/symptom-check", { symptoms });
    return res.data;
  }
};

export default chatbotService;
