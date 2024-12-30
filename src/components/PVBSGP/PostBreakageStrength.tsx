import { motion } from "framer-motion";
import { postBreakageStrengthImage } from "../../assets/Images";

export default function PostBreakageStrength() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mb-6"
    >
      <h2 className="text-4xl text-[#03237b] mb-4 ">Post-breakage Strength:</h2>
      <p className="mb-2 text-justify text-[#393939]">
        <b>SGP (SentryGlas Plus)</b> interlayers offer superior post-breakage
        strength, making them ideal for <b>glass railings</b>,{" "}
        <b>balcony glass railing</b>, and <b>staircase glass railing</b>, where
        safety is crucial. Unlike <b>PVB laminated glass</b>, which may sag or
        tear under load, <b>SGP laminated glass</b> maintains structural
        integrity in high-impact or extreme weather conditions, making it
        suitable for high-risk applications like <b>glass balustrades</b>.
      </p>

      <p className="mb-12 text-justify text-[#393939]">
        The enhanced strength of <b>SGP laminated glass</b> also makes it
        perfect for <b>hurricane-resistant windows</b> and{" "}
        <b>overhead glazing</b>, offering high performance and safety. Both{" "}
        <b>PVB</b> and <b>SGP</b> improve safety by holding glass shards
        together upon breakage, reducing injury risks. Whether designing{" "}
        <b>glass barriers</b> or <b>modern staircase glass railing</b>, SGP is a
        top choice for durability in regions like <b>Uttarakhand</b>,{" "}
        <b>Himachal Pradesh</b>, <b>Punjab</b>, and <b>Uttar Pradesh</b>.
      </p>

      <div className="flex justify-center">
        <img
          src={postBreakageStrengthImage}
          alt="Post-breakage Strength Comparison"
          loading="lazy"
          className="rounded-lg shadow-lg h-auto w-auto"
        />
      </div>
    </motion.section>
  );
}
