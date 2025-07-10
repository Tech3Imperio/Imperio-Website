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
  { name: "Sentry-8+8", safety: 75, cost: 85, suitability: 90, type: "Sentry" },
  { name: "Sentry-6+6", safety: 65, cost: 70, suitability: 85, type: "Sentry" },
  { name: "PVB-8+8", safety: 55, cost: 65, suitability: 80, type: "PVB" },
  { name: "PVB-6+6", safety: 45, cost: 50, suitability: 75, type: "PVB" },
  { name: "Tough-12mm", safety: 35, cost: 40, suitability: 70, type: "Tough" },
  { name: "Tough-10mm", safety: 25, cost: 30, suitability: 65, type: "Tough" },
];

const handrailComponents: Component[] = [
  { name: "Oval-(O-80)", safety: 90, cost: 95, suitability: 90 },
  { name: "Oval-(O-60)", safety: 80, cost: 80, suitability: 85 },
  { name: "Square-(S-50)", safety: 70, cost: 70, suitability: 80 },
  { name: "LED-40", safety: 65, cost: 85, suitability: 75 },
  { name: "Square-(S-40)", safety: 60, cost: 65, suitability: 75 },
  { name: "Round-(R-50)", safety: 50, cost: 60, suitability: 70 },
  { name: "Slim-(S-25)", safety: 40, cost: 45, suitability: 65 },
  { name: "LED-20", safety: 30, cost: 55, suitability: 60 },
  { name: "Sleek-(S-17)", safety: 25, cost: 35, suitability: 55 },
  { name: "Sleek-(S-12)", safety: 20, cost: 30, suitability: 50 },
];

const baseComponents: Component[] = [
  { name: "Ultra-(M50)", safety: 95, cost: 100, suitability: 95 },
  { name: "Pro-(L50)", safety: 85, cost: 90, suitability: 90 },
  { name: "Ace-(A50)", safety: 80, cost: 85, suitability: 85 },
  { name: "Dot-(E50)", safety: 75, cost: 80, suitability: 80 },
  { name: "Spigot-(SP250)", safety: 70, cost: 75, suitability: 75 },
  { name: "Smart-(C75)", safety: 60, cost: 70, suitability: 75 },
  { name: "Lux-(T100)", safety: 50, cost: 60, suitability: 65 },
  { name: "SemiPro-(C50)", safety: 45, cost: 55, suitability: 65 },
  { name: "SemiSmart-(D75)", safety: 40, cost: 45, suitability: 60 },
  { name: "Mini-(F55)", safety: 30, cost: 40, suitability: 55 },
  { name: "SemiMini-(D55)", safety: 20, cost: 25, suitability: 45 },
  { name: "Micro-(F40)", safety: 10, cost: 15, suitability: 35 },
];

const staircaseHandrails: Component[] = [
  { name: "Oval-(O-80)", safety: 90, cost: 95, suitability: 95 },
  { name: "Oval-(O-60)", safety: 80, cost: 80, suitability: 90 },
  { name: "Square-(S-50)", safety: 70, cost: 70, suitability: 85 },
  { name: "LED-40", safety: 65, cost: 85, suitability: 80 },
  { name: "Square-(S-40)", safety: 60, cost: 65, suitability: 80 },
  { name: "Round-(R-50)", safety: 50, cost: 60, suitability: 75 },
  { name: "Slim-(S-25)", safety: 40, cost: 45, suitability: 70 },
  { name: "LED-20", safety: 30, cost: 55, suitability: 65 },
];

const staircaseBases: Component[] = [
  { name: "Dot-(E50)", safety: 75, cost: 80, suitability: 90 },
  { name: "Spigot-(SP250)", safety: 70, cost: 75, suitability: 85 },
];

