import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
// import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { futureHome1, futureHome2 } from "../../assets/Images";
const Futuredesign: React.FC = () => {
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
  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "future-home-features", label: "Features" },
    { id: "future-home-benefits", label: "Benefits" },
    { id: "future-home-application", label: "Application" },
  ];
  return (
    <div className="flex gap-8">
      <nav className="hidden md:block sticky top-2 h-fit w-64 ">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-[#fad000] text-[#03237b] font-bold"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* <li>
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
              href="#aluminium-glass-features"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                activeSection === "framed-glass"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Features{" "}
            </a>
          </li>
          <li>
            <a
              href="#aluminium-glass-benefits"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                activeSection === "framed-porch-cores"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#aluminium-glass-application"
              className={`block px-4 py-2 rounded-none transition-colors whitespace-nowrap ${
                activeSection === "frameless-glass"
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              Application
            </a>
          </li> */}
        </ul>
      </nav>

      <motion.main className="max-w-6xl mx-auto w-full">
        <motion.section
          className="mb-12"
          id="introduction"
          variants={sectionVariants}
        >
          <span className="text-4xl font-semibold mb-4 text-[#03237b]">
            Aesthetics
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            <strong>Glass railings</strong> are well known for creating clean
            and unobstructed sightlines, which is one of their greatest
            advantages. Glass enables smooth visual flow as opposed to bulky
            wood or metal railings which disrupt views, thereby making spaces
            look
            <strong> larger</strong>, <strong>brighter</strong>, and more{" "}
            <strong>refined</strong>. This advantage is especially beneficial
            for houses located within <strong>scenic surroundings</strong>,
            <strong>multi-level homes</strong>, or{" "}
            <strong>open-concept interiors</strong>.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="future-home-features"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Future Home Design:
            </strong>{" "}
            Structured and Stylish
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={futureHome2}
              alt="Aluminium Glass Railing"
              width={500}
              height={300}
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                <strong>Frameless glass railing systems</strong> offer a
                <strong> minimalistic design</strong> that is almost
                non-existent, allowing the
                <strong> architecture</strong> itself to stand out. This creates
                a sense of
                <strong> timeless elegance</strong> across both{" "}
                <strong>residential</strong> and
                <strong> commercial</strong> environments. These railings
                highlight
                <strong> modern industrial</strong> and{" "}
                <strong>upscale contemporary styles</strong>, contributing to a
                sleek and sophisticated aesthetic.
              </p>
              <p className="text-[#292929] mb-4 text-justify">
                One of the most attractive features of{" "}
                <strong>glass railing systems</strong> is their high level of{" "}
                <strong>customization</strong>. Homeowners and designers can
                choose from
                <strong> clear</strong>, <strong>tinted</strong>,{" "}
                <strong>frosted</strong>, or
                <strong> textured finishes</strong> to suit their desired
                privacy levels or design preferences. Additionally,{" "}
                <strong>curved</strong> or <strong>angled glass panels</strong>
                can be customized to align with unique architectural elements,
                giving each project a
                <strong> distinctive, high-end appearance</strong>.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Key Benefits:
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Minimalistic Appeal:</b> Frameless designs keep the focus
                  on architecture and maximize openness.
                </li>
                <li>
                  <b>Elegant Aesthetic:</b> Adds a timeless, sleek finish to
                  both homes and commercial spaces.
                </li>
                <li>
                  <b>Extensive Customisation:</b> Choose finishes like clear,
                  tinted, frosted, or textured glass.
                </li>
                <li>
                  <b>Architectural Flexibility:</b> Curved or angled panels
                  tailor the system to unique spaces.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="future-home-benefits"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Imperio Glass Railings:
            </strong>{" "}
            Sustainable & Stylish Solutions
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Where Imperio Railings Make a Green Impact:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Recyclable Materials:</b> Glass panels and aluminium frames
                  are eco-friendly and sustainable.
                </li>
                <li>
                  <b>Energy Efficient:</b> Promotes daylighting, reducing the
                  need for artificial lighting during the day.
                </li>
                <li>
                  <b>Eco-Conscious Design:</b> Ideal for homeowners focused on
                  green building practices.
                </li>
                <li>
                  <b>Sustainable Aesthetics:</b> Combines modern design with
                  responsible material sourcing.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#ffffff]">.</span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Eco-Friendly Composition:</b> Glass can be endlessly reused
                  without losing quality, making it a smart alternative to
                  wasteful materials.
                </li>
                <li>
                  <b>Natural Light:</b> The design allows natural light to flow
                  freely through interiors, reducing reliance on artificial
                  lighting.
                </li>
                <li>
                  <b>Energy Efficiency:</b> By enhancing natural lighting, these
                  railings help lower overall energy consumption.
                </li>
                <li>
                  <b>Sustainable Design:</b> Imperio's design choice benefits
                  both the home and the planet, promoting environmentally
                  conscious living.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="future-home-application"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              The Best of Both Worlds:
            </strong>{" "}
            Style & Safety Combined
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Even though tempered glass may raise some eyebrows concerning
                its safety, today’s glass railing systems are constructed with
                tempered or laminated glass which is remarkably impact and heat
                resistant ensuring safety. In addition, glass railings typically
                feature smooth, flush surfaces with no horizontal bars or
                protruding fixtures, which means there are no footholds for
                children to climb—making them a safer alternative to traditional
                railings. For applications requiring even greater protection,
                some systems can be built using laminated, bullet-resistant
                glass—demonstrating just how far glass technology has evolved in
                terms of strength and security.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Where Imperio Railings Shine:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Seamless Design:</b> Flush installations without protruding
                  fixtures enhance appearance and reduce hazards.
                </li>
                <li>
                  <b>No Compromise on View:</b> Safety without blocking your
                  surroundings—perfect for open, modern layouts.
                </li>
                <li>
                  <b>Weather-Resistant:</b> Maintains structural integrity in
                  heat, cold, or moisture-rich environments.
                </li>
                <li>
                  <b>Reliable Longevity:</b> Designed to endure high-traffic
                  conditions while maintaining safety and beauty.
                </li>
              </ul>
            </div>
            <img
              src={futureHome1}
              alt="Imperio Sustainable Glass Railings"
              className="rounded-none shadow-lg"
              width={500}
              height={300}
            />
          </div>
        </motion.section>

        <div className=" w-40">
          <CTAButton phoneNumber="+91 8591953385">
            <MdAddCall size={16} />
            CALL NOW
          </CTAButton>
        </div>
      </motion.main>
      {/* <EnquiryButton /> */}
    </div>
  );
};

export default Futuredesign;
