"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { DollarSign, Crown, Scale } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

const requirementOptions = [
  {
    value: "economical",
    label: "Economical",
    icon: DollarSign,
    description: "Cost-effective solutions",
  },
  {
    value: "premium",
    label: "Premium",
    icon: Crown,
    description: "High-end quality materials",
  },
  {
    value: "flexible",
    label: "Flexible",
    icon: Scale,
    description: "Balanced approach to quality and cost",
  },
];

export default function RequirementStep({ formData, updateFormData }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        What are your requirements?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {requirementOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = formData.requirement === option.value;
          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-6 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("requirement", option.value)}
            >
              <div className="text-center">
                <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {option.label}
                </h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
