// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CTAButton } from "../Button";
// import { MdAddCall } from "react-icons/md";
// import EnquiryButton from "../EnquiryButton/EnquiryButton";

// const AluminumVSSteel: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<string>("");

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // Function to handle scroll events
//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     let currentSection = "";
//     sections.forEach((section: Element) => {
//       const sectionTop = (section as HTMLElement).offsetTop;
//       if (window.scrollY >= sectionTop - 100) {
//         currentSection = (section as HTMLElement).id;
//       }
//     });
//     setActiveSection(currentSection);
//   };

//   // Hook to add and remove scroll event listener
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="flex gap-8">
//       <nav className="hidden md:block sticky top-4 h-fit w-64 ">
//         <ul className="space-y-2">
//           <li>
//             <a
//               href="#introduction"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "introduction"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Introduction
//             </a>
//           </li>
//           <li>
//             <a
//               href="#framed-glass"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "framed-glass"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Framed Glass Railing
//             </a>
//           </li>
//           <li>
//             <a
//               href="#framed-porch-cores"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "framed-porch-cores"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Framed Pros and Cons
//             </a>
//           </li>
//           <li>
//             <a
//               href="#frameless-glass"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "frameless-glass"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Frameless Glass Railing
//             </a>
//           </li>
//           <li>
//             <a
//               href="#frameless-porch-cores"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "frameless-porch-cores"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Frameless Pros and Cons
//             </a>
//           </li>
//           <li>
//             <a
//               href="#comprison"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "comprison"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Comparison
//             </a>
//           </li>
//           <li>
//             <a
//               href="#right-fit-foryou"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "right-fit-foryou"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Right Fit For You?
//             </a>
//           </li>
//           <li>
//             <a
//               href="#whyframless"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "whyframless"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Why Frameless Railing?
//             </a>
//           </li>
//           <li>
//             <a
//               href="#casestudy"
//               className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
//                 activeSection === "casestudy"
//                   ? "bg-[#fad000] text-[#03237b] font-bold"
//                   : "hover:bg-gray-200"
//               }`}
//             >
//               Case Study
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <motion.main className="max-w-6xl mx-auto w-full">
//         <motion.section
//           className="mb-12"
//           id="introduction"
//           variants={sectionVariants}
//         >
//           <span className="text-4xl font-semibold mb-4 text-[#03237b]">
//             Introduction
//           </span>
//           <p className="text-[#1a1919] leading-relaxed text-justify">
//             <strong>Glass railings</strong> are a stylish and functional
//             solution for both residential and commercial properties. Whether
//             you're upgrading your <strong>balcony</strong>,{" "}
//             <strong>staircase</strong>, or <strong>outdoor deck</strong>, glass
//             railings provide an elegant, contemporary aesthetic while
//             prioritizing safety and durability. Among the top choices for glass
//             railing systems, <strong>framed glass railings</strong> and{" "}
//             <strong>frameless glass railings</strong> are the most sought-after
//             styles.
//           </p>
//         </motion.section>

