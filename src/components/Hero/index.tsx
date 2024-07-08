import React from "react";
import { HeroProps } from "../../types";

// Hero component definition with TypeScript for prop types
export const Hero: React.FC<HeroProps> = ({
  img, // Image URL for the background
  header, // Main header text
  subHeader, // Subheader text
  height = false, // Determines if the section should have full height
  curve = false, // Determines if the section should have a curve at the bottom
  children, // Any additional child elements
}) => {
  // Condition for applying styles based on height and curve props
  const condition = height && !curve;

  return (
    // Section element with dynamic class names based on the condition
    <section
      className={`relative -top-7 w-full ${
        condition
          ? "h-screen max-phone:h-[60vh] overflow-hidden" // Full height without curve
          : "h-[60vh] max-phone:h-[50vh] rounded-b-4xl overflow-hidden" // Specific height with curve
      } bg-cover bg-center `}
      style={{ backgroundImage: `url(${img})` }} // Inline style for background image
    >
      {/* Overlay div with gradient background, conditional styles */}
      <div
        className={`absolute inset-0 ${
          condition
            ? "bg-gradient-to-r from-black from-10% via-[rgba(0,0,0,0.6)] via-75% to-transparent" // Gradient for full height
            : "bg-gradient-to-r from-black via-transparent via-90% to-[rgba(241,239,231,0.5)]" // Gradient for specific height with curve
        }`}
      />
      {/* Content div with text and child elements, positioned absolutely within the section */}
      <div
        className={`relative z-10 h-full leading-snug phone:leading-normal flex flex-col justify-center phone:justify-start ${
          condition ? "phone:pt-72" : "phone:pt-60"
        } text-white pl-9 phone:pl-16 tablet:pl-24 laptop:pl-32 xl:pl-44`}
      >
        {/* Header element with dynamic width and responsive text size */}
        <h1
          className={`text-[2.7rem] phone:text-[3rem] tablet:text-[3.3rem] laptop:text-[3.5rem] xl:text-[3.8rem] Raleway ${
            condition ? "w-4/5" : "w-full"
          }`}
        >
          {header}
        </h1>
        {/* Subheader element with dynamic width and responsive text size */}
        <div
          className={`text-xs phone:text-base ${
            condition ? "w-4/5" : "w-full"
          }`}
        >
          {subHeader}
        </div>
        {/* Container for child elements with padding-top */}
        <div className="pt-8">{children}</div>
      </div>
    </section>
  );
};
