"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutUsSection() {
  const achievements = [
    "10+ years of industry experience",
    "1000+ successful installations",
    "Premium quality materials",
    "Professional installation team",
    "Customized solutions for every space",
    "Comprehensive warranty coverage",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/Landing/windows2.webp"
                alt="About Imperio Railing"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--yellow-500)] rounded-lg z-[-1]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-gray-800 rounded-lg z-[-1]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Imperio Railing Systems
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At Imperio, we specialize in designing and installing premium
              railing systems that combine aesthetic appeal with uncompromising
              safety. Our team of experts brings years of experience and a
              passion for excellence to every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="h-5 w-5 text-[var(--yellow-500)] flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-gray-700">
              Whether you're looking to enhance your home or upgrade a
              commercial property, our team is dedicated to delivering
              exceptional results that exceed your expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
