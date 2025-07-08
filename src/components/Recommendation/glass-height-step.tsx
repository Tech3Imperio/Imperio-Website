"use client";

import { useMemo } from "react";
import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

export default function GlassHeightStep({ formData, updateFormData }: Props) {
  const heightOptions = ["2.5", "3", "3.25", "3.5", "4"];
  const heightMap: Record<number, string> = {
    0: "2.5",
    1: "3",
    2: "3.25",
    3: "3.5",
    4: "4",
  };

  const heightImages: Record<string, string> = useMemo(
    () => ({
      "2.5": "/images/GlassHeight/2.5full.png",
      "3": "/images/GlassHeight/3full.png",
      "3.25": "/images/GlassHeight/3.25full.png",
      "3.5": "/images/GlassHeight/3.5full.png",
      "4": "/images/GlassHeight/4full.png",
    }),
    []
  );

  const getSliderValue = (height: string): number => {
    return heightOptions.indexOf(height);
  };

  const currentHeight = formData.glassHeight || "3.5";

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        Select Glass Height
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Choose the height of glass from finish floor level
      </p>

      <div className="mb-6 w-full">
        <label className="block mb-3 font-medium text-gray-600">
          Glass Height from finish floor level:
        </label>
        <div className="flex flex-col md:flex-row w-full justify-evenly md:items-start gap-4 md:gap-10">
          {/* Height Selection & Labels */}
          <div className="flex flex-col items-start md:items-start w-max md:w-max">
            <div className="relative flex w-max items-start my-12">
              {/* Range Input */}
              <input
                type="range"
                min={0}
                max={heightOptions.length - 1}
                step={1}
                value={getSliderValue(currentHeight)}
                onChange={(e) => {
                  const height = heightMap[Number.parseInt(e.target.value)];
                  updateFormData("glassHeight", height);
                }}
                className="appearance-none w-[10px] h-[200px] bg-gray-200 rounded-none outline-none [writing-mode:vertical-rl] [direction:ltr] rotate-180"
              />
              {/* Labels for the scale */}
              <div className="absolute left-8 top-0 flex flex-col justify-center !w-max h-full">
                {heightOptions.map((height, index) => (
                  <button
                    key={index}
                    onClick={() => updateFormData("glassHeight", height)}
                    className={`text-sm px-3 w-max rounded-none transition-all hover:bg-gray-100 ${
                      currentHeight === height ? "font-bold text-blue-500" : ""
                    }`}
                    style={{
                      position: "absolute",
                      bottom: `${(index / (heightOptions.length - 1)) * 100}%`,
                      transform: "translateY(50%)",
                    }}
                  >
                    {height} {height === "3.5" ? "Feet (Standard)" : "Feet"}
                  </button>
                ))}
              </div>
            </div>
            {/* Selected Height Text */}
            <div
              className="mt-2 text-lg font-semibold flex justify-center text-blue-500 px-4 py-2 bg-blue-50 rounded-none shadow-sm"
              style={{ minWidth: "120px" }}
            >
              {currentHeight} Feet
            </div>
          </div>
          {/* Dynamic Image Based on Height Selection */}
          <div className="relative mt-4 md:mt-0 w-full md:w-auto flex justify-center">
            <img
              src={
                heightImages[currentHeight] || "/images/GlassHeight/3.5full.png"
              }
              alt="Height visualization"
              className="h-[300px] md:h-[350px] object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/placeholder.svg?height=350&width=200";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
