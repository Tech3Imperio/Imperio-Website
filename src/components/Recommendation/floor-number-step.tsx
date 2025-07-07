"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { Building, Building2, Layers, Layers3 } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

const floorOptions = [
  {
    value: "0-3",
    label: "Ground to 3rd Floor",
    icon: Building,
    description: "Low height installation",
    risk: "25 Risk Points",
  },
  {
    value: "4-10",
    label: "4th to 10th Floor",
    icon: Building2,
    description: "Medium height installation",
    risk: "50 Risk Points",
  },
  {
    value: "11-20",
    label: "11th to 20th Floor",
    icon: Layers,
    description: "High-rise installation",
    risk: "75 Risk Points",
  },
  {
    value: "20+",
    label: "Above 20th Floor",
    icon: Layers3,
    description: "Ultra high-rise installation",
    risk: "100 Risk Points",
  },
];

export default function FloorNumberStep({ formData, updateFormData }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        What floor is the installation on?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Higher floors require enhanced safety measures
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {floorOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = formData.floorNumber === option.value;
          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-6 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("floorNumber", option.value)}
            >
              <div className="text-center">
                <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {option.label}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
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
