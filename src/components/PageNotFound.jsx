import React from "react";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

function PageNotFound() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center p-4">
      <div className="p-8 rounded-lg max-w-md w-full text-center">
        <MdErrorOutline className="text-6xl text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-[#C49557] text-[#5E321D] rounded-sm transition"
          >
            Go to Home
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 border bg-[#C49557] text-[#5E321D] rounded transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