//         <motion.section
//           className="mb-12"
//           id="framed-glass"
//           variants={sectionVariants}
//         >
//           <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
//             <strong className="text-[#fad000] font-medium">
//               Aluminium Glass Railings:
//             </strong>{" "}
//             Lightweight and Resilient
//           </h2>
//           <div className="flex flex-col md:flex-row gap-6 items-center">
//             <img
//               src="https://www.vistarailings.com/wp-content/uploads/2022/05/James_Cable_Summer2021_5.jpg"
//               alt="Framed Glass Railing"
//               width={500}
//               height={300}
//               className="rounded-lg shadow-lg"
//             />
//             <div>
//               <p className="text-[#292929] mb-4 text-justify">
//                 Aluminium glass railings have gained popularity in recent years,
//                 and for good reason. They offer a combination of strength,
//                 flexibility, and low maintenance, making them an ideal choice
//                 for many homeowners and businesses.
//               </p>
//               <p className="text-2xl font-semibold mb-2 text-[#03237b]">
//                 Why Aluminium Stands Out:
//               </p>
//               <ul className="list-disc list-inside text-[#292929] space-y-2">
//                 <li>
//                   <b>Lightweight:</b> Aluminium is a lightweight material,
//                   making it easy to install and handle. This is particularly
//                   beneficial for balcony and deck installations where weight can
//                   be a consideration.
//                 </li>
//                 <li>
//                   <b>Rust-Resistant:</b> One of the standout features of
//                   aluminium glass railings is their natural resistance to rust
//                   and corrosion, making them an excellent choice for coastal
//                   areas or outdoor spaces exposed to the elements.
//                 </li>
//                 <li>
//                   <b>Durable and Low Maintenance:</b> Unlike wood or other
//                   materials, aluminium doesn’t require regular painting or
//                   sealing. A quick cleaning is often all that's needed to
//                   maintain its appearance
//                 </li>
//                 <li>
//                   <b>Versatile Designs:</b> Aluminium can be powder-coated in a
//                   range of colors, allowing you to match the railings to your
//                   home’s exterior or interior décor.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
//           className="mb-12"
//           id="framed-porch-cores"
//           variants={sectionVariants}
//         >
//           <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
//             <strong className="text-[#fad000] font-medium">
//               Aluminum railing Pros and Cons:
//             </strong>{" "}
//             The Perfect Combination
//           </h3>
//           <div className="lg:flex gap-12 mt-2">
//             <div className=" pt-4">
//               <span className="text-xl font-semibold text-[#03237b]">
//                 Pros:
//               </span>
//               <ul className="list-disc list-inside text-[#292929] space-y-2">
//                 <li>
//                   Rust-resistant, perfect for areas with high moisture or near
//                   the coast
//                 </li>
//                 <li>Easy to maintain, requires only occasional cleaning.</li>
//                 <li>
//                   Cost-effective, providing a budget-friendly option for glass
//                   railing systems.
//                 </li>
//                 <li>Lightweight and easy to install.</li>
//               </ul>
//             </div>
//             <div className=" pt-4">
//               <span className="text-xl font-semibold text-[#03237b]">
//                 Cons:
//               </span>
//               <ul className="list-disc list-inside text-[#292929] space-y-2">
//                 <li>
//                   Not as strong as stainless steel, though still strong enough
//                   for most residential applications
//                 </li>
//                 <li>Prone to scratching, especially in high-traffic areas.</li>
//               </ul>
//             </div>
//           </div>
//         </motion.section>

//         <motion.section
//           className="mb-12"
//           id="frameless-glass"
//           variants={sectionVariants}
//         >
//           <p className="text-3xl font-semibold mb-4 text-[#03237b]">
//             <strong className="text-[#fad000] font-medium">
//               Stainless Steel Glass Railings:
//             </strong>{" "}
//             Strong and Timeless
//           </p>

//           <div className="flex flex-col md:flex-row gap-6 items-center">
//             <div>
//               <p className="text-[#292929] mb-4 text-justify">
//                 Stainless steel glass railings offer a more premium look and are
//                 known for their exceptional strength and durability. They are
//                 commonly used in high-traffic areas and applications where
//                 structural integrity is crucial, such as staircases and
//                 balconies in commercial buildings.
//               </p>
//               <div className="text-2xl font-semibold mb-2 text-[#03237b]">
//                 Why Stainless Steel Stands Out
//               </div>
//               <ul className="list-disc list-inside text-[#292929] space-y-2">
//                 <li>
//                   <b>Strength:</b> Stainless steel is renowned for its strength
//                   and longevity. It’s the perfect choice for heavy-duty
//                   applications.
//                 </li>
//                 <li>
//                   <b>Durability:</b> Stainless steel is highly resistant to
//                   corrosion and rust, though it may require periodic cleaning to
//                   maintain its appearance.
//                 </li>
//                 <li>
//                   <b>Timeless Appearance:</b> The polished, shiny finish of
//                   stainless steel adds a sleek and industrial touch to any
//                   space, making it ideal for modern and minimalist designs.
//                 </li>
//                 <li>
//                   <b>Premium Look:</b> If you’re looking for high-end glass
//                   railings, stainless steel is a top choice. It adds value and
//                   sophistication to any balcony or deck.
//                 </li>
//               </ul>
//             </div>
//             <img
//               src="https://media.licdn.com/dms/image/v2/D5612AQFSrJNA4S6gZA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1723281646772?e=2147483647&v=beta&t=H3DsOIRVLxXCOhpL8QeldPByZFCiyYNF_5wH9BwVzm4"
//               alt="Frameless Glass Railing"
//               className="rounded-lg shadow-lg"
//               width={500}
//               height={300}
//             />
//           </div>
//         </motion.section>

