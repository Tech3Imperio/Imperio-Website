"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CustomButton from "../CustomButton/CustomButton";
import { hero2Image } from "../../assets/Images";

export default function HeroSection() {
  const handleOpenPopup = () => {
    window.dispatchEvent(new CustomEvent("openPopupForm"));
  };

  return (
    <section
      className={`relative w-full min-h-[70vh] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden `}
    >
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src={hero2Image}
          alt="Imperio Railing Systems"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated overlay elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-none opacity-40 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500 rounded-none opacity-10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      {/* Fixed Navbar */}
      <nav className="top-0 left-0 w-full bg-black opacity-90 backdrop-blur-md z-50">
        <div className=" container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
          <img
            src="/images/Landing/White.webp"
            alt="Imperio Railing Systems"
            className="h-20 w-32 "
          />
          <button
            onClick={() => {
              window.open("https://wa.me/918591953382", "_blank");
            }}
            className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-none hover:bg-yellow-300"
          >
            Chat on WhatsApp
          </button>
        </div>
      </nav>
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="max-w-xl mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Space With Premium Railing Systems
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <CustomButton
              variant="primary"
              size="lg"
              onClick={handleOpenPopup}
              className=" bg-yellow-400 text-white py-3 rounded-l hover:bg-yellow-300"
            >
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 " />
            </CustomButton>
            {/* <CustomButton
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Products
            </CustomButton> */}
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="relative w-full md:w-1/2 h-[300px] md:h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/Landing/SlidingDoor.jpg"
            alt="Modern Glass Railing"
            className="w-full h-full object-cover rounded-none shadow-2xl"
          />

          <motion.div
            className="absolute -bottom-5 -right-5 w-32 h-32 bg-[var(--yellow-500)] rounded-none z-[-1]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div> */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
