import { motion } from "framer-motion";
import { loadCapabilityImage } from "../../assets/Images";

export default function ComparisonChart() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* <h2 className="text-2xl font-semibold mb-4">PVB vs SGP Comparison</h2> */}
      <div className="flex justify-center">
        <img
          src={loadCapabilityImage}
          alt="PVB vs SGP Comparison Chart"
          loading="lazy"
          className="rounded-lg h-auto w-auto "
        />
      </div>
    </motion.section>
  );
}
