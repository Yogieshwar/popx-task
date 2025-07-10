import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate()
  return (
    <div className="p-4 h-full overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Create your<br />
          PopX account
        </h1>
      </div>
      
      <div className="space-y-2">
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-0.5">
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            className="w-full h-9 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div >
          <label className="block text-purple-600 text-sm font-medium mb-0.5">
            Phone number*
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Marry Doe"
            className="w-full h-9 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-0.5">
            Email address*
          </label>
          <input
            type="email"
            name="email"
            placeholder="Marry Doe"
            className="w-full h-9 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-0.5">
            Password*
          </label>
          <input
            type="password"
            name="password"
            placeholder="Marry Doe"
            className="w-full h-9 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-0.5">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Marry Doe"
            className="w-full h-9 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div className="pb-4">
          <label className="block text-purple-600 text-sm font-medium mb-0.5">
            Are you an Agency?*
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="no"
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
        
        <div className="pt-4">
          <button
           onClick={() => navigate("/settings")}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
