import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "../Button";
import { MdAddCall } from "react-icons/md";
// import EnquiryButton from "../EnquiryButton/EnquiryButton";
import { seamless1, seamless2 } from "../../assets/Images";
const SeamlessRailings: React.FC = () => {
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
    { id: "seamless-glass-features", label: "Features" },
    { id: "seamless-glass-benefits", label: "Benefits" },
    { id: "seamless-glass-application", label: "Application" },
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
        </ul>
      </nav>

      <motion.main className="max-w-6xl mx-auto w-full">
        <motion.section
          className="mb-12"
          id="introduction"
          variants={sectionVariants}
        >
          <span className="text-4xl font-semibold mb-4 text-[#03237b]">
            Seamless Glass Railings for Modern Aesthetics
          </span>
          <p className="text-[#1a1919] leading-relaxed text-justify">
            Elevate your property’s style with a sleek, contemporary railing
            system designed to offer both beauty and safety. The seamless design
            eliminates unsightly metal frames, allowing for an unobstructed view
            that enhances the overall aesthetic of your space. Whether you are
            looking to create a relaxing outdoor retreat or a stylish balcony,
            these railings provide an elegant solution that complements any
            architectural style. Additionally, their versatility makes them
            suitable for a variety of settings, from residential homes to
            upscale commercial properties, making them an attractive option for
            any project. The combination of high-quality materials and
            innovative design ensures that these railings not only look great
            but also meet stringent safety standards. With seamless glass
            railings, you can enjoy the breathtaking beauty of your surroundings
            without compromising on protection.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          id="seamless-glass-features"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Seamless Glass Railings:
            </strong>{" "}
            Unobstructed Views and Modern Design
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={seamless1}
              alt="Seamless Glass Railing"
              width={500}
              height={300}
              className="rounded-none shadow-lg"
            />
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Our <strong>glass railing system</strong> offers completely
                unobstructed views, making it ideal for balconies with stunning
                ocean or city views. Constructed from high-quality{" "}
                <strong>aluminium</strong> and <strong>glass</strong>, this
                system is built to withstand the elements, ensuring durability
                and longevity. The <strong>glass panels</strong> are made from
                tempered glass, providing strength and safety while remaining
                visually appealing. Additionally, the corrosion-resistant{" "}
                <strong>aluminium frames</strong> help maintain the integrity of
                the railing over time, eliminating the need for frequent
                replacements. The transparent nature of glass allows natural
                light to flood the area, creating a bright and inviting
                atmosphere that enhances the overall ambiance of your outdoor
                space. This low-profile design minimizes visual obstruction,
                allowing the landscape to remain the focal point, giving
                homeowners the freedom to enjoy their scenic views without
                distraction. Furthermore, the sleek lines and modern look of
                seamless glass railings serve as a stylish addition to any
                property, reinforcing its contemporary aesthetic.
              </p>
              <p className="text-2xl font-semibold mb-2 text-[#03237b]">
                Key Benefits:
              </p>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Unobstructed Views:</b> Allows for clear sightlines,
                  perfect for scenic locations.
                </li>
                <li>
                  <b>Durability and Longevity:</b> Built to withstand weather
                  conditions with minimal maintenance.
                </li>
                <li>
                  <b>Tempered Glass Panels:</b> Provide strength, safety, and
                  visual appeal.
                </li>
                <li>
                  <b>Corrosion-Resistant Aluminium Frames:</b> Ensure long-term
                  performance and structural integrity.
                </li>
                <li>
                  <b>Natural Light Enhancement:</b> Transparent glass panels
                  allow sunlight to flood the area, brightening the space.
                </li>
                <li>
                  <b>Modern and Stylish Design:</b> Perfect for contemporary
                  properties seeking a sleek aesthetic.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="seamless-glass-benefits"
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              The Best of Both Worlds:
            </strong>{" "}
            Beauty & Durability Combined
          </h3>
          <div className="lg:flex gap-12 mt-2">
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Why Choose Seamless Glass Railings?
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Uninterrupted Views:</b> Perfect for beachfront properties
                  or mountain homes, offering clear and beautiful sightlines.
                </li>
                <li>
                  <b>Elegant Design:</b> The seamless glass design provides a
                  modern, sophisticated touch to any property.
                </li>
                <li>
                  <b>Low Maintenance:</b> Constructed with durable materials
                  like aluminium and glass, these railings require minimal
                  upkeep.
                </li>
                <li>
                  <b>Weather-Resistant:</b> Built to withstand various weather
                  conditions, ensuring long-lasting performance.
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <span className="text-xl font-semibold text-[#03237b]">
                Additional Benefits:
              </span>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Increased Property Value:</b> Adds a sleek, modern touch
                  that can enhance the marketability of your property.
                </li>
                <li>
                  <b>Secure & Reliable:</b> Offers strong protection and
                  stability, ensuring the safety of your outdoor space.
                </li>
                <li>
                  <b>Versatile for Any Setting:</b> Ideal for both residential
                  and commercial properties, including balconies, patios, and
                  staircases.
                </li>
                <li>
                  <b>Long-Term Investment:</b> The combination of durability and
                  aesthetics makes these railings a lasting addition to any
                  property.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          id="seamless-glass-application"
          variants={sectionVariants}
        >
          <p className="text-3xl font-semibold mb-4 text-[#03237b]">
            <strong className="text-[#fad000] font-medium">
              Seamless Glass Railings:
            </strong>{" "}
            Ideal for Modern Living & Design
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <p className="text-[#292929] mb-4 text-justify">
                Ideal for residential balconies, decks, and patios, seamless
                glass railings offer an elegant solution for maintaining an
                open, scenic view while ensuring safety. Customizable to fit
                various heights and designs, these railings can adapt to any
                architectural style, making them perfect for both private homes
                and commercial properties. Their sleek, modern design integrates
                seamlessly into any environment, elevating the overall aesthetic
                without compromising on functionality.
              </p>
              <div className="text-2xl font-semibold mb-2 text-[#03237b]">
                Where Seamless Glass Railings Shine:
              </div>
              <ul className="list-disc list-inside text-[#292929] space-y-2">
                <li>
                  <b>Residential Spaces:</b> Ideal for balconies, decks, and
                  patios where unobstructed views are essential.
                </li>
                <li>
                  <b>Commercial Projects:</b> Perfect for hotels, resorts, and
                  office buildings, adding a modern touch to any setting.
                </li>
                <li>
                  <b>Customizable Designs:</b> Tailored to fit various heights,
                  styles, and local building codes.
                </li>
                <li>
                  <b>Easy Installation:</b> Designed for a smooth setup without
                  compromising on structural integrity.
                </li>
              </ul>
            </div>
            <img
              src={seamless2}
              alt="Seamless Glass Railings"
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

export default SeamlessRailings;
