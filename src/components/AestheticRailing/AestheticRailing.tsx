import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { seamless1, seamless2 } from "../../assets/Images";
const AestheticRailing: React.FC = () => {
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
    { id: "aesthetic-railing-features", label: "Features" },
    { id: "aesthetic-railing-benefits", label: "Benefits" },
    { id: "aesthetic-railing-application", label: "Application" },
  ];
  return (
    <div className="flex gap-8">
      <nav className="hidden md:block sticky top-2 h-fit w-64 ">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-[#fad000] text-[#03237b] font-bold"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.main className="max-w-6xl mx-auto w-full">
        <motion.section
          className="mb-12"
          id="introduction"
          variants={sectionVariants}
        >
          <span className="text-4xl font-semibold mb-4 text-[#03237b]">
            Modern Railing Designs with Unmatched Aesthetic Charm
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            Discover the beauty of modern railings through our latest project in
            Goa, where style meets safety. The stunning designs not only enhance
            the visual appeal of the property but also provide essential safety
            features for balconies and decks. Our modern railings are crafted
            with precision, ensuring that they harmonize with the breathtaking
            coastal views. These railings serve as a testament to contemporary
            design, reflecting a lifestyle that appreciates both elegance and
            functionality. By integrating cutting-edge materials and techniques,
            we ensure that each railing system not only meets but exceeds
            industry standards for safety and durability.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aesthetic-railing-features"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Modern Railing Designs:
            </strong>{" "}
            A Perfect Blend of Functionality and Aesthetic Appeal
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={seamless1}
              alt="Aesthetic Railing Design in Goa"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Explore our newest project in <strong>Goa</strong>, featuring
                state-of-the-art <strong>modern railing designs</strong> that
                seamlessly combine safety with elegance. Designed to enhance
                coastal properties, these railings allow homeowners to enjoy
                breathtaking views without compromising on security. The use of{" "}
                <strong>high-quality materials</strong> ensures that they
                withstand the harsh coastal climate, making them perfect for
                seaside living. The sleek,
                <strong>minimalistic design</strong> emphasizes clean lines and
                an unobtrusive profile, preserving the stunning ocean view as
                the focal point.
              </p>
              <p className="text-[#292929] mb-4 text-justify">
                Our innovative railing solutions prioritize durability while
                maintaining an elegant appearance, creating a seamless blend
                with the surrounding environment. The architectural integrity of
                these railings enhances the property’s aesthetic appeal,
                increasing both its charm and value.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Key Features:
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Enhanced Coastal Views:</b> Designed to maximize the
                  oceanfront experience.
                </li>
                <li>
                  <b>Durability and Strength:</b> Crafted from high-quality
                  materials to withstand coastal weather conditions.
                </li>
                <li>
                  <b>Modern Minimalistic Design:</b> Clean lines and an
                  unobtrusive profile complement any contemporary property.
                </li>
                <li>
                  <b>Seamless Integration:</b> Blends effortlessly with the
                  surrounding landscape for a sophisticated look.
                </li>
                <li>
                  <b>Architectural Enhancement:</b> Adds charm and increases
                  property value with its premium aesthetics.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aesthetic-railing-benefits"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Beyond Aesthetics:
            </strong>{" "}
            Safety, Functionality & Lasting Value
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Why Choose Modern Railings?
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Unobstructed Views:</b> Designed to enhance balconies and
                  decks with open sightlines, making scenic enjoyment
                  effortless.
                </li>
                <li>
                  <b>Durable & Weather-Resistant:</b> Engineered to withstand
                  various weather conditions for long-lasting performance.
                </li>
                <li>
                  <b>Low Maintenance:</b> High-quality materials reduce the need
                  for frequent upkeep while maintaining a sleek appearance.
                </li>
                <li>
                  <b>Contemporary Appeal:</b> The modern design seamlessly
                  blends with contemporary homes, elevating their overall
                  aesthetic.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Additional Benefits:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Increases Property Value:</b> Enhances curb appeal, making
                  your home more desirable in the market.
                </li>
                <li>
                  <b>Safety & Stability:</b> Provides strong protection for
                  outdoor spaces without compromising style.
                </li>
                <li>
                  <b>Versatile Applications:</b> Ideal for residential and
                  commercial settings, including balconies, patios, and
                  staircases.
                </li>
                <li>
                  <b>Long-Term Investment:</b> Combines durability with
                  aesthetics, ensuring a timeless addition to any property.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aesthetic-railing-application"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Modern Railings:
            </strong>{" "}
            Perfect for Coastal Living & Contemporary Design
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Designed for coastal properties, modern railings provide the
                perfect balance between safety and aesthetics. Ideal for
                balconies, decks, and patios, they create an inviting atmosphere
                for entertaining guests or simply enjoying the view. Their
                versatility ensures seamless integration into various
                architectural styles, whether minimalist or traditional,
                enhancing the overall appeal of any space. Additionally, these
                railings are engineered for easy installation and adaptability,
                making them suitable for both private residences and commercial
                projects.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Where Modern Railings Make an Impact:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Coastal Properties:</b> Perfect for beachfront homes,
                  allowing unobstructed ocean views while ensuring safety.
                </li>
                <li>
                  <b>Outdoor Living Spaces:</b> Enhances patios, decks, and
                  balconies, creating a seamless transition between indoors and
                  outdoors.
                </li>
                <li>
                  <b>Versatile Architectural Fit:</b> Complements modern,
                  minimalist, or traditional home designs.
                </li>
                <li>
                  <b>Effortless Installation:</b> Designed for quick setup
                  without compromising durability or structural integrity.
                </li>
              </ul>
            </div>
            <img
              src={seamless2}
              alt="Aesthetic Railings"
              className="rounded-lg shadow-lg"
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

export default AestheticRailing;
