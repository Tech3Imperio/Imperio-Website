import React from "react";
import { motion } from "framer-motion";

import { Hero } from "../../../components";
import { modernBalcony } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";
import AluminumVSSteel from "../../../components/AluminumVSSteel/AluminumVSSteel";
// import { aluminiumglass } from "../../../assets/Images";
const AlumiumVsStainless: React.FC = () => {
  return (
    <>
      <Metadata
        title={
          "Stainless Steel vs Aluminium Glass Railings: Benefits & Comparison"
        }
        description={
          "Compare stainless steel and aluminium glass railings. Explore their benefits, costs, and durability for balconies, decks, and staircases."
        }
        keywords={
          "Stainless Steel Glass Railing, Aluminium Glass Railing, Glass Railing Benefits, Glass Railings for Balconies, Decks, Staircases, Durability of Glass Railings, Cost of Glass Railings, Choosing Glass Railings for Homes"
        }
        // ogImage={aluminiumglass}
        ogImage={
          "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/StainlessSteel/aluminiumglass.webp"
        }
        ogUrl={
          "https://www.imperiorailing.com/blog/aluminum-vs-stainless-steel-glass-railings"
        }
      />

      <Hero
        img={modernBalcony}
        altText="balcony-glass-railing"
        header="Aluminium vs Stainless Steel Glass Railings"
        subHeader="Discover the key differences between Aluminium and Stainless Steel Glass Railings, including their benefits, durability, and cost to help you choose the perfect option for your space. Stainless steel post railings: timeless aesthetics and top quality "
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AluminumVSSteel />
        </motion.div>
      </div>
    </>
  );
};

export default AlumiumVsStainless;
