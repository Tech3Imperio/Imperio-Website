"use client";

import type React from "react";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { Ruler, ArrowLeftRight } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

export default function RailingLengthStep({ formData, updateFormData }: Props) {
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("railingLength", e.target.value);
  };

  const getRiskPoints = (length: number) => {
    if (length <= 10) return 20;
    if (length >= 30) return 100;

    return Math.round(20 + ((length - 10) / (30 - 10)) * (100 - 20));
  };

  const currentLength = Number.parseFloat(formData.railingLength) || 0;
  const riskPoints = currentLength > 0 ? getRiskPoints(currentLength) : 0;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        What is the single longest length of railing?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Enter the measurement in running feet (RFT)
      </p>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6 text-center">
          <Ruler className="w-12 h-12 mx-auto mb-4 text-blue-600" />

          <div className="mb-4">
            <label
              htmlFor="length"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Length in Running Feet
            </label>
            <div className="relative">
              <input
                type="number"
                id="length"
                min="1"
                max="100"
                step="0.5"
                value={formData.railingLength}
                onChange={handleLengthChange}
                className="w-full px-4 py-3 text-lg text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter length"
              />
              <ArrowLeftRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {currentLength > 0 && (
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600 mb-1">Risk Assessment</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {riskPoints} Risk Points
              </span>
            </div>
          )}

          <div className="mt-4 text-xs text-gray-500">
            <p>• 10 ft = 20 risk points</p>
            <p>• 30 ft = 100 risk points</p>
            <p>• Longer railings require stronger safety measures</p>
          </div>
        </div>
      </div>
    </div>
  );
}
