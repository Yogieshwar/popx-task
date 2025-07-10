import React from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import AccountSettings from "./components/AccountSettings";
import FooterNav from "./components/FooterNav";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex  items-center justify-center p-4">
      <div className="w-full max-w-sm ">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="h-[600px] flex flex-col justify-between">
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/settings" element={<AccountSettings />} />
              </Routes>
            </div>

            <div className="p-4">
              <FooterNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
