import React from "react";
import { motion } from "framer-motion";
import { Hero } from "../../../components";
import { aesthetic } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";
import Interiordesign from "../../../components/InteriorDesign/Interiordesign";

const InteriorDesign: React.FC = () => {
  return (
    <>
      <Metadata
        title={"Modern Balcony Railings with Unobstructed Ocean View | Imperio"}
        description={
          "Explore Imperio's frameless glass balcony railings, designed for durability and clear ocean views. Ideal for residential and commercial applications."
        }
        keywords={
          "modern balcony railings, frameless glass railings, balcony glass panels, durable outdoor railings, weather-resistant glass railings, ocean view balcony railings, contemporary glass railings, balcony railing systems, premium glass railing solutions, deck glass railings, glass stair railings, patio glass railings, best balcony railing designs, glass railing installation, commercial balcony railings, residential glass railings, frameless railing systems, custom glass railings, unobstructed view railings, tempered glass railings"
        }
        ogImage="https://i.postimg.cc/pLrtrZfd/1720001003331.jpg"
        ogUrl={"https://www.imperiorailing.com/blog/interior-design"}
      />

      <Hero
        img={aesthetic}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Stylish modern railing on a balcony in Goa with a beautiful ocean view"
        header="Aesthetic Glass Railings"
        subHeader="Modern Railing Designs with Unmatched Aesthetic Charm. Explore Imperio's frameless glass balcony railings, designed for durability and clear ocean views. Ideal for residential and commercial applications."
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Interiordesign />
        </motion.div>
      </div>
    </>
  );
};

export default InteriorDesign;
