import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";
export default function DealerLogout() {
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate(); // To navigate after successful logout

  // Handle the logout request to the backend
  const handleLogout = async () => {
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        `${BASE_URL}/product/dealerlogout`, // Make sure your backend API is set up correctly
        {},
        {
          withCredentials: true, // Make sure the cookie is sent with the request
        }
      );

      if (response.status >= 200 && response.status < 300) {
        alert("Logout successful!"); // Notify user

        // Redirect to login or home page after logout
        navigate("/dealer-login"); // Adjust the route as needed
      } else {
        alert("Error logging out. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred while logging out.");
    } finally {
      setLoading(false); // Stop loading after the request completes
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <main className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-md">
        <div className="flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Are you sure you want to logout?
          </h2>
          <button
            onClick={handleLogout}
            disabled={loading} // Disable the button while loading
            className="w-full px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring focus:ring-red-300"
          >
            {loading ? "Logging out..." : "Logout"} {/* Show loading text */}
          </button>
        </div>
      </main>
    </section>
  );
}