// <motion.section
//   className="mb-12"
//   id="frameless-porch-cores"
//   variants={sectionVariants}
// >
//   <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
//     <strong className="text-[#fad000] font-medium">
//       Frameless Pros and Cons:
//     </strong>{" "}
//     The Modern Choice
//   </h3>
//   <div className="lg:flex gap-12 mt-2">
//     <div className=" pt-4">
//       <span className="text-xl font-semibold text-[#03237b]">
//         Pros:
//       </span>
//       <ul className="list-disc list-inside text-[#292929] space-y-2">
//         <li>
//           Incredibly strong, ideal for high-traffic areas and heavy-duty
//           applications.
//         </li>
//         <li>
//           Durable and rust-resistant, ideal for both indoor and outdoor
//           use.
//         </li>
//         <li>Provides a premium, polished look.</li>
//         <li>
//           Requires minimal maintenance, though it does need periodic
//           polishing.
//         </li>
//       </ul>
//     </div>
//     <div className=" pt-4">
//       <span className="text-xl font-semibold text-[#03237b]">
//         Cons:
//       </span>
//       <ul className="list-disc list-inside text-[#292929] space-y-2">
//         <li>
//           Heavier than aluminium, making installation more challenging.
//         </li>
//         <li>May require more maintenance for glass cleaning.</li>
//         <li>More expensive compared to aluminium.</li>
//         <li>
//           The finish can dull over time and may require occasional
//           polishing.
//         </li>
//       </ul>
//     </div>
//   </div>
// </motion.section>

// <motion.section
//   className="mb-12"
//   id="comprison"
//   variants={sectionVariants}
// >
//   <div className="text-3xl font-semibold mb-4 text-[#03237b]">
//     Aluminium Glass Railings vs Stainless Steel Glass Railings: A
//     Comparison
//   </div>
//   <div className="overflow-x-auto">
//     <table className="w-full border-collapse">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="border p-2 text-left text-[#03237b]">
//             Feature
//           </th>
//           <th className="border p-2 text-left text-[#03237b]">
//             Aluminium Glass Railings
//           </th>
//           <th className="border p-2 text-left text-[#03237b]">
//             Stainless Steel Glass Railings
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="border p-2">Aesthetics</td>
//           <td className="border p-2">Sleek, modern, and versatile</td>
//           <td className="border p-2">
//             Industrial, polished, and strong
//           </td>
//         </tr>
//         <tr>
//           <td className="border p-2">Durability</td>
//           <td className="border p-2">
//             Lightweight, rust-resistant, durable
//           </td>
//           <td className="border p-2">Extremely strong and durable</td>
//         </tr>
//         <tr>
//           <td className="border p-2">Maintenance</td>
//           <td className="border p-2">Low maintenance, easy to clean</td>
//           <td className="border p-2">
//             Requires periodic maintenance to preserve shine
//           </td>
//         </tr>
//         <tr>
//           <td className="border p-2">Weight</td>
//           <td className="border p-2">
//             Lightweight and easy to install
//           </td>
//           <td className="border p-2">
//             Heavier, sturdier, and requires more effort
//           </td>
//         </tr>
//         <tr>
//           <td className="border p-2">Cost</td>
//           <td className="border p-2">Budget-friendly option</td>
//           <td className="border p-2">
//             Typically higher cost for premium strength
//           </td>
//         </tr>
//         <tr>
//           <td className="border p-2">Best For</td>
//           <td className="border p-2">
//             Contemporary spaces, coastal areas, budget-conscious
//             projects
//           </td>
//           <td className="border p-2">
//             High-traffic, industrial, or heavy-duty applications
//           </td>
//         </tr>
//         <tr>
//           <td className="border p-2">Finish Options</td>
//           <td className="border p-2">
//             Multiple finish options available
//           </td>
//           <td className="border p-2">
//             Classic, more limited finish options
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </motion.section>

