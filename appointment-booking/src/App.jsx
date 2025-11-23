import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import MainLayout from "./layout/MainLayout";
import PatientLayout from "./layout/patientLayout";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookDoctor from "./pages/BookDoctor";
import Chat from "./pages/Chat";
import AIChatbot from "./pages/AIChatbot";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Website Pages */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />

          {/* Protected Dashboard Pages */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <PatientLayout>
                  <Dashboard />
                </PatientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-doctor"
            element={
              <ProtectedRoute>
                <PatientLayout>
                  <BookDoctor />
                </PatientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <PatientLayout>
                  <Chat />
                </PatientLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ai-chatbot"
            element={
              <ProtectedRoute>
                <PatientLayout>
                  <AIChatbot />
                </PatientLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;