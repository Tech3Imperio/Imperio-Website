import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
import EnquiryButton from "../EnquiryButton/EnquiryButton";

const MainContent: React.FC = () => {
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
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
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
              href="#framed-glass"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                activeSection === "framed-glass"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Framed Glass Railing
            </a>
          </li>
          <li>
            <a
              href="#framed-porch-cores"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                activeSection === "framed-porch-cores"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Framed Pros and Cons
            </a>
          </li>
          <li>
            <a
              href="#frameless-glass"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                activeSection === "frameless-glass"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Frameless Glass Railing
            </a>
          </li>
          <li>
            <a
              href="#frameless-porch-cores"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
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
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
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
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
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
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
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
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
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
            <strong>Glass railings</strong> are a stylish and functional
            solution for both residential and commercial properties. Whether
            you're upgrading your <strong>balcony</strong>,{" "}
            <strong>staircase</strong>, or <strong>outdoor deck</strong>, glass
            railings provide an elegant, contemporary aesthetic while
            prioritizing safety and durability. Among the top choices for glass
            railing systems, <strong>framed glass railings</strong> and{" "}
            <strong>frameless glass railings</strong> are the most sought-after
            styles.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="framed-glass"
          variants={sectionVariants}
        >
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
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                <strong>Framed glass railings</strong> feature a sturdy frame
                around glass panels, combining durability and classic style.
                Perfect for both residential and commercial spaces, they offer
                structural support and a timeless look. Available in stainless
                steel, aluminum, and powder-coated finishes, framed railings are
                a versatile choice for enhancing staircases, balconies, and
                decks with both beauty and strength.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Key Benefits:
              </p>
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
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="framed-porch-cores"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Framed Pros and Cons:
            </strong>{" "}
            The Perfect Combination
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className=" pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Pros:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>Framed railings are more secure and stable.</li>
                <li>
                  Frames protect glass edges, reducing the risk of cracks.
                </li>
                <li>
                  Typically more cost-effective, especially with materials like
                  aluminum.
                </li>
                <li>Repairs are easier due to the removable frames.</li>
              </ul>
            </div>
            <div className=" pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Cons:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  Framed railings can obstruct views due to the surrounding
                  frame.
                </li>
                <li>Repainting frames can be tedious and time-consuming.</li>
                <li>Require more materials, increasing installation costs.</li>
                <li>
                  Frames limit design choices to certain sizes and shapes.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="frameless-glass"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Frameless Glass Railings:
            </strong>{" "}
            Seamless and Sophisticated
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Frameless glass railings are designed to maximize transparency,
                offering a sleek, modern look that enhances the overall
                aesthetic of any space. With no visible frames, these railings
                provide an uninterrupted view and a sense of openness.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Why Frameless Stands Out:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Unobstructed Views:</b> Glass panels are mounted with
                  minimal visible support, providing a clear and open view.
                </li>
                <li>
                  <b>Modern Aesthetic:</b> Frameless railings add a contemporary
                  look to any property.
                </li>
                <li>
                  <b>Easy Maintenance:</b> With no frames to paint or corrode,
                  frameless glass is easier to maintain.
                </li>
              </ul>
            </div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQFSrJNA4S6gZA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1723281646772?e=2147483647&v=beta&t=H3DsOIRVLxXCOhpL8QeldPByZFCiyYNF_5wH9BwVzm4"
              alt="Frameless Glass Railing"
              className="rounded-none shadow-lg"
              width={500}
              height={300}
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="frameless-porch-cores"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Frameless Pros and Cons:
            </strong>{" "}
            The Modern Choice
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className=" pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Pros:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>Maximizes views with minimal obstructions.</li>
                <li>Creates a clean, modern, and contemporary look.</li>
                <li>Requires less maintenance over time.</li>
                <li>Increases the feeling of openness and space.</li>
              </ul>
            </div>
            <div className=" pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Cons:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  Frameless glass railings are often more expensive than framed
                  options.
                </li>
                <li>May require more maintenance for glass cleaning.</li>
                <li>Installation can be more complex.</li>
                <li>More susceptible to damage if not properly installed.</li>
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
            Comparison
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left text-[#03237b]">
                    Feature
                  </th>
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

        <motion.section
          className="mb-12"
          id="right-fit-foryou"
          variants={sectionVariants}
        >
          <div className="text-3xl font-semibold mb-4 text-[#03237b]">
            Choosing the Right Glass Railing for You
          </div>
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
            you explore all options and create a solution tailored to your
            needs.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="whyframless"
          variants={sectionVariants}
        >
          <div className="text-3xl font-semibold mb-4 text-[#03237b]">
            Why Frameless Railings?
          </div>
          <p className="text-[#292929] text-justify">
            Frameless railings combine form and function in a way that framed
            options cannot match. The sleek design, unobstructed views, and
            low-maintenance benefits make them the ideal choice for those
            seeking a contemporary look. Whether it's a deck overlooking a lush
            garden or a staircase in a chic interior, frameless railings elevate
            the space effortlessly.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="casestudy"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            Case Study
          </p>
          <div className="bg-white p-6 rounded-none shadow-lg">
            <p className="text-[#292929] mb-2 text-justify">
              DoubleTree by Hilton and W Hotel Goa, two luxury seaside resorts
              in Goa, sought to elevate their{" "}
              <strong>terrace, poolside, and dining areas </strong> with a
              modern design that maximized the stunning views of the Arabian
              Sea. After evaluating various options, they chose{" "}
              <strong>frameless glass railings</strong> from Imperio Railing
              Systems, ensuring a seamless and unobstructed aesthetic. The
              high-quality tempered glass panels, engineered to withstand Goa’s
              humid and salty coastal conditions, transformed these spaces into
              breathtaking vantage points. The result was a perfect blend of
              durability and elegance, enhancing the resorts’ contemporary
              appeal. Guest satisfaction scores surged by 25%, with visitors
              praising the luxurious ambiance and picture-perfect scenery,
              solidifying frameless glass railings as a game-changer for both
              resorts' overall guest experience and brand image.
            </p>
            <p className="text-[#292929] text-justify">
              Glass railings are an elegant and versatile choice for both homes
              and businesses. Whether you’re enhancing a balcony, staircase, or
              outdoor deck, they offer a sleek aesthetic while maintaining
              safety and functionality. Among the options available, framed and
              <strong>frameless glass railings</strong> stand out as two popular
              styles. Let’s explore what each has to offer and why frameless
              glass railings might be the ideal solution for modern spaces.
            </p>
          </div>
        </motion.section>
        <div className=" w-40">
          <CTAButton phoneNumber="+91 8591953385">
            <MdAddCall size={16} />
            CALL NOW
          </CTAButton>
        </div>
      </motion.main>
      <EnquiryButton />
    </div>
  );
};

export default MainContent;
