import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-14"
    >
      <h3 className="text-4xl text-[#03237b] mb-4">What are PVB and SGP?</h3>
      <p className="mb-4 text-justify text-[#7d7f81]">
        <b>PVB (Polyvinyl Butyral)</b> and <b>SGP (SentryGlas Plus)</b> are two
        top interlayers used in laminated glass production.{" "}
        <b>PVB laminated glass</b> is popular for its excellent adhesion,{" "}
        <b>UV-blocking windows</b>, and soundproof properties, making it ideal
        for applications like <b>automotive windows</b> and{" "}
        <b>architectural glass</b>. On the other hand,{" "}
        <b>SGP laminated glass</b> offers superior strength, clarity, and impact
        resistance, making it perfect for <b>high-rise building facades</b> and{" "}
        <b>security glass</b>.
      </p>

      <p className="text-justify text-[#7d7f81]">
        Both <b>PVB laminated glass</b> and <b>SGP laminated glass</b> are used
        for creating <b>glass railing systems</b> and other{" "}
        <b>glass structural applications</b>. The <b>strength of SGP</b> makes
        it the go-to option for <b>glass railings</b> in demanding environments,
        including <b>balcony glass railing</b> and{" "}
        <b>staircase glass railing</b>. <b>PVB</b> is still a strong contender
        in more standard applications, providing safety,{" "}
        <b>weather-resistant glass railings</b>, and sound insulation properties
        for residential projects across <b>Mumbai</b> and <b>Bangalore</b>.
      </p>

      <p className="text-justify  text-[#7d7f81]">
        Choosing the right laminated glass is crucial for achieving the desired
        balance of strength, clarity, and safety. Whether you’re looking for{" "}
        <b>frameless glass railings</b> with a minimalist design or{" "}
        <b>bulletproof glass</b> for high-security applications, both <b>PVB</b>{" "}
        and <b>SGP</b> are great options. <b>SGP laminated glass</b> is perfect
        for those seeking advanced <b>impact-resistant glass</b> solutions,
        while <b>PVB</b> is still a reliable choice for standard{" "}
        <b>glass railing designs</b> and other <b>glass applications</b> in
        places like <b>Karnataka</b> and <b>Uttar Pradesh</b>.
      </p>
    </motion.section>
  );
}
