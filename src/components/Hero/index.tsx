import { useState, useEffect, useCallback } from "react";
import { HeroProps } from "../../types";

export const Hero: React.FC<HeroProps> = ({
  img = `${process.env.IMAGE_URL}/hero.webp`,
  header,
  subHeader,
  height = false,
  curve = false,
  children,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const preloadImage = useCallback(() => {
    const preload = new Image();
    preload.src = img;
    preload.onload = () => setImageLoaded(true);
  }, [img]);

  useEffect(() => {
    preloadImage();
  }, [preloadImage]);

  const condition = height && !curve;

  console.log(imageLoaded);

  return (
    <>
      <link rel="preload" href={img} as="image" type="image/webp" />

      <section
        className={`relative -top-7 w-full ${
          condition
            ? "h-screen max-phone:h-[60vh]"
            : "h-[60vh] max-phone:h-[50vh] rounded-b-4xl"
        } bg-cover bg-center`}
      >
        {/* Use <picture> for AVIF & WebP support */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet={`${img.replace(".webp", ".avif")}`}
            type="image/avif"
          />
          <source srcSet={img} type="image/webp" />
          <img
            src={img}
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </picture>

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            condition
              ? "from-black from-10% via-[rgba(0,0,0,0.6)] via-75% to-transparent"
              : "from-black via-transparent via-90% to-[rgba(241,239,231,0.5)]"
          }`}
        />

        {/* Content */}
        <div
          className={`relative z-10 h-full flex flex-col justify-center phone:justify-start ${
            condition ? "phone:pt-72" : "phone:pt-48"
          } text-white pl-9 phone:pl-16 tablet:pl-24 laptop:pl-32 xl:pl-44`}
        >
          <p
            className={`text-[1.5rem] phone:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.5rem] xl:text-[3rem] Raleway ${
              condition ? "w-4/5" : "w-full"
            }`}
          >
            {header}
          </p>

          <h1
            className={`text-xs phone:text-lg ${
              condition ? "lg:w-[52%]" : "lg:w-[40%] py-4"
            }`}
          >
            {subHeader}
          </h1>

          <div className="pt-8">{children}</div>
        </div>
      </section>
    </>
  );
};
