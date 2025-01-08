// import Introduction from "../../../components/PVBSGP/Introduction";
// import ComparisonChart from "../../../components/PVBSGP/ComparisonChart";
// import LoadCapability from "../../../components/PVBSGP/LoadCapability";
// import PostBreakageStrength from "../../../components/PVBSGP/PostBreakageStrength";
// import ClarityYellowness from "../../../components/PVBSGP/ClarityYellowness";
// import SafetyFeatures from "../../../components/PVBSGP/SafetyFeatures";
// import { Hero } from "../../../components";
// import { blogHero, pvbsgp } from "../../../assets/Images";
// // import AnimatedSection from "../../../components/PVBSGP/AnimatedSection";
// import Metadata from "../../../components/Metatag/Metatag";

// export default function PVBSGP() {
//   return (
//     <>
// <Metadata
//   title={"PVB Laminated Glass| SGP Laminated Glass"}
//   description={
//     "Compare PVB and SGP glass interlayers for glass railings, balcony glass railings, and staircase glass railings. Discover which glass is best for durability, clarity, and safety in Mumbai, Bangalore, Karnataka, Uttar Pradesh, and India. Learn more about the advantages of PVB and SGP laminated glass for modern glass railing designs."
//   }
//   keywords={
//     "PVB vs SGP glass, glass railing, balcony glass railing, staircase glass railing, modern glass railing designs, PVB Laminated Glass,SGP Laminated Glass, glass railing systems, best glass for railings, PVB laminated glass, SGP laminated glass, glass railing solutions, glass railing Mumbai, glass railing Bangalore, glass railing Karnataka, glass railing Uttar Pradesh, safety glass, durable glass railing, weather-resistant glass railing, high-performance glass, frameless glass railing"
//   }
//   ogImage={pvbsgp}
//   ogUrl={"https://www.imperiorailing.com/blog/sgp/pvb/glass/difference"}
// />

//       <div>
//         <Hero
//           img={blogHero}
//           altText="hero for blog"
//           header="SGP & PVB Differences And Similarities."
//           subHeader="Explore the benefits of SGP Laminated Glass vs PVB Laminated Glass interlayers for creating durable and stylish glass railings, balcony glass railings, and staircase glass railings in Mumbai, India, ensuring safety, clarity, and strength for your projects."
//           curve
//         />
//         <main className=" max-w-7xl flex flex-col md:flex-col mx-auto  gap-8 p-4 ">
//           <Introduction />

//           <ComparisonChart />

//           <LoadCapability />

//           <PostBreakageStrength />

//           <ClarityYellowness />

//           <SafetyFeatures />
//         </main>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Infographic from "../../../components/PVBSGP/Infographic";
import ComparisonTable from "../../../components/PVBSGP/ComparisonTable";
import TableOfContents from "../../../components/PVBSGP/TableOfContents";
import { CTAButton, Hero } from "../../../components";
import { blogHero, pvbsgp } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";
import { MdAddCall } from "react-icons/md";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "pvb-glass", title: "PVB Laminated Glass" },
  { id: "sgp-glass", title: "SGP Laminated Glass" },
  { id: "comparison", title: "PVB vs SGP: Key Differences" },
  { id: "price-comparison", title: "Price Comparison" },
  { id: "which-is-better", title: "Which is Better for Glass Railings?" },
  { id: "conclusion", title: "Conclusion" },
];

