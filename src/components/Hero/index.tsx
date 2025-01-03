// import React from "react";
// import { HeroProps } from "../../types";

// // Hero component definition with TypeScript for prop types
// export const Hero: React.FC<HeroProps> = ({
//   img, // Image URL for the background
//   header, // Main header text
//   subHeader, // Subheader text
//   height = false, // Determines if the section should have full height
//   curve = false, // Determines if the section should have a curve at the bottom
//   children,

//   // Any additional child elements
// }) => {
//   // Condition for applying styles based on height and curve props
//   const condition = height && !curve;

//   return (
//     // Section element with dynamic class names based on the condition
//     <section
//       className={`relative -top-7 w-full ${
//         condition
//           ? "h-screen max-phone:h-[60vh] overflow-hidden" // Full height without curve
//           : "h-[60vh] max-phone:h-[50vh] rounded-b-4xl overflow-hidden" // Specific height with curve
//       } bg-cover bg-center `}
//       style={{ backgroundImage: `url(${img})` }} // Inline style for background image
//     >
//       {/* Overlay div with gradient background, conditional styles */}
//       <div
//         className={`absolute inset-0 ${
//           condition
//             ? "bg-gradient-to-r from-black from-10% via-[rgba(0,0,0,0.6)] via-75% to-transparent" // Gradient for full height
//             : "bg-gradient-to-r from-black via-transparent via-90% to-[rgba(241,239,231,0.5)]" // Gradient for specific height with curve
//         }`}
//       />
//       {/* Content div with text and child elements, positioned absolutely within the section */}
//       <div
//         className={`relative z-10 h-full leading-snug phone:leading-normal flex flex-col justify-center phone:justify-start ${
//           condition ? "phone:pt-72" : "phone:pt-60"
//         } text-white pl-9 phone:pl-16 tablet:pl-24 laptop:pl-32 xl:pl-44`}
//       >
//         {/* Header element with dynamic width and responsive text size */}
//         <h2
//           className={`text-[2rem] phone:text-[3rem] tablet:text-[3.3rem] laptop:text-[3.5rem] xl:text-[3.8rem] Raleway ${
//             condition ? "w-4/5" : "w-full"
//           }`}
//         >
//           {header}
//         </h2>
//         {/* Subheader element with dynamic width and responsive text size */}
//         <h1
//           className={`text-xs phone:text-base ${
//             condition ? "w-4/5" : "w-full py-4"
//           }`}
//         >
//           {subHeader}
//         </h1>
//         {/* Container for child elements with padding-top */}
//         <div className="pt-8">{children}</div>
//       </div>
//     </section>
//   );
// };

import { useState, useEffect } from "react";
import { HeroProps } from "../../types";
import heroImage from "../../assets/Images/home/hero.webp"; // Main image

export const Hero: React.FC<HeroProps> = ({
  img = heroImage, // Default to the high-res image
  header,
  subHeader,
  height = false,
  curve = false,
  children,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the high-resolution image as soon as the component mounts
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = img;
    preloadImage.onload = () => setImageLoaded(true); // Mark the image as loaded when ready
  }, [img]);

  const condition = height && !curve;

  return (
    <>
      {/* Preload the main image to prioritize it */}
      <link rel="preload" href={img} as="image" />

      <section
        className={`relative -top-7 w-full ${
          condition
            ? "h-screen max-phone:h-[60vh] overflow-hidden" // Full height without curve
            : "h-[60vh] max-phone:h-[50vh] rounded-b-4xl overflow-hidden" // Specific height with curve
        } bg-cover bg-center`}
        style={{
          backgroundImage: `url(${img})`, // Main image URL
          filter: imageLoaded ? "none" : "blur(20px)", // Blur the image while loading
          transition: imageLoaded ? "none" : "filter 0.3s ease-in-out", // Smooth transition once the image is loaded
        }}
      >
        {/* Hidden <img> to trigger loading and onLoad event */}
        <img
          src={img}
          alt="Hero background"
          className="hidden"
          onLoad={() => setImageLoaded(true)}
          loading="lazy" // Native lazy loading
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 ${
            condition
              ? "bg-gradient-to-r from-black from-10% via-[rgba(0,0,0,0.6)] via-75% to-transparent"
              : "bg-gradient-to-r from-black via-transparent via-90% to-[rgba(241,239,231,0.5)]"
          }`}
        />

        {/* Content positioned inside the Hero section */}
        <div
          className={`relative z-10 h-full leading-snug phone:leading-normal flex flex-col justify-center phone:justify-start ${
            condition ? "phone:pt-72" : "phone:pt-60"
          } text-white pl-9 phone:pl-16 tablet:pl-24 laptop:pl-32 xl:pl-44`}
        >
          {/* Main header */}
          <p
            className={`text-[2rem] phone:text-[3rem] tablet:text-[3.3rem] laptop:text-[3.5rem] xl:text-[3.8rem] Raleway ${
              condition ? "w-4/5" : "w-full"
            }`}
          >
            {header}
          </p>

          {/* Subheader */}
          <h1
            className={`text-xs phone:text-base ${
              condition ? "lg:w-[52%]" : "lg:w-[52%] py-4"
            }`}
          >
            {subHeader}
          </h1>

          {/* Children content */}
          <div className="pt-8">{children}</div>
        </div>
      </section>
    </>
  );
};
