import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api"; // Your backend base URL

const DealerAccept: React.FC = () => {
  const { email } = useParams(); // Access the dynamic email parameter from the URL
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate(); // For redirection

  // Function to accept the dealer
  const acceptDealer = async () => {
    if (!email) return; // Exit if email is not found

    setLoading(true);
    try {
      // URL encode the email to avoid issues with special characters
      const encodedEmail = encodeURIComponent(email);
      console.log("encodedEmail = ", encodedEmail);

      // Make the API request to accept the dealer
      const response = await axios.get(
        `${BASE_URL}/product/admin/accept-dealer/${encodedEmail}`
      );
      console.log(response);

      setMessage(response.data.message || "Dealer accepted successfully!");

      // Redirect the admin to the dealer authorization page after success
      setTimeout(() => {
        navigate("/dealer-authorization"); // Redirect to dealer authorization page
      }, 2000); // Wait 2 seconds to show the success message before redirecting
    } catch (error) {
      console.error("Error accepting dealer:", error);
      setMessage("Error accepting dealer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      acceptDealer(); // Automatically accept the dealer when the component mounts
    }
  }, [email]);

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-center">Accept Dealer</h1>
      <div className="mt-4">
        <p className="text-gray-600">
          Do you want to accept the dealer with email:
        </p>
        <p className="font-bold text-blue-600">{email}</p>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          onClick={acceptDealer}
          disabled={loading}
        >
          {loading ? "Processing..." : "Accept"}
        </button>
      </div>
      {message && (
        <div
          className={`mt-4 text-center ${
            message.includes("Error") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default DealerAccept;
