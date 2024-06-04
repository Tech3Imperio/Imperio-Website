import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps, WhiteButtonProps } from "../../types";

export const QuoteButton: React.FC = () => {
  return (
    <Link
      to="quote"
      className="py-4 px-6 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer hover:border hover:border-[--secound] hover:shadow-white hover:bg-[--black] hover:text-[--secound]"
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
        ` w-max py-2 px-6 border-2 rounded-4xl bg-gray-500 bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100`
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
        ` w-max py-4 px-6 rounded-4xl text-[--white] bg-[--black] transition-700 hover:text-[--black] hover:bg-[--secound]`
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
        `w-max py-2 px-6 font-normal border-black rounded-4xl ${
          value ? "bg-[--secound]" : "bg-transparent"
        } text-[--black] transition-700 hover:text-[--black] hover:bg-[--secound] ` +
        className
      }
    >
      {children}
    </button>
  );
};
