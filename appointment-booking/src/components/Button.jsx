import React from "react";

const Button = ({ label, onClick, variant = "primary", loading = false, type = "button" }) => {
  const base =
    "px-4 py-2 rounded-md font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={${base} ${styles[variant]}}
    >
      {loading ? "Please wait..." : label}
    </button>
  );
};

export default Button;