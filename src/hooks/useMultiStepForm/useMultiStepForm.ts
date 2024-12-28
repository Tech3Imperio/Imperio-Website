import { useState } from "react";

export function useMultiStepForm(steps: number) {
  const [currentStep, setCurrentStep] = useState(1);

  function next() {
    setCurrentStep((i) => (i < steps ? i + 1 : i));
  }

  function back() {
    setCurrentStep((i) => (i > 1 ? i - 1 : i));
  }

  return {
    currentStep,
    next,
    back,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === steps,
  };
}
