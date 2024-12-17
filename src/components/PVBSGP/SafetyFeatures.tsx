import { motion } from "framer-motion";

export default function SafetyFeatures() {
  const features = [
    {
      title: "Safety Glass",
      description:
        "Both PVB (Polyvinyl Butyral) and SGP (SentryGlas Plus) create safety glass by holding glass shards together upon breakage, ensuring the integrity of the glass in balcony railings, staircase glass railings, and other glass applications. These laminated glass options enhance safety and reduce the risk of injury, making them ideal for high-risk areas like glass balustrades and handrails.",
    },
    {
      title: "Strong Adhesion",
      description:
        "After breakage, PVB laminated glass and SGP interlayers both stick the glass together, maintaining the structural integrity of glass railings, glass facades, and other high-performance glass applications. SGP offers stronger adhesion, which enhances the overall strength of the laminate, making it a great choice for glass staircases, balustrades, and decorative glass elements that require durability.",
    },
    {
      title: "UV Blocking",
      description:
        "Both PVB and SGP interlayers block over 99% of UV rays, providing excellent UV protection for indoor spaces. This prevents fading and damage to furniture, flooring, and other indoor assets. SGP slightly outperforms PVB in UV blocking, making it an excellent choice for glass railing systems, overhead glazing, and solar panels exposed to direct sunlight.",
    },
    {
      title: "Decorative Function",
      description:
        "Both SentryGlas (SGP) and PVB laminated glass offer versatile decorative functions in architectural design. These materials can be used as part of the building's structural components, such as glass railings, glass staircases, balustrades, and even glass floors. Their aesthetic appeal, along with durability and safety, makes them perfect for modern architectural applications that require both function and style.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="mb-12"
    >
      <h2 className=" text-3xl md:text-4xl text-[#03237b] mb-4">
        Safety Features :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            className="bg-white p-6 rounded-2xl  drop-shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#03237b] mb-2">
              {feature.title}
            </h3>
            <p className="text-justify">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
