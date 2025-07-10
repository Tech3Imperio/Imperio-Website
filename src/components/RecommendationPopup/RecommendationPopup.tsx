import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecommendationPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white border border-gray-300 shadow-lg rounded-xl p-5 animate-slide-in">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Need Help Choosing?
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Use our smart recommendation system to discover the right railing
        configuration for your project.
      </p>
      <button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium mb-2"
        onClick={() => navigate("/recommend")}
      >
        Go to Recommendation
      </button>
      <button
        onClick={() => setVisible(false)}
        className="w-full text-xs text-gray-500 hover:text-gray-700 underline"
      >
        Dismiss
      </button>
    </div>
  );
};

export default RecommendationPopup;
