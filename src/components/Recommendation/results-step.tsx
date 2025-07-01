"use client";

import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";
import { getRecommendations } from "../lib/recommendations";
import { CheckCircle, RotateCcw, Download } from "lucide-react";

interface Props {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onReset: () => void;
}

export default function ResultsStep({ formData, onReset }: Props) {
  const recommendations = getRecommendations(formData);

  return (
    <div>
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Personalized Recommendations
        </h2>
        <p className="text-gray-600">
          Based on your preferences, here are our expert recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Base Recommendations */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              Base Recommendations
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recommendations.base.length > 0 ? (
                recommendations.base.map((base, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-900">{base}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Recommended
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">
                  No specific recommendation for this configuration
                </p>
              )}
            </div>
            <div className="mt-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Base installation example"
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Handrail Recommendations */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Handrail Recommendations
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recommendations.handrail.map((handrail, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{handrail}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Recommended
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Handrail example"
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Glass Type */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              Glass Type
            </h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-lg text-gray-900">
                {recommendations.glass}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                Perfect Match
              </span>
            </div>
            <div className="mt-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Glass type example"
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              Add-ons & Features
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recommendations.addons.map((addon, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{addon}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Available
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Add-ons example"
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nanocoating */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            Nanocoating Protection
          </h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-lg text-gray-900">
                Nanocoating:{" "}
                {formData.nanocoating === "Yes" ? "Included" : "Not Selected"}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {formData.nanocoating === "Yes"
                  ? "Enhanced protection and easy maintenance"
                  : "Standard glass without additional coating"}
              </p>
            </div>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                formData.nanocoating === "Yes"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800 border border-gray-200"
              }`}
            >
              {formData.nanocoating === "Yes" ? "Included" : "Not Selected"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Start Over
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          Download Recommendations
        </button>
      </div>
    </div>
  );
}
