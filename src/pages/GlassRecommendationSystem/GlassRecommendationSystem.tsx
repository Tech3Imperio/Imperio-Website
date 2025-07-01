"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropertyTypeStep from "../../components/Recommendation/property-type-step";
import InstallationAreaStep from "../../components/Recommendation/installation-area-step";
import BudgetStep from "../../components/Recommendation/budget-step";
import PrivacyStep from "../../components/Recommendation/privacy-step";
import AddonsStep from "../../components/Recommendation/addons-step";
import NanocoatingStep from "../../components/Recommendation/nanocoating-step";
import ResultsStep from "../../components/Recommendation/results-step";

export interface FormData {
  propertyType: string;
  installationArea: string;
  budget: string;
  privacyLevel: string;
  addons: string;
  nanocoating: string;
}

const initialFormData: FormData = {
  propertyType: "",
  installationArea: "",
  budget: "",
  privacyLevel: "",
  addons: "",
  nanocoating: "",
};

const steps = [
  { title: "Property Type", component: PropertyTypeStep },
  { title: "Installation Area", component: InstallationAreaStep },
  { title: "Budget", component: BudgetStep },
  { title: "Privacy Level", component: PrivacyStep },
  { title: "Add-ons", component: AddonsStep },
  { title: "Nanocoating", component: NanocoatingStep },
  { title: "Results", component: ResultsStep },
];

export default function GlassRecommendationSystem() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData(initialFormData);
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.propertyType !== "";
      case 1:
        return formData.installationArea !== "";
      case 2:
        return formData.budget !== "";
      case 3:
        return formData.privacyLevel !== "";
      case 4:
        return formData.addons !== "";
      case 5:
        return formData.nanocoating !== "";
      default:
        return true;
    }
  };

  const CurrentStepComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Glass Installation Recommendation System
          </h1>
          <p className="text-lg text-gray-600">
            Get personalized recommendations for your glass installation project
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Step {currentStep + 1} of {steps.length}:{" "}
                {steps[currentStep].title}
              </h2>
              <span className="text-sm text-gray-500">
                {Math.round(progress)}% Complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="p-6">
            <CurrentStepComponent
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onReset={resetForm}
            />

            {currentStep < steps.length - 1 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                <button
                  onClick={nextStep}
                  disabled={!isCurrentStepValid()}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
