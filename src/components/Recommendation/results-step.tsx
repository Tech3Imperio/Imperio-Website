"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { getAdvancedRecommendations } from "../../components/lib/advance-recommendations";
import {
  CheckCircle,
  RotateCcw,
  Download,
  AlertTriangle,
  TrendingUp,
  Shield,
  Target,
} from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

export default function ResultsStep({ formData, onReset }: Props) {
  const recommendations = getAdvancedRecommendations(formData);

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "Low Risk":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          borderColor: "border-green-200",
        };
      case "Moderate Risk":
        return {
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
          borderColor: "border-yellow-200",
        };
      case "High Risk":
        return {
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
          borderColor: "border-orange-200",
        };
      case "Critical Risk":
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          borderColor: "border-red-200",
        };
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          borderColor: "border-gray-200",
        };
    }
  };

  const getRecommendationTier = (index: number) => {
    const tiers = [
      {
        label: "BEST MATCH",
        icon: Target,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
      },
      {
        label: "ALTERNATIVE",
        icon: TrendingUp,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
      },
      {
        label: "OPTION",
        icon: Shield,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
      },
    ];
    return tiers[index] || tiers[2];
  };

  const riskColors = getRiskLevelColor(recommendations.riskLevel);
  const getImageSrc = (type: "glass" | "handrail" | "base", name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    return `/images/components/${type}/${slug}.jpg`;
  };
  return (
    <div>
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Requirement-Matched Recommendations
        </h2>
        <p className="text-gray-600">
          Optimized solutions tailored to your specific safety requirements
        </p>
      </div>

      {/* Risk Assessment Summary */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Risk Analysis & Safety Requirements
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Floor Risk</p>
              <p className="text-lg font-semibold text-gray-900">
                {recommendations.floorRisk}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Length Risk</p>
              <p className="text-lg font-semibold text-gray-900">
                {recommendations.lengthRisk}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Shape Risk</p>
              <p className="text-lg font-semibold text-gray-900">
                {recommendations.shapeRisk}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Risk</p>
              <p className="text-lg font-semibold text-gray-900">
                {recommendations.totalRisk}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Required Safety</p>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${riskColors.bgColor} ${riskColors.textColor} ${riskColors.borderColor} border`}
              >
                {Math.round(recommendations.requiredSafety)}
              </span>
            </div>
          </div>
          <div className="text-center">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-base font-medium ${riskColors.bgColor} ${riskColors.textColor} ${riskColors.borderColor} border`}
            >
              {recommendations.riskLevel} - Tailored Safety Level
            </span>
          </div>
        </div>
      </div>

      {/* Top 3 Recommendations */}
      <div className="space-y-6 mb-8">
        {recommendations.recommendations.map((rec, index) => {
          const tier = getRecommendationTier(index);
          const TierIcon = tier.icon;

          return (
            <div
              key={index}
              className={`bg-white rounded-lg border-2 ${tier.borderColor} shadow-lg`}
            >
              <div className={`p-4 ${tier.bgColor} border-b border-gray-200`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    Recommendation #{index + 1} - {tier.label}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      Match Score:{" "}
                      <span className="font-semibold text-gray-900">
                        {Math.round(rec.totalScore)}/100
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Safety Level</p>
                    <p className="text-lg font-semibold text-green-600">
                      {Math.round(rec.safetyScore)}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Requirement Match</p>
                    <p className="text-lg font-semibold text-blue-600">
                      {Math.round(rec.suitabilityMatch)}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Cost Efficiency</p>
                    <p className="text-lg font-semibold text-purple-600">
                      {Math.round(rec.costEfficiency)}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Safety Margin</p>
                    <p className="text-lg font-semibold text-orange-600">
                      {Math.round(rec.riskMitigation)}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Compatibility</p>
                    <p className="text-lg font-semibold text-teal-600">
                      {Math.round(rec.compatibility)}
                    </p>
                  </div>
                </div>

                {/* Component Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Glass */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Glass Component
                    </h4>
                    <p className="font-medium text-gray-900">
                      {rec.glass.name}
                    </p>
                    <p className="text-sm text-gray-600">{rec.glass.type}</p>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-600">Safety:</span>
                      <span className="font-medium text-green-600">
                        {rec.glass.safety}
                      </span>
                    </div>
                    <div className="mt-1 flex justify-between text-sm">
                      <span className="text-gray-600">Cost Level:</span>
                      <span className="font-medium text-purple-600">
                        {rec.glass.cost}
                      </span>
                    </div>
                    <div className="mt-1">
                      <img
                        src={getImageSrc("glass", rec.glass.name)}
                        alt="Glass component"
                        className="w-full h-36 object-cover rounded border border-gray-200 mt-2"
                      />
                    </div>
                  </div>

                  {/* Handrail */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Handrail Component
                    </h4>
                    <p className="font-medium text-gray-900">
                      {rec.handrail.name}
                    </p>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-600">Safety:</span>
                      <span className="font-medium text-green-600">
                        {rec.handrail.safety}
                      </span>
                    </div>
                    <div className="mt-1 flex justify-between text-sm">
                      <span className="text-gray-600">Cost Level:</span>
                      <span className="font-medium text-purple-600">
                        {rec.handrail.cost}
                      </span>
                    </div>
                    <div className="mt-1">
                      <img
                        src={getImageSrc("handrail", rec.handrail.name)}
                        alt="Handrail component"
                        className="w-full h-36 object-cover rounded border border-gray-200 mt-2"
                      />
                    </div>
                  </div>

                  {/* Base */}
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      Base Component
                    </h4>
                    <p className="font-medium text-gray-900">{rec.base.name}</p>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-600">Safety:</span>
                      <span className="font-medium text-green-600">
                        {rec.base.safety}
                      </span>
                    </div>
                    <div className="mt-1 flex justify-between text-sm">
                      <span className="text-gray-600">Cost Level:</span>
                      <span className="font-medium text-purple-600">
                        {rec.base.cost}
                      </span>
                    </div>
                    <div className="mt-1">
                      <img
                        src={getImageSrc("base", rec.base.name)}
                        alt="Base component"
                        className="w-full h-36 object-cover rounded border border-gray-200 mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Why This Combination */}
                {/* <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">
                    Why This Combination?
                  </h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • Matches your {recommendations.riskLevel.toLowerCase()}{" "}
                      scenario perfectly
                    </li>
                    <li>
                      • Combined safety level:{" "}
                      {Math.round(
                        (rec.glass.safety +
                          rec.handrail.safety +
                          rec.base.safety) /
                          3
                      )}{" "}
                      (Required: {Math.round(recommendations.requiredSafety)})
                    </li>
                    <li>
                      •{" "}
                      {formData.requirement === "economical"
                        ? "Cost-optimized"
                        : formData.requirement === "premium"
                        ? "Premium quality"
                        : "Balanced"}{" "}
                      solution as requested
                    </li>
                    <li>
                      • Optimal component compatibility for your application
                    </li>
                    <li>
                      •{" "}
                      {rec.suitabilityMatch > 80
                        ? "Excellent"
                        : rec.suitabilityMatch > 60
                        ? "Good"
                        : "Adequate"}{" "}
                      match for your specific requirements
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Add-ons */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              Recommended Add-ons
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recommendations.addons.map((addon, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{addon}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nanocoating */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              Nanocoating Protection
            </h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-lg text-gray-900">
                  Nanocoating:{" "}
                  {formData.nanocoating === "Yes" ? "Included" : "Not Selected"}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {formData.nanocoating === "Yes"
                    ? "Enhanced protection and easy maintenance"
                    : "Standard glass without additional coating"}
                </p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  formData.nanocoating === "Yes"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                {formData.nanocoating === "Yes" ? "Included" : "Not Selected"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Start Over
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          Download Requirement Analysis
        </button>
      </div>
    </div>
  );
}
