"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import {
  Building,
  Home,
  Store,
  Hotel,
  Utensils,
  Hospital,
  School,
  Factory,
} from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

const propertyOptions = [
  { value: "Villa / Bungalow", label: "Villa / Bungalow", icon: Home },
  {
    value: "Apartment / Residential Building",
    label: "Apartment / Residential Building",
    icon: Building,
  },
  { value: "Commercial Office", label: "Commercial Office", icon: Building },
  {
    value: "Retail Store / Showroom",
    label: "Retail Store / Showroom",
    icon: Store,
  },
  { value: "Hotel / Resort", label: "Hotel / Resort", icon: Hotel },
  { value: "Restaurant / Café", label: "Restaurant / Café", icon: Utensils },
  { value: "Hospital / Clinic", label: "Hospital / Clinic", icon: Hospital },
  {
    value: "School / College / Institution",
    label: "School / College / Institution",
    icon: School,
  },
  { value: "Industrial Facility", label: "Industrial Facility", icon: Factory },
];

export default function PropertyTypeStep({ formData, updateFormData }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        What type of property is this for?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyOptions.map((option) => {
          const IconComponent = option.icon;
          const isSelected = formData.propertyType === option.value;
          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("propertyType", option.value)}
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
