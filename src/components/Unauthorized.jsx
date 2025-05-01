import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center  p-4">
      <div className=" p-8 rounded-lg  max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">403 - Access Denied</h1>
        <p className="text-gray-700 mb-6">
          You don't have permission to access this page.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="px-4 py-2 bg-[#C49557]  text-[#5E321D] rounded-sm  transition"
          >
            Go to Home
          </Link>
          <Link 
            to="/sign in" 
            className="px-4 py-2 border bg-[#C49557] text-[#5E321D]  rounded  transition"
          >
            Login with Different Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;