import React from "react";
import { DescProps } from "../../interface/desc";

export const Description: React.FC<DescProps> = ({
  yellowText,
  mainHeader,
  text,
  children,
}) => {
  return (
    <section className="py-20  px-44">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between gap-6">
          <header className="YellowText">{yellowText}</header>
          <header className="PrimaryText">{mainHeader}</header>
        </div>
        <div className="flex items-end mb-5">
          <text className="Text italic tracking-wide">{text}</text>
        </div>
      </div>
      {children}
    </section>
  );
};
