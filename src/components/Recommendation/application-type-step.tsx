"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { Minus, CornerDownRight, RotateCcw, Zap } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

const applicationOptions = [
  {
    value: "straight",
    label: "Straight",
    icon: Minus,
    description: "Simple straight line installation",
    risk: "25 Risk Points",
  },
  {
    value: "l-shaped",
    label: "L-Shaped",
    icon: CornerDownRight,
    description: "90-degree corner installation",
    risk: "50 Risk Points",
  },
  {
    value: "c-shaped",
    label: "C-Shaped",
    icon: RotateCcw,
    description: "Curved or U-shaped installation",
    risk: "75 Risk Points",
  },
  {
    value: "zig-zag",
    label: "Zig-Zag",
    icon: Zap,
    description: "Multiple angles and turns",
    risk: "100 Risk Points",
  },
];

export default function ApplicationTypeStep({
  formData,
  updateFormData,
}: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        What is the shape of your railing application?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Complex shapes require enhanced structural support
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applicationOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = formData.applicationType === option.value;
          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-6 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("applicationType", option.value)}
            >
              <div className="text-center">
                <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {option.label}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {option.description}
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {option.risk}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
