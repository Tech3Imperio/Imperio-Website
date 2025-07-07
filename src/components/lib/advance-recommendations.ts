import type { FormData } from "../../pages/GlassRecommendationSystem/GlassRecommendationSystem";

interface Component {
  name: string;
  safety: number;
  cost: number;
  suitability: number;
  type?: string;
}

interface RecommendationSet {
  glass: Component;
  handrail: Component;
  base: Component;
  totalScore: number;
  safetyScore: number;
  costEfficiency: number;
  riskMitigation: number;
  compatibility: number;
  suitabilityMatch: number;
}

interface AdvancedRecommendations {
  totalRisk: number;
  floorRisk: number;
  lengthRisk: number;
  shapeRisk: number;
  requiredSafety: number;
  riskLevel: string;
  recommendations: RecommendationSet[];
  addons: string[];
}

// Adjusted glass components - redistributed safety values for better balance
const glassComponents: Component[] = [
  {
    name: "Sentry 10+10",
    safety: 85,
    cost: 100,
    suitability: 95,
    type: "Sentry",
  },
  { name: "Sentry 8+8", safety: 75, cost: 85, suitability: 90, type: "Sentry" },
  { name: "Sentry 6+6", safety: 65, cost: 70, suitability: 85, type: "Sentry" },
  { name: "PVB 8+8", safety: 55, cost: 65, suitability: 80, type: "PVB" },
  { name: "PVB 6+6", safety: 45, cost: 50, suitability: 75, type: "PVB" },
  { name: "Tough 12mm", safety: 35, cost: 40, suitability: 70, type: "Tough" },
  { name: "Tough 10mm", safety: 25, cost: 30, suitability: 65, type: "Tough" },
];

// Adjusted handrail components for better distribution
const handrailComponents: Component[] = [
  { name: "Oval (O-80)", safety: 80, cost: 95, suitability: 90 },
  { name: "Oval (O-60)", safety: 70, cost: 80, suitability: 85 },
  { name: "Square (S-50)", safety: 60, cost: 70, suitability: 80 },
  { name: "LED-40", safety: 55, cost: 85, suitability: 75 },
  { name: "Square (S-40)", safety: 50, cost: 65, suitability: 75 },
  { name: "Round (R-50)", safety: 45, cost: 60, suitability: 70 },
  { name: "Slim (S-25)", safety: 35, cost: 45, suitability: 65 },
  { name: "LED-20", safety: 30, cost: 55, suitability: 60 },
  { name: "Sleek (S-17)", safety: 25, cost: 35, suitability: 55 },
  { name: "Sleek (S-12)", safety: 20, cost: 30, suitability: 50 },
];

// Adjusted base components for better distribution
const baseComponents: Component[] = [
  { name: "Ultra (M50)", safety: 85, cost: 100, suitability: 95 },
  { name: "Pro (L50)", safety: 80, cost: 90, suitability: 90 },
  { name: "Ace (A50)", safety: 75, cost: 85, suitability: 85 },
  { name: "Dot (E50)", safety: 70, cost: 80, suitability: 80 },
  { name: "Spigot (SP250)", safety: 65, cost: 75, suitability: 75 },
  { name: "Spigot (SP200)", safety: 55, cost: 65, suitability: 70 },
  { name: "Smart (C75)", safety: 50, cost: 70, suitability: 75 },
  { name: "Lux (T100)", safety: 45, cost: 60, suitability: 65 },
  { name: "Spigot (SP150)", safety: 40, cost: 50, suitability: 60 },
  { name: "SemiPro (C100)", safety: 35, cost: 55, suitability: 65 },
  { name: "SemiSmart (D75)", safety: 30, cost: 45, suitability: 60 },
  { name: "Mini (F55)", safety: 25, cost: 40, suitability: 55 },
  { name: "SemiMini (D55)", safety: 20, cost: 25, suitability: 45 },
  { name: "Micro (F40)", safety: 15, cost: 15, suitability: 35 },
];

