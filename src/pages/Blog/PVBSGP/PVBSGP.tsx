import Introduction from "../../../components/PVBSGP/Introduction";
import ComparisonChart from "../../../components/PVBSGP/ComparisonChart";
import LoadCapability from "../../../components/PVBSGP/LoadCapability";
import PostBreakageStrength from "../../../components/PVBSGP/PostBreakageStrength";
import ClarityYellowness from "../../../components/PVBSGP/ClarityYellowness";
import SafetyFeatures from "../../../components/PVBSGP/SafetyFeatures";
import { Hero } from "../../../components";
import { blogHero, pvbsgp } from "../../../assets/Images";
// import AnimatedSection from "../../../components/PVBSGP/AnimatedSection";
import Metadata from "../../../components/Metatag/Metatag";

export default function PVBSGP() {
  return (
    <>
      <Metadata
        title={"PVB Laminated Glass| SGP Laminated Glass"}
        description={
          "Compare PVB and SGP glass interlayers for glass railings, balcony glass railings, and staircase glass railings. Discover which glass is best for durability, clarity, and safety in Mumbai, Bangalore, Karnataka, Uttar Pradesh, and India. Learn more about the advantages of PVB and SGP laminated glass for modern glass railing designs."
        }
        keywords={
          "PVB vs SGP glass, glass railing, balcony glass railing, staircase glass railing, modern glass railing designs, PVB Laminated Glass,SGP Laminated Glass, glass railing systems, best glass for railings, PVB laminated glass, SGP laminated glass, glass railing solutions, glass railing Mumbai, glass railing Bangalore, glass railing Karnataka, glass railing Uttar Pradesh, safety glass, durable glass railing, weather-resistant glass railing, high-performance glass, frameless glass railing"
        }
        ogImage={pvbsgp}
        ogUrl={"https://www.imperiorailing.com/blog/sgp/pvb/glass/difference"}
      />

      <div>
        <Hero
          img={blogHero}
          altText="hero for blog"
          header="SGP & PVB Differences And Similarities."
          subHeader="Explore the benefits of SGP Laminated Glass vs PVB Laminated Glass interlayers for creating durable and stylish glass railings, balcony glass railings, and staircase glass railings in Mumbai, India, ensuring safety, clarity, and strength for your projects."
          curve
        />
        <main className=" max-w-7xl flex flex-col md:flex-col mx-auto  gap-8 p-4 ">
          <Introduction />

          <ComparisonChart />

          <LoadCapability />

          <PostBreakageStrength />

          <ClarityYellowness />

          <SafetyFeatures />
        </main>
      </div>
    </>
  );
}
