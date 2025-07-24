"use client";

import type React from "react";
import { useState, useMemo } from "react";
import {
  ArrowUpDown,
  Shield,
  DollarSign,
  Star,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";
import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { getAdvancedRecommendations } from "../lib/advance-recommendations";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

interface RecommendationData {
  base: string;
  handrail: string;
  glass: string;
  height: number;
  timestamp: number;
}

const ResultsStep: React.FC<Props> = ({ formData, onReset }) => {
  const [sortBy, setSortBy] = useState<"default" | "safety" | "cost">(
    "default"
  );

  // Product image mappings
  const getProductImage = (
    productName: string,
    category: "glass" | "handrail" | "base"
  ): string => {
    const baseImagePath = `/images/components/${category}/`;

    // Glass images
    if (category === "glass") {
      if (productName.includes("Sentry-10+10"))
        return `${baseImagePath}sentry-10+10.jpg`;
      if (productName.includes("Sentry-8+8"))
        return `${baseImagePath}sentry-8+8.jpg`;
      if (productName.includes("Sentry-6+6"))
        return `${baseImagePath}sentry-6+6.jpg`;
      if (productName.includes("PVB-8+8")) return `${baseImagePath}pvb-8+8.jpg`;
      if (productName.includes("PVB-6+6")) return `${baseImagePath}pvb-6+6.jpg`;
      if (productName.includes("Tough-12mm"))
        return `${baseImagePath}tough-12mm.jpg`;
    }

    // Handrail images
    if (category === "handrail") {
      if (productName.includes("Oval-(O-80)"))
        return `${baseImagePath}oval-(o-80).jpg`;
      if (productName.includes("Oval-(O-60)"))
        return `${baseImagePath}oval-(o-60).jpg`;
      if (productName.includes("Square-(S-50)"))
        return `${baseImagePath}square-(s-50).jpg`;
      if (productName.includes("Square-(S-40)"))
        return `${baseImagePath}square-(s-40).jpg`;
      if (productName.includes("LED-40")) return `${baseImagePath}led-80.jpg`;
      if (productName.includes("LED-40")) return `${baseImagePath}led-40.jpg`;
      if (productName.includes("LED-20")) return `${baseImagePath}led-20.jpg`;
      if (productName.includes("Round-(R-50)"))
        return `${baseImagePath}round-(r-50).jpg`;
      if (productName.includes("Slim-(S-25)"))
        return `${baseImagePath}slim-(s-25).jpg`;
      if (productName.includes("Sleek-(S-17)"))
        return `${baseImagePath}sleek-(s-17).jpg`;
      if (productName.includes("Sleek-(S-12)"))
        return `${baseImagePath}sleek-(s-12).jpg`;
    }

    // Base images
    if (category === "base") {
      if (productName.includes("Ultra-(M50)"))
        return `${baseImagePath}ultra-(m50).jpg`;
      if (productName.includes("Pro-(L50)"))
        return `${baseImagePath}pro-(l50).jpg`;
      if (productName.includes("Ace-(A50)"))
        return `${baseImagePath}ace-(a50).jpg`;
      if (productName.includes("Dot-(E50)"))
        return `${baseImagePath}dot-(e50).jpg`;
      if (productName.includes("Spigot-(SP250)"))
        return `${baseImagePath}spigot-(sp250).jpg`;
      if (productName.includes("Smart-(C75)"))
        return `${baseImagePath}smart-(c75).jpg`;
      if (productName.includes("Lux-(T100)"))
        return `${baseImagePath}lux-(t100).jpg`;
      if (productName.includes("SemiPro-(C50)"))
        return `${baseImagePath}semipro-(c50).jpg`;
      if (productName.includes("SemiSmart-(D75)"))
        return `${baseImagePath}semismart-(d75).jpg`;
      if (productName.includes("Mini-(F55)"))
        return `${baseImagePath}mini-(f55).jpg`;
      if (productName.includes("SemiMini-(D55)"))
        return `${baseImagePath}semimini-(d55).jpg`;
      if (productName.includes("Micro-(F40)"))
        return `${baseImagePath}micro-(f40).jpg`;
    }

    // Fallback placeholder
    return `/placeholder.svg?height=120&width=120`;
  };

  // Map recommendation names to product selection names
  const mapToProductSelectionName = (
    productName: string,
    category: "glass" | "handrail" | "base"
  ): string => {
    if (category === "glass") {
      // Map glass names to match product selection format
      if (productName.includes("Sentry-10+10")) return "Sentry 10+10mm";
      if (productName.includes("Sentry-8+8")) return "Sentry 8+8mm";
      if (productName.includes("Sentry-6+6")) return "Sentry 6+6mm";
      if (productName.includes("PVB-8+8")) return "PVB 8+8mm";
      if (productName.includes("PVB-6+6")) return "PVB 6+6mm";
      if (productName.includes("Tough-12mm")) return "Toughened 12mm";
      if (productName.includes("Tough-10mm")) return "Toughened 10mm";
    }

    if (category === "handrail") {
      // Map handrail names to match product selection format
      if (productName.includes("Oval-(O-80)")) return "Oval80";
      if (productName.includes("Oval-(O-60)")) return "Oval60";
      if (productName.includes("Square-(S-50)")) return "Square50";
      if (productName.includes("Square-(S-40)")) return "Square40";
      if (productName.includes("LED-40")) return "LED40";
      if (productName.includes("LED-20")) return "LED20";
      if (productName.includes("Round-(R-50)")) return "Round50";
      if (productName.includes("Slim-(S-25)")) return "Slim";
      if (productName.includes("Sleek-(S-17)")) return "Sleek";
      if (productName.includes("Sleek-(S-12)")) return "Sleek";
    }

    if (category === "base") {
      // Map base names to match product selection format
      if (productName.includes("Ultra-(M50)")) return "Ultra";
      if (productName.includes("Pro-(L50)")) return "Pro";
      if (productName.includes("Ace-(A50)")) return "Ace";
      if (productName.includes("Dot-(E50)")) return "Dot";
      if (productName.includes("Spigot-(SP250)")) return "Spigot";
      if (productName.includes("Smart-(C75)")) return "Smart";
      if (productName.includes("Lux-(T100)")) return "Lux";
      if (productName.includes("SemiPro-(C50)")) return "SemiPro";
      if (productName.includes("SemiSmart-(D75)")) return "SemiSmart";
      if (productName.includes("Mini-(F55)")) return "Mini";
      if (productName.includes("SemiMini-(D55)")) return "SemiMini";
      if (productName.includes("Micro-(F40)")) return "Micro";
    }

    return productName;
  };

  // Handle Go to Quote button click
  type Recommendation = {
    base: { name: string; safety: number; cost: number };
    handrail: { name: string; safety: number; cost: number };
    glass: { name: string; safety: number; cost: number };
    safetyScore: number;
    costEfficiency: number;
    totalScore: number;
    riskMitigation: number;
  };

  const handleGoToQuote = (recommendation: Recommendation) => {
    const baseSelection = mapToProductSelectionName(
      recommendation.base.name,
      "base"
    );
    const handrailSelection = mapToProductSelectionName(
      recommendation.handrail.name,
      "handrail"
    );
    const glassSelection = mapToProductSelectionName(
      recommendation.glass.name,
      "glass"
    );

    // Store recommendation data in localStorage
    const recommendationData: RecommendationData = {
      base: baseSelection,
      handrail: handrailSelection,
      glass: glassSelection,
      height: Number.parseFloat(formData.glassHeight) || 3.5,
      timestamp: Date.now(),
    };

    localStorage.setItem(
      "selectedRecommendation",
      JSON.stringify(recommendationData)
    );

    // Navigate to product selection page
    window.location.href = "/formdash";
  };

  // Get recommendations from formData
  const recommendationsData = useMemo(() => {
    return getAdvancedRecommendations(formData);
  }, [formData]);

  const sortedRecommendations = useMemo(() => {
    if (!recommendationsData.recommendations) return [];

    const sorted = [...recommendationsData.recommendations];

    switch (sortBy) {
      case "safety":
        return sorted.sort((a, b) => b.safetyScore - a.safetyScore);
      case "cost":
        return sorted.sort((a, b) => b.costEfficiency - a.costEfficiency);
      default:
        return sorted; // Keep original order
    }
  }, [recommendationsData.recommendations, sortBy]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        Your Glass Railing Recommendations
      </h2>

      {/* Risk Analysis Summary */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-gray-900">
          Risk Analysis
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium">Total Risk:</span>{" "}
            {recommendationsData.totalRisk}
          </div>
          <div>
            <span className="font-medium">Risk Level:</span>{" "}
            {recommendationsData.riskLevel}
          </div>
          <div>
            <span className="font-medium">Required Safety:</span>{" "}
            {recommendationsData.requiredSafety}
          </div>
          <div>
            <span className="font-medium">Height Risk:</span>{" "}
            {recommendationsData.heightRisk}
          </div>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-gray-900">
          Sort Recommendations
        </h3>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setSortBy("default")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              sortBy === "default"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Default Order
          </button>
          <button
            onClick={() => setSortBy("safety")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              sortBy === "safety"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Shield className="w-4 h-4" />
            Safety Priority
          </button>
          <button
            onClick={() => setSortBy("cost")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              sortBy === "cost"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Cost Priority
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {sortBy === "safety" &&
            "Recommendations sorted by safety score (highest first)"}
          {sortBy === "cost" &&
            "Recommendations sorted by cost efficiency (highest first)"}
          {sortBy === "default" &&
            "Recommendations in original recommended order"}
        </p>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        {sortedRecommendations.map((recommendation, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Recommendation {index + 1}
                {sortBy === "safety" && recommendation.safetyScore >= 80 && (
                  <Shield className="inline w-5 h-5 ml-2 text-green-600" />
                )}
                {sortBy === "cost" && recommendation.costEfficiency >= 80 && (
                  <TrendingUp className="inline w-5 h-5 ml-2 text-blue-600" />
                )}
              </h3>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">
                  {recommendation.totalScore}/100
                </span>
              </div>
            </div>

            {/* Components with Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Base Component */}
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-3 text-center">
                  Base
                </h4>
                <div className="flex flex-col items-center">
                  <img
                    src={
                      getProductImage(recommendation.base.name, "base") ||
                      "/placeholder.svg"
                    }
                    alt={recommendation.base.name}
                    className="w-24 h-24 object-contain mb-3 rounded-md bg-white p-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/placeholder.svg?height=96&width=96";
                    }}
                  />
                  <p className="text-purple-800 font-medium text-center">
                    {recommendation.base.name}
                  </p>
                  <div className="mt-2 text-sm text-purple-600 text-center">
                    <p>Safety: {recommendation.base.safety}</p>
                    <p>Cost: {recommendation.base.cost}</p>
                  </div>
                </div>
              </div>

              {/* Handrail Component */}
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-3 text-center">
                  Handrail
                </h4>
                <div className="flex flex-col items-center">
                  <img
                    src={
                      getProductImage(
                        recommendation.handrail.name,
                        "handrail"
                      ) || "/placeholder.svg"
                    }
                    alt={recommendation.handrail.name}
                    className="w-24 h-24 object-contain mb-3 rounded-md bg-white p-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/placeholder.svg?height=96&width=96";
                    }}
                  />
                  <p className="text-green-800 font-medium text-center">
                    {recommendation.handrail.name}
                  </p>
                  <div className="mt-2 text-sm text-green-600 text-center">
                    <p>Safety: {recommendation.handrail.safety}</p>
                    <p>Cost: {recommendation.handrail.cost}</p>
                  </div>
                </div>
              </div>

              {/* Glass Component */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-3 text-center">
                  Glass
                </h4>
                <div className="flex flex-col items-center">
                  <img
                    src={
                      getProductImage(recommendation.glass.name, "glass") ||
                      "/placeholder.svg"
                    }
                    alt={recommendation.glass.name}
                    className="w-24 h-24 object-contain mb-3 rounded-md bg-white p-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/placeholder.svg?height=96&width=96";
                    }}
                  />
                  <p className="text-blue-800 font-medium text-center">
                    {recommendation.glass.name}
                  </p>
                  <div className="mt-2 text-sm text-blue-600 text-center">
                    <p>Safety: {recommendation.glass.safety}</p>
                    <p>Cost: {recommendation.glass.cost}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
              <div>
                <span className="font-medium">Safety Score:</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${recommendation.safetyScore}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600">
                  {recommendation.safetyScore}/100
                </span>
              </div>
              <div>
                <span className="font-medium">Cost Efficiency:</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${recommendation.costEfficiency}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600">
                  {recommendation.costEfficiency}/100
                </span>
              </div>
              <div>
                <span className="font-medium">Risk Mitigation:</span>
                <div className="relative w-full bg-gray-200 rounded-full h-4 mt-1">
                  {/* Center line at 100 */}
                  <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-400 transform -translate-x-0.5"></div>

                  {/* Risk mitigation bar */}
                  <div
                    className={`h-4 rounded-full ${
                      recommendation.riskMitigation >= 100
                        ? "bg-green-600"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.abs(
                        recommendation.riskMitigation - 100
                      )}%`,
                      marginLeft:
                        recommendation.riskMitigation >= 100
                          ? "50%"
                          : `${
                              50 - Math.abs(recommendation.riskMitigation - 100)
                            }%`,
                    }}
                  />

                  {/* Scale labels */}
                  <div className="flex justify-between text-xs text-gray-500 mt-1"></div>
                </div>
                <span className="text-xs text-gray-600 flex justify-center mt-1">
                  {recommendation.riskMitigation}/100{" "}
                </span>
              </div>
            </div>

            {/* Go to Quote Button */}
            <div className="flex justify-center">
              <button
                onClick={() => handleGoToQuote(recommendation)}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                Go to Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      {recommendationsData.addons.length > 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            Recommended Add-ons
          </h3>
          <div className="flex flex-wrap gap-2">
            {recommendationsData.addons.map((addon, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {addon}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Reset Button */}
      <div className="mt-8 text-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Start New Recommendation
        </button>
      </div>
    </div>
  );
};

export default ResultsStep;
