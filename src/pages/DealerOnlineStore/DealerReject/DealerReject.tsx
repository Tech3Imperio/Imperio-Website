// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../../Service/Api/Api"; // Your backend base URL

// const DealerReject: React.FC = () => {
//   const { email } = useParams(); // Access the dynamic email parameter from the URL
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState<string>("");
//   const navigate = useNavigate(); // For redirection

//   // Function to accept the dealer
//   const declineDealer = async () => {
//     if (!email) return; // Exit if email is not found

//     setLoading(true);
//     try {
//       // URL encode the email to avoid issues with special characters
//       const encodedEmail = encodeURIComponent(email);
//       console.log("encodedEmail = ", encodedEmail);

//       // Make the API request to decline the dealer
//       const response = await axios.get(
//         `${BASE_URL}/product/admin/decline-dealer/${encodedEmail}`
//       );
//       console.log(response);

//       setMessage(response.data.message || "Dealer decline successfully!");

//       // Redirect the admin to the dealer authorization page after success
//       setTimeout(() => {
//         navigate("/dealer-decline"); // Redirect to dealer authorization page
//       }, 2000); // Wait 2 seconds to show the success message before redirecting
//     } catch (error) {
//       console.error("Error accepting dealer:", error);
//       setMessage("Error accepting dealer. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (email) {
//       declineDealer(); // Automatically accept the dealer when the component mounts
//     }
//   }, [email]);

//   return (
//     <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-semibold text-center">Decline Dealer</h1>
//       <div className="mt-4">
//         <p className="text-gray-600">
//           Do you want to decline the dealer with email:
//         </p>
//         <p className="font-bold text-blue-600">{email}</p>
//       </div>
//       <div className="mt-6 flex justify-center gap-4">
//         <button
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
//           onClick={declineDealer}
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Decline"}
//         </button>
//       </div>
//       {message && (
//         <div
//           className={`mt-4 text-center ${
//             message.includes("Error") ? "text-red-500" : "text-green-500"
//           }`}
//         >
//           {message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DealerReject;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";

const DealerReject: React.FC = () => {
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const declineDealer = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const encodedEmail = encodeURIComponent(email);
      const response = await axios.get(
        `${BASE_URL}/product/admin/decline-dealer/${encodedEmail}`
      );
      setMessage(response.data.message || "Dealer declined successfully!");
      setTimeout(() => navigate("/dealer-decline"), 2000);
    } catch (error) {
      console.error("Error declining dealer:", error);
      setMessage("Error declining dealer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email && showConfirmation) {
      declineDealer();
    }
  }, [email, showConfirmation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Decline Dealer
          </h1>
          <p className="text-gray-600 mb-2">
            Are you sure you want to decline the dealer with email:
          </p>
          <p className="font-bold text-blue-600 break-all mb-4">{email}</p>
          {message && (
            <div
              className={`p-4 rounded-md mt-4 ${
                message.includes("Error")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              <p className="font-semibold">
                {message.includes("Error") ? "Error" : "Success"}
              </p>
              <p>{message}</p>
            </div>
          )}
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-center gap-4">
          {!showConfirmation ? (
            <>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                onClick={() => setShowConfirmation(true)}
                disabled={loading}
              >
                Decline
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:opacity-50"
              onClick={declineDealer}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
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
                "Confirm Decline"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealerReject;
