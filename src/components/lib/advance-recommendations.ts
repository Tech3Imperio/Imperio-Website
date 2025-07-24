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
  heightRisk: number;
  requiredSafety: number;
  riskLevel: string;
  recommendations: RecommendationSet[];
  addons: string[];
}

const glassComponents: Component[] = [
  {
    name: "Sentry-10+10",
    safety: 85,
    cost: 100,
    suitability: 95,
    type: "Sentry",
  },
  { name: "Sentry-8+8", safety: 85, cost: 85, suitability: 90, type: "Sentry" },
  { name: "Sentry-6+6", safety: 65, cost: 80, suitability: 85, type: "Sentry" },
  { name: "PVB-8+8", safety: 70, cost: 65, suitability: 80, type: "PVB" },
  { name: "PVB-6+6", safety: 50, cost: 60, suitability: 75, type: "PVB" },
  { name: "Tough-12mm", safety: 40, cost: 40, suitability: 70, type: "Tough" },
];

const handrailComponents: Component[] = [
  { name: "Oval-(O-80)", safety: 90, cost: 95, suitability: 90 },
  { name: "Oval-(O-60)", safety: 80, cost: 80, suitability: 85 },
  { name: "Square-(S-50)", safety: 70, cost: 60, suitability: 80 },
  { name: "LED-40", safety: 65, cost: 70, suitability: 75 },
  { name: "Square-(S-40)", safety: 60, cost: 60, suitability: 75 },
  { name: "Round-(R-50)", safety: 55, cost: 60, suitability: 70 },
  { name: "Slim-(S-25)", safety: 50, cost: 40, suitability: 65 },
  { name: "LED-20", safety: 50, cost: 55, suitability: 60 },
  { name: "Sleek-(S-17)", safety: 30, cost: 35, suitability: 55 },
  { name: "Sleek-(S-12)", safety: 20, cost: 30, suitability: 50 },
];

const baseComponents: Component[] = [
  { name: "Ultra-(M50)", safety: 95, cost: 100, suitability: 95 },
  { name: "Pro-(L50)", safety: 85, cost: 90, suitability: 90 },
  { name: "Ace-(A50)", safety: 80, cost: 65, suitability: 85 },
  { name: "Dot-(E50)", safety: 75, cost: 80, suitability: 80 },
  { name: "Spigot-(SP250)", safety: 60, cost: 85, suitability: 75 },
  { name: "Smart-(C75)", safety: 65, cost: 55, suitability: 75 },
  { name: "Lux-(T100)", safety: 50, cost: 40, suitability: 65 },
  { name: "SemiPro-(C50)", safety: 45, cost: 50, suitability: 65 },
  { name: "SemiSmart-(D75)", safety: 40, cost: 40, suitability: 60 },
  { name: "Mini-(F55)", safety: 30, cost: 35, suitability: 55 },
  { name: "SemiMini-(D55)", safety: 20, cost: 25, suitability: 45 },
  { name: "Micro-(F40)", safety: 10, cost: 15, suitability: 35 },
  { name: "Prime", safety: 80, cost: 85, suitability: 65 },
  { name: "Flex", safety: 75, cost: 65, suitability: 55 },
];

const staircaseHandrails: Component[] = [
  { name: "Oval-(O-80)", safety: 90, cost: 95, suitability: 95 },
  { name: "Oval-(O-60)", safety: 80, cost: 80, suitability: 90 },
  { name: "Square-(S-50)", safety: 70, cost: 60, suitability: 85 },
  { name: "LED-40", safety: 65, cost: 70, suitability: 80 },
  { name: "Square-(S-40)", safety: 60, cost: 60, suitability: 80 },
  { name: "Round-(R-50)", safety: 55, cost: 60, suitability: 75 },
  { name: "Slim-(S-25)", safety: 50, cost: 40, suitability: 70 },
  { name: "LED-20", safety: 50, cost: 55, suitability: 65 },
];

const staircaseBases: Component[] = [
  { name: "Dot-(E50)", safety: 75, cost: 80, suitability: 90 },
  { name: "Spigot-(SP250)", safety: 60, cost: 85, suitability: 85 },
];

