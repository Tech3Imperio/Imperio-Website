import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
// import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { aesthetic1, aesthetic2 } from "../../assets/Images";
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
      <nav className="hidden md:block sticky top-2 h-fit w-64">
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
        </ul>
      </nav>

      <motion.main className="max-w-6xl mx-auto w-full">
        <motion.section
          className="mb-12"
          id="introduction"
          variants={sectionVariants}
        >
          <span className="text-4xl font-semibold mb-4 text-[#03237b]">
            Elegant & Durable Modern Balcony Railings
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            Experience the perfect fusion of{" "}
            <strong>frameless glass railings</strong>
            and <strong>contemporary balcony railings</strong> designed for
            stunning ocean views. Our premium,{" "}
            <strong>weather-resistant railings</strong>
            offer durability and safety while elevating the aesthetics of any
            outdoor space. Whether for residential or commercial properties, our{" "}
            <strong>luxury railing designs</strong> seamlessly blend with modern
            architecture, providing an
            <strong>unobstructed view railing system</strong> without
            compromising security.
          </p>
        </motion.section>
        <motion.section
          className="mb-12"
          id="aesthetic-railing-features"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Modern Railing Innovations:
            </strong>{" "}
            Aesthetics, Strength & Functionality
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={aesthetic1}
              alt="Frameless Glass Railings"
              width={500}
              height={300}
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Our latest project in <strong>Goa</strong> showcases innovative
                <strong> stylish balcony railings</strong> that blend high-end
                design with robust materials. These{" "}
                <strong>high-quality deck railings</strong>
                are built to withstand coastal weather while maintaining their
                <strong> minimalist railing aesthetics</strong>. Crafted for a
                modern lifestyle, our{" "}
                <strong>frameless railing installation</strong> offers both
                elegance and structural integrity.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Why Choose Imperio’s Modern Railings?
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Luxury Railing Design:</b> Perfect for{" "}
                  <strong>premium glass railings</strong>
                  in homes, patios, and commercial spaces.
                </li>
                <li>
                  <b>Weather-Resistant Railings:</b> Engineered for durability
                  in all climates.
                </li>
                <li>
                  <b>Unobstructed Views:</b>{" "}
                  <strong>Minimalist balcony railings</strong> for a sleek,
                  modern aesthetic.
                </li>
                <li>
                  <b>Custom Railing Solutions:</b> Tailored to complement
                  various architectural styles.
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
              Secure & Stylish:
            </strong>{" "}
            The Future of Outdoor Railings
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Key Advantages of Frameless Glass Railings:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Durable Outdoor Railings:</b> Engineered for longevity with
                  high-strength materials.
                </li>
                <li>
                  <b>Elegant Staircase Railings:</b> Aesthetic appeal combined
                  with robust support.
                </li>
                <li>
                  <b>Low Maintenance & Weather-Resistant:</b> Perfect for harsh
                  outdoor conditions.
                </li>
                <li>
                  <b>Premium Glass Railings:</b> High-end finishes that enhance
                  modern architecture.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Where Our Railings Stand Out:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Commercial Railings:</b> Sleek, secure solutions for
                  businesses and public spaces.
                </li>
                <li>
                  <b>Residential Railings:</b>{" "}
                  <strong>Minimalist railings</strong>
                  for a sophisticated home upgrade.
                </li>
                <li>
                  <b>Custom Railing Designs:</b> Tailored solutions for unique
                  architectural needs.
                </li>
                <li>
                  <b>Secure Railing Systems:</b> Providing safety without
                  compromising aesthetics.
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
              Luxury Railings:
            </strong>{" "}
            Elevate Your Outdoor Spaces
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Designed for high-end homes and commercial properties, our
                <strong> frameless glass railings</strong> provide safety
                without obstructing breathtaking views. Whether you're designing
                a<strong> contemporary outdoor railing system</strong> or need
                <strong> high-quality deck railings</strong>, Imperio offers the
                perfect balance of beauty and functionality.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Ideal Applications:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Balcony Railings:</b> Unmatched elegance for high-rise
                  views.
                </li>
                <li>
                  <b>Patio & Deck Railings:</b> Enhancing outdoor relaxation
                  spaces.
                </li>
                <li>
                  <b>Minimalist Railing Installations:</b> Designed for a
                  modern, seamless look.
                </li>
                <li>
                  <b>Weather-Resistant Railings:</b> Built to endure all
                  climates.
                </li>
              </ul>
            </div>
            <img
              src={aesthetic2}
              alt="Modern Balcony Railings"
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

export default AestheticRailing;
