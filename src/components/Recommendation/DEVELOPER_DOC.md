# Glass Railing Recommendation System - Developer Documentation

## Table of Contents

1. [System Overview](#system-overview)
2. [Component Architecture](#component-architecture)
3. [Data Models](#data-models)
4. [Risk Calculation Engine](#risk-calculation-engine)
5. [Recommendation Algorithm](#recommendation-algorithm)
6. [Scoring System](#scoring-system)
7. [Business Rules](#business-rules)
8. [Integration Guide](#integration-guide)

## System Overview

The Glass Railing Recommendation System is a multi-step wizard that collects user requirements and generates personalized product recommendations for glass railing installations. The system evaluates risk factors, applies business rules, and provides scored recommendations with detailed analysis.

### Key Features

- Multi-step form wizard with conditional logic
- Risk-based recommendation engine
- Component compatibility validation
- Sorting and filtering capabilities
- Product selection integration
- Real-time scoring and analysis

## Component Architecture

### Core Components Structure

\`\`\`
components/
├── glass-recommendation-wizard.tsx # Main wizard controller
├── steps/ # Individual wizard steps
│ ├── property-type-step.tsx
│ ├── installation-area-step.tsx
│ ├── floor-number-step.tsx
│ ├── glass-height-step.tsx
│ ├── glass-type-step.tsx
│ ├── mounting-type-step.tsx
│ ├── railing-length-step.tsx
│ ├── application-type-step.tsx
│ ├── priority-step.tsx
│ ├── addons-step.tsx
│ └── results-step.tsx
├── lib/
│ └── advance-recommendations.ts # Core recommendation engine
└── product-selection-hybrid.tsx # Product selection interface
\`\`\`

## Data Models

### FormData Interface

\`\`\`typescript
interface FormData {
propertyType: string // Villa/Bungalow, Apartment, Commercial, Hotel
installationArea: string // Apartment, Hospital, School, etc.
floorNumber: string // 0-3, 4-10, 11-20, 20+
glassHeight: string // 2.5, 3, 3.25, 3.5, 4 (in feet)
glassType: string // laminated, toughened, any
mountingType: string // top-mounted, side-mounted, in-floor
railingLength: string // Length in feet
applicationType: string // straight, l-shaped, c-shaped, zig-zag
priority: string // safety, cost
addons: string // Yes, No
nanocoating: string // Additional coating option
}
\`\`\`

### Component Interface

\`\`\`typescript
interface Component {
name: string // Product name (e.g., "Sentry-10+10")
safety: number // Safety score (0-100)
cost: number // Cost score (0-100)
suitability: number // Suitability score (0-100)
type?: string // Component type (e.g., "Sentry", "PVB")
}
\`\`\`

### RecommendationSet Interface

\`\`\`typescript
interface RecommendationSet {
glass: Component
handrail: Component
base: Component
totalScore: number // Overall recommendation score (0-100)
safetyScore: number // Safety evaluation (0-100)
costEfficiency: number // Cost effectiveness (0-100)
riskMitigation: number // Risk mitigation level (0-200, 100 = neutral)
compatibility: number // Component compatibility (0-100)
suitabilityMatch: number // Requirement matching (0-100)
}
\`\`\`

## Risk Calculation Engine

### Risk Factors

#### 1. Floor Risk

**Purpose**: Evaluates installation height risk based on building floor
**Calculation**:
\`\`\`typescript
switch (formData.floorNumber) {
case "0-3": floorRisk = 25; break;
case "4-10": floorRisk = 50; break;
case "11-20": floorRisk = 75; break;
case "20+": floorRisk = 100; break;
default: floorRisk = 25; break;
}
\`\`\`
**Applied When**: Property type is Apartment, Commercial, or Hotel

#### 2. Length Risk

**Purpose**: Assesses structural risk based on railing length
**Formula**:
\`\`\`typescript
if (length <= 10) lengthRisk = 20;
else if (length >= 30) lengthRisk = 100;
else lengthRisk = 20 + ((length - 10) / 20) \* 80;
\`\`\`
**Range**: 20-100 (linear interpolation between 10-30 feet)

#### 3. Shape Risk

**Purpose**: Evaluates complexity risk based on railing configuration
**Values**:

- Straight: 25
- L-shaped: 50
- C-shaped: 75
- Zig-zag: 100

#### 4. Height Risk

**Purpose**: Assesses fall risk based on glass height
**Calculation**:
\`\`\`typescript
if (height >= 4) heightRisk = 5;
else if (height >= 3.5) heightRisk = 10;
else if (height >= 3.25) heightRisk = 15;
else if (height >= 3) heightRisk = 20;
else if (height >= 2.5) heightRisk = 30;
else heightRisk = 35;
\`\`\`
**Logic**: Higher glass = lower fall risk

### Total Risk Calculation

\`\`\`typescript
totalRisk = floorRisk + lengthRisk + shapeRisk + heightRisk
\`\`\`

### Safety Requirement Mapping

\`\`\`typescript
if (totalRisk <= 100) {
requiredSafety = 30;
riskLevel = "Low";
} else if (totalRisk <= 200) {
requiredSafety = 50;
riskLevel = "Moderate";
} else {
requiredSafety = 70;
riskLevel = "High";
}
\`\`\`

## Recommendation Algorithm

### Component Databases

#### Glass Components

\`\`\`typescript
const glassComponents = [
{ name: "Sentry-10+10", safety: 85, cost: 100, suitability: 95, type: "Sentry" },
{ name: "Sentry-8+8", safety: 85, cost: 85, suitability: 90, type: "Sentry" },
{ name: "Sentry-6+6", safety: 65, cost: 80, suitability: 85, type: "Sentry" },
{ name: "PVB-8+8", safety: 70, cost: 65, suitability: 80, type: "PVB" },
{ name: "PVB-6+6", safety: 50, cost: 60, suitability: 75, type: "PVB" },
{ name: "Tough-12mm", safety: 40, cost: 40, suitability: 70, type: "Tough" }
];
\`\`\`

#### Handrail Components

\`\`\`typescript
const handrailComponents = [
{ name: "Oval-(O-80)", safety: 90, cost: 95, suitability: 90 },
{ name: "Oval-(O-60)", safety: 80, cost: 80, suitability: 85 },
{ name: "Square-(S-50)", safety: 70, cost: 60, suitability: 80 },
{ name: "LED-40", safety: 65, cost: 70, suitability: 75 },
{ name: "Square-(S-40)", safety: 60, cost: 60, suitability: 75 },
{ name: "Round-(R-50)", safety: 55, cost: 60, suitability: 70 },
{ name: "Slim-(S-25)", safety: 50, cost: 40, suitability: 65 },
{ name: "LED-20", safety: 50, cost: 55, suitability: 60 },
{ name: "Sleek-(S-17)", safety: 30, cost: 35, suitability: 55 },
{ name: "Sleek-(S-12)", safety: 20, cost: 30, suitability: 50 }
];
\`\`\`

#### Base Components

\`\`\`typescript
const baseComponents = [
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
{ name: "Flex", safety: 75, cost: 65, suitability: 55 }
];
\`\`\`

### Filtering Logic

#### Glass Type Filtering

\`\`\`typescript
function filterGlassByType(glasses: Component[], glassType: string) {
if (glassType === "laminated") {
return glasses.filter(g => g.type === "PVB" || g.type === "Sentry");
} else if (glassType === "toughened") {
return glasses.filter(g => g.type === "Tough");
}
return glasses; // "any" type returns all
}
\`\`\`

#### Handrail Filtering (Add-ons Based)

\`\`\`typescript
if (addons === "No") {
// Exclude LED handrails
filteredHandrails = handrails.filter(h => !h.name.includes("LED"));
} else if (addons === "Yes") {
// Only LED handrails
filteredHandrails = handrails.filter(h => h.name.includes("LED"));
}
\`\`\`

#### Base Filtering (12mm Glass Compatibility)

\`\`\`typescript
function filterBasesFor12mmGlass(bases: Component[], glassName: string) {
if (glassName.includes("12mm")) {
// Exclude incompatible bases for 12mm glass
return bases.filter(base =>
!base.name.includes("Lux") &&
!base.name.includes("Mini") &&
!base.name.includes("SemiMini") &&
!base.name.includes("Micro")
);
}
return bases;
}
\`\`\`

## Scoring System

### Individual Score Calculations

#### Safety Score

\`\`\`typescript
const combinedSafety = (glass.safety + handrail.safety + base.safety) / 3;
const safetyScore = Math.min(100, Math.max(20,
(combinedSafety / Math.max(requiredSafety, 1)) \* 100
));
\`\`\`
**Range**: 20-100
**Logic**: Higher combined safety relative to required safety = higher score

#### Cost Efficiency Score

\`\`\`typescript
const avgCost = (glass.cost + handrail.cost + base.cost) / 3;

if (priority === "cost") {
costEfficiency = Math.max(20, 120 - avgCost);
} else if (priority === "safety") {
costEfficiency = Math.min(100, avgCost _ 0.9 + 10);
} else {
costEfficiency = Math.max(30, 100 - Math.abs(avgCost - 60) _ 0.8);
}
\`\`\`
**Logic**:

- Cost priority: Lower cost = higher efficiency
- Safety priority: Higher cost acceptable for safety
- Balanced: Optimal around cost level 60

#### Risk Mitigation Score

\`\`\`typescript
const riskMitigation = Math.max(0, Math.min(200,
combinedSafety - requiredSafety + 100
));
\`\`\`
**Range**: 0-200
**Center Point**: 100 (neutral)
**Logic**:

- > 100: Positive mitigation (exceeds requirements)
- <100: Negative mitigation (below requirements)

#### Suitability Match Score

\`\`\`typescript
const glassSuitability = Math.max(30, 100 - Math.abs(glass.safety - requiredSafety) _ 1.5);
const handrailSuitability = Math.max(30, 100 - Math.abs(handrail.safety - requiredSafety) _ 1.5);
const baseSuitability = Math.max(30, 100 - Math.abs(base.safety - requiredSafety) \* 1.5);
const suitabilityMatch = (glassSuitability + handrailSuitability + baseSuitability) / 3;
\`\`\`
**Logic**: Components closer to required safety level score higher

#### Total Score Calculation

\`\`\`typescript
const baseScore = safetyScore _ 0.3 + costEfficiency _ 0.3 + suitabilityMatch _ 0.4;
const totalScore = Math.min(100, Math.max(15, baseScore _ compatibility));
\`\`\`
**Weights**:

- Safety Score: 30%
- Cost Efficiency: 30%
- Suitability Match: 40%

## Business Rules

### Installation Area Rules

#### Staircase Installations

- **Handrails**: Uses `staircaseHandrails` array (optimized for stair use)
- **Bases**: Limited to `Dot-(E50)` and `Spigot-(SP250)` only
- **Top-mounted**: Must use Spigot base (compulsory)
- **Side-mounted**: Must use Dot base (compulsory)

#### Balcony Installations

- **Base Restriction**: Spigot bases are replaced with Lux-(T100)
- **Reason**: Spigot not suitable for balcony mounting conditions

### Mounting Type Rules

#### Top-Mounted Restrictions

- **Excluded Bases**: Dot-(E50) and Smart-(C75) (except compulsory cases)
- **Preferred Bases**:
  - 1st recommendation: Ace-(A50)
  - 2nd recommendation: Smart-(C75)

#### Side-Mounted Preferences

- **Preferred Bases**:
  - 1st recommendation: Dot-(E50)
  - 2nd recommendation: Smart-(C75)

### Length-Based Rules

\`\`\`typescript
const railingLength = parseFloat(formData.railingLength) || 0;
if (railingLength > 25) {
// Prioritize Mini-(F55) and Smart-(C75) for long installations
filteredBases = bases.filter(b =>
b.name === "Mini-(F55)" || b.name === "Smart-(C75)"
);
}
\`\`\`

### Glass-Handrail Compatibility

\`\`\`typescript
function getCompatibleHandrail(glassName: string, handrails: Component[]) {
if (glassName.includes("12mm")) {
return handrails.find(h => h.name === "Sleek-(S-12)") || null;
} else if (glassName.includes("8+8")) {
return handrails.find(h => h.name === "Sleek-(S-17)") || null;
} else if (glassName.includes("6+6")) {
return handrails.find(h => h.name === "Sleek-(S-12)") || null;
}
return null;
}
\`\`\`
**Bonus**: Compatible combinations receive +10 total score bonus

### Sorting and Filtering

#### Sort Options

- **Default Order**: Original recommendation ranking
- **Safety Priority**: Sorted by safetyScore (descending)
- **Cost Priority**: Sorted by costEfficiency (descending)

#### Risk Analysis Display

Shows calculated risk factors:

- Total Risk
- Risk Level (Low/Moderate/High)
- Required Safety
- Height Risk

## Integration Guide

### Product Selection Integration

#### Data Flow

1. User completes recommendation wizard
2. Selects "Go to Quote" on preferred recommendation
3. System stores recommendation in localStorage:
   \`\`\`typescript
   const recommendationData = {
   base: mapToProductSelectionName(recommendation.base.name, "base"),
   handrail: mapToProductSelectionName(recommendation.handrail.name, "handrail"),
   glass: mapToProductSelectionName(recommendation.glass.name, "glass"),
   height: parseFloat(formData.glassHeight) || 3.5,
   timestamp: Date.now()
   };
   localStorage.setItem("selectedRecommendation", JSON.stringify(recommendationData));
   \`\`\`

#### Product Selection Auto-Population

\`\`\`typescript
useEffect(() => {
const storedRecommendation = localStorage.getItem("selectedRecommendation");
if (storedRecommendation) {
const { base, handrail, glass, height, timestamp } = JSON.parse(storedRecommendation);

    // Check if recommendation is recent (within 1 hour)
    const isRecent = Date.now() - timestamp < 3600000;

    if (isRecent) {
      setProductData(prev => ({
        ...prev,
        base, handrail, glass, height
      }));
    }

}
}, []);
\`\`\`

### API Integration Points

#### Recommendation Generation

\`\`\`typescript
export function getAdvancedRecommendations(formData: FormData): AdvancedRecommendations {
const riskFactors = calculateRiskFactors(formData);
const safetyRequirement = calculateRequiredSafety(riskFactors.totalRisk);

// Generate and return recommendations
return {
totalRisk: riskFactors.totalRisk,
riskLevel: safetyRequirement.level,
recommendations: sortedRecommendations,
addons: recommendedAddons
};
}

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Maintained By**: Development Team  
**Review Cycle**: Quarterly