//         <motion.section
//           className="mb-12"
//           id="right-fit-foryou"
//           variants={sectionVariants}
//         >
//           <div className="text-3xl font-semibold mb-4 text-[#03237b]">
//             Choosing the Right Glass Railing for You
//           </div>
//           <p className="text-[#292929] mb-4">
//             Your choice between <strong>framed and frameless railings</strong>{" "}
//             depends on your priorities and the overall look you want to achieve:
//           </p>
//           <ul className="list-disc list-inside text-[#292929] space-y-2">
//             <li>
//               <b>If you value classic design with added structural support,</b>{" "}
//               framed railings offer a practical and versatile solution.
//             </li>
//             <li>
//               <b>
//                 If you're drawn to a modern, open aesthetic with seamless views,
//               </b>{" "}
//               frameless railings are the perfect fit.
//             </li>
//           </ul>
//           <p className="text-[#292929] mt-4">
//             At <b>Imperio Railing Systems,</b> we understand that every space is
//             unique. While we excel in crafting and installing{" "}
//             <strong>frameless glass railings,</strong> our team is here to help
//             you explore all options and create a solution tailored to your
//             needs.
//           </p>
//         </motion.section>

//         <motion.section
//           className="mb-12"
//           id="whyframless"
//           variants={sectionVariants}
//         >
//           <div className="text-3xl font-semibold mb-4 text-[#03237b]">
//             Why Frameless Railings?
//           </div>
//           <p className="text-[#292929] text-justify">
//             Frameless railings combine form and function in a way that framed
//             options cannot match. The sleek design, unobstructed views, and
//             low-maintenance benefits make them the ideal choice for those
//             seeking a contemporary look. Whether it's a deck overlooking a lush
//             garden or a staircase in a chic interior, frameless railings elevate
//             the space effortlessly.
//           </p>
//         </motion.section>

//         <motion.section
//           className="mb-12"
//           id="casestudy"
//           variants={sectionVariants}
//         >
//           <p className="text-3xl font-semibold mb-4 text-[#03237b]">
//             Case Study
//           </p>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <p className="text-[#292929] mb-2 text-justify">
//               A real-life example comes from our work on two prestigious resorts
//               in Goa: DoubleTree by Hilton and W Hotel Goa. For both properties,
//               we implemented aluminium glass railings due to their lightweight,
//               rust-resistant, and low-maintenance properties, making them ideal
//               for the coastal environment. The railings provided a sleek, modern
//               look that complemented the luxurious and contemporary designs of
//               both resorts. While stainless steel glass railings were also
//               considered, the resorts chose aluminium for its cost-effectiveness
//               and ease of installation, which allowed us to meet both aesthetic
//               and practical needs while ensuring durability in the humid, salty
//               air of Goa
//             </p>
//             <p className="text-[#292929] text-justify">
//               When it comes to selecting a glass railing system for your home or
//               office, two materials come to the forefront: stainless steel and
//               aluminium. Both materials offer unique advantages, and the right
//               choice depends on your specific needs, budget, and aesthetic
//               preferences. In this blog, we’ll compare stainless steel glass
//               railings with aluminium glass railings, examining their features,
//               benefits, and drawbacks to help you make an informed decision.
//             </p>
//           </div>
//         </motion.section>
//         <div className=" w-40">
//           <CTAButton phoneNumber="+91 8591953385">
//             <MdAddCall size={16} />
//             CALL NOW
//           </CTAButton>
//         </div>
//       </motion.main>
//       <EnquiryButton />
//     </div>
//   );
// };

