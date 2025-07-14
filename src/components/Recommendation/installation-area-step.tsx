"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { Sun, Waves } from "lucide-react";
import type { FC } from "react";
import type { LucideProps } from "lucide-react";
import Staircase from "../../../public/images/components/logos/staircase.png";
import Cshape from "../../../public/images/components/logos/C-shaped.png";
interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

// ✅ Define a union type for icon option
type AreaOption =
  | {
      value: string;
      label: string;
      type: "icon";
      icon: FC<LucideProps>;
    }
  | {
      value: string;
      label: string;
      type: "image";
      icon: string; // PNG path
    };

// ✅ Use the typed array
const areaOptions: AreaOption[] = [
  {
    value: "Staircase",
    label: "Staircase",
    type: "image",
    icon: Staircase,
  },
  {
    value: "Balcony",
    label: "Balcony",
    type: "image",
    icon: Cshape,
  },
  {
    value: "Terrace",
    label: "Terrace",
    type: "icon",
    icon: Sun,
  },
  {
    value: "Pool Side",
    label: "Pool Side",
    type: "icon",
    icon: Waves,
  },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areaOptions.map((option) => {
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
                {option.type === "icon" ? (
                  <option.icon className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                ) : (
                  <img
                    src={option.icon}
                    alt={option.label}
                    className="w-12 h-12 mx-auto mb-2"
                  />
                )}
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
