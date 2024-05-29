import React from "react";
import { HeroProps } from "../../types";

export const Hero: React.FC<HeroProps> = ({
  img,
  altText,
  header,
  subHeader,
  height = 100,
  curve = false,
  shadow = false,
  children,
}) => {
  const sectionHeight = `${height - 9}vh`;
  const containerHeight = `${height - 6}vh`;

  return (
    <section style={{ height: sectionHeight }} className="w-full relative">
      <div
        style={{ height: containerHeight }}
        className={`absolute left-0 top-[-28px] w-full -z-[5] overflow-hidden bg-black ${
          curve && "rounded-b-4xl"
        } ${shadow && "shadow-shadow shadow-gray-500"}`}
      >
        <img src={img} alt={altText} className="w-full h-full object-cover" />
        <div
          style={{ height: containerHeight }}
          className="relative left-0 -top-full w-full bg-gradient-to-r from-black via-transparent via-90% to-[rgba(241,239,231,0.5)]"
        ></div>
      </div>
      <div className="h-full flex justify-center flex-col text-white pl-64 space-y-2">
        <header className="Title">{header}</header>
        <div>{subHeader}</div>
        {children}
      </div>
    </section>
  );
};
