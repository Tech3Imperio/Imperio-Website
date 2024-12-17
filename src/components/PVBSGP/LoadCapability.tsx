import { motion } from "framer-motion";
import { clarityImage } from "../../assets/Images";
export default function LoadCapability() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-2 pt-14 flex flex-col md:flex-row items-center gap-14"
    >
      <div className="md:w-full">
        <h2 className="text-4xl text-[#03237b] mb-4">Load Capability:</h2>
        <p className="mb-2 text-justify text-[#7d7f81]">
          <b>SGP (SentryGlas Plus)</b> interlayers exhibit superior load-bearing
          capacity compared to <b>PVB (Polyvinyl Butyral)</b> interlayers. This
          enhanced strength allows for the use of thinner{" "}
          <b>laminated glass constructions</b> while maintaining excellent
          structural integrity. The ability to achieve higher load tolerance
          with thinner glass results in cost-effective solutions without
          compromising on performance. SGP is often used in{" "}
          <b>high-performance glass applications</b>, including{" "}
          <b>glass railings</b> and <b>balustrades</b>, ensuring safety and
          durability in commercial and residential projects.
        </p>

        <p className="mb-2 text-justify text-[#7d7f81]">
          While <b>PVB laminated glass</b> still provides good load capability,
          it may require thicker glass or additional layers to achieve the same
          strength as <b>SGP laminated glass</b> in high-load applications. This
          difference makes <b>SGP interlayers</b> the preferred choice for
          demanding applications such as <b>structural glazing</b>,{" "}
          <b>staircase glass railings</b>, and <b>glass facades</b>.{" "}
          <b>SGP laminated glass</b> provides improved resistance to impact and
          environmental stress, making it ideal for modern architectural
          designs.
        </p>

        <p className="text-justify text-[#7d7f81]">
          The enhanced load-bearing capacity of <b>SGP laminated glass</b> makes
          it ideal for <b>structural glazing</b>, <b>balustrades</b>, and other
          critical applications where maximum strength and safety are essential.
          By using <b>SentryGlas Plus interlayers</b>, designers can optimize
          the use of materials, reducing structural weight and material costs
          while maintaining high-performance standards. This makes <b>SGP</b> a
          top choice for <b>modern glass railings</b>,{" "}
          <b>glass balcony railings</b>, and other <b>glass applications</b> in
          both <b>Punjab</b> and <b>Surat</b>.
        </p>
      </div>
      <div className="md:w-2/3">
        <img
          src={clarityImage}
          alt="Load Capability Comparison"
          width={500}
          height={300}
          loading="lazy"
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.section>
  );
}
