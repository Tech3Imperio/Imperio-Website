"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { Minus } from "lucide-react";
import type { FC } from "react";
import type { LucideProps } from "lucide-react";

// 🖼️ Import custom image
import PlusImage from "../../../public/images/components/logos/addon.png";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

// ✅ Define a safe type
type AddonOption =
  | {
      value: string;
      label: string;
      type: "icon";
      icon: FC<LucideProps>;
      description: string;
    }
  | {
      value: string;
      label: string;
      type: "image";
      icon: string; // image path
      description: string;
    };

const addonOptions: AddonOption[] = [
  {
    value: "Yes",
    label: "Yes, I want add-ons",
    type: "image",
    icon: PlusImage,
    description: "LED lighting and premium features",
  },
  {
    value: "No",
    label: "No add-ons needed",
    type: "icon",
    icon: Minus,
    description: "Standard installation only",
  },
];

export default function AddonsStep({ formData, updateFormData }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        Do you want additional features and add-ons?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {addonOptions.map((option) => {
          const isSelected = formData.addons === option.value;

          return (
            <div
              key={option.value}
              className={`cursor-pointer transition-all duration-200 p-6 rounded-lg border-2 hover:shadow-md ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => updateFormData("addons", option.value)}
            >
              <div className="text-center">
                {option.type === "icon" ? (
                  <option.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                ) : (
                  <img
                    src={option.icon}
                    alt={option.label}
                    className="w-12 h-12 mx-auto mb-4 object-contain"
                  />
                )}

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
