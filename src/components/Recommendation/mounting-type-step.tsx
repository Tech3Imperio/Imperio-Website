"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { ArrowUp, ArrowRight } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

const mountingOptions = [
  {
    value: "top-mounted",
    label: "Top Mounted",
    icon: ArrowUp,
    description: "Railing mounted on top of the surface",
  },
  {
    value: "side-mounted",
    label: "Side Mounted",
    icon: ArrowRight,
    description: "Railing mounted on the side of the surface",
  },
];

export default function MountingTypeStep({ formData, updateFormData }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        How will the railing be mounted?
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Choose the mounting style for your{" "}
        {formData.installationArea.toLowerCase()} railing
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {mountingOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = formData.mountingType === option.value;
          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-6 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("mountingType", option.value)}
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
