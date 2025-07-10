import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-50 px-6 py-10">
      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-8">
        1
      </div>
      <div className="text-left mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet,,
          <br />
          consectetur adipiscing elit,
        </p>
      </div>
      <div className="w-full space-y-3">
        <button
          onClick={() => navigate("/register")}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-purple-200 hover:bg-purple-300 text-purple-900 font-semibold py-3 rounded"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
