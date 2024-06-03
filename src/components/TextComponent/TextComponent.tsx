import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextWrapperProps {
  className?: string;
  children: React.ReactNode;
}
interface TextComponentProps {
  text: string[];
  inner?: boolean;
  className?: string;
}

const TextWrapper = ({ children }: TextWrapperProps) => {
  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.5, 1]);
  const colorChange = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["#ffffff", "#8b939c", "#03237b"]
  );
  const weightChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ["300", "400", "500"]
  );

  return (
    <div ref={text}>
      <motion.p
        style={{
          opacity: opacity,
          color: colorChange,
          fontWeight: weightChange,
        }}
        className="Raleway"
      >
        {children}
      </motion.p>
    </div>
  );
};

export const TextComponent = ({
  className = "",
  text,
  inner = false,
}: TextComponentProps) => {
  return (
    <section
      className={`h-[100vh] flex flex-col justify-center items-center text-5xl gap-4 ${
        inner ? "" : className
      }`}
    >
      {text.map((text) => (
        <TextWrapper key={text} className={inner ? className : ""}>
          {text}
        </TextWrapper>
      ))}
    </section>
  );
};
