import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
// import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { handrailBenefits1, handrailBenefits2 } from "../../assets/Images";
const HandrailBenefits: React.FC = () => {
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
    { id: "handrail-benefits", label: "Features" },
    { id: "handrail-considerations", label: "Benefits" },
    { id: "handrail-applications", label: "Application" },
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
            Introduction
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            <strong>Handrails</strong> play a critical role in ensuring safety
            and accessibility in a variety of settings, from{" "}
            <strong>staircases</strong> to <strong>ramps</strong> and{" "}
            <strong>balconies</strong>. Whether in a residential or commercial
            space, installing handrails alongside railings provides additional
            support and stability for everyone, particularly individuals with
            mobility challenges. Beyond safety, handrails can also enhance the{" "}
            <strong>visual appeal</strong> of a space and improve property value
            by ensuring your building meets <strong>accessibility</strong> and{" "}
            <strong>safety standards</strong>. In this guide, we’ll explore the
            key benefits of installing handrails, as well as important
            considerations when adding them to your railings.
          </p>
          <p className="text-[#1a1919] leading-relaxed text-justify mt-4">
            <strong>Imperio Railing Systems</strong> offers the perfect
            combination of
            <strong>style</strong>, <strong>safety</strong>, and{" "}
            <strong>sophistication</strong> with its{" "}
            <strong>Aluminium Glass Railings</strong>. Whether you’re looking to
            upgrade your <strong>home</strong> or enhance a{" "}
            <strong>commercial project</strong>, these railings are designed to
            blend seamlessly with any environment, bringing a touch of modern
            elegance. The clean lines and transparent glass panels add a sense
            of <strong>openness</strong> to any space, while the{" "}
            <strong>aluminium frames</strong> provide strength and durability.
            Transform your <strong>balconies</strong>, <strong>decks</strong>,{" "}
            <strong>patios</strong>, or <strong>staircases</strong> with
            railings that not only look stunning but also offer long-lasting
            protection and peace of mind.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="handrail-benefits"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">Handrails:</strong>{" "}
            Safety & Accessibility
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={handrailBenefits1}
              alt="Handrail Benefits"
              width={500}
              height={300}
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                <strong>Handrails</strong> offer several significant benefits,
                making them an essential feature in any space where railings are
                used. One of the primary advantages is the{" "}
                <strong>added safety</strong> they provide, especially on{" "}
                <strong>staircases</strong> and <strong>ramps</strong>.
                Handrails give individuals something to hold onto, reducing the
                risk of slips and falls. This is particularly important for{" "}
                <strong>elderly individuals</strong>, <strong>children</strong>,
                and those with <strong>physical disabilities</strong> or{" "}
                <strong>mobility issues</strong>.
              </p>
              <p className="text-[#292929] mb-4 text-justify">
                In addition to safety, handrails{" "}
                <strong>improve accessibility</strong>, helping buildings comply
                with legal requirements like the{" "}
                <strong>Americans with Disabilities Act (ADA)</strong> in the
                U.S. These regulations mandate handrails in specific areas to
                ensure ease of movement for people with disabilities. Properly
                installed handrails can also enhance the{" "}
                <strong>overall aesthetics</strong> of your space, adding a
                touch of design sophistication. This not only improves the{" "}
                <strong>usability</strong> of your space but can also increase
                the <strong>appeal and resale value</strong> of your property.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Key Benefits:
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Enhanced Safety:</b> Reduces risks of falls, providing
                  stability on stairs and ramps.
                </li>
                <li>
                  <b>Improved Accessibility:</b> Meets ADA and other
                  accessibility standards for easier mobility.
                </li>
                <li>
                  <b>Architectural Appeal:</b> Elevates aesthetics while
                  ensuring functional benefits.
                </li>
                <li>
                  <b>Property Value Boost:</b> Adds value by enhancing safety
                  and design sophistication.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="handrail-considerations"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Key Considerations:
            </strong>{" "}
            Choosing the Right Handrails
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Essential Factors:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Functionality First:</b> Ensure the handrail provides
                  adequate support and is positioned at the right height.
                </li>
                <li>
                  <b>Material Selection:</b> Choose from wood, metal, or glass
                  based on durability and aesthetic preference.
                </li>
                <li>
                  <b>Durability & Maintenance:</b> Outdoor handrails should be
                  weather-resistant, with aluminum and stainless steel being top
                  choices.
                </li>
                <li>
                  <b>Secure Installation:</b> Must be firmly attached to walls
                  or railings to provide reliable and lasting support.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Design & Aesthetic Considerations:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Seamless Integration:</b> Handrails should blend with the
                  overall railing system and architectural style.
                </li>
                <li>
                  <b>Material Appeal:</b> Metal provides a sleek modern look,
                  wood adds warmth, and glass offers a contemporary touch.
                </li>
                <li>
                  <b>Structural Compatibility:</b> Ensure the handrail
                  complements the railing’s strength and stability.
                </li>
                <li>
                  <b>Compliance with Standards:</b> Align with safety
                  regulations and accessibility guidelines for optimal
                  usability.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="handrail-applications"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">Handrails:</strong>{" "}
            Essential for Safety & Accessibility
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Handrails are not just an added convenience; in many cases, they
                are a <strong>legal requirement</strong> for ensuring safety and
                accessibility in <strong>public and commercial spaces</strong>.
                Whether installed on{" "}
                <strong>staircases, ramps, balconies, or decks</strong>,
                handrails offer critical support, particularly for individuals
                with mobility challenges. By incorporating handrails into your
                railing system, you enhance{" "}
                <strong>security, accessibility, and comfort</strong>, making
                any space safer and more user-friendly.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Where Handrails Are Essential:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Staircases:</b> Ensure stability and reduce the risk of
                  falls when ascending or descending steps.
                </li>
                <li>
                  <b>Ramps:</b> Essential for wheelchair-accessible paths,
                  improving mobility for all users.
                </li>
                <li>
                  <b>Balconies & Decks:</b> Provide additional security,
                  particularly in elevated spaces.
                </li>
                <li>
                  <b>Public & Commercial Buildings:</b> Required in many
                  settings to meet safety codes and accessibility standards.
                </li>
              </ul>
            </div>
            <img
              src={handrailBenefits2}
              alt="Handrails for Safety and Accessibility"
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

export default HandrailBenefits;
