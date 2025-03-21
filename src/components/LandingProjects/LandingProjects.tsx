"use client";
import { Shield, Award, Clock, PenToolIcon as Tool } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingProjects() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-[var(--yellow-500)]" />,
      title: "Premium Quality",
      description:
        "Our railings are crafted from the finest materials, ensuring durability and longevity.",
      image: "/images/Landing/premium.webp",
    },
    {
      icon: <Award className="h-10 w-10 text-[var(--yellow-500)]" />,
      title: "Modern Design",
      description:
        "Sleek, contemporary designs that enhance the aesthetic appeal of any property.",
      image: "/images/Landing/modern.webp",
    },
    {
      icon: <Clock className="h-10 w-10 text-[var(--yellow-500)]" />,
      title: "Quick Installation",
      description:
        "Professional installation services with minimal disruption to your space.",
      image: "/images/Landing/installation.png",
    },
    {
      icon: <Tool className="h-10 w-10 text-[var(--yellow-500)]" />,
      title: "Customizable Solutions",
      description:
        "Tailored railing systems to meet your specific requirements and preferences.",
      image: "/images/Landing/custom.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Imperio Railing Systems
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              variants={itemVariants}
            >
              <div className="relative h-48 mb-6 rounded-md overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-3 text-yellow-500">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
