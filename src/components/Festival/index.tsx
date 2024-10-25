import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { diwaliImg1, diwaliImg2, diwaliImg3 } from "../../assets/Images";
import { GreyButton } from "../../components";

export default function Festival() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slides = [
    {
      image: diwaliImg1,
      title: "Stunning Glass Railings for Modern Homes!",
      description:
        "Transform your interiors with sleek glass railings that combine safety and style.",
      product: "Illuminated Railings",
      prodDect: "Enhance safety and style with stunning illuminated railings",
    },
    {
      image: diwaliImg2,
      title: "The Ultimate Glass Railing Solutions!",
      description:
        "Experience unparalleled safety and elegance with our premium glass railing options.",
      product: "Festive Glow Collection",
      prodDect:
        "Brighten your celebrations with our stunning festive glow collection.",
    },
    {
      image: diwaliImg3,
      title: "Elegant Glass Railings for Every Style!",
      description:
        "Elevate your home's style with stunning glass railings for clear views.",
      product: "Enduring Strength",
      prodDect:
        "Discover durable glass railings that combine lasting performance with timeless elegance.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full min-h-screen bg-black  text-white overflow-hidden -mt-7">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeIndex}
            src={slides[activeIndex].image}
            alt={`Diwali Glass Railing ${activeIndex + 1}`}
            className="w-full h-full object-cover opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl poppins-regular mb-4">
              {slides[activeIndex].title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300">
              {slides[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.product}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-center ${
                index === activeIndex ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{slide.product}</h3>
              <p className="text-gray-300">{slide.prodDect}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-[5rem] lg:text-[6rem] poppins-light-italic md:mb-10">
            Diwali Special Offers
          </h2>
          <p className="text-base sm:text-2xl md:text-[25px] text-[#f5ce02] mb-8">
            "Celebrate Diwali with up to 10% off glass railings, plus a <br />{" "}
            complimentary design consultation!"
          </p>
          <GreyButton path="/quote">Order now! </GreyButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
      ></motion.div>
    </div>
  );
}