// Adjusted staircase specific components
const staircaseHandrails: Component[] = [
  { name: "Oval (O-80)", safety: 80, cost: 95, suitability: 95 },
  { name: "Oval (O-60)", safety: 70, cost: 80, suitability: 90 },
  { name: "Square (S-50)", safety: 60, cost: 70, suitability: 85 },
  { name: "LED-40", safety: 55, cost: 85, suitability: 80 },
  { name: "Square (S-40)", safety: 50, cost: 65, suitability: 80 },
  { name: "Round (R-50)", safety: 45, cost: 60, suitability: 75 },
  { name: "Slim (S-25)", safety: 35, cost: 45, suitability: 70 },
  { name: "LED-20", safety: 30, cost: 55, suitability: 65 },
];

const staircaseBases: Component[] = [
  { name: "Dot (E50)", safety: 70, cost: 80, suitability: 90 },
  { name: "Spigot (SP250)", safety: 65, cost: 75, suitability: 85 },
  { name: "Spigot (SP200)", safety: 55, cost: 65, suitability: 80 },
  { name: "Spigot (SP150)", safety: 40, cost: 50, suitability: 75 },
  { name: "Spigot (SP100)", safety: 45, cost: 55, suitability: 70 },
];

// Compatibility matrix - more balanced for variety
const compatibilityMatrix: Record<string, Record<string, number>> = {
  Sentry: {
    Oval: 1.1,
    Square: 1.05,
    LED: 1.0,
    Round: 0.95,
    Slim: 0.9,
    Sleek: 0.85,
  },
  PVB: {
    Oval: 1.05,
    Square: 1.1,
    LED: 1.05,
    Round: 1.0,
    Slim: 0.95,
    Sleek: 0.9,
  },
  Tough: {
    Oval: 0.95,
    Square: 1.0,
    LED: 0.95,
    Round: 1.05,
    Slim: 1.1,
    Sleek: 1.05,
  },
};

