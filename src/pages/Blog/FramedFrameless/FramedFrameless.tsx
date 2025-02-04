import React from "react";
import { motion } from "framer-motion";
import MainContent from "../../../components/FramedVSFrameless/MainContent";
import { Hero } from "../../../components";
// import { modernBalcony } from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";

const FramedFrameless: React.FC = () => {
  return (
    <>
      <Metadata
        title={
          "Framed Glass vs Frameless Glass Railings: Key Differences & Benefits"
        }
        description={
          "Discover the differences between framed and frameless glass railings, comparing factors like design, safety, cost, and installation. Learn which style suits your property, whether you're enhancing a modern home or a commercial space. Explore the benefits of both framed and frameless glass railings for balconies, staircases, decks, and more."
        }
        keywords={
          "framed  glass vs frameless glass railings, framed glass railings vs frameless, framed glass railing systems, frameless glass railing systems, glass railing design, modern glass railings, balcony glass railing, staircase glass railings, frameless glass railing safety, framed glass railing benefits, glass railing installation, glass railing for homes, glass railing for businesses, frameless vs framed glass railing installation, contemporary glass railings, cost of glass railings, glass railings for decks, custom glass railings, safety glass railing, modern balcony railing, framed glass balcony railing, frameless glass balcony railing"
        }
        // ogImage="https://raw.githubusercontent.com/Tech3Imperio/Imperio-Website/refs/heads/main/src/assets/Images/Balcony/ModernBalcony.webp" // Replace with your image
        ogImage="https://asset.cloudinary.com/dj2h9pj9i/aa6a2a9931bc46a208a67bcb83273349"
        ogUrl={
          "https://www.imperiorailing.com/blog/framed-vs-frameless-glass-railings"
        }
      />

      <Hero
        // img={modernBalcony}
        img="https://asset.cloudinary.com/dj2h9pj9i/aa6a2a9931bc46a208a67bcb83273349p"
        altText="balcony-railing"
        header="Framed vs Frameless Glass Railings"
        subHeader="Framed and frameless glass railings differ in appearance, cost, durability, and maintenance requirements. Explore the pros and cons of framed vs frameless glass railings for your next project."
        curve
      />
      <div className=" max-w-7xl mx-auto">
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MainContent />
        </motion.div>
      </div>
    </>
  );
};

export default FramedFrameless;