// Property types that require floor number input
const FLOOR_REQUIRED_PROPERTIES = ["Apartment", "Commercial", "Hotel"];

function shouldAskFloorNumber(propertyType: string): boolean {
  return FLOOR_REQUIRED_PROPERTIES.includes(propertyType);
}

function shouldAskMountingType(): boolean {
  return true;
}

function calculateRiskFactors(formData: FormData) {
  let floorRisk = 0;
  let lengthRisk = 0;
  let shapeRisk = 0;
  let heightRisk = 0;

  // Floor risk calculation
  if (shouldAskFloorNumber(formData.propertyType)) {
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
      default:
        floorRisk = 25;
        break;
    }
  } else {
    floorRisk = 25;
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

  // Height risk calculation
  const height = Number.parseFloat(formData.glassHeight) || 3.5;
  if (height >= 4) {
    heightRisk = 5;
  } else if (height >= 3.5) {
    heightRisk = 10;
  } else if (height >= 3.25) {
    heightRisk = 15;
  } else if (height >= 3) {
    heightRisk = 20;
  } else if (height >= 2.5) {
    heightRisk = 30;
  } else {
    heightRisk = 35;
  }

  return {
    floorRisk,
    lengthRisk,
    shapeRisk,
    heightRisk,
    totalRisk: floorRisk + lengthRisk + shapeRisk + heightRisk,
  };
}

function calculateRequiredSafety(totalRisk: number): {
  safety: number;
  level: string;
} {
  let baseSafety = 0;
  let level = "";

  if (totalRisk <= 100) {
    baseSafety = 30;
    level = "Low";
  } else if (totalRisk <= 200) {
    baseSafety = 50;
    level = "Moderate";
  } else {
    baseSafety = 70;
    level = "High";
  }

  return { safety: baseSafety, level };
}

function filterGlassByType(
  glasses: Component[],
  glassType: string
): Component[] {
  if (glassType === "laminated") {
    return glasses.filter((g) => g.type === "PVB" || g.type === "Sentry");
  } else if (glassType === "toughened") {
    return glasses.filter((g) => g.type === "Tough");
  }
  return glasses;
}

function getCompatibleHandrail(
  glassName: string,
  handrails: Component[]
): Component | null {
  if (glassName.includes("12mm")) {
    return handrails.find((h) => h.name === "Sleek-(S-12)") || null;
  } else if (glassName.includes("8+8")) {
    return handrails.find((h) => h.name === "Sleek-(S-17)") || null;
  } else if (glassName.includes("6+6")) {
    return handrails.find((h) => h.name === "Sleek-(S-12)") || null;
  }
  return null;
}

function evaluateRecommendationSet(
  glass: Component,
  handrail: Component,
  base: Component,
  requiredSafety: number,
  priority: string
): RecommendationSet {
  const combinedSafety = (glass.safety + handrail.safety + base.safety) / 3;
  const compatibility = 1.0;

  const safetyScore = Math.min(
    100,
    Math.max(20, (combinedSafety / Math.max(requiredSafety, 1)) * 100)
  );
  const riskMitigation = Math.max(
    0,
    Math.min(200, combinedSafety - requiredSafety + 100)
  );

  const avgCost = (glass.cost + handrail.cost + base.cost) / 3;
  let costEfficiency = 0;
  if (priority === "cost") {
    costEfficiency = Math.max(20, 120 - avgCost);
  } else if (priority === "safety") {
    costEfficiency = Math.min(100, avgCost * 0.9 + 10);
  } else {
    costEfficiency = Math.max(30, 100 - Math.abs(avgCost - 60) * 0.8);
  }

  const glassSuitability = Math.max(
    30,
    100 - Math.abs(glass.safety - requiredSafety) * 1.5
  );
  const handrailSuitability = Math.max(
    30,
    100 - Math.abs(handrail.safety - requiredSafety) * 1.5
  );
  const baseSuitability = Math.max(
    30,
    100 - Math.abs(base.safety - requiredSafety) * 1.5
  );
  const suitabilityMatch =
    (glassSuitability + handrailSuitability + baseSuitability) / 3;

  const baseScore =
    safetyScore * 0.3 + costEfficiency * 0.3 + suitabilityMatch * 0.4;
  const totalScore = Math.min(100, Math.max(15, baseScore * compatibility));

  return {
    glass,
    handrail,
    base,
    totalScore: Math.round(totalScore),
    safetyScore: Math.round(safetyScore),
    costEfficiency: Math.round(costEfficiency),
    riskMitigation: Math.round(riskMitigation),
    compatibility: Math.round(Math.min(100, compatibility * 100)),
    suitabilityMatch: Math.round(suitabilityMatch),
  };
}

