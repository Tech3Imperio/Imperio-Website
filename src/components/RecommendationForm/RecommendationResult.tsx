import type React from "react";

interface Recommendation {
  Material: string;
  "Height (inches)": number;
  "Spacing (inches)": number;
  "Additional Recommendations": string[];
}

interface RecommendationResultProps {
  recommendation: Recommendation;
}

const RecommendationResult: React.FC<RecommendationResultProps> = ({
  recommendation,
}) => {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-none">
      <h2 className="text-lg font-semibold mb-2">Recommendation:</h2>
      <ul className="space-y-2">
        <li>
          <strong>Material:</strong> {recommendation.Material}
        </li>
        <li>
          <strong>Height:</strong> {recommendation["Height (inches)"]} inches
        </li>
        <li>
          <strong>Spacing:</strong> {recommendation["Spacing (inches)"]} inches
        </li>
      </ul>
      <h3 className="text-md font-semibold mt-4 mb-2">
        Additional Recommendations:
      </h3>
      <ul className="list-disc list-inside space-y-1">
        {recommendation["Additional Recommendations"].map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationResult;
