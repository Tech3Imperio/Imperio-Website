import React from "react";
import { motion } from "framer-motion";
import SeamlessRailings from "../../../components/SeamlessRailings/SeamlessRailings";
import { Hero } from "../../../components";
import { seamlessRailings } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";

const SeamlessRailing: React.FC = () => {
  return (
    <>
      <Metadata
        title={"Seamless Glass Railings: Modern Design for Clear Views"}
        description={
          "Upgrade to seamless glass railings for uninterrupted views. Modern, durable, and stylish—perfect for balconies, decks, and commercial spaces."
        }
        keywords={
          "seamless glass railings, frameless glass railings, modern glass railings, balcony glass railing, staircase glass railings, clear view railings, unobstructed glass railings, weather-resistant railings, residential glass railings, commercial glass railings, luxury glass railings, custom glass railing solutions, stylish glass railings, contemporary glass railings, premium glass railing systems, sleek glass railings, glass railing installation, durable glass railings, high-quality glass railings, outdoor glass railings, patio glass railings, best glass railings, corrosion-resistant railings, architectural glass railings, tempered glass railings"
        }
        ogImage="https://i.postimg.cc/DwKCBkQF/1.png"
        ogUrl={"https://www.imperiorailing.com/blog/seamless-railing"}
      />

      <Hero
        img={seamlessRailings}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Imperio Aluminium Glass railing system on a balcony with a stunning view"
        header="Seamless Glass Railings"
        subHeader="Seamless Glass Railing for Uninterrupted Views: Latest Modern Design. Upgrade to seamless glass railings for uninterrupted views. Modern, durable, and stylish—perfect for balconies, decks, and commercial spaces."
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SeamlessRailings />
        </motion.div>
      </div>
    </>
  );
};

export default SeamlessRailing;
