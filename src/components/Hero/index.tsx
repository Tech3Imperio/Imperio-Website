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
          srcSet={`${img} 400w, ${img} 800w, ${img} 1200w`}
          sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
          src={img}
          alt="Hero background"
          className="hidden"
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          width="100%"
          height="auto"
          style={{ aspectRatio: "16/9" }}
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
            condition ? "phone:pt-72" : "phone:pt-48"
          } text-white pl-9 phone:pl-16 tablet:pl-24 laptop:pl-32 xl:pl-44`}
        >
          {/* Main header */}
          <p
            className={`text-[1.5rem] phone:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.5rem] xl:text-[3rem] Raleway ${
              condition ? "w-4/5" : "w-full"
            }`}
          >
            {header}
          </p>

          {/* Subheader */}
          <h1
            className={`text-xs phone:text-lg ${
              condition ? "lg:w-[52%]" : "lg:w-[40%] py-4 "
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
