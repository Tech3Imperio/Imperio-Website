"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { Minus } from "lucide-react";
import type { FC } from "react";
import type { LucideProps } from "lucide-react";

// 🖼️ Import images
import LShapedImage from "../../../public/images/components/logos/L-shaped.png";
import CShapedImage from "../../../public/images/components/logos/C-shaped.png";
import ZigZagImage from "../../../public/images/components/logos/zig-zig.png";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

// ✅ Union type for type-safe mixed icons
type ApplicationOption =
  | {
      value: string;
      label: string;
      type: "icon";
      icon: FC<LucideProps>;
      description: string;
      risk: string;
    }
  | {
      value: string;
      label: string;
      type: "image";
      icon: string; // image path
      description: string;
      risk: string;
    };

// ✅ Options array
const applicationOptions: ApplicationOption[] = [
  {
    value: "straight",
    label: "Straight",
    type: "icon",
    icon: Minus,
    description: "Simple straight line installation",
    risk: "25 Risk Points",
  },
  {
    value: "l-shaped",
    label: "L-Shaped",
    type: "image",
    icon: LShapedImage,
    description: "90-degree corner installation",
    risk: "50 Risk Points",
  },
  {
    value: "c-shaped",
    label: "C-Shaped",
    type: "image",
    icon: CShapedImage,
    description: "Curved or U-shaped installation",
    risk: "75 Risk Points",
  },
  {
    value: "zig-zag",
    label: "Zig-Zag",
    type: "image",
    icon: ZigZagImage,
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
