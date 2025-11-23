const AIChatbot = () => {
  return (
    <div className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">AI Chatbot</h1>

      <div className="bg-white rounded-lg shadow p-6 flex flex-col">

        {/* Chat messages */}
        <div className="bg-gray-100 rounded-lg p-4 h-80 overflow-y-auto space-y-4">
          <div className="bg-white w-fit px-4 py-2 rounded-lg shadow">
            Hello, how can I assist you today?
          </div>

          <div className="bg-teal-600 text-white w-fit px-4 py-2 rounded-lg ml-auto">
            I need help booking an appointment.
          </div>
        </div>

        {/* Input */}
        <div className="mt-4 flex gap-3">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 border rounded-lg px-4 py-3"
          />
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;