// Recommendation mappings based on your specifications
const baseRecommendations = {
  Staircase: {
    Low: ["SemiPro-(C50)", "Mini-(F55)", "Spigot-(SP250)"],
    Moderate: ["SemiPro-(C50)", "Mini-(F55)", "Ultra-(M50)"],
    High: ["Smart-(C75)", "Ace-(A50)", "Pro-(L50)", "Dot-(E50)"],
  },
  "Non-Staircase": {
    Low: ["SemiMini-(D55)", "SemiSmart-(D75)", "Lux-(T100)"],
    Moderate: ["SemiPro-(C50)", "Mini-(F55)", "Smart-(C75)", "Spigot-(SP250)"],
    High: ["Ace-(A50)", "Pro-(L50)"],
  },
};

const handrailRecommendations = {
  Staircase: {
    Low: ["Slim-(S-25)"],
    Moderate: ["Square-(S-40)", "Square-(S-50)", "Round-(R-50)", "Oval-(O-60)"],
    High: ["LED-20", "LED-40", "Oval-(O-80)", "Sleek-(S-17)"],
  },
  "Non-Staircase": {
    Low: ["Slim-(S-25)"],
    Moderate: ["Square-(S-40)", "Square-(S-50)", "Round-(R-50)", "Oval-(O-60)"],
    High: ["LED-20", "LED-40", "Oval-(O-80)", "Sleek-(S-17)"],
  },
};

const glassRecommendations = {
  Low: ["Tough-12mm", "Tough-10mm"],
  Moderate: ["PVB-8+8", "PVB-6+6"],
  High: ["Sentry-10+10", "Sentry-8+8", "Sentry-6+6"],
};

// Property types that require floor number input
const FLOOR_REQUIRED_PROPERTIES = ["Apartment", "Commercial", "Hotel"];

function shouldAskFloorNumber(propertyType: string): boolean {
  return FLOOR_REQUIRED_PROPERTIES.includes(propertyType);
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
    // Villa/Bungalow gets default low risk
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

  // Height risk calculation (bigger height = less risk, more proportional)
  const height = Number.parseFloat(formData.glassHeight) || 3.5;
  if (height >= 4) {
    heightRisk = 5; // Lowest risk for 4ft
  } else if (height >= 3.5) {
    heightRisk = 10; // Low risk for 3.5ft (standard)
  } else if (height >= 3.25) {
    heightRisk = 15; // Medium-low risk for 3.25ft
  } else if (height >= 3) {
    heightRisk = 20; // Medium risk for 3ft
  } else if (height >= 2.5) {
    heightRisk = 30; // Highest risk for 2.5ft
  } else {
    heightRisk = 35; // Maximum risk for very short glass
  }

  return {
    floorRisk,
    lengthRisk,
    shapeRisk,
    heightRisk,
    totalRisk: floorRisk + lengthRisk + shapeRisk + heightRisk,
  };
}

function calculateRequiredSafety(
  totalRisk: number,
  requirement: string
): { safety: number; level: string } {
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

  switch (requirement) {
    case "economical":
      baseSafety = Math.max(20, baseSafety - 15);
      break;
    case "premium":
      baseSafety = Math.min(85, baseSafety + 15);
      break;
    case "flexible":
    default:
      break;
  }

  return { safety: baseSafety, level };
}

function getRecommendedComponents(
  riskLevel: string,
  isStaircase: boolean,
  isSideMounted: boolean,
  componentType: "base" | "handrail" | "glass"
): string[] {
  const areaType = isStaircase ? "Staircase" : "Non-Staircase";

  if (componentType === "glass") {
    return (
      glassRecommendations[riskLevel as keyof typeof glassRecommendations] || []
    );
  } else if (componentType === "base") {
    // Special handling for side-mounted installations (all areas)
    if (isSideMounted) {
      return ["Dot-(E50)", "Smart-(C75)"]; // Prefer Dot and C75 for side-mounted
    }
    return (
      baseRecommendations[areaType as keyof typeof baseRecommendations][
        riskLevel as keyof typeof baseRecommendations.Staircase
      ] || []
    );
  } else if (componentType === "handrail") {
    return (
      handrailRecommendations[areaType as keyof typeof handrailRecommendations][
        riskLevel as keyof typeof handrailRecommendations.Staircase
      ] || []
    );
  }

  return [];
}