function calculateRiskFactors(formData: FormData) {
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

function calculateRequiredSafety(
  totalRisk: number,
  requirement: string
): { safety: number; level: string } {
  let baseSafety = 0;
  let level = "";

  // More flexible safety requirements to allow variety
  if (totalRisk <= 100) {
    baseSafety = 35; // Allow range from Tough to PVB
    level = "Low Risk";
  } else if (totalRisk <= 200) {
    baseSafety = 50; // Allow range from PVB to Sentry
    level = "Moderate Risk";
  } else if (totalRisk <= 300) {
    baseSafety = 65; // Allow range from PVB to high Sentry
    level = "High Risk";
  } else {
    baseSafety = 75; // Still allow some variety in high Sentry range
    level = "Critical Risk";
  }

  // Adjust based on requirement type
  switch (requirement) {
    case "economical":
      baseSafety = Math.max(20, baseSafety - 15); // More aggressive cost reduction
      break;
    case "premium":
      baseSafety = Math.min(85, baseSafety + 10); // Moderate premium increase
      break;
    case "flexible":
    default:
      // Keep base safety as calculated
      break;
  }

  return { safety: baseSafety, level };
}

function getCompatibilityScore(glass: Component, handrail: Component): number {
  const glassType = glass.type || "Unknown";
  const handrailType = handrail.name.split("(")[0].trim();
  return compatibilityMatrix[glassType]?.[handrailType] || 1.0;
}

function calculateSuitabilityMatch(
  componentSafety: number,
  requiredSafety: number
): number {
  // More lenient matching to allow variety
  const difference = Math.abs(componentSafety - requiredSafety);

  if (difference <= 15) return 100; // Wider perfect match range
  if (difference <= 25) return 85; // Good match
  if (difference <= 35) return 70; // Acceptable match
  if (difference <= 50) return 55; // Still usable

  // Less harsh penalty for being far from requirement
  return Math.max(30, 55 - (difference - 50) * 0.5);
}

function calculateComponentScore(
  component: Component,
  requiredSafety: number,
  requirement: string,
  weight: { safety: number; cost: number; suitability: number; match: number }
): number {
  // More flexible safety scoring to encourage variety
  const safetyRatio = component.safety / Math.max(requiredSafety, 1);
  let safetyScore = 0;

  if (safetyRatio >= 0.6 && safetyRatio <= 2.0) {
    // Much wider acceptable range
    if (safetyRatio >= 0.8 && safetyRatio <= 1.4) {
      // Sweet spot
      safetyScore = 85 + Math.min(15, (1 - Math.abs(safetyRatio - 1)) * 15);
    } else {
      // Still good
      safetyScore = Math.min(85, safetyRatio * 70);
    }
  } else if (safetyRatio >= 0.4) {
    // Minimum acceptable
    safetyScore = Math.max(40, safetyRatio * 60);
  } else {
    // Too low safety
    safetyScore = Math.max(20, safetyRatio * 50);
  }

  // Suitability match - more lenient
  const suitabilityMatch = calculateSuitabilityMatch(
    component.safety,
    requiredSafety
  );

  // Cost efficiency based on requirement
  let costScore = 0;
  if (requirement === "economical") {
    costScore = Math.max(20, 100 - component.cost); // Better minimum for variety
  } else if (requirement === "premium") {
    costScore = Math.min(100, Math.max(40, component.cost)); // Ensure minimum score
  } else {
    // Flexible - more forgiving
    costScore = Math.max(30, 100 - Math.abs(component.cost - 50) * 0.8);
  }

  // Weighted total score
  const weightedScore =
    (safetyScore * weight.safety +
      costScore * weight.cost +
      component.suitability * weight.suitability +
      suitabilityMatch * weight.match) /
    (weight.safety + weight.cost + weight.suitability + weight.match);

  return Math.min(100, Math.max(20, weightedScore)); // Higher minimum for variety
}

function evaluateRecommendationSet(
  glass: Component,
  handrail: Component,
  base: Component,
  requiredSafety: number,
  requirement: string
): RecommendationSet {
  // More balanced weights to encourage variety
  const weights = {
    safety: 0.3, // Reduced safety weight
    cost:
      requirement === "economical"
        ? 0.3
        : requirement === "premium"
        ? 0.2
        : 0.25,
    suitability: 0.25, // Increased suitability weight
    match: 0.25, // Reduced match weight for more variety
  };

  // Individual component scores
  const glassScore = calculateComponentScore(
    glass,
    requiredSafety,
    requirement,
    weights
  );
  const handrailScore = calculateComponentScore(
    handrail,
    requiredSafety,
    requirement,
    weights
  );
  const baseScore = calculateComponentScore(
    base,
    requiredSafety,
    requirement,
    weights
  );

  // Compatibility bonus
  const compatibility = getCompatibilityScore(glass, handrail);

  // Combined metrics
  const combinedSafety = (glass.safety + handrail.safety + base.safety) / 3;
  const safetyScore = Math.min(
    100,
    Math.max(30, (combinedSafety / Math.max(requiredSafety, 1)) * 85)
  );

  // Risk mitigation - more lenient
  const riskMitigation = Math.max(
    20,
    Math.min(100, (combinedSafety - requiredSafety) * 2 + 60)
  );

  // Cost efficiency
  const avgCost = (glass.cost + handrail.cost + base.cost) / 3;
  const costEfficiency =
    requirement === "economical"
      ? Math.max(20, 100 - avgCost)
      : requirement === "premium"
      ? Math.min(100, Math.max(30, avgCost))
      : Math.max(30, 100 - Math.abs(avgCost - 50) * 0.8);

  // Suitability match for the combination
  const suitabilityMatch =
    (calculateSuitabilityMatch(glass.safety, requiredSafety) +
      calculateSuitabilityMatch(handrail.safety, requiredSafety) +
      calculateSuitabilityMatch(base.safety, requiredSafety)) /
    3;

  // Total score with compatibility multiplier
  const baseTotal = (glassScore + handrailScore + baseScore) / 3;
  const totalScore = Math.min(100, Math.max(20, baseTotal * compatibility));

  return {
    glass,
    handrail,
    base,
    totalScore: Math.round(totalScore),
    safetyScore: Math.round(safetyScore),
    costEfficiency: Math.round(costEfficiency),
    riskMitigation: Math.round(riskMitigation),
    compatibility: Math.round(compatibility * 100),
    suitabilityMatch: Math.round(suitabilityMatch),
  };
}

function generateAllCombinations(
  glasses: Component[],
  handrails: Component[],
  bases: Component[],
  requiredSafety: number,
  requirement: string
): RecommendationSet[] {
  const combinations: RecommendationSet[] = [];

  for (const glass of glasses) {
    for (const handrail of handrails) {
      for (const base of bases) {
        // MUCH more lenient filtering - allow almost all combinations
        const minComponentSafety = Math.min(
          glass.safety,
          handrail.safety,
          base.safety
        );
        const avgSafety = (glass.safety + handrail.safety + base.safety) / 3;

        // Very permissive filtering to ensure variety
        if (
          minComponentSafety >= requiredSafety * 0.3 ||
          avgSafety >= requiredSafety * 0.5
        ) {
          const recommendation = evaluateRecommendationSet(
            glass,
            handrail,
            base,
            requiredSafety,
            requirement
          );
          combinations.push(recommendation);
        }
      }
    }
  }

  return combinations;
}

function ensureDiversity(
  recommendations: RecommendationSet[]
): RecommendationSet[] {
  const diverse: RecommendationSet[] = [];
  const usedGlassTypes = new Set<string>();
  const usedHandrails = new Set<string>();
  const usedBases = new Set<string>();

  // Sort by score first
  const sorted = [...recommendations].sort(
    (a, b) => b.totalScore - a.totalScore
  );

  for (const rec of sorted) {
    const glassType = rec.glass.type || rec.glass.name;
    const handrailName = rec.handrail.name;
    const baseName = rec.base.name;

    // Add diversity bonus for new component types
    let diversityBonus = 0;
    if (!usedGlassTypes.has(glassType)) diversityBonus += 5;
    if (!usedHandrails.has(handrailName)) diversityBonus += 3;
    if (!usedBases.has(baseName)) diversityBonus += 2;

    // Apply diversity bonus
    rec.totalScore = Math.min(100, rec.totalScore + diversityBonus);

    diverse.push(rec);
    usedGlassTypes.add(glassType);
    usedHandrails.add(handrailName);
    usedBases.add(baseName);

    if (diverse.length >= 10) break; // Get more options to choose from
  }

  return diverse.sort((a, b) => b.totalScore - a.totalScore);
}

export function getAdvancedRecommendations(
  formData: FormData
): AdvancedRecommendations {
  const riskFactors = calculateRiskFactors(formData);
  const safetyRequirement = calculateRequiredSafety(
    riskFactors.totalRisk,
    formData.requirement
  );
  const isStaircase = formData.installationArea === "Staircase";

  // Select appropriate component pools
  const availableGlasses = glassComponents;
  const availableHandrails = isStaircase
    ? staircaseHandrails
    : handrailComponents;
  const availableBases = isStaircase ? staircaseBases : baseComponents;

  // Generate and evaluate all valid combinations
  const allCombinations = generateAllCombinations(
    availableGlasses,
    availableHandrails,
    availableBases,
    safetyRequirement.safety,
    formData.requirement
  );

  // Ensure diversity and select top 3
  const diverseRecommendations = ensureDiversity(allCombinations);
  const topRecommendations = diverseRecommendations.slice(0, 3);

  const addons =
    formData.addons === "Yes"
      ? ["LED 20", "LED 40", "LED 80"]
      : ["Sleek", "Square 40", "Square 50", "Round 50", "Oval 60", "Slim"];

  return {
    totalRisk: riskFactors.totalRisk,
    floorRisk: riskFactors.floorRisk,
    lengthRisk: riskFactors.lengthRisk,
    shapeRisk: riskFactors.shapeRisk,
    requiredSafety: safetyRequirement.safety,
    riskLevel: safetyRequirement.level,
    recommendations: topRecommendations,
    addons,
  };
}
