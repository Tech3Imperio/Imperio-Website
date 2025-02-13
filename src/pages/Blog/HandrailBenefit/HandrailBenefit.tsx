import React from "react";
import { motion } from "framer-motion";
import HandrailBenefits from "../../../components/HandrailBenefits/HandrailBenefits";
import { Hero } from "../../../components";
import { handrailBenefits } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";

const HandrailBenefit: React.FC = () => {
  return (
    <>
      <Metadata
        title={
          "Should You Use Handrails for Railings? Key Benefits and Considerations"
        }
        description={
          "Handrails enhance safety, accessibility, and compliance for staircases, ramps, and balconies."
        }
        keywords={
          "handrails for safety, handrail installation, ADA-compliant handrails, commercial handrails, residential handrails, modern handrail designs, durable handrails, aluminium handrails, stainless steel handrails, glass handrails, wooden handrails, handrails for staircases, handrails for ramps, balcony handrails, deck handrails, safety handrails, accessibility handrails, secure handrails, high-quality handrails, custom handrail solutions, best handrails for homes, handrails for public spaces, stylish handrails, contemporary handrails, premium handrail systems, easy-to-install handrails, corrosion-resistant handrails, legal requirements for handrails, building code handrail regulations, ergonomic handrails, slip-resistant handrails, supportive handrails, handrails for elderly, wheelchair-accessible handrails"
        }
        ogImage="https://i.postimg.cc/pT79XCGX/quora.webp"
        ogUrl={"https://www.imperiorailing.com/blog/handrail-benefit"}
      />

      <Hero
        img={handrailBenefits}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Sturdy handrails installed on a staircase, providing safety and support."
        header="Sturdy Handrails"
        subHeader="Handrails enhance safety, accessibility, and compliance for staircases, ramps, and balconies."
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HandrailBenefits />
        </motion.div>
      </div>
    </>
  );
};

export default HandrailBenefit;
