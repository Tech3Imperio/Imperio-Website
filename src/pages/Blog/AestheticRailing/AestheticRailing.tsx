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
        title={"Modern Balcony Railings with Stunning Sea View | Imperio"}
        description={
          "Explore Imperio's sleek and durable balcony railings, designed for safety and unobstructed ocean views. Perfect for homes and commercial spaces."
        }
        keywords={
          "modern balcony railings, frameless glass railings, stylish railings, durable outdoor railings, weather-resistant railings, ocean view railings, contemporary railings, aesthetic balcony railings, luxury railing design, premium glass railings, high-quality deck railings, elegant staircase railings, sleek patio railings, best balcony railings, secure railing systems, custom railing solutions, frameless railing installation, residential railings, commercial railings, minimalist railings, unobstructed view railings"
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
