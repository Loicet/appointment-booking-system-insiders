import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import doctorImage from "../assets/doctorimage.jpeg";
const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", role: "patient" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // basic validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    // fake auth: in real app call API
    // emulate failure for specific test
    if (form.password.length < 4) {
      setError("Password must be at least 4 characters (demo).");
      return;
    }

    login({ email: form.email, role: form.role });
  };

  return (
    <div className="min-h-screen flex items-center pt-10 justify-center bg-gray-50 px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Illustration / marketing */}
        <div className="hidden md:flex flex-col gap-6 px-6">
      
          <img src={doctorImage} alt="Doctor" className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-3/4 mx-auto h-[250px] lg:h-[300px]"/>
          <div>
            <h2 className="text-3xl font-bold text-teal-700">Welcome back to KigaliClinic</h2>
            <p className="mt-2 text-gray-600">
              Sign in to manage appointments, chat with doctors, and view your health records.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-1 text-teal-700">Sign in to your account</h3>
          <p className="text-sm text-gray-500 mb-6">Use your email and password</p>

          {error && (
            <div className="mb-4 text-red-700 bg-red-100 p-3 rounded">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-2">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  checked={form.role === "patient"}
                  onChange={handleChange}
                  className="accent-teal-600"
                />
                <span>Patient</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="doctor"
                  checked={form.role === "doctor"}
                  onChange={handleChange}
                  className="accent-teal-600"
                />
                <span>Doctor</span>
              </label>

              <Link to="/forgot" className="text-teal-600 hover:underline">
                Forgot?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md font-semibold hover:bg-teal-700 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-teal-600 font-medium hover:underline">
              Create an account
            </Link>
          </div>

          <div className="mt-6">
            <p className="text-xs text-center text-gray-400">Demo sign-in: any email and password (min 4 chars)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;