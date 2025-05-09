import React from "react";
import { motion } from "framer-motion";
import Futuredesign from "../../../components/Futuredesign/Futuredesign";
import { Hero } from "../../../components";
import { futureHome3 } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";

const FutureDesign: React.FC = () => {
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
        ogImage="https://i.postimg.cc/T3RWpB5k/future-Home1.jpg"
        ogUrl={"https://www.imperiorailing.com/blog/future-modern-home-design"}
      />

      <Hero
        img={futureHome3}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Glass railing systems support environmentally conscious home design in multiple ways."
        header="Why Glass Railings Are the Future of Modern Home Design"
        subHeader="Frameless Glass Railings adds timeless elegance to
residential as well as commercial spaces and highlights modern industrial and upscale
contemporary styles."
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Futuredesign />
        </motion.div>
      </div>
    </>
  );
};

export default FutureDesign;