function calculateProportionalWeight(
  componentSafety: number,
  requiredSafety: number,
  requirement: string,
  isRecommended = false,
  componentName = ""
): number {
  let safetyWeight = 0;
  const safetyRatio = componentSafety / Math.max(requiredSafety, 1);

  if (safetyRatio >= 0.9 && safetyRatio <= 1.3) {
    safetyWeight = 100;
  } else if (safetyRatio >= 0.7) {
    safetyWeight = 80;
  } else if (safetyRatio >= 0.5) {
    safetyWeight = 60;
  } else if (safetyRatio >= 0.3) {
    safetyWeight = 40;
  } else {
    safetyWeight = 20;
  }

  // Premium/Economical specific preferences
  if (requirement === "premium") {
    // Premium base preferences: [lux, dot, ace, pro, ultra]
    const premiumBases = [
      "Lux-(T100)",
      "Dot-(E50)",
      "Ace-(A50)",
      "Pro-(L50)",
      "Ultra-(M50)",
    ];
    // Premium handrail preferences: [led20, led40, oval 60, oval 80]
    const premiumHandrails = ["LED-20", "LED-40", "Oval-(O-60)", "Oval-(O-80)"];

    if (
      premiumBases.includes(componentName) ||
      premiumHandrails.includes(componentName)
    ) {
      safetyWeight += 40; // Strong boost for premium components
    }

    // General boost for high-safety components
    if (componentSafety >= 60) {
      safetyWeight += 20;
    }
  } else if (requirement === "economical") {
    // Economical base preferences: [semi mini, semi pro, semi smart]
    const economicalBases = [
      "SemiMini-(D55)",
      "SemiPro-(C50)",
      "SemiSmart-(D75)",
    ];
    // Economical handrail preferences: [sleek-12, slim-25]
    const economicalHandrails = ["Sleek-(S-12)", "Slim-(S-25)"];

    if (
      economicalBases.includes(componentName) ||
      economicalHandrails.includes(componentName)
    ) {
      safetyWeight += 40; // Strong boost for economical components
    }

    // General boost for low-safety components
    if (componentSafety <= 40) {
      safetyWeight += 20;
    }
  }

  // Boost recommended components
  if (isRecommended) {
    safetyWeight += 25;
  }

  // Special boost for Ace components
  if (componentSafety === 75) {
    // Ace-(A50) has safety 75
    safetyWeight += 15;
  }

  return Math.max(10, Math.min(180, safetyWeight)); // Increased max to 180 for premium/economical boosts
}

function filterGlassByType(
  glasses: Component[],
  glassType: string
): Component[] {
  if (glassType === "laminated") {
    return glasses.filter(
      (g) => g.type === "PVB" || g.type === "SGP" || g.type === "Sentry"
    );
  } else if (glassType === "toughened") {
    return glasses.filter((g) => g.type === "Tough");
  }
  // "any" - return all glasses
  return glasses;
}

function getCompatibleHandrail(
  glassName: string,
  handrails: Component[]
): Component | null {
  // Glass-Handrail compatibility rules
  if (glassName.includes("12mm")) {
    // 12mm toughened goes with Sleek-12
    return handrails.find((h) => h.name === "Sleek-(S-12)") || null;
  } else if (glassName.includes("8+8")) {
    // 8+8 laminated goes with Sleek-17
    return handrails.find((h) => h.name === "Sleek-(S-17)") || null;
  } else if (glassName.includes("6+6")) {
    // 6+6 laminated goes with Sleek-12
    return handrails.find((h) => h.name === "Sleek-(S-12)") || null;
  }

  return null;
}

