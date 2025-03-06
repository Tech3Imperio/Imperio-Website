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
        title={"Handrails for Safety: Benefits, Design & Installation Guide"}
        description={
          "Discover our range of high-quality stair railings made from stainless steel and glass. We are happy to help you to find the perfect solution!."
        }
        keywords={
          "handrails for safety, handrail installation, ADA-compliant handrails, commercial handrails, residential handrails, modern handrail designs, durable handrails, aluminium handrails, stainless steel handrails, glass handrails, wooden handrails, staircase handrails, ramp handrails, balcony handrails, deck handrails, safety handrails, accessibility handrails, secure handrails, premium handrail systems, ergonomic handrails, slip-resistant handrails, wheelchair-accessible handrails, corrosion-resistant handrails, best handrails for homes, stylish handrails, contemporary handrails, building code handrail regulations, legal handrail requirements"
        }
        ogImage="https://i.postimg.cc/pT79XCGX/quora.webp"
        ogUrl={"https://www.imperiorailing.com/blog/handrail-benefit"}
      />

      <Hero
        img={handrailBenefits}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Balcony/ModernBalcony.webp"
        altText="Sturdy handrails installed on a staircase"
        header="Aluminium Handrails"
        subHeader="Discover our high-quality handrails, as well as an extensive range of brackets, end pieces and lighting. Handrails enhance safety, accessibility, and compliance for staircases, ramps, and balconies. Explore handrails for staircases, ramps, and balconies. Find range of high-quality stair railings made from stainless steel and glass. We are happy to help you to find the perfect solution!"
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
