import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { aluminiumGlass1, aluminiumGlass2 } from "../../assets/Images";
const AluminiumGlass: React.FC = () => {
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
    { id: "aluminium-glass-features", label: "Features" },
    { id: "aluminium-glass-benefits", label: "Benefits" },
    { id: "aluminium-glass-application", label: "Application" },
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
            <strong>Imperio Railing Systems</strong> offers the perfect
            combination of style, safety, and sophistication with its{" "}
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
          id="aluminium-glass-features"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Aluminium Glass Railings:
            </strong>{" "}
            Structured and Stylish
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={aluminiumGlass1}
              alt="Aluminiumm Glass Railing"
              width={500}
              height={300}
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                <strong>Imperio Aluminium Glass Railings</strong> are crafted
                with precision using premium materials to ensure they stand the
                test of time. The <strong>aluminium</strong> used in our
                railings is highly resistant to corrosion, making it ideal for
                both indoor and outdoor use. The <strong>glass panels</strong>{" "}
                are designed to provide unobstructed views, allowing you to
                enjoy your surroundings without any visual barriers. These
                railings come in a variety of sleek designs, offering
                customizable options to fit any architectural style. Whether
                your project is <strong>contemporary</strong> or{" "}
                <strong>classic</strong>, Imperio railings are designed to
                elevate the look while offering a strong and sturdy structure
                that meets safety regulations.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Key Benefits:
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Superior Durability:</b> Crafted from high-quality
                  aluminium that resists corrosion and wear.
                </li>
                <li>
                  <b>Unobstructed Views:</b> Transparent glass panels enhance
                  open spaces and maximize visibility.
                </li>
                <li>
                  <b>Customizable Designs:</b> Available in various styles to
                  complement different architectural aesthetics.
                </li>
                <li>
                  <b>Low Maintenance:</b> Designed for long-term use with
                  minimal upkeep required.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aluminium-glass-benefits"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              The Best of Both Worlds:
            </strong>{" "}
            Style & Safety Combined
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Why Choose Imperio?
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Seamless Aesthetics:</b> The transparency of glass enhances
                  natural light, creating an open and spacious feel.
                </li>
                <li>
                  <b>Superior Strength:</b> The aluminium framework provides
                  durable, long-lasting support in all environments.
                </li>
                <li>
                  <b>Low Maintenance:</b> Corrosion-resistant materials ensure
                  long-term beauty with minimal upkeep.
                </li>
                <li>
                  <b>Customizable Designs:</b> Available in a variety of styles
                  to complement any architectural look.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Added Benefits:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Safe & Secure:</b> Designed to withstand high-traffic and
                  exposed areas without compromising stability.
                </li>
                <li>
                  <b>Versatile Applications:</b> Ideal for homes, commercial
                  properties, balconies, staircases, and patios.
                </li>
                <li>
                  <b>Timeless Appeal:</b> Combines sleek glass with solid
                  aluminium for a modern yet sturdy look.
                </li>
                <li>
                  <b>Easy Installation:</b> Engineered for a hassle-free setup
                  while maintaining structural integrity.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aluminium-glass-application"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Imperio Aluminium Glass Railings:
            </strong>{" "}
            Versatile & Elegant Solutions
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Imperio Aluminium Glass Railings are designed for versatility,
                making them ideal for a wide range of projects. Whether you're
                creating a <strong>luxurious residential balcony</strong> with
                breathtaking views or designing a{" "}
                <strong>commercial space</strong> that balances aesthetics and
                safety, these railings are the perfect solution. Their{" "}
                <strong>modern and sleek</strong> design allows them to
                seamlessly integrate into any environment while maintaining
                functionality and elegance.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Where Imperio Railings Shine:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Residential Spaces:</b> Elevate balconies, staircases, and
                  patios with a stylish and secure design.
                </li>
                <li>
                  <b>Commercial Projects:</b> Perfect for offices, hotels, and
                  shopping complexes, adding a touch of class and
                  professionalism.
                </li>
                <li>
                  <b>Unobstructed Views:</b> Glass panels ensure an open, airy
                  feel while enhancing natural light.
                </li>
                <li>
                  <b>Built for Durability:</b> Aluminium frames resist
                  corrosion, ensuring long-lasting performance.
                </li>
              </ul>
            </div>
            <img
              src={aluminiumGlass2}
              alt="Imperio Aluminium Glass Railings"
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
      <EnquiryButton />
    </div>
  );
};

export default AluminiumGlass;
