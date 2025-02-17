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
          "Seamless Glass Railing for Uninterrupted Views: Latest Modern Design"
        }
        description={
          "Enjoy uninterrupted views with our seamless glass railing system, blending modern design with safety."
        }
        keywords={
          "seamless glass railings, Imperio seamless railings, modern seamless glass railings, balcony seamless glass railing, staircase seamless glass railings, frameless seamless glass railings, contemporary seamless glass railings, durable seamless glass railings, weather-resistant seamless railings, seamless glass railings for homes, seamless glass railings for businesses, commercial seamless glass railings, residential seamless glass railings, sleek seamless glass railing designs, unobstructed view railings, stylish seamless railings for decks, seamless glass railings for patios, high-quality seamless glass railings, premium seamless railing systems, custom seamless glass railing solutions, elegant seamless glass railings, luxury seamless railing design, best seamless glass railings, seamless glass balcony railings, seamless glass railing installation, robust seamless glass railings, secure seamless railing systems"
        }
        ogImage="https://i.postimg.cc/DwKCBkQF/1.png"
        ogUrl={"https://www.imperiorailing.com/blog/seamless-railing"}
      />

      <Hero
        img={seamlessRailings}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Imperio Aluminium Glass railing system on a balcony with a stunning view"
        header="Seamless Glass Railings"
        subHeader="Seamless Glass Railing for Uninterrupted Views: Latest Modern Design."
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
