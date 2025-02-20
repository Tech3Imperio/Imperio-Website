import React from "react";
import { motion } from "framer-motion";
import AestheticRailing from "../../../components/AestheticRailing/AestheticRailing";
import { Hero } from "../../../components";
import { aesthetic } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";

const AestheticRailings: React.FC = () => {
  return (
    <>
      <Metadata
        title={
          "Stylish modern railing on a balcony in Goa with a beautiful ocean view"
        }
        description={
          "Discover modern railings in our latest Goa project, blending safety with stunning ocean views."
        }
        keywords={
          "aesthetic railings, Imperio aesthetic railings, modern aesthetic railings, balcony aesthetic railings, staircase aesthetic railings, frameless aesthetic railings, contemporary aesthetic railings, durable aesthetic railings, weather-resistant aesthetic railings, aesthetic railings for homes, aesthetic railings for businesses, commercial aesthetic railings, residential aesthetic railings, sleek aesthetic railing designs, unobstructed view railings, stylish aesthetic railings for decks, aesthetic railings for patios, high-quality aesthetic railings, premium aesthetic railing systems, custom aesthetic railing solutions, elegant aesthetic railings, luxury aesthetic railing design, best aesthetic railings, aesthetic balcony railings, aesthetic railing installation, robust aesthetic railings, secure aesthetic railing systems"
        }
        ogImage="https://i.postimg.cc/pLrtrZfd/1720001003331.jpg"
        ogUrl={"https://www.imperiorailing.com/blog/aesthetic-railing"}
      />

      <Hero
        img={aesthetic}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Stylish modern railing on a balcony in Goa with a beautiful ocean view"
        header="Aesthetic Glass Railings"
        subHeader="Modern Railing Designs with Unmatched Aesthetic Charm"
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AestheticRailing />
        </motion.div>
      </div>
    </>
  );
};

export default AestheticRailings;
