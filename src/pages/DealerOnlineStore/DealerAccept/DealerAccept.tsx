import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";

const DealerAccept: React.FC = () => {
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const acceptDealer = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const encodedEmail = encodeURIComponent(email);
      console.log("encodedEmail = ", encodedEmail);

      const response = await axios.get(
        `${BASE_URL}/product/admin/accept-dealer/${encodedEmail}`
      );
      console.log(response);

      setMessage(response.data.message || "Dealer accepted successfully!");

      setTimeout(() => {
        navigate("/dealer-authorization");
      }, 2000);
    } catch (error) {
      console.error("Error accepting dealer:", error);
      setMessage("Error accepting dealer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      acceptDealer();
    }
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-none overflow-hidden">
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
            Accept Dealer
          </h1>
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">
              Do you want to accept the dealer with email:
            </p>
            <p className="font-bold text-blue-600 break-all mb-6">{email}</p>
          </div>
          <div className="flex justify-center">
            <button
              className={`w-full max-w-xs bg-green-500 text-white px-6 py-3 rounded-none font-semibold text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
              }`}
              onClick={acceptDealer}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Accept"
              )}
            </button>
          </div>
          {message && (
            <div
              className={`mt-6 text-center p-3 rounded-none ${
                message.includes("Error")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {message}
            </div>
          )}
        </div>
        <div className="bg-gray-50 px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            By accepting this dealer, you are granting them access to the online
            store platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealerAccept;
