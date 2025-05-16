"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { aesthetic1, aesthetic2 } from "../../assets/Images";

const Interiordesign: React.FC = () => {
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
            Interior Design with Glass: How Railings Can Transform Your Living
            Space
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            The railing of your staircase is not just meant for safety—it
            enhances the beauty of your modern home. Glass stair rails are easy
            to clean, don't consume much space, allow more light to peek
            through, and their looks accentuate your home's modernity.
          </p>
          <p className="text-[#1a1919] leading-relaxed text-justify mt-2">
            Furniture polishers and builders who are remodelling a house, as
            well as architects who design show-stopping foyer staircases now can
            have everything they need in a single glass stair railing. It offers
            unrivalled beauty and elegance that boost the value of any home.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="aesthetic-railing-features"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Modern Statement:
            </strong>{" "}
            Without Overpowering the Space
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={aesthetic1 || "/placeholder.svg"}
              alt="Frameless Glass Railings"
              width={500}
              height={300}
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                One of the biggest challenges in interior design is achieving
                balance—especially when it comes to staircases or upper-floor
                railings. Traditional materials like wood or wrought iron can
                feel heavy, visually divide the space, or clash with other
                design elements.
              </p>
              <p className="text-[#292929] mb-4 text-justify">
                Interior glass railings, on the other hand, create the illusion
                of openness and allow other design elements to shine. They pair
                beautifully with hardwood floors, floating staircases,
                minimalist walls, or even bold lighting fixtures.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Enhancing Natural Light Flow
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Glass amplifies light:</b> A game-changer for homes that
                  prioritize bright, airy interiors.
                </li>
                <li>
                  <b>Unobstructed light travel:</b> Natural light can flow
                  freely from floor to floor.
                </li>
                <li>
                  <b>Reduced artificial lighting:</b> Makes spaces feel larger
                  and more inviting.
                </li>
                <li>
                  <b>Enhanced spatial perception:</b> Even small spaces appear
                  more expansive.
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
              A Design Element:
            </strong>{" "}
            That Fits Any Style
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Glass Works in Various Interior Styles:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Scandinavian Interiors:</b> Frameless glass offers that
                  clean, uncluttered vibe.
                </li>
                <li>
                  <b>Transitional Homes:</b> Glass blends easily with both
                  contemporary and traditional design.
                </li>
                <li>
                  <b>Modern Homes:</b> Glass railings offer sleek minimalistic
                  design element.
                </li>
                <li>
                  <b>Luxury Interiors:</b> Pairing glass with custom handrails
                  or curved staircase glass makes for an eye-catching
                  centerpiece.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Built for Safety—Especially Indoors:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Tempered or Laminated Glass:</b> Engineered for impact
                  resistance and code compliance.
                </li>
                <li>
                  <b>Customizable Safety Features:</b> Additional child safety,
                  non-slip surfaces, or integrated handrails.
                </li>
                <li>
                  <b>Various Glass Types:</b> Imperio offers different glass
                  options to suit your needs.
                </li>
                <li>
                  <b>Multiple Finish Options:</b> Elevate your glass railings
                  with the perfect finish for your home.
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
              Final Thoughts:
            </strong>{" "}
            Transform Your Living Space
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                From aesthetics to performance, interior glass railings offer a
                unique opportunity to turn functional spaces into architectural
                features. Whether you're designing a cozy townhouse or a
                spacious modern home, glass can help you achieve a lighter,
                brighter, and more cohesive interior.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Why Choose Glass Railings:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Architectural Enhancement:</b> Turn functional elements
                  into design features.
                </li>
                <li>
                  <b>Versatile Application:</b> Perfect for any home style or
                  size.
                </li>
                <li>
                  <b>Cohesive Interior Design:</b> Creates a seamless visual
                  flow throughout your home.
                </li>
                <li>
                  <b>Lasting Value:</b> If you're planning a renovation or
                  designing a home from scratch, don't overlook what the right
                  railing system can do. With glass, the difference is clear &
                  with imperio its elegant.
                </li>
              </ul>
            </div>
            <img
              src={aesthetic2 || "/placeholder.svg"}
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
      <EnquiryButton />
    </div>
  );
};

export default Interiordesign;
