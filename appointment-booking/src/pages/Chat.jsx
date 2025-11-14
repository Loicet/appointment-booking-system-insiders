const Chat = () => {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Chat</h1>

      <div className="bg-white rounded-lg shadow p-6 flex flex-col">

        {/* Doctor Info */}
        <div className="flex items-center gap-4 mb-6">
          <img src="/doctor2.jpg" className="w-14 h-14 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold">Dr. Mugisha Daniel</h2>
            <p className="text-gray-500">Internal Medicine</p>
          </div>
        </div>

        {/* Chat Box */}
        <div className="flex-1 bg-gray-100 rounded-lg p-4 h-80 overflow-y-auto space-y-4">
          <div className="bg-white w-fit px-4 py-2 rounded-lg shadow">
            Hello doctor, I have a question.
          </div>

          <div className="bg-teal-600 text-white w-fit px-4 py-2 rounded-lg ml-auto">
            Sure, how can I help you?
          </div>
        </div>

        {/* Input */}
        <div className="mt-4 flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
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

export default Chat;
