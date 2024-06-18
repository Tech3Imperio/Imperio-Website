import React from "react";
import { DescProps } from "../../types";

export const Description: React.FC<DescProps> = ({
  yellowText = "",
  mainHeader,
  text = "",
  children,
  className = "",
  black = false,
}) => {
  return (
    <section
      className={
        className +
        ` pt-12 sm:pt-16 tablet:pt-20 xl:pt-28 px-9 sm:px-16 lg:px-28 2xl:px-44 flex flex-col gap-8 ${
          black ? "bg-[--black] " : ""
        }`
      }
    >
      <div className="flex flex-col tablet:flex-row gap-3 tablet:justify-between">
        <div className="flex flex-col gap-1 tablet:gap-6">
          <h1 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            {yellowText}
          </h1>
          <h1
            className={`${
              black ? "text-white" : "text-[--third]"
            } Raleway tracking-wider w-4/5 tablet:w-11/12 text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl`}
          >
            {mainHeader}
          </h1>
        </div>
        <div
          className={`flex ${
            black ? "items-center" : "items-end"
          } text-[--grey] italic w-full tablet:w-1/3 `}
        >
          {text}
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};
