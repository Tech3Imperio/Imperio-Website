import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";

interface RecommendationItem {
  name: string;
  safety: number;
  type?: string;
}

interface RiskRecommendations {
  totalRisk: number;
  floorRisk: number;
  lengthRisk: number;
  shapeRisk: number;
  glass: RecommendationItem[];
  handrail: RecommendationItem[];
  base: RecommendationItem[];
  addons: string[];
}

// Glass types with safety points
const glassTypes = {
  sentry: [
    { name: "Sentry 10+10", safety: 100, type: "Sentry" },
    { name: "Sentry 8+8", safety: 80, type: "Sentry" },
    { name: "Sentry 6+6", safety: 60, type: "Sentry" },
  ],
  pvb: [
    { name: "PVB 8+8", safety: 70, type: "PVB" },
    { name: "PVB 6+6", safety: 50, type: "PVB" },
  ],
  tough: [
    { name: "Tough 12mm", safety: 40, type: "Tough" },
    { name: "Tough 10mm", safety: 20, type: "Tough" },
  ],
};

// Handrail types with safety points
const handrailTypes = [
  { name: "Sleek (S-12)", safety: 20 },
  { name: "Sleek (S-17)", safety: 25 },
  { name: "LED-20", safety: 40 },
  { name: "Slim (S-25)", safety: 40 },
  { name: "Round (R-50)", safety: 50 },
  { name: "Square (S-40)", safety: 60 },
  { name: "LED-40", safety: 60 },
  { name: "Square (S-50)", safety: 60 },
  { name: "Oval (O-60)", safety: 75 },
  { name: "Oval (O-80)", safety: 90 },
];

// Base types with safety points
const baseTypes = [
  { name: "Micro (F40)", safety: 10 },
  { name: "SemiMini (D55)", safety: 20 },
  { name: "Mini (F55)", safety: 40 },
  { name: "SemiSmart (D75)", safety: 40 },
  { name: "SemiPro (C100)", safety: 40 },
  { name: "Spigot (SP150)", safety: 40 },
  { name: "Lux (T100)", safety: 50 },
  { name: "Smart (C75)", safety: 60 },
  { name: "Spigot (SP200)", safety: 60 },
  { name: "Spigot (SP250)", safety: 70 },
  { name: "Dot (E50)", safety: 80 },
  { name: "Ace (A50)", safety: 80 },
  { name: "Pro (L50)", safety: 85 },
  { name: "Ultra (M50)", safety: 95 },
];

// Staircase specific recommendations
const staircaseHandrails = [
  { name: "LED-20", safety: 40 },
  { name: "Slim (S-25)", safety: 40 },
  { name: "Round (R-50)", safety: 50 },
  { name: "Square (S-40)", safety: 60 },
  { name: "LED-40", safety: 60 },
  { name: "Square (S-50)", safety: 60 },
  { name: "Oval (O-60)", safety: 75 },
  { name: "Oval (O-80)", safety: 90 },
];

const staircaseBases = [
  { name: "Dot (E50)", safety: 80 },
  { name: "Spigot (SP100)", safety: 50 },
  { name: "Spigot (SP150)", safety: 40 },
  { name: "Spigot (SP200)", safety: 60 },
  { name: "Spigot (SP250)", safety: 70 },
];

const addonsNo = [
  "Sleek",
  "Square 40",
  "Square 50",
  "Round 50",
  "Oval 60",
  "Slim",
];
const addonsYes = ["LED 20", "LED 40", "LED 80"];

