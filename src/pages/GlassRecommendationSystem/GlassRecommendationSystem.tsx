"use client";

import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import PropertyTypeStep from "../../components/Recommendation/property-type-step";
import InstallationAreaStep from "../../components/Recommendation/installation-area-step";
import FloorNumberStep from "../../components/Recommendation/floor-number-step";
import RailingLengthStep from "../../components/Recommendation/railing-length-step";
import ApplicationTypeStep from "../../components/Recommendation/application-type-step";
import RequirementStep from "../../components/Recommendation/requirement-step";
// import PrivacyStep from "../../components/Recommendation/privacy-step";
import AddonsStep from "../../components/Recommendation/addons-step";
// import NanocoatingStep from "../../components/Recommendation/nanocoating-step";
import ResultsStep from "../../components/Recommendation/results-step";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { shouldAskFloorNumber } from "../../components/lib/advance-recommendations";
import GlassHeightStep from "../../components/Recommendation/glass-height-step";
import MountingTypeStep from "../../components/Recommendation/mounting-type-step";
import GlassTypeStep from "../../components/Recommendation/glass-type-step";

export interface FormData {
  propertyType: string;
  installationArea: string;
  floorNumber: string;
  glassHeight: string;
  glassType: string;
  mountingType: string;
  railingLength: string;
  applicationType: string;
  requirement: string;
  addons: string;
  nanocoating: string;
}

const initialFormData: FormData = {
  propertyType: "",
  installationArea: "",
  floorNumber: "",
  glassHeight: "3.5",
  glassType: "",
  mountingType: "",
  railingLength: "",
  applicationType: "",
  requirement: "",
  addons: "",
  nanocoating: "",
};

export default function GlassRecommendationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getSteps = () => {
    const steps = [
      {
        id: "property-type",
        title: "Property Type",
        component: PropertyTypeStep,
      },
      {
        id: "installation-area",
        title: "Installation Area",
        component: InstallationAreaStep,
      },
    ];

    // Conditionally add floor step
    if (shouldAskFloorNumber(formData.propertyType)) {
      steps.push({
        id: "floor-number",
        title: "Floor Number",
        component: FloorNumberStep,
      });
    }

    steps.push({
      id: "glass-height",
      title: "Glass Height",
      component: GlassHeightStep,
    });

    steps.push({
      id: "glass-type",
      title: "Glass Type",
      component: GlassTypeStep,
    });

    // Conditionally add mounting type step
    if (formData.installationArea) {
      steps.push({
        id: "mounting-type",
        title: "Mounting Type",
        component: MountingTypeStep,
      });
    }

    steps.push(
      {
        id: "railing-length",
        title: "Railing Length",
        component: RailingLengthStep,
      },
      {
        id: "application-type",
        title: "Application Type",
        component: ApplicationTypeStep,
      },
      {
        id: "requirement",
        title: "Requirements",
        component: RequirementStep,
      },
      {
        id: "addons",
        title: "Add-ons",
        component: AddonsStep,
      },
      {
        id: "results",
        title: "Results",
        component: ResultsStep,
      }
    );

    return steps;
  };

  const steps = getSteps();
  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
  };

  const isStepComplete = () => {
    switch (currentStepData.id) {
      case "property-type":
        return formData.propertyType !== "";
      case "installation-area":
        return formData.installationArea !== "";
      case "floor-number":
        return formData.floorNumber !== "";
      case "glass-height":
        return formData.glassHeight !== "";
      case "glass-type":
        return formData.glassType !== "";
      case "mounting-type":
        return formData.mountingType !== "";
      case "railing-length":
        return formData.railingLength !== "";
      case "application-type":
        return formData.applicationType !== "";
      case "requirement":
        return formData.requirement !== "";
      case "addons":
        return formData.addons !== "";
      case "results":
        return true;
      default:
        return false;
    }
  };

  const CurrentStepComponent = currentStepData.component;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Glass Railing Recommendation System
            </h1>
            <span className="text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <span
                key={step.id}
                className={`text-xs ${
                  index <= currentStep
                    ? "text-blue-600 font-medium"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onReset={handleReset}
          />
        </div>

        {/* Navigation */}
        {currentStepData.id !== "results" && (
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
