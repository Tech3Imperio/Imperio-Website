import { useState } from "react";
import RecommendationForm from "../../components/RecommendationForm/RecommendationForm";
import RecommendationResult from "../../components/RecommendationForm/RecommendationResult";
import { BASE_URL } from "../Service/Api/Api";

interface FormData {
  "Installation Area": string;
  "Use Case": string;
  "Design Preference": string;
  "Safety Features": string;
  Budget: string;
  "Avg Adult Height Range": string;
  "Privacy Level": string;
  "Exposed to Corrosion?": string;
}

function Recommendation() {
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await fetch(`${BASE_URL}/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setRecommendation(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">
              Railing Recommendation System
            </h1>
            <RecommendationForm onSubmit={handleSubmit} />
            {recommendation && (
              <RecommendationResult recommendation={recommendation} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
