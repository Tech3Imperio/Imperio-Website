"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
// import { ArrowRight } from "lucide-react";

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("glass");

  const handleOpenPopup = () => {
    window.dispatchEvent(new CustomEvent("openPopupForm"));
  };

  const categories = [
    { id: "glass", name: "Glass Railings" },
    { id: "stainless", name: "Stainless Steel" },
    { id: "combo", name: "Combination Systems" },
  ];

  const products = {
    glass: [
      {
        id: 1,
        name: "Frameless Glass Balcony",
        image: "/images/Landing/GlassRailing2.webp",
      },
      {
        id: 2,
        name: "Glass Staircase Railing",
        image: "/images/Landing/ovalHandrail.webp",
      },
      {
        id: 3,
        name: "Tempered Glass Pool Fence",
        image: "/images/Landing/pool.webp",
      },
      {
        id: 4,
        name: "Modern Glass Partition",
        image: "/images/Landing/buildingImg.webp",
      },
    ],
    stainless: [
      {
        id: 5,
        name: "Stainless Steel Balustrade",
        image: "/images/Landing/squareBalconyHandrail.webp",
      },
      {
        id: 6,
        name: "Cable Railing System",
        image: "/images/Landing/SSglassrailing.webp",
      },
      {
        id: 7,
        name: "Stainless Handrail",
        image: "/images/Landing/aluminiumglass.webp",
      },
      {
        id: 8,
        name: "Decorative Steel Railing",
        image: "/images/Landing/LEDHandrail.webp",
      },
    ],
    combo: [
      {
        id: 9,
        name: "Glass & Steel Balcony",
        image: "/images/Landing/VillaBalcony.webp",
      },
      {
        id: 10,
        name: "Mixed Material Staircase",
        image: "/images/Landing/whitestaircase.webp",
      },
      {
        id: 11,
        name: "Contemporary Hybrid System",
        image: "/images/Landing/fenceRail.webp",
      },
      {
        id: 12,
        name: "Premium Combination Railing",
        image: "/images/Landing/LightingRails.webp",
      },
    ],
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium Railing Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-quality railing systems designed to
            enhance the beauty and safety of your property.
          </p>
        </motion.div>

        <div className="mb-10">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-yellow-500 text-black shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products[activeCategory as keyof typeof products].map(
              (product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {product.name}
                      </h3>
                      <CustomButton
                        variant="primary"
                        size="sm"
                        className="w-full text-white bg-slate-700 opacity-80"
                        onClick={handleOpenPopup}
                      >
                        Get Quote
                      </CustomButton>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-12 text-center w-full flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <CustomButton
            variant="primary"
            size="lg"
            onClick={handleOpenPopup}
            className="bg-yellow-500"
          >
            Request Custom Design
            {/* <ArrowRight className="ml-2 h-5 w-5  " /> */}
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}
