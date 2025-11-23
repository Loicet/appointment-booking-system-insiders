import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // basic validation
    if (!form.name || !form.email || !form.password) {
      setError("Please complete all fields.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    // mock signup - replace with real API call
    signup({ name: form.name, email: form.email, role: form.role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left marketing */}
        <div className="hidden md:flex flex-col gap-6 px-6">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/20/56/doctor-1295567_1280.png"
            alt="doctor"
            className="w-full max-w-sm mx-auto"
          />
          <div>
            <h2 className="text-3xl font-bold text-teal-700">Join KigaliClinic</h2>
            <p className="mt-2 text-gray-600">
              Create your account to book appointments, chat with doctors, and manage your health records.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-1 text-teal-700">Create an account</h3>
          <p className="text-sm text-gray-500 mb-6">Sign up as a patient or a doctor</p>

          {error && <div className="mb-4 text-red-700 bg-red-100 p-3 rounded">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200"
                placeholder="Jane Doe"
                required
              />
            </div>

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
                  placeholder="Create a password"
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
              <p className="text-xs text-gray-400 mt-1">Use at least 6 characters.</p>
            </div>

            <div className="flex items-center gap-4">
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
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md font-semibold hover:bg-teal-700 transition"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;