function selectComponentsByProportion(
  components: Component[],
  requiredSafety: number,
  requirement: string,
  recommendedNames: string[],
  count = 4,
  excludeNames: string[] = [],
  mountingType?: string
): Component[] {
  // Filter out excluded components
  let availableComponents = components.filter(
    (c) => !excludeNames.includes(c.name)
  );

  // For top-mounted, exclude Dot and Smart components
  if (mountingType === "top-mounted") {
    availableComponents = availableComponents.filter(
      (c) => c.name !== "Dot-(E50)" && c.name !== "Smart-(C75)"
    );
  }

  const weightedComponents = availableComponents.map((component) => ({
    component,
    weight: calculateProportionalWeight(
      component.safety,
      requiredSafety,
      requirement,
      recommendedNames.includes(component.name),
      component.name // Pass component name for premium/economical logic
    ),
  }));

  // Reduce Spigot weight when risk is above 60
  weightedComponents.forEach((item) => {
    if (item.component.name.includes("Spigot") && requiredSafety > 60) {
      item.weight = Math.max(10, item.weight * 0.3); // Significantly reduce Spigot weight
    }
  });

  weightedComponents.sort((a, b) => b.weight - a.weight);

  const selected: Component[] = [];
  const remainingComponents = [...weightedComponents];

  for (let i = 0; i < count && remainingComponents.length > 0; i++) {
    const totalWeight = remainingComponents.reduce(
      (sum, item) => sum + item.weight,
      0
    );
    let random = Math.random() * totalWeight;

    let selectedIndex = 0;
    for (let j = 0; j < remainingComponents.length; j++) {
      random -= remainingComponents[j].weight;
      if (random <= 0) {
        selectedIndex = j;
        break;
      }
    }

    selected.push(remainingComponents[selectedIndex].component);
    remainingComponents.splice(selectedIndex, 1);
  }

  return selected;
}

function evaluateRecommendationSet(
  glass: Component,
  handrail: Component,
  base: Component,
  requiredSafety: number,
  requirement: string
): RecommendationSet {
  const combinedSafety = (glass.safety + handrail.safety + base.safety) / 3;
  const compatibility = 1.0; // Simplified compatibility

  const safetyScore = Math.min(
    100,
    Math.max(20, (combinedSafety / Math.max(requiredSafety, 1)) * 100)
  );
  const riskMitigation = Math.max(
    10,
    Math.min(100, combinedSafety - requiredSafety + 60)
  );

  const avgCost = (glass.cost + handrail.cost + base.cost) / 3;
  let costEfficiency = 0;
  if (requirement === "economical") {
    costEfficiency = Math.max(20, 120 - avgCost);
  } else if (requirement === "premium") {
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
    compatibility: Math.round(compatibility * 100),
    suitabilityMatch: Math.round(suitabilityMatch),
  };
}

