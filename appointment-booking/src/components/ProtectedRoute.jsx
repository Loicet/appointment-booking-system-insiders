import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Usage:
 * <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
 */
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // or a spinner

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;