function calculateRiskPoints(formData: FormData) {
  let floorRisk = 0;
  let lengthRisk = 0;
  let shapeRisk = 0;

  // Floor risk calculation
  switch (formData.floorNumber) {
    case "0-3":
      floorRisk = 25;
      break;
    case "4-10":
      floorRisk = 50;
      break;
    case "11-20":
      floorRisk = 75;
      break;
    case "20+":
      floorRisk = 100;
      break;
  }

  // Length risk calculation
  const length = Number.parseFloat(formData.railingLength) || 0;
  if (length <= 10) {
    lengthRisk = 20;
  } else if (length >= 30) {
    lengthRisk = 100;
  } else {
    // Linear interpolation between 10ft (20 points) and 30ft (100 points)
    lengthRisk = Math.round(20 + ((length - 10) / (30 - 10)) * (100 - 20));
  }

  // Shape risk calculation
  switch (formData.applicationType) {
    case "straight":
      shapeRisk = 25;
      break;
    case "l-shaped":
      shapeRisk = 50;
      break;
    case "c-shaped":
      shapeRisk = 75;
      break;
    case "zig-zag":
      shapeRisk = 100;
      break;
  }

  return {
    floorRisk,
    lengthRisk,
    shapeRisk,
    totalRisk: floorRisk + lengthRisk + shapeRisk,
  };
}

function normalizeAndRecommend(
  totalRisk: number,
  requirement: string,
  isStaircase: boolean
) {
  // Normalize risk to determine safety requirement level
  let requiredSafety = 0;
  if (totalRisk <= 100) requiredSafety = 40; // Low risk
  else if (totalRisk <= 200) requiredSafety = 60; // Moderate risk
  else if (totalRisk <= 300) requiredSafety = 80; // High risk
  else requiredSafety = 100; // Critical risk

  // Adjust based on requirement type
  if (requirement === "economical") {
    requiredSafety = Math.max(20, requiredSafety - 20);
  } else if (requirement === "premium") {
    requiredSafety = Math.min(100, requiredSafety + 20);
  }

  // Select glass recommendations
  let glassRecommendations: RecommendationItem[] = [];
  const allGlass = [
    ...glassTypes.sentry,
    ...glassTypes.pvb,
    ...glassTypes.tough,
  ];

  if (requirement === "economical") {
    glassRecommendations = allGlass
      .filter(
        (g) => g.safety >= requiredSafety && g.safety <= requiredSafety + 30
      )
      .slice(0, 2);
  } else if (requirement === "premium") {
    glassRecommendations = allGlass
      .filter((g) => g.safety >= requiredSafety)
      .slice(0, 3);
  } else {
    glassRecommendations = allGlass
      .filter(
        (g) =>
          g.safety >= requiredSafety - 10 && g.safety <= requiredSafety + 20
      )
      .slice(0, 3);
  }

  // Select handrail recommendations
  const handrailSource = isStaircase ? staircaseHandrails : handrailTypes;
  let handrailRecommendations = handrailSource
    .filter((h) => h.safety >= requiredSafety - 10)
    .slice(0, 3);

  if (handrailRecommendations.length === 0) {
    handrailRecommendations = handrailSource.slice(-2); // Get highest safety options
  }

  // Select base recommendations
  const baseSource = isStaircase ? staircaseBases : baseTypes;
  let baseRecommendations = baseSource
    .filter((b) => b.safety >= requiredSafety - 20)
    .slice(0, 4);

  if (baseRecommendations.length === 0) {
    baseRecommendations = baseSource.slice(-3); // Get highest safety options
  }

  return { glassRecommendations, handrailRecommendations, baseRecommendations };
}

export function getRiskBasedRecommendations(
  formData: FormData
): RiskRecommendations {
  const riskPoints = calculateRiskPoints(formData);
  const isStaircase = formData.installationArea === "Staircase";

  const recommendations = normalizeAndRecommend(
    riskPoints.totalRisk,
    formData.requirement,
    isStaircase
  );

  const addons = formData.addons === "Yes" ? addonsYes : addonsNo;

  return {
    totalRisk: riskPoints.totalRisk,
    floorRisk: riskPoints.floorRisk,
    lengthRisk: riskPoints.lengthRisk,
    shapeRisk: riskPoints.shapeRisk,
    glass: recommendations.glassRecommendations,
    handrail: recommendations.handrailRecommendations,
    base: recommendations.baseRecommendations,
    addons,
  };
}
