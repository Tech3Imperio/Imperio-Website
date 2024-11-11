import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { createGroups } from "../../../utils";

// Define the types for the props of the TextWrapper component
interface TextWrapperProps {
  className?: string;
  children: React.ReactNode;
}

// Define the types for the props of the TextComponent component
interface TextComponentProps {
  texts: string;
  inner?: boolean;
  className?: string;
}

// TextWrapper component definition
const TextWrapper = ({ children }: TextWrapperProps) => {
  // Create a reference to the text div
  const text = useRef<HTMLDivElement>(null);

  // Initialize state for the scrollClass
  const [scrollClass, setScrollClass] = useState<string>(
    "opacity-0 text-white font-light"
  );

  // Destructure scrollYProgress from useScroll hook
  const { scrollYProgress } = useScroll({
    target: text,
    offset:
      window.innerWidth <= 768
        ? ["start end", "end start"]
        : ["end end", "start start"],
  });

  // useEffect to handle scroll changes and update scrollClass accordingly
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.1) {
        setScrollClass("opacity-0 text-white font-light");
      } else if (latest < 0.2) {
        setScrollClass("opacity-50 text-[#8b939c] font-normal");
      } else {
        setScrollClass("opacity-100 text-[--third] font-medium");
      }
    });

    // Cleanup function to unsubscribe from scroll changes
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Return the motion.p component with dynamic class names based on scroll position
  return (
    <div ref={text}>
      <motion.p className={`Raleway ${scrollClass} transition-500 =`}>
        {children}
      </motion.p>
    </div>
  );
};

// TextComponent component definition
export const TextComponent = ({
  className = "",
  texts,
  inner = false,
}: TextComponentProps) => {
  // Create groups of text by splitting the input text by spaces
  const textList = createGroups(texts.split(" "));

  // Return a section with mapped TextWrapper components
  return (
    <section
      id="textscroller"
      className={` h-auto py-4 md:py-0 md:h-[82.5vh] w-screen flex flex-col justify-center items-center text-2xl tablet:text-5xl gap-4 ${
        inner ? "" : className
      }`}
    >
      {textList.map((text, index) => (
        <TextWrapper key={index} className={inner ? className : ""}>
          {text}
        </TextWrapper>
      ))}
    </section>
  );
};