function filterBasesFor12mmGlass(
  bases: Component[],
  glassName: string
): Component[] {
  if (glassName.includes("12mm")) {
    // Exclude Lux, Mini, SemiMini, and Micro for 12mm glass
    return bases.filter(
      (base) =>
        !base.name.includes("Lux") &&
        !base.name.includes("Mini") &&
        !base.name.includes("SemiMini") &&
        !base.name.includes("Micro")
    );
  }
  return bases;
}

function generateProportionalRecommendations(
  glasses: Component[],
  handrails: Component[],
  bases: Component[],
  requiredSafety: number,
  priority: string,
  isStaircase: boolean,
  mountingType: string,
  addons: string,
  formData: FormData
): RecommendationSet[] {
  const combinations: RecommendationSet[] = [];
  const usedGlasses = new Set<string>();
  const usedHandrails = new Set<string>();
  const usedBases = new Set<string>();

  // Generate all possible combinations first
  const allCombinations: RecommendationSet[] = [];

  // Filter handrails based on add-ons selection
  let filteredHandrails = handrails;
  if (addons === "No") {
    // Exclude LED handrails when no add-ons selected
    filteredHandrails = handrails.filter((h) => !h.name.includes("LED"));
  } else if (addons === "Yes") {
    // Only include LED handrails when add-ons selected
    filteredHandrails = handrails.filter((h) => h.name.includes("LED"));
    // If no LED handrails available, fall back to all handrails
    if (filteredHandrails.length === 0) {
      filteredHandrails = handrails;
    }
  }

  let filteredBases = bases;

  // Apply specific base selection rules
  if (isStaircase && mountingType === "top-mounted") {
    // For staircase + top-mounted: only Spigot
    filteredBases = bases.filter((b) => b.name.includes("Spigot"));
  } else if (isStaircase && mountingType !== "top-mounted") {
    // For staircase + other mounting: exclude Spigot, only Lux
    filteredBases = bases.filter((b) => b.name === "Lux-(T100)");
  } else if (formData.installationArea === "Balcony") {
    // For balcony: replace any Spigot with Lux
    filteredBases = bases.filter((b) => !b.name.includes("Spigot"));
    if (filteredBases.length === 0) {
      filteredBases = bases.filter((b) => b.name === "Lux-(T100)");
    }
  } else {
    // For other areas: apply length-based logic
    const railingLength = Number.parseFloat(formData.railingLength) || 0;
    if (railingLength > 25) {
      // For length > 25: prioritize Mini and Smart
      filteredBases = bases.filter(
        (b) => b.name === "Mini-(F55)" || b.name === "Smart-(C75)"
      );
      if (filteredBases.length === 0) {
        filteredBases = bases;
      }
    } else {
      filteredBases = bases;
    }
  }

  for (const glass of glasses) {
    // Filter bases based on glass compatibility
    const glassCompatibleBases = filterBasesFor12mmGlass(
      filteredBases,
      glass.name
    );

    for (const handrail of filteredHandrails) {
      for (const base of glassCompatibleBases) {
        // Check mounting type restrictions
        if (
          mountingType === "top-mounted" &&
          (base.name === "Dot-(E50)" || base.name === "Smart-(C75)")
        ) {
          // Skip Dot and Smart for top-mounted (except compulsory cases)
          if (!isStaircase || base.name !== "Smart-(C75)") {
            continue;
          }
        }

        const recommendation = evaluateRecommendationSet(
          glass,
          handrail,
          base,
          requiredSafety,
          priority
        );

        // Add compatibility bonus
        if (getCompatibleHandrail(glass.name, [handrail])) {
          recommendation.totalScore += 10;
          recommendation.compatibility = Math.min(
            100,
            recommendation.compatibility + 10
          );
        }

        allCombinations.push(recommendation);
      }
    }
  }

  // Sort all combinations by total score
  allCombinations.sort((a, b) => b.totalScore - a.totalScore);

  // Apply compulsory selections and generate 3 unique recommendations
  for (let i = 0; i < 3 && allCombinations.length > 0; i++) {
    let selectedRecommendation: RecommendationSet | null = null;

    // Handle compulsory base selections for first recommendation
    if (i === 0) {
      if (isStaircase) {
        if (mountingType === "top-mounted") {
          // Find best combination with Spigot
          selectedRecommendation =
            allCombinations.find(
              (rec) =>
                rec.base.name.includes("Spigot") &&
                !usedGlasses.has(rec.glass.name) &&
                !usedHandrails.has(rec.handrail.name) &&
                !usedBases.has(rec.base.name)
            ) || null;
        } else if (mountingType === "side-mounted") {
          // Find best combination with Dot
          selectedRecommendation =
            allCombinations.find(
              (rec) =>
                rec.base.name === "Dot-(E50)" &&
                !usedGlasses.has(rec.glass.name) &&
                !usedHandrails.has(rec.handrail.name) &&
                !usedBases.has(rec.base.name)
            ) || null;
        }
      } else {
        // Non-staircase logic
        if (mountingType === "top-mounted") {
          // Find best combination with Ace
          selectedRecommendation =
            allCombinations.find(
              (rec) =>
                rec.base.name === "Ace-(A50)" &&
                !usedGlasses.has(rec.glass.name) &&
                !usedHandrails.has(rec.handrail.name) &&
                !usedBases.has(rec.base.name)
            ) || null;
        } else if (mountingType === "side-mounted") {
          // Find best combination with Dot
          selectedRecommendation =
            allCombinations.find(
              (rec) =>
                rec.base.name === "Dot-(E50)" &&
                !usedGlasses.has(rec.glass.name) &&
                !usedHandrails.has(rec.handrail.name) &&
                !usedBases.has(rec.base.name)
            ) || null;
        }
      }
    } else if (i === 1) {
      // Second recommendation preferences
      if (!isStaircase && mountingType === "top-mounted") {
        // Find best combination with Smart-(C75)
        selectedRecommendation =
          allCombinations.find(
            (rec) =>
              rec.base.name === "Smart-(C75)" &&
              !usedGlasses.has(rec.glass.name) &&
              !usedHandrails.has(rec.handrail.name) &&
              !usedBases.has(rec.base.name)
          ) || null;
      } else if (!isStaircase && mountingType === "side-mounted") {
        // Find best combination with Smart-(C75)
        selectedRecommendation =
          allCombinations.find(
            (rec) =>
              rec.base.name === "Smart-(C75)" &&
              !usedGlasses.has(rec.glass.name) &&
              !usedHandrails.has(rec.handrail.name) &&
              !usedBases.has(rec.base.name)
          ) || null;
      }
    }

    // If no compulsory selection found, pick the best available with no repeats
    if (!selectedRecommendation) {
      selectedRecommendation =
        allCombinations.find(
          (rec) =>
            !usedGlasses.has(rec.glass.name) &&
            !usedHandrails.has(rec.handrail.name) &&
            !usedBases.has(rec.base.name)
        ) || null;
    }

    // If still no recommendation found, try to find one with minimal repeats
    if (!selectedRecommendation) {
      // Try to find combination with only one component repeated
      selectedRecommendation =
        allCombinations.find(
          (rec) =>
            [
              usedGlasses.has(rec.glass.name),
              usedHandrails.has(rec.handrail.name),
              usedBases.has(rec.base.name),
            ].filter(Boolean).length <= 1
        ) || null;
    }

    // Last resort: pick any available combination
    if (!selectedRecommendation && allCombinations.length > 0) {
      selectedRecommendation = allCombinations[0];
    }

    if (selectedRecommendation) {
      combinations.push(selectedRecommendation);
      usedGlasses.add(selectedRecommendation.glass.name);
      usedHandrails.add(selectedRecommendation.handrail.name);
      usedBases.add(selectedRecommendation.base.name);

      // Remove this combination from future consideration
      const index = allCombinations.findIndex(
        (rec) =>
          rec.glass.name === selectedRecommendation!.glass.name &&
          rec.handrail.name === selectedRecommendation!.handrail.name &&
          rec.base.name === selectedRecommendation!.base.name
      );
      if (index > -1) {
        allCombinations.splice(index, 1);
      }
    }
  }

  // If we still don't have 3 recommendations, create fallbacks with unique components
  while (combinations.length < 3) {
    const availableGlasses = glasses.filter((g) => !usedGlasses.has(g.name));
    const availableHandrails = filteredHandrails.filter(
      (h) => !usedHandrails.has(h.name)
    );
    const availableBases = bases.filter((b) => !usedBases.has(b.name));

    if (
      availableGlasses.length === 0 ||
      availableHandrails.length === 0 ||
      availableBases.length === 0
    ) {
      break; // Can't create more unique combinations
    }

    const fallbackGlass = availableGlasses[0];
    const fallbackHandrail = availableHandrails[0];
    const fallbackBase = availableBases[0];

    const fallbackRecommendation = evaluateRecommendationSet(
      fallbackGlass,
      fallbackHandrail,
      fallbackBase,
      requiredSafety,
      priority
    );

    combinations.push(fallbackRecommendation);
    usedGlasses.add(fallbackGlass.name);
    usedHandrails.add(fallbackHandrail.name);
    usedBases.add(fallbackBase.name);
  }

  return combinations.slice(0, 3); // Ensure exactly 3 recommendations
}

