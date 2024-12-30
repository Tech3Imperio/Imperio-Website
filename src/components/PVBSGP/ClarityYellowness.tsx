import { motion } from "framer-motion";
import { pvbGlass, sgpGlass } from "../../assets/Images";

export default function ClarityYellowness() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className=""
    >
      <h2 className="text-4xl text-[#03237b] mb-4">Clarity & Yellowness:</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
        <div className="text-center">
          <picture>
            <source
              srcSet={`
      ${pvbGlass} 400w,
      ${pvbGlass} 800w,
      ${pvbGlass} 1200w
    `}
              sizes="(max-width: 480px) 600px, 
           (max-width: 768px) 800px, 
           1200px"
              type="image/webp"
            />
            <img
              src={`${pvbGlass}-800.webp`} // You can change this to the appropriate image URL for fallbacks.
              alt="Career Team"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 rounded-4xl"
            />
          </picture>

          <span className="mt-2 block text-xl text-[#03237b] font-semibold">
            PVB Glass
          </span>
        </div>

        <div className="text-center">
          <picture>
            <source
              srcSet={`
      ${sgpGlass} 400w,
      ${sgpGlass} 800w,
      ${sgpGlass} 1200w
    `}
              sizes="(max-width: 450px) 370px, 
           (max-width: 768px) 600px, 
           600px"
              type="image/webp"
            />
            <img
              src={`${sgpGlass}-800.webp`} // You can change this to the appropriate image URL for fallbacks.
              alt="Career Team"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 rounded-4xl"
            />
          </picture>

          <span className="mt-2 block text-xl text-[#03237b] font-semibold">
            SGP Glass
          </span>
        </div>
      </div>

      <p className="mb-2 text-justify text-[#393939]">
        <b>SGP (SentryGlas Plus)</b> interlayers offer superior <b>clarity</b>{" "}
        and resistance to <b>yellowing</b> compared to{" "}
        <b>PVB (Polyvinyl Butyral)</b>. SentryGlas maintains its transparency
        and color stability over time, even when exposed to <b>UV radiation</b>{" "}
        and high temperatures, making it ideal for long-term applications where
        consistent appearance is crucial. With a yellowness index of 1.5 or
        lower, <b>SGP laminated glass</b> ensures that glass products remain
        clear and free from discoloration, enhancing both aesthetics and
        performance.
      </p>
      <p className="text-justify mb-6 text-[#393939]">
        <b>PVB laminated glass</b>, while still providing good optical{" "}
        <b>clarity</b>, may develop a slight yellow tint over time, particularly
        in applications exposed to prolonged sunlight. This{" "}
        <b>yellowing effect</b> is less pronounced in modern PVB formulations,
        but it can still be more noticeable compared to <b>SGP</b>. With a
        yellowness index between 6 and 12, <b>PVB glass</b> may require more
        maintenance and replacement in high-visibility applications such as{" "}
        <b>glass facades</b> or <b>solar panels</b>. The superior resistance to
        yellowing and enhanced <b>clarity</b> of <b>SGP laminated glass</b>{" "}
        makes it the preferred choice for <b>architectural glass</b>,{" "}
        <b>automotive windows</b>, and other high-performance applications where
        long-term appearance and <b>UV protection</b> are essential.
      </p>
    </motion.section>
  );
}
