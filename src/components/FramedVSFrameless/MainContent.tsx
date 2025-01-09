// import React from "react";
// import { motion } from "framer-motion";

// const MainContent: React.FC = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.main
//       className="max-w-4xl mx-auto"
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.section className="mb-12" variants={sectionVariants}>
//         <h2 className="text-4xl font-semibold mb-4 text-[#03237b]">
//           Introduction
//         </h2>
//         <p className="text-[#292929] leading-relaxed">
//           Glass railings are an elegant and versatile choice for both homes and
//           businesses. Whether you're enhancing a{" "}
//           <strong>balcony, staircase, or outdoor deck,</strong> they offer a
//           sleek aesthetic while maintaining safety and functionality. Among the
//           options available,{" "}
//           <strong>framed and frameless glass railings</strong> stand out as two
//           popular styles. Let's explore what each has to offer and why frameless
//           glass railings might be the ideal solution for modern spaces.
//         </p>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
//           <strong className="text-[#fad000] font-medium">
//             Framed Glass Railings:
//           </strong>{" "}
//           Structured and Stylish
//         </h2>
//         <div className="flex flex-col md:flex-row gap-6 items-center">
//           <img
//             src="https://www.vistarailings.com/wp-content/uploads/2022/05/James_Cable_Summer2021_5.jpg"
//             alt="Framed Glass Railing"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-lg"
//           />
//           <div>
//             <p className="text-[#292929] mb-4">
//               <strong>Framed glass railings</strong> feature a supportive frame
//               that surrounds the glass panels. This design is ideal for spaces
//               where added structure and classic aesthetics are desired.
//             </p>
//             <h3 className="text-2xl font-semibold mb-2 text-[#03237b]">
//               Key Benefits:
//             </h3>
//             <ul className="list-disc list-inside text-[#292929] space-y-2">
//               <li>
//                 <b>Timeless Design:</b> Adds a defined, traditional look
//               </li>
//               <li>
//                 <b>Enhanced Stability:</b> Ideal for high-traffic areas
//               </li>
//               <li>
//                 <b>Customizable Finishes:</b> Available in various materials
//               </li>
//               <li>
//                 <b>Cost-Effective:</b> Elegant option at a lower cost
//               </li>
//             </ul>
//           </div>
//         </div>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
//           <strong className="text-[#fad000] font-medium">
//             Frameless Glass Railings:
//           </strong>{" "}
//           Seamless and Sophisticated
//         </h3>
//         <div className="flex flex-col md:flex-row gap-6 items-center">
//           <div>
//             <p className="text-[#292929] mb-4">
//               Frameless glass railings are designed to maximize transparency,
//               offering a sleek, modern look that enhances the overall aesthetic
//               of any space. With no visible frames, these railings provide an
//               uninterrupted view and a sense of openness.
//             </p>
//             <h3 className="text-2xl font-semibold mb-2 text-[#03237b]">
//               Why Frameless Stands Out:
//             </h3>
//             <ul className="list-disc list-inside text-[#292929] space-y-2">
//               <li>
//                 <b>Unobstructed Views:</b> Perfect for scenic areas
//               </li>
//               <li>
//                 <b>Minimalist Appeal:</b> Clean, modern lines
//               </li>
//               <li>
//                 <b>Durability Meets Elegance:</b> Strong and safe
//               </li>
//               <li>
//                 <b>Easy Maintenance:</b> Straightforward cleaning
//               </li>
//             </ul>
//           </div>
//           <img
//             src="https://5.imimg.com/data5/SELLER/Default/2024/6/426640389/NA/KS/OM/222958238/tempered-glass-railing-500x500.jpg"
//             alt="Frameless Glass Railing"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
//           Comparison
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border p-2 text-left text-[#03237b]">Feature</th>
//                 <th className="border p-2 text-left text-[#03237b]">
//                   Framed Glass Railings
//                 </th>
//                 <th className="border p-2 text-left text-[#03237b]">
//                   Frameless Glass Railings
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border p-2">Aesthetics</td>
//                 <td className="border p-2">Structured and classic</td>
//                 <td className="border p-2">Minimalistic and modern</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">Durability</td>
//                 <td className="border p-2">Extra support from the frame</td>
//                 <td className="border p-2">
//                   Strong tempered glass with sleek fittings
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border p-2">View</td>
//                 <td className="border p-2">Slightly obstructed</td>
//                 <td className="border p-2">Completely unobstructed</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">Cost</td>
//                 <td className="border p-2">Budget-friendly</td>
//                 <td className="border p-2">
//                   Higher cost due to premium materials
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border p-2">Maintenance</td>
//                 <td className="border p-2">
//                   Requires care for frame materials
//                 </td>
//                 <td className="border p-2">Easier to clean without frames</td>
//               </tr>
//               <tr>
//                 <td className="border p-2">Best For</td>
//                 <td className="border p-2">
//                   Traditional and high-traffic spaces
//                 </td>
//                 <td className="border p-2">
//                   Contemporary, scenic, and luxury spaces
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border p-2">Finish Options</td>
//                 <td className="border p-2">Limited Options</td>
//                 <td className="border p-2">Various Finish Options</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
//           Choosing the Right Glass Railing for You
//         </h2>
//         <p className="text-[#292929] mb-4">
//           Your choice between <strong>framed and frameless railings</strong>{" "}
//           depends on your priorities and the overall look you want to achieve:
//         </p>
//         <ul className="list-disc list-inside text-[#292929] space-y-2">
//           <li>
//             <b>If you value classic design with added structural support,</b>{" "}
//             framed railings offer a practical and versatile solution.
//           </li>
//           <li>
//             <b>
//               If you're drawn to a modern, open aesthetic with seamless views,
//             </b>{" "}
//             frameless railings are the perfect fit.
//           </li>
//         </ul>
//         <p className="text-[#292929] mt-4">
//           At <b>Imperio Railing Systems,</b> we understand that every space is
//           unique. While we excel in crafting and installing{" "}
//           <strong>frameless glass railings,</strong> our team is here to help
//           you explore all options and create a solution tailored to your needs.
//         </p>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
//           Why Frameless Railings Are a Step Ahead
//         </h2>
//         <p className="text-[#292929]">
//           Frameless railings combine form and function in a way that framed
//           options cannot match. The sleek design, unobstructed views, and
//           low-maintenance benefits make them the ideal choice for those seeking
//           a contemporary look. Whether it's a deck overlooking a lush garden or
//           a staircase in a chic interior, frameless railings elevate the space
//           effortlessly.
//         </p>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <p className="text-3xl font-semibold mb-4 text-[#03237b]">
//           Case Study: Luxury Resorts in Goa
//         </p>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-4 text-[#03237b]">
//             DoubleTree by Hilton and W Hotel Goa
//           </h3>
//           <p className="text-[#292929] mb-4">
//             Two luxury seaside resorts in Goa sought to elevate their terrace,
//             poolside, and dining areas with a <strong>modern design</strong>{" "}
//             that maximized the stunning views of the Arabian Sea. After
//             evaluating various options, they chose{" "}
//             <strong>frameless glass railings</strong> from Imperio Railing
//             Systems, ensuring a seamless and unobstructed aesthetic.
//           </p>
//           <h4 className="text-xl font-semibold mb-2 text-[#03237b]">
//             Key Outcomes:
//           </h4>
//           <ul className="list-disc list-inside text-[#292929] space-y-2">
//             <li>
//               High-quality tempered glass panels engineered to withstand Goa's
//               humid and salty coastal conditions
//             </li>
//             <li>Transformed spaces into breathtaking vantage points</li>
//             <li>
//               Perfect blend of durability and elegance, enhancing the resorts'
//               contemporary appeal
//             </li>
//             <li>Guest satisfaction scores surged by 25%</li>
//             <li>
//               Visitors praised the luxurious ambiance and picture-perfect
//               scenery
//             </li>
//           </ul>
//           <p className="text-[#292929] mt-4">
//             This case study solidifies frameless glass railings as a
//             game-changer for both resorts' overall guest experience and brand
//             image.
//           </p>
//         </div>
//       </motion.section>

//       <motion.section className="mb-12" variants={sectionVariants}>
//         <p className="text-3xl font-semibold mb-4 text-[#03237b]">
//           Let Imperio Railing Systems Bring Your Vision to Life
//         </p>
//         <p className="text-[#292929] mb-4">
//           At <b>Imperio Railing Systems,</b> we specialize in providing
//           high-quality glass railing solutions. Our expertise ensures that your
//           installation not only meets your aesthetic goals but also stands the
//           test of time.
//         </p>
//         <p className="text-[#292929]">
//           Ready to transform your space with glass railings? Contact us today to
//           learn more about our options, designed to make your railings as
//           beautiful as they are durable.
//         </p>
//       </motion.section>

//       <motion.div
//         className="text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//       ></motion.div>
//     </motion.main>
//   );
// };

// export default MainContent;
import React from "react";
import { motion } from "framer-motion";

const MainContent: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
    >
      <motion.section className="mb-12" variants={sectionVariants}>
        <h2 className="text-4xl font-semibold mb-4 text-[#03237b]">
          Introduction
        </h2>
        <p className="text-[#1a1919] leading-relaxed">
          <strong>Glass railings</strong> are a stylish and functional solution
          for both residential and commercial properties. Whether you're
          upgrading your <strong>balcony</strong>, <strong>staircase</strong>,
          or <strong>outdoor deck</strong>, glass railings provide an elegant,
          contemporary aesthetic while prioritizing safety and durability. Among
          the top choices for glass railing systems,{" "}
          <strong>framed glass railings</strong> and{" "}
          <strong>frameless glass railings</strong> are the most sought-after
          styles. In this article, we'll explore the advantages of each,
          focusing on how <strong>frameless glass railings</strong> offer a
          modern, minimalist design perfect for creating an unobstructed view,
          while <strong>framed glass railings</strong> provide additional
          structure and stability, making them a practical choice for more
          traditional or high-traffic areas.
        </p>
      </motion.section>

      <motion.section className="mb-12" variants={sectionVariants}>
        <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
          <strong className="text-[#fad000] font-medium">
            Framed Glass Railings:
          </strong>{" "}
          Structured and Stylish
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://www.vistarailings.com/wp-content/uploads/2022/05/James_Cable_Summer2021_5.jpg"
            alt="Framed Glass Railing"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="text-[#292929] mb-4">
              <strong>Framed glass railings</strong> feature a sturdy frame
              around glass panels, combining durability and classic style.
              Perfect for both residential and commercial spaces, they offer
              structural support and a timeless look. Available in stainless
              steel, aluminum, and powder-coated finishes, framed railings are a
              versatile choice for enhancing staircases, balconies, and decks
              with both beauty and strength.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-[#03237b]">
              Key Benefits:
            </h3>
            <ul className="list-disc list-inside text-[#292929] space-y-2">
              <li>
                <b>Timeless Design:</b> A traditional look that suits both
                residential and commercial settings.
              </li>
              <li>
                <b>Enhanced Stability:</b> Offers added support, ideal for
                high-traffic or wind-exposed areas.
              </li>
              <li>
                <b>Customizable Finishes:</b> Available in materials like
                stainless steel, aluminum, and powder-coated options.
              </li>
              <li>
                <b>Cost-Effective:</b> A practical, elegant choice at a lower
                cost.
              </li>
            </ul>

            {/* Framed Glass Railings: Pros and Cons */}
          </div>
        </div>

        <div className="lg:flex gap-12 mt-2">
          <div className=" pt-4">
            <span className="text-xl font-semibold text-[#03237b]">Pros:</span>
            <ul className="list-disc list-inside text-[#292929] space-y-2">
              <li>Framed railings are more secure and stable.</li>
              <li>Frames protect glass edges, reducing the risk of cracks.</li>
              <li>
                Typically more cost-effective, especially with materials like
                aluminum.
              </li>
              <li>Repairs are easier due to the removable frames.</li>
            </ul>
          </div>
          <div className=" pt-4">
            <span className="text-xl font-semibold text-[#03237b]">Cons:</span>
            <ul className="list-disc list-inside text-[#292929] space-y-2">
              <li>
                Framed railings can obstruct views due to the surrounding frame.
              </li>
              <li>Repainting frames can be tedious and time-consuming.</li>
              <li>Require more materials, increasing installation costs.</li>
              <li>Frames limit design choices to certain sizes and shapes.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={sectionVariants}>
        <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
          <strong className="text-[#fad000] font-medium">
            Frameless Glass Railings:
          </strong>{" "}
          Seamless and Sophisticated
        </h3>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div>
            <p className="text-[#292929] mb-4">
              Frameless glass railings are designed to maximize transparency,
              offering a sleek, modern look that enhances the overall aesthetic
              of any space. With no visible frames, these railings provide an
              uninterrupted view and a sense of openness.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-[#03237b]">
              Why Frameless Stands Out:
            </h3>
            <ul className="list-disc list-inside text-[#292929] space-y-2">
              <li>
                <b>Unobstructed Views:</b> Perfect for scenic areas
              </li>
              <li>
                <b>Minimalist Appeal:</b> Clean, modern lines
              </li>
              <li>
                <b>Durability Meets Elegance:</b> Strong and safe
              </li>
              <li>
                <b>Easy Maintenance:</b> Straightforward cleaning
              </li>
            </ul>

            {/* Frameless Glass Railings: Pros and Cons */}
          </div>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQFSrJNA4S6gZA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1723281646772?e=2147483647&v=beta&t=H3DsOIRVLxXCOhpL8QeldPByZFCiyYNF_5wH9BwVzm4"
            alt="Frameless Glass Railing"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className=" lg:flex gap-12 mt-2">
          <div>
            <span className="text-xl font-semibold text-[#03237b] mb-4">
              Pros:
            </span>
            <ul className="list-disc list-inside text-[#292929] space-y-2">
              <li>
                Frameless railings offer an elegant, modern look that can help
                create a contemporary atmosphere.
              </li>
              <li>
                Glass panels can be custom-cut to fit any space or unique
                design.
              </li>
              <li>No frames to worry about painting, saving time and money.</li>
              <li>
                They have less environmental impact due to minimal material
                usage.
              </li>
            </ul>
          </div>
          <div className=" pt-4">
            <span className="text-xl font-semibold text-[#03237b]">Cons:</span>
            <ul className="list-disc list-inside text-[#292929] space-y-2">
              <li>
                Frameless railings can be more expensive depending on the size
                and complexity of the project.
              </li>
              <li>
                Tempered glass panels are fragile and can break if not handled
                carefully, making replacement costly.
              </li>
              <li>
                Installation is more complicated, requiring special fasteners
                and anchors for proper mounting.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={sectionVariants}>
        <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
          Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left text-[#03237b]">Feature</th>
                <th className="border p-2 text-left text-[#03237b]">
                  Framed Glass Railings
                </th>
                <th className="border p-2 text-left text-[#03237b]">
                  Frameless Glass Railings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Aesthetics</td>
                <td className="border p-2">Structured and classic</td>
                <td className="border p-2">Minimalistic and modern</td>
              </tr>
              <tr>
                <td className="border p-2">Durability</td>
                <td className="border p-2">Extra support from the frame</td>
                <td className="border p-2">
                  Strong tempered glass with sleek fittings
                </td>
              </tr>
              <tr>
                <td className="border p-2">View</td>
                <td className="border p-2">Slightly obstructed</td>
                <td className="border p-2">Completely unobstructed</td>
              </tr>
              <tr>
                <td className="border p-2">Cost</td>
                <td className="border p-2">Budget-friendly</td>
                <td className="border p-2">
                  Higher cost due to premium materials
                </td>
              </tr>
              <tr>
                <td className="border p-2">Maintenance</td>
                <td className="border p-2">
                  Requires care for frame materials
                </td>
                <td className="border p-2">Easier to clean without frames</td>
              </tr>
              <tr>
                <td className="border p-2">Best For</td>
                <td className="border p-2">
                  Traditional and high-traffic spaces
                </td>
                <td className="border p-2">
                  Contemporary, scenic, and luxury spaces
                </td>
              </tr>
              <tr>
                <td className="border p-2">Finish Options</td>
                <td className="border p-2">Limited Options</td>
                <td className="border p-2">Various Finish Options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={sectionVariants}>
        <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
          Choosing the Right Glass Railing for You
        </h2>
        <p className="text-[#292929] mb-4">
          Your choice between <strong>framed and frameless railings</strong>{" "}
          depends on your priorities and the overall look you want to achieve:
        </p>
        <ul className="list-disc list-inside text-[#292929] space-y-2">
          <li>
            <b>If you value classic design with added structural support,</b>{" "}
            framed railings offer a practical and versatile solution.
          </li>
          <li>
            <b>
              If you're drawn to a modern, open aesthetic with seamless views,
            </b>{" "}
            frameless railings are the perfect fit.
          </li>
        </ul>
        <p className="text-[#292929] mt-4">
          At <b>Imperio Railing Systems,</b> we understand that every space is
          unique. While we excel in crafting and installing{" "}
          <strong>frameless glass railings,</strong> our team is here to help
          you explore all options and create a solution tailored to your needs.
        </p>
      </motion.section>

      <motion.section className="mb-12" variants={sectionVariants}>
        <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
          Why Frameless Railings Are a Step Ahead
        </h2>
        <p className="text-[#292929]">
          Frameless railings combine form and function in a way that framed
          options cannot match. The sleek design, unobstructed views, and
          low-maintenance benefits make them the ideal choice for those seeking
          a contemporary look. Whether it's a deck overlooking a lush garden or
          a staircase in a chic interior, frameless railings elevate the space
          effortlessly.
        </p>
      </motion.section>

      <motion.section className="mb-12" variants={sectionVariants}>
        <p className="text-3xl font-semibold mb-4 text-[#03237b]">
          Case Study: Luxury Resorts in Goa
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-[#03237b]">
            DoubleTree by Hilton and W Hotel Goa
          </h3>
          <p className="text-[#292929] mb-4">
            Two luxury seaside resorts in Goa sought to elevate their terrace,
            balcony, and pool designs with{" "}
            <strong>frameless glass railings</strong>. The goal was to create an
            open and unobstructed view of the ocean while maintaining safety. By
            utilizing frameless glass railings, the resorts achieved their
            desired aesthetic and ensured lasting durability with minimal
            maintenance.
          </p>
          <p className="text-[#292929]">
            This application of frameless glass railings beautifully
            demonstrates how modern design can align with practical
            considerations for high-end venues.
          </p>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default MainContent;
