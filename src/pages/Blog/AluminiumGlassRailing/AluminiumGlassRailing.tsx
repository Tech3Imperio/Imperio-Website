import React from "react";
import { motion } from "framer-motion";
import AluminiumGlass from "../../../components/AluminiumGlassRailing/AluminiumGlass";
import { Hero } from "../../../components";
import { aluminiumglassrailing } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";

const AluminiumGlassRailing: React.FC = () => {
  return (
    <>
      <Metadata
        title={"Imperio Aluminium Glass Railings – Durable & Modern Designs"}
        description={
          "Discover premium aluminium glass railings by Imperio. Durable, stylish, and corrosion-resistant solutions for balconies, staircases, patios, and decks."
        }
        keywords={
          "aluminium glass railings, Imperio railings, modern glass railings, balcony glass railing, staircase railings, frameless glass railings, commercial railings, residential railings, weather-resistant railings, corrosion-resistant railings, luxury railing design, premium glass railings, minimalist railings, durable railing systems, patio glass railings, deck railings, custom glass railings, contemporary railings, secure glass railings, high-quality aluminium railings, glass railing installation, architectural railings, best glass railings, railing solutions"
        }
        ogImage="https://i.postimg.cc/DwKCBkQF/1.png"
        ogUrl={"https://www.imperiorailing.com/blog/aluminum-glass-railings"}
      />

      <Hero
        img={aluminiumglassrailing}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Imperio Aluminium Glass railing system on a balcony with a stunning view"
        header="Aluminium Glass Railings"
        subHeader="The utmost convenience and quickest installation with a highly customisable aluminium railings. Discover premium aluminium glass railings by Imperio. Durable, stylish, and corrosion-resistant solutions for balconies, staircases, patios, and decks."
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AluminiumGlass />
        </motion.div>
      </div>
    </>
  );
};

export default AluminiumGlassRailing;