// export default AluminumVSSteel;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ssglassrailing, aluminiumglass } from "../../assets/Images";

// import EnquiryButton from "../EnquiryButton/EnquiryButton";

const AluminumVSSteel: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";
    sections.forEach((section: Element) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        currentSection = (section as HTMLElement).id;
      }
    });
    setActiveSection(currentSection);
  };

  // Hook to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex gap-8">
      <nav className="hidden md:block sticky top-4 h-fit w-64 ">
        <ul className="space-y-2">
          <li>
            <a
              href="#introduction"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "introduction"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="#aluminium-glass"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "framed-glass"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Aluminium Glass Railings
            </a>
          </li>
          <li>
            <a
              href="#aluminium-pros-cons"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "framed-porch-cores"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Aluminium Pros and Cons
            </a>
          </li>
          <li>
            <a
              href="#stainless-steel-glass"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "frameless-glass"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Stainless Steel Glass Railings
            </a>
          </li>
          <li>
            <a
              href="#frameless-porch-cores"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "frameless-porch-cores"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Frameless Pros and Cons
            </a>
          </li>
          <li>
            <a
              href="#comprison"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "comprison"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Comparison
            </a>
          </li>
          <li>
            <a
              href="#right-fit-foryou"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "right-fit-foryou"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Right Fit For You?
            </a>
          </li>
          <li>
            <a
              href="#whyframless"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "whyframless"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Why Frameless Railing?
            </a>
          </li>
          <li>
            <a
              href="#casestudy"
              className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeSection === "casestudy"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Case Study
            </a>
          </li>
        </ul>
      </nav>

      <motion.main className="max-w-6xl mx-auto w-full">
        <motion.section
          className="mb-12"
          id="introduction"
          variants={sectionVariants}
        >
          <span className="text-4xl font-semibold mb-4 text-[#03237b]">
            Introduction
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            When it comes to selecting a glass railing system for your home or
            office, two materials come to the forefront: stainless steel and
            aluminium. Both materials offer unique advantages, and the right
            choice depends on your specific needs, budget, and aesthetic
            preferences. In this blog, we’ll compare stainless steel glass
            railings with aluminium glass railings, examining their features,
            benefits, and drawbacks to help you make an informed decision.
          </p>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            Glass railings provide a sleek and modern solution for both indoor
            and outdoor spaces. Whether you're installing railings on your
            balcony, deck, or stairs, glass railings can transform any space
            with their clear, unobstructed views and contemporary appearance.
            Both stainless steel and aluminium can be used to frame glass
            railings, and each material offers different advantages that can
            suit different needs and tastes.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aluminium-glass"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Aluminium Glass Railings:
            </strong>{" "}
            Lightweight and Resilient
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={aluminiumglass}
              alt="Framed Glass Railing"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Aluminium glass railings have gained popularity in recent years,
                and for good reason. They offer a combination of strength,
                flexibility, and low maintenance, making them an ideal choice
                for many homeowners and businesses.
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Lightweight:</b> Aluminium is a lightweight material,
                  making it easy to install and handle. This is particularly
                  beneficial for balcony and deck installations where weight can
                  be a consideration.
                </li>
                <li>
                  <b>Rust-Resistant:</b> One of the standout features of
                  aluminium glass railings is their natural resistance to rust
                  and corrosion, making them an excellent choice for coastal
                  areas or outdoor spaces exposed to the elements.
                </li>
                <li>
                  <b>Durable and Low Maintenance:</b> Unlike wood or other
                  materials, aluminium doesn’t require regular painting or
                  sealing. A quick cleaning is often all that's needed to
                  maintain its appearance.
                </li>
                <li>
                  <b>Versatile Designs:</b> Aluminium can be powder-coated in a
                  range of colors, allowing you to match the railings to your
                  home’s exterior or interior décor.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aluminium-pros-cons"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <b className="text-[#fad000] font-medium">
              Aluminium Glass Railings:
            </b>{" "}
            Pros and Cons
          </p>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Pros:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  Rust-resistant, perfect for areas with high moisture or near
                  the coast.
                </li>
                <li>Easy to maintain, requires only occasional cleaning.</li>
                <li>
                  Cost-effective, providing a budget-friendly option for glass
                  railing systems.
                </li>
                <li>Lightweight and easy to install.</li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Cons:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  Not as strong as stainless steel, though still strong enough
                  for most residential applications.
                </li>
                <li>Prone to scratching, especially in high-traffic areas.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="stainless-steel-glass"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Stainless Steel Glass Railings:
            </strong>{" "}
            Strong and Timeless
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Stainless steel glass railings offer a more premium look and are
                known for their exceptional strength and durability. They are
                commonly used in high-traffic areas and applications where
                structural integrity is crucial, such as staircases and
                balconies in commercial buildings.
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Strength:</b> Stainless steel is renowned for its strength
                  and longevity. It’s the perfect choice for heavy-duty
                  applications.
                </li>
                <li>
                  <b>Durability:</b> Stainless steel is highly resistant to
                  corrosion and rust, though it may require periodic cleaning to
                  maintain its appearance.
                </li>
                <li>
                  <b>Timeless Appearance:</b> The polished, shiny finish of
                  stainless steel adds a sleek and industrial touch to any
                  space, making it ideal for modern and minimalist designs.
                </li>
                <li>
                  <b>Premium Look:</b> If you’re looking for high-end glass
                  railings, stainless steel is a top choice. It adds value and
                  sophistication to any balcony or deck.
                </li>
              </ul>
            </div>
            <img
              src={ssglassrailing}
              alt="Stainless Steel Glass Railings"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.section>
        <motion.section
          className="mb-12"
          id="frameless-porch-cores"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <b className="text-[#fad000] font-medium">
              Stainless Steel Glass Railing:
            </b>{" "}
            Pros and Cons
          </p>
          <div className="lg:flex gap-12 mt-2">
            <div className=" pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Pros:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  Incredibly strong, ideal for high-traffic areas and heavy-duty
                  applications.
                </li>
                <li>
                  Durable and rust-resistant, ideal for both indoor and outdoor
                  use.
                </li>
                <li>Provides a premium, polished look.</li>
                <li>
                  Requires minimal maintenance, though it does need periodic
                  polishing.
                </li>
              </ul>
            </div>
            <div className=" pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Cons:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  Heavier than aluminium, making installation more challenging.
                </li>
                <li>May require more maintenance for glass cleaning.</li>
                <li>More expensive compared to aluminium.</li>
                <li>
                  The finish can dull over time and may require occasional
                  polishing.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="mb-12"
          id="comprison"
          variants={sectionVariants}
        >
          <div className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Aluminium Glass Railings vs Stainless Steel Glass Railings:
            </strong>{" "}
            A Comparison
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left text-[#03237b]">
                    Feature
                  </th>
                  <th className="border p-2 text-left text-[#03237b]">
                    Aluminium Glass Railings
                  </th>
                  <th className="border p-2 text-left text-[#03237b]">
                    Stainless Steel Glass Railings
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Aesthetics</td>
                  <td className="border p-2">Sleek, modern, and versatile</td>
                  <td className="border p-2">
                    Industrial, polished, and strong
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Durability</td>
                  <td className="border p-2">
                    Lightweight, rust-resistant, durable
                  </td>
                  <td className="border p-2">Extremely strong and durable</td>
                </tr>
                <tr>
                  <td className="border p-2">Maintenance</td>
                  <td className="border p-2">Low maintenance, easy to clean</td>
                  <td className="border p-2">
                    Requires periodic maintenance to preserve shine
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Weight</td>
                  <td className="border p-2">
                    Lightweight and easy to install
                  </td>
                  <td className="border p-2">
                    Heavier, sturdier, and requires more effort
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Cost</td>
                  <td className="border p-2">Budget-friendly option</td>
                  <td className="border p-2">
                    Typically higher cost for premium strength
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Best For</td>
                  <td className="border p-2">
                    Contemporary spaces, coastal areas, budget-conscious
                    projects
                  </td>
                  <td className="border p-2">
                    High-traffic, industrial, or heavy-duty applications
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Finish Options</td>
                  <td className="border p-2">
                    Multiple finish options available
                  </td>
                  <td className="border p-2">
                    Classic, more limited finish options
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>
        <motion.section
          className="mb-12"
          id="price-comparison"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            Aluminium Glass Railings vs Stainless Steel Glass Railings: Price
          </h3>
          <p className="text-[#292929] leading-relaxed text-justify">
            In terms of pricing, aluminium glass railings are generally more
            affordable than stainless steel alternatives. If you’re on a budget
            or looking for a more economical solution, aluminium glass railings
            offer great value without compromising on quality or style. However,
            if you are seeking premium quality, stainless steel offers
            exceptional durability at a higher cost.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="durability-comparison"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            Durability of Stainless Steel Glass Railings vs Aluminium Glass
            Railings
          </h3>
          <p className="text-[#292929] leading-relaxed text-justify">
            Both stainless steel and aluminium offer excellent durability, but
            in different ways:
          </p>
          <ul className="list-disc list-inside text-[#292929] space-y-4 mt-4">
            <li>
              <strong>Stainless Steel Glass Railings:</strong> Stainless steel
              glass railings are stronger and better suited for heavy-duty
              applications. They excel in high-traffic areas and places where
              strength is a priority.
            </li>
            <li>
              <strong>Aluminium Glass Railings:</strong> Aluminium glass
              railings are highly durable as well, particularly in
              moisture-prone areas. Aluminium is also resistant to rust and
              corrosion, making it ideal for coastal environments or areas with
              high humidity.
            </li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-12"
          id="right-fit-foryou"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            Which is the Right Fit For You?
          </p>
          <p className="text-[#292929] leading-relaxed text-justify">
            Ultimately, choosing between stainless steel vs aluminium glass
            railings depends on your specific needs:
            <b>
              {" "}
              For modern aesthetics, cost-effectiveness, and low maintenance,
            </b>{" "}
            aluminium glass railings are a great choice.
            <b>For premium strength, durability, and a classic look,</b>{" "}
            stainless steel glass railings are ideal. At Imperio Railing
            Systems, we offer both aluminium and stainless steel glass railings,
            tailored to suit the needs of your project. Whether you’re upgrading
            your balcony, deck, or stairs, we provide high-quality railing
            solutions that combine style and strengt
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="whyframless"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            Why Choose Frameless Glass Railings?
          </p>
          <p className="text-[#292929] leading-relaxed text-justify">
            Frameless glass railings offer an uninterrupted view and a sleek,
            minimalist look. With no visible posts or frames, they are an
            excellent option for spaces where you want to prioritize the view
            while maintaining safety.
          </p>
        </motion.section>
        <motion.section
          className="mb-12"
          id="casestudy"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            Case Study
          </h3>
          <p className="text-[#292929] leading-relaxed text-justify">
            A real-life example comes from our work on two prestigious resorts
            in Goa: DoubleTree by Hilton and W Hotel Goa. For both properties,
            we implemented aluminium glass railings due to their lightweight,
            rust-resistant, and low-maintenance properties, making them ideal
            for the coastal environment. The railings provided a sleek, modern
            look that complemented the luxurious and contemporary designs of
            both resorts. While stainless steel glass railings were also
            considered, the resorts chose aluminium for its cost-effectiveness
            and ease of installation, which allowed us to meet both aesthetic
            and practical needs while ensuring durability in the humid, salty
            air of Goa.
          </p>
        </motion.section>
        <motion.section
          className="mb-12"
          id="casestudy"
          variants={sectionVariants}
        ></motion.section>
      </motion.main>
    </div>
  );
};

export default AluminumVSSteel;