function generateProportionalRecommendations(
  glasses: Component[],
  handrails: Component[],
  bases: Component[],
  requiredSafety: number,
  requirement: string,
  riskLevel: string,
  isStaircase: boolean,
  isSideMounted: boolean,
  mountingType: string
): RecommendationSet[] {
  const recommendedGlassNames = getRecommendedComponents(
    riskLevel,
    isStaircase,
    isSideMounted,
    "glass"
  );
  const recommendedHandrailNames = getRecommendedComponents(
    riskLevel,
    isStaircase,
    isSideMounted,
    "handrail"
  );
  const recommendedBaseNames = getRecommendedComponents(
    riskLevel,
    isStaircase,
    isSideMounted,
    "base"
  );

  const combinations: RecommendationSet[] = [];
  const usedGlasses: string[] = [];
  const usedHandrails: string[] = [];
  const usedBases: string[] = [];

  // Generate 3 unique recommendations
  for (let i = 0; i < 3; i++) {
    const selectedGlasses = selectComponentsByProportion(
      glasses,
      requiredSafety,
      requirement,
      recommendedGlassNames,
      4, // Increased from 3 to 4 to ensure enough variety
      usedGlasses
    );
    const selectedHandrails = selectComponentsByProportion(
      handrails,
      requiredSafety,
      requirement,
      recommendedHandrailNames,
      4, // Increased from 3 to 4 to ensure enough variety
      usedHandrails
    );
    const selectedBases = selectComponentsByProportion(
      bases,
      requiredSafety,
      requirement,
      recommendedBaseNames,
      5, // Increased from 4 to 5 to ensure enough variety
      usedBases,
      mountingType // Pass mounting type to exclude Dot/Smart for top-mounted
    );

    // For side-mounted, ensure Dot and Smart are in first two recommendations
    if (isSideMounted && i < 2) {
      const dotComponent = bases.find((b) => b.name === "Dot-(E50)");
      const smartComponent = bases.find((b) => b.name === "Smart-(C75)");

      if (i === 0 && dotComponent && !usedBases.includes(dotComponent.name)) {
        selectedBases.unshift(dotComponent); // Add Dot to front
      } else if (
        i === 1 &&
        smartComponent &&
        !usedBases.includes(smartComponent.name)
      ) {
        selectedBases.unshift(smartComponent); // Add Smart to front
      }
    }

    // Ensure Ace is in recommendations when risk > 60 (but not for top-mounted if it conflicts)
    if (requiredSafety > 60) {
      const aceComponent = bases.find((b) => b.name === "Ace-(A50)");
      if (
        aceComponent &&
        !usedBases.includes(aceComponent.name) &&
        !selectedBases.some((b) => b.name === aceComponent.name)
      ) {
        selectedBases[0] = aceComponent; // Replace first base with Ace
      }
    }

    // Create combinations for this recommendation with glass-handrail compatibility
    const currentCombinations: RecommendationSet[] = [];

    for (const glass of selectedGlasses.slice(0, 3)) {
      // Changed from 2 to 3
      // Check for compatible handrail first
      const compatibleHandrail = getCompatibleHandrail(glass.name, handrails);
      let handrailsToUse = selectedHandrails.slice(0, 3); // Changed from 2 to 3

      // If there's a compatible handrail and it's not used, prioritize it
      if (
        compatibleHandrail &&
        !usedHandrails.includes(compatibleHandrail.name)
      ) {
        handrailsToUse = [
          compatibleHandrail,
          ...handrailsToUse.filter((h) => h.name !== compatibleHandrail.name),
        ];
      }

      for (const handrail of handrailsToUse) {
        for (const base of selectedBases.slice(0, 3)) {
          // Changed from 2 to 3
          if (
            !usedGlasses.includes(glass.name) &&
            !usedHandrails.includes(handrail.name) &&
            !usedBases.includes(base.name)
          ) {
            const recommendation = evaluateRecommendationSet(
              glass,
              handrail,
              base,
              requiredSafety,
              requirement
            );

            // Bonus score for glass-handrail compatibility
            if (getCompatibleHandrail(glass.name, [handrail])) {
              recommendation.totalScore += 10; // Compatibility bonus
              recommendation.compatibility += 10;
            }

            currentCombinations.push(recommendation);
          }
        }
      }
    }

    if (currentCombinations.length > 0) {
      // Sort and pick the best combination for this recommendation
      currentCombinations.sort((a, b) => b.totalScore - a.totalScore);
      const bestCombination = currentCombinations[0];

      combinations.push(bestCombination);

      // Mark components as used
      usedGlasses.push(bestCombination.glass.name);
      usedHandrails.push(bestCombination.handrail.name);
      usedBases.push(bestCombination.base.name);
    }
  }

  return combinations;
}

export { shouldAskFloorNumber };

export function getAdvancedRecommendations(
  formData: FormData
): AdvancedRecommendations {
  const riskFactors = calculateRiskFactors(formData);
  const safetyRequirement = calculateRequiredSafety(
    riskFactors.totalRisk,
    formData.requirement
  );
  const isStaircase = formData.installationArea === "Staircase";
  const isSideMounted = formData.mountingType === "side-mounted";

  const filteredGlasses = filterGlassByType(
    glassComponents,
    formData.glassType
  );
  const availableHandrails = isStaircase
    ? staircaseHandrails
    : handrailComponents;
  const availableBases = isStaircase ? staircaseBases : baseComponents;

  const recommendations = generateProportionalRecommendations(
    filteredGlasses,
    availableHandrails,
    availableBases,
    safetyRequirement.safety,
    formData.requirement,
    safetyRequirement.level,
    isStaircase,
    isSideMounted,
    formData.mountingType || ""
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