function sortRecommendationsByPriority(
  recommendations: RecommendationSet[],
  priority: string
): RecommendationSet[] {
  if (priority === "safety") {
    return recommendations.sort((a, b) => b.safetyScore - a.safetyScore);
  } else if (priority === "cost") {
    return recommendations.sort((a, b) => b.costEfficiency - a.costEfficiency);
  }
  return recommendations;
}

export { shouldAskFloorNumber, shouldAskMountingType };

export function getAdvancedRecommendations(
  formData: FormData
): AdvancedRecommendations {
  const riskFactors = calculateRiskFactors(formData);
  const safetyRequirement = calculateRequiredSafety(riskFactors.totalRisk);
  const isStaircase = formData.installationArea === "Staircase";

  const filteredGlasses = filterGlassByType(
    glassComponents,
    formData.glassType
  );
  const availableHandrails = isStaircase
    ? staircaseHandrails
    : handrailComponents;
  const availableBases = isStaircase ? staircaseBases : baseComponents;

  let recommendations = generateProportionalRecommendations(
    filteredGlasses,
    availableHandrails,
    availableBases,
    safetyRequirement.safety,
    formData.priority,
    isStaircase,
    formData.mountingType || "",
    formData.addons || "No", // Pass addons selection
    formData
  );

  // Sort recommendations based on priority
  recommendations = sortRecommendationsByPriority(
    recommendations,
    formData.priority
  );

  const addons =
    formData.addons === "Yes"
      ? ["LED 20", "LED 40", "LED 80"]
      : ["Sleek", "Square 40", "Square 50", "Round 50", "Oval 60", "Slim"];

  return {
    totalRisk: riskFactors.totalRisk,
    floorRisk: riskFactors.floorRisk,
    lengthRisk: riskFactors.lengthRisk,
    shapeRisk: riskFactors.shapeRisk,
    heightRisk: riskFactors.heightRisk,
    requiredSafety: safetyRequirement.safety,
    riskLevel: safetyRequirement.level,
    recommendations,
    addons,
  };
}
