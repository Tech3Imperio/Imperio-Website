import { motion } from "framer-motion";

const comparisonData = [
  { feature: "Strength", pvb: "Moderate", sgp: "Superior (5x stronger)" },
  { feature: "Cost", pvb: "More Affordable", sgp: "More Expensive" },
  {
    feature: "Applications",
    pvb: "Residential & Light Use",
    sgp: "High-rise & Commercial Use",
  },
  { feature: "Sound Insulation", pvb: "Good", sgp: "Excellent" },
  { feature: "UV Protection", pvb: "Excellent", sgp: "Good" },
  { feature: "Durability", pvb: "Moderate", sgp: "High" },
  { feature: "Clarity", pvb: "Slightly Less Clear", sgp: "High Clarity" },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-100">Feature</th>
            <th className="border p-2 bg-gray-100">PVB Laminated Glass</th>
            <th className="border p-2 bg-gray-100">SGP Laminated Glass</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <motion.tr
              key={row.feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <td className="border p-2">{row.feature}</td>
              <td className="border p-2">{row.pvb}</td>
              <td className="border p-2">{row.sgp}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
