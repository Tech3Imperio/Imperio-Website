import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";

interface Recommendations {
  base: string[];
  handrail: string[];
  glass: string;
  addons: string[];
}

const baseRecommendation = {
  Staircase: {
    Low: ["Semi-pro", "Mini", "Spigot"],
    Moderate: ["Semi-pro", "Mini", "Spigot"],
    High: ["Smart", "Ace", "Pro", "Dot", "Semi-Frameless"],
  },
  "Non-Staircase": {
    Low: ["Semi-mini", "Semi-smart", "Lux"],
    Moderate: ["Semi-pro", "Mini", "Spigot"],
    High: ["Smart", "Ace", "Pro", "Dot"],
  },
};

const handrailRecommendation = {
  Staircase: {
    Low: ["Slim"],
    Moderate: ["Square 40", "Square 50", "Round 50", "Oval 60"],
    High: ["LED 20", "LED 40", "LED 80", "Sleek"],
  },
  "Non-Staircase": {
    Low: ["Slim"],
    Moderate: ["Square 40", "Square 50", "Round 50", "Oval 60"],
    High: ["LED 20", "LED 40", "LED 80", "Sleek"],
  },
};

const glassRecommendation = {
  Low: "Toughened Glass",
  Moderate: "Laminated Glass",
  High: "Tinted Glass",
};

const addonsNo = [
  "Sleek",
  "Square 40",
  "Square 50",
  "Round 50",
  "Oval 60",
  "Slim",
];
const addonsYes = ["LED 20", "LED 40", "LED 80"];

export function getRecommendations(formData: FormData): Recommendations {
  const areaType =
    formData.installationArea === "Staircase" ? "Staircase" : "Non-Staircase";
  const budgetLevel =
    formData.budget as keyof typeof baseRecommendation.Staircase;
  const privacyLevel =
    formData.privacyLevel as keyof typeof glassRecommendation;

  const base =
    baseRecommendation[areaType as keyof typeof baseRecommendation][
      budgetLevel
    ] || [];
  const handrail =
    handrailRecommendation[areaType as keyof typeof handrailRecommendation][
      budgetLevel
    ] || [];
  const glass = glassRecommendation[privacyLevel];
  const addons = formData.addons === "Yes" ? addonsYes : addonsNo;

  return {
    base,
    handrail,
    glass,
    addons,
  };
}
