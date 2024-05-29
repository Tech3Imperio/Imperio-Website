import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps, WhiteButtonProps } from "../../types";

export const QuoteButton: React.FC = () => {
  return (
    <Link
      to="/"
      className="py-4 px-6 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl shadow-shadow shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-110 hover:shadow-white "
    >
      GET A QUOTE
    </Link>
  );
};

export const GreyButton: React.FC<ButtonProps> = ({
  path = "",
  children,
  className,
}) => {
  return (
    <Link
      to={path}
      className={
        className +
        ` w-max py-2 px-6 border-2 rounded-4xl bg-gray-500 bg-opacity-60 transition-all duration-500 ease-in-out hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100`
      }
    >
      {children}
    </Link>
  );
};

export const BlackButton: React.FC<ButtonProps> = ({
  path = "",
  children,
  className,
}) => {
  return (
    <Link
      to={path}
      className={
        className +
        ` w-max py-2 px-6 rounded-4xl text-[--white] bg-[--black] transition-all duration-500 ease-in-out hover:text-[--black] hover:bg-[--secound `
      }
    >
      {children}
    </Link>
  );
};

export const WhiteButton: React.FC<WhiteButtonProps> = ({
  className = "",
  value = false,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        `w-max py-2 px-6 border border-black rounded-4xl ${
          value ? "bg-[--secound]" : "bg-transparent"
        } text-[--black] transition-all duration-500 ease-in-out hover:text-[--black] hover:bg-[--secound] ` +
        className
      }
    >
      {children}
    </button>
  );
};