export default function BlogPost() {
  const [activeSection, setActiveSection] = useState("");
  // const [showCTA, setShowCTA] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Metadata
        title={"PVB Laminated Glass vs SGP Laminated Glass"}
        description={
          "Explore the key differences between PVB laminated glass and SGP laminated glass, focusing on factors such as safety, durability, and price. Learn which material suits your glass railing system needs better and how they compare in performance, thickness, and cost."
        }
        keywords={
          "PVB vs SGP laminated glass, difference between PVB and SGP laminated glass, SGP laminated glass vs PVB, PVB laminated glass vs SGP laminated glass, SGP glass vs PVB glass, SGP laminated glass full form, PVB laminated glass full form, PVB laminated glass price, SGP laminated glass price, laminated glass PVB vs SGP, SGP interlayer laminated glass, SGP glass meaning, PVB laminated safety glass, laminated glass thickness, SGP glass laminating process, SGP laminated glass price in India, high-performance glass railing, glass railing systems, glass railing Mumbai, glass railing Bangalore, glass railing Karnataka, glass railing Uttar Pradesh, safety glass, durable glass railing, weather-resistant glass railing, frameless glass railing."
        }
        ogImage={pvbsgp}
        ogUrl={"https://www.imperiorailing.com/blog/sgp/pvb/glass/difference"}
      />
      <Hero
        img={blogHero}
        altText="hero for blog"
        header="PVB vs SGP Laminated Glass"
        subHeader="Discover the differences between PVB vs SGP laminated glass, including safety, durability, price, and laminating process. Perfect for glass railings, staircases, and balcony railings in India."
        curve
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left"
          style={{ scaleX }}
        />
        <h2 className="text-2xl md:text-4xl mb-8 text-[#03237b]">
          <span className=" text-[#fad000] font-medium">
            PVB vs SGP Laminated Glass:
          </span>{" "}
          <br />
          Which is the Best for Your Glass Railing System?
        </h2>
        <div className="flex flex-col md:flex-row gap-14">
          <TableOfContents sections={sections} activeSection={activeSection} />
          <div className="flex-grow">
            <section id="introduction">
              <span className="text-2xl mb-4 text-[#03237b] font-semibold">
                Introduction: Why the Right Glass Matters for Your Railing
                System
              </span>
              <p className="mb-4 py-2">
                When it comes to designing and installing glass railings, the
                material chosen is crucial for ensuring safety, strength, and
                aesthetics. PVB laminated glass and SGP laminated glass are two
                popular options, each offering distinct advantages. PVB is often
                favored for its cost-effectiveness and suitability for
                residential and commercial applications, providing adequate
                safety and strength. However, it may not perform as well in
                demanding environments due to its susceptibility to moisture and
                hydrolysis over time. In contrast, SGP laminated glass is
                renowned for its exceptional durability, rigidity, and
                resistance to moisture, UV rays, and yellowing. These qualities
                make it ideal for high-strength applications like glass railings
                in high-traffic areas or locations exposed to harsh weather
                conditions. Choosing the right glass for your railing system
                depends on the level of strength, clarity, and long-term
                performance required, ensuring both safety and visual appeal.
              </p>
            </section>

            <section id="pvb-glass">
              <span className="text-2xl  font-semibold text-[#03237b] mb-4">
                What is PVB Laminated Glass?
              </span>
              <Infographic type="pvb" />
              <p className="mb-4 py-4">
                PVB (Polyvinyl Butyral) laminated glass consists of layers of
                glass with a plastic interlayer, known for its ability to reduce
                sound, UV radiation, and enhance safety. It's a widely used
                material for glass railings due to its flexibility and
                reliability.
              </p>
              <h3 className="text-2xl font-semibold mb-2 text-[#03237b]">
                Benefits of PVB Laminated Glass:
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Enhanced Safety: PVB helps hold the glass in place if it
                  breaks, preventing sharp shards from falling.
                </li>
                <li>
                  Sound Insulation: PVB interlayers improve sound insulation,
                  making it perfect for urban areas.
                </li>
                <li>
                  UV Protection: Reduces UV penetration, keeping the interior
                  cooler and protecting furniture from sun damage.
                </li>
              </ul>
            </section>

            <section id="sgp-glass">
              <h2 className="text-2xl mb-4 text-[#03237b] font-semibold">
                What is SGP Laminated Glass?
              </h2>
              <Infographic type="sgp" />
              <p className="mb-4">
                SGP (SentryGlas Plus) laminated glass features a stronger, more
                rigid interlayer compared to PVB. It is known for its higher
                performance in demanding applications, especially in high-rise
                buildings or areas that experience extreme weather conditions.
              </p>
              <h3 className="text-2xl font-semibold mb-2 text-[#03237b] ">
                Benefits of SGP Laminated Glass:
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Superior Strength: SGP's interlayer is up to five times
                  stronger than traditional PVB, providing enhanced structural
                  support.
                </li>
                <li>
                  Durability: Ideal for applications that require high
                  durability, like large glass facades or railings exposed to
                  extreme weather.
                </li>
                <li>
                  Clarity: Provides clearer glass with less distortion, which is
                  important for modern glass railing systems.
                </li>
              </ul>
            </section>

            <section id="comparison">
              <h2 className="text-2xl font-semibold mb-4 text-[#03237b]">
                PVB vs SGP Laminated Glass: Key Differences
              </h2>
              <ComparisonTable />
            </section>

            <section id="price-comparison">
              <h2 className="text-2xl font-semibold mb-4 pt-3 text-[#03237b]">
                Price Comparison: PVB Laminated Glass vs SGP Laminated Glass
              </h2>
              <p className="mb-4">
                When considering your glass railing project, price can play a
                significant role in your decision. Typically, PVB laminated
                glass is more affordable than SGP laminated glass, which can be
                up to 50% more expensive depending on the thickness and
                application.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  PVB Laminated Glass Price: Generally priced lower, making it
                  ideal for residential and smaller commercial projects.
                </li>
                <li>
                  SGP Laminated Glass Price: Higher, due to its advanced
                  strength and durability. Best suited for large-scale or
                  high-performance applications like high-rise buildings.
                </li>
              </ul>
            </section>

            <section id="which-is-better">
              <h2 className="text-2xl font-semibold mb-4 text-[#03237b]">
                Which is Better for Glass Railings?
              </h2>
              <p className="mb-4">
                Deciding between PVB and SGP laminated glass depends on several
                factors, such as the scale of your project, budget, and
                environmental conditions. Here's a breakdown of when to choose
                each:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Choose PVB Laminated Glass If:
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      You are working on a residential glass railing system or
                      smaller commercial projects.
                    </li>
                    <li>Affordability and safety are top priorities.</li>
                    <li>You need UV protection and sound insulation.</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Choose SGP Laminated Glass If:
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Your project involves high-rise buildings, large facades,
                      or locations with extreme weather.
                    </li>
                    <li>You need superior strength and durability.</li>
                    <li>You prioritize clarity and long-term performance.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="conclusion">
              <h2 className="text-2xl font-semibold mb-4 pt-4 text-[#03237b]">
                Conclusion: Make the Right Choice for Your Glass Railing System
              </h2>
              <p className="mb-4">
                Both PVB laminated glass and SGP laminated glass have their
                strengths, but the right choice for your glass railing system
                depends on your specific needs. For most residential projects,
                PVB laminated glass is an excellent choice, offering a balance
                of safety, sound insulation, and cost-effectiveness. However, if
                you need superior strength and clarity for a commercial or
                high-rise project, SGP laminated glass will provide the
                durability and performance you require.
              </p>
              <div className=" w-40">
                <CTAButton phoneNumber="+91 8591953385">
                  <MdAddCall size={16} />
                  CALL NOW
                </CTAButton>
              </div>
            </section>
          </div>
        </div>
        {/* {showCTA && <CTAModal onClose={() => setShowCTA(false)} />} */}
      </div>
    </>
  );
}
