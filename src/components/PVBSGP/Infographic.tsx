import { motion } from "framer-motion";

import { pvbGlass, sgpGlass } from "../../assets/Images";

interface InfographicProps {
  type: "pvb" | "sgp";
}

export default function Infographic({ type }: InfographicProps) {
  return (
    <motion.div
      className="w-full mb-4 p-4 bg-gray-100 rounded-none mt-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={type === "pvb" ? pvbGlass : sgpGlass}
            alt={`${type.toUpperCase()} Laminated Glass`}
            className="w-full h-auto rounded-none shadow-md"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 md:pl-8 text-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl text-[#03237b] font-bold mb-4">
            {type === "pvb" ? "PVB" : "SGP"} Laminated Glass
          </h3>
          <p className="text-gray-700">
            {type === "pvb"
              ? "PVB (Polyvinyl Butyral) laminated glass offers excellent safety, sound insulation, and UV protection. It's ideal for residential and light commercial use."
              : "SGP (SentryGlas Plus) laminated glass provides superior strength and clarity. It's perfect for high-rise buildings and areas with extreme weather conditions."}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
