// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaInfoCircle,
//   FaGlasses,
//   FaWeightHanging,
//   FaShieldAlt,
//   FaBalanceScale,
//   FaWater,
//   FaSun,
// } from "react-icons/fa";
// import { pvbGlass, sgpGlass } from "../../../assets/Images";

// const glassTypes = [
//   {
//     name: "PVB Glass",
//     color: "blue",
//     image: { pvbGlass },
//   },
//   {
//     name: "SGP Glass",
//     color: "green",
//     image: { sgpGlass },
//   },
// ];

// const comparisonData = [
//   {
//     title: "Original Material",
//     icon: <FaGlasses />,
//     pvb: "Polyvinyl butyral, a plastic material",
//     sgp: "Ionoplast polymer, advanced plastic",
//     pvbAdvantage: false,
//     sgpAdvantage: true,
//   },
//   {
//     title: "Stiffness & Strength",
//     icon: <FaWeightHanging />,
//     pvb: "Good stiffness and strength for most applications",
//     sgp: "Superior stiffness and strength, up to 5 times stronger than PVB",
//     pvbAdvantage: false,
//     sgpAdvantage: true,
//   },
//   {
//     title: "Loads Capability",
//     icon: <FaShieldAlt />,
//     pvb: "Handles typical loads well",
//     sgp: "Can handle significantly higher loads, allowing for larger glass panels",
//     pvbAdvantage: false,
//     sgpAdvantage: true,
//   },
//   {
//     title: "Post-breakage Strength",
//     icon: <FaBalanceScale />,
//     pvb: "Moderate post-breakage strength",
//     sgp: "Excellent post-breakage strength, maintains integrity even when shattered",
//     pvbAdvantage: false,
//     sgpAdvantage: true,
//   },
//   {
//     title: "Edge Stability",
//     icon: <FaWater />,
//     pvb: "Moderate edge stability, may delaminate over time",
//     sgp: "High edge stability, resistant to delamination and moisture ingress",
//     pvbAdvantage: false,
//     sgpAdvantage: true,
//   },
//   {
//     title: "Clarity & Yellowness",
//     icon: <FaSun />,
//     pvb: "Good clarity, may yellow slightly over time",
//     sgp: "Excellent clarity, highly resistant to yellowing",
//     pvbAdvantage: false,
//     sgpAdvantage: true,
//   },
// ];

// const ComparisonItem: React.FC<{
//   title: string;
//   icon: React.ReactNode;
//   pvb: string;
//   sgp: string;
//   pvbAdvantage: boolean;
//   sgpAdvantage: boolean;
// }> = ({ title, icon, pvb, sgp, pvbAdvantage, sgpAdvantage }) => (
//   <motion.div
//     className="bg-white rounded-lg shadow-lg p-6 mb-6"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <div className="flex items-center mb-4">
//       <div className="text-3xl text-indigo-600 mr-4">{icon}</div>
//       <h3 className="text-xl font-bold">{title}</h3>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div
//         className={`p-4 rounded-lg ${
//           pvbAdvantage ? "bg-blue-100" : "bg-gray-100"
//         }`}
//       >
//         <h4 className="font-semibold text-lg mb-2 flex items-center">
//           PVB Glass
//           {pvbAdvantage && <FaCheckCircle className="text-blue-500 ml-2" />}
//         </h4>
//         <p>{pvb}</p>
//       </div>
//       <div
//         className={`p-4 rounded-lg ${
//           sgpAdvantage ? "bg-green-100" : "bg-gray-100"
//         }`}
//       >
//         <h4 className="font-semibold text-lg mb-2 flex items-center">
//           SGP Glass
//           {sgpAdvantage && <FaCheckCircle className="text-green-500 ml-2" />}
//         </h4>
//         <p>{sgp}</p>
//       </div>
//     </div>
//   </motion.div>
// );

// export default function PVBSGP() {
//   const [activeGlass, setActiveGlass] = useState(0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
//       <motion.h1
//         className="text-4xl font-bold text-center text-indigo-800 mb-12"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 50 }}
//       >
//         PVB vs SGP Glass: A Comprehensive Comparison
//       </motion.h1>

//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           {glassTypes.map((glass, index) => (
//             <motion.div
//               key={glass.name}
//               className={`flex-1 bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all ${
//                 activeGlass === index
//                   ? "ring-4 ring-offset-4 ring-" + glass.color + "-400"
//                   : ""
//               }`}
//               onClick={() => setActiveGlass(index)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src={glass.image}
//                 alt={glass.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h2
//                   className={`text-2xl font-bold text-${glass.color}-600 mb-2`}
//                 >
//                   {glass.name}
//                 </h2>
//                 <p className="text-gray-600">Click to compare</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeGlass}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             transition={{ duration: 0.5 }}
//           >
//             {comparisonData.map((item, index) => (
//               <ComparisonItem
//                 key={index}
//                 title={item.title}
//                 icon={item.icon}
//                 pvb={item.pvb}
//                 sgp={item.sgp}
//                 pvbAdvantage={item.pvbAdvantage}
//                 sgpAdvantage={item.sgpAdvantage}
//               />
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         <motion.div
//           className="bg-white rounded-lg shadow-lg p-6 mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="text-2xl font-bold text-indigo-800 mb-4">
//             Conclusion
//           </h2>
//           <p className="text-gray-700 mb-4">
//             While both PVB and SGP glass have their merits, SGP glass generally
//             offers superior performance across all categories. It excels in
//             strength, load-bearing capacity, post-breakage performance, edge
//             stability, and clarity. However, PVB glass remains a cost-effective
//             and reliable option for many standard applications.
//           </p>
//           <div className="bg-indigo-100 rounded-lg p-4 flex items-start">
//             <FaInfoCircle className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
//             <p className="text-indigo-800">
//               The choice between PVB and SGP glass should be based on specific
//               project requirements, safety considerations, and budget
//               constraints. For high-performance or structurally demanding
//               applications, SGP glass is often the preferred choice.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
        title={"PVB vs SGP Laminated Glass for Railing | Glass Railing Types"}
        description={
          "Compare PVB and SGP glass interlayers for glass railings, balcony glass railings, and staircase glass railings. Discover which glass is best for durability, clarity, and safety in Mumbai, Bangalore, Karnataka, Uttar Pradesh, and India. Learn more about the advantages of PVB and SGP laminated glass for modern glass railing designs."
        }
        keywords={
          "PVB vs SGP glass, glass railing, balcony glass railing, staircase glass railing, modern glass railing designs, laminated glass, glass railing systems, best glass for railings, PVB laminated glass, SGP laminated glass, glass railing solutions, glass railing Mumbai, glass railing Bangalore, glass railing Karnataka, glass railing Uttar Pradesh, safety glass, durable glass railing, weather-resistant glass railing, high-performance glass, frameless glass railing"
        }
        ogImage={pvbsgp}
        ogUrl={"https://www.imperiorailing.com/pvb-vs-sgp-glass"}
      />

      <div>
        <Hero
          img={blogHero}
          altText="hero for blog"
          header="SGP & PVB Differences And Similarities."
          subHeader="Explore the benefits of PVB and SGP glass interlayers for creating durable and stylish glass railings, balcony glass railings, and staircase glass railings in Mumbai, India, ensuring safety, clarity, and strength for your projects."
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
