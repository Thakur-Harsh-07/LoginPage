import React from 'react';
import { toast } from 'react-toastify';

const Dashboard = ({ setLoggin }) => {
  function logoutHandler() {
    setLoggin(false);
    toast.success("Logged Out");
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-center">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome to Dashboard</h1>
      <button
        onClick={logoutHandler}
        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
