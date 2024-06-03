import React from "react";
import { DescProps } from "../../types";

export const Description: React.FC<DescProps> = ({
  yellowText,
  mainHeader,
  text,
  children,
  className,
  black = false,
}) => {
  return (
    <section
      className={`${className} py-20 px-44 max-sm:px-4 max-md:px-12 max-lg:px-20 max-xl:px-28 max-2xl:px-36 ${
        black ? "bg-[--black]" : ""
      }`}
    >
      <div className="flex justify-between max-lg:flex-col max-lg:gap-6 max-lg:w-full">
        <div className={`flex flex-col justify-between gap-6`}>
          {yellowText ? (
            <header className="YellowText max-xl:text-3xl max-2xl:text-4xl">
              {yellowText}
            </header>
          ) : (
            ""
          )}

          <header
            className={` text-5xl Raleway max-xl:text-4xl ${
              black ? "text-white" : "text-[--third]"
            }`}
          >
            {mainHeader}
          </header>
        </div>
        <div
          className={`${
            yellowText ? "flex items-end" : ""
          } mb-5 max-lg:justify-end`}
        >
          <div
            className={` text-base  italic tracking-wide ${
              black ? "text-white" : "text-[--grey]"
            }`}
          >
            {text}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
