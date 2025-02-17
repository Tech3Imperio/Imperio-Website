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
        title={
          "Transform Your Home with Imperio: Elegant and Safe Aluminium Glass Railings"
        }
        description={
          "Elevate your space with Imperio’s Aluminium Glass railings, blending safety, style, and sophistication."
        }
        keywords={
          "aluminium glass railings, Imperio aluminium railings, modern glass railings, balcony glass railing, staircase glass railings, aluminium framed glass railings, frameless glass railings, contemporary glass railings, durable glass railings, corrosion-resistant railings, glass railings for homes, glass railings for businesses, commercial glass railings, residential glass railings, sleek glass railing designs, safety glass railings, stylish railings for decks, glass railings for patios, high-quality aluminium railings, premium railing systems, custom glass railing solutions, elegant glass railings, luxury railing design, best glass railings, aluminium balcony railings, glass railing installation, robust glass railings, secure railing systems"
        }
        ogImage="https://i.postimg.cc/DwKCBkQF/1.png"
        ogUrl={"https://www.imperiorailing.com/blog/seamless-railing"}
      />

      <Hero
        img={seamlessRailings}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Imperio Aluminium Glass railing system on a balcony with a stunning view"
        header="Aluminium Glass Railings"
        subHeader="Elevate your space with Imperio’s Aluminium Glass railings, blending safety, style, and sophistication."
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
