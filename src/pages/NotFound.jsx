import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleGoHome() {
    startTransition(() => {
      navigate("/");
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060816] text-gray-100 px-4">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Oops! The page you're looking for does not exist.</p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
