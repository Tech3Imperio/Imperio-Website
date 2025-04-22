import React from "react";
import { useNavigate } from "react-router-dom";

const DealerAcceptUi: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-none overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Dealer Authorized
          </h1>
          <p className="text-center text-gray-600 mb-8">
            You are now authorized to access the dealer's online store.
          </p>
          <div className="flex flex-col space-y-4">
            {/* <button
              onClick={() => navigate("/dealer-store")}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Access Online Store
            </button> */}
            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
        <div className="bg-gray-50 px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Remember to follow all dealer guidelines and policies when accessing
            the online store.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealerAcceptUi;
