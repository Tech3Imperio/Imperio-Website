import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { bigImg1, bigImg2, setImg1, setImg2 } from "../../../assets/Images";
import { ImageScrollProps, ImageScrollsProps } from "../../../types";

// ImageScroll component definition
const ImageScroll: React.FC<ImageScrollProps> = ({
  children,
  direction,
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null); // Create a reference to the div element for scroll tracking

  // Initialize scroll progress using Framer Motion's useScroll hook
  const { scrollYProgress } = useScroll({
    target: scrollRef, // Target element to track the scroll progress
    offset: ["start end", "end start"], // Offset for the start and end positions
  });

  // Create a transform for the horizontal translation based on scroll progress
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 1], // Input range
    [1000, 0, direction] // Output range: initial, mid, and end positions
  );

  return (
    <div ref={scrollRef} className={className}>
      {/* Container div with scrollRef and optional className */}
      <motion.div
        className="h-max" // Class to set the maximum height
        style={{
          translateX: xTransform, // Apply the xTransform to translateX property
        }}
      >
        {children} {/* Render the children elements inside the motion.div */}
      </motion.div>
    </div>
  );
};

// Array of card objects containing image sources and alt text
const cards = [
  { img: bigImg1, alt: "main image for scroll" },
  { img: setImg1, alt: "main image for scroll" },
  { img: setImg2, alt: "main image for scroll" },
  { img: bigImg2, alt: "main image for scroll" },
];

// ImageScrolls component definition
export const ImageScrolls: React.FC<ImageScrollsProps> = ({
  className = "",
}) => {
  return (
    <ImageScroll
      direction={window.innerWidth < 600 ? -2700 : -1000} // Direction based on window width
      className={className} // Optional className
    >
      <div className="flex gap-4" style={{ right: 0 }}>
        {" "}
        {/* Container div with flex and gap styles */}
        {cards.map((card, index) => {
          // Map through the cards array
          return (
            <img
              src={card.img} // Image source
              alt={card.alt} // Alt text
              key={index} // Unique key for each image
              title={card.alt} // Title attribute for the image
              className="max-h-[34rem] rounded-4xl w-auto" // Image styling
            />
          );
        })}
      </div>
    </ImageScroll>
  );
};
