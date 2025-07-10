import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-6 py-10">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Signin to your<br/>
          PopX account
        </h2>
        <p className="text-sm text-gray-500 mt-2 mb-6">
          Lorem ipsum dolor sit amet,<br/>
          consectetur adipiscing elit,
        </p>
        <form  className="space-y-4">
          <div>
            <label className="text-sm font-medium text-purple-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-purple-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            onClick={() => navigate("/settings")}
            className="w-full bg-gray-400 text-white py-4 rounded-lg font-medium hover:bg-gray-500 transition-colors "
            
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
