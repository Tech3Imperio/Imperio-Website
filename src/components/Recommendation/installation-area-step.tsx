"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import {
  StepBackIcon as Stairs,
  Home,
  Sun,
  Waves,
  Eye,
  Building,
} from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

const areaOptions = [
  { value: "Staircase", label: "Staircase", icon: Stairs },
  { value: "Balcony", label: "Balcony", icon: Home },
  { value: "Terrace", label: "Terrace", icon: Sun },
  { value: "Deck", label: "Deck", icon: Home },
  { value: "Poolside", label: "Poolside", icon: Waves },
  { value: "Skylight", label: "Skylight", icon: Eye },
  { value: "Double height", label: "Double Height", icon: Building },
];

export default function InstallationAreaStep({
  formData,
  updateFormData,
}: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        Where will the glass be installed?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areaOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = formData.installationArea === option.value;
          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("installationArea", option.value)}
            >
              <div className="text-center">
                <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium text-gray-900">
                  {option.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
