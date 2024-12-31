import React from "react";
import { Link } from "react-router-dom";
import {
  Button2Props,
  ButtonProps,
  WhiteButtonProps,
  CTAButtonProps,
  CTAButtonProps2,
  CTAButtonProps3,
} from "../../types";

export const GreyButton: React.FC<ButtonProps> = ({
  path = "",
  children,
  className,
}) => {
  return (
    <Link
      aria-label="know moew btn gray"
      to={path}
      className={
        className +
        ` w-max py-4 px-6 border-2 rounded-4xl bg-gray-500 bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100`
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
      aria-label="know moew btn black"
      to={path}
      className={
        className +
        ` py-4 px-6 rounded-4xl text-[--white] bg-[--black] transition-700 hover:text-[--black] hover:bg-[--secound] text-center whitespace-nowrap`
      }
    >
      {children}
    </Link>
  );
};

export const BlackButton2: React.FC<Button2Props> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      aria-label="know moew btn black2"
      onClick={onClick}
      className={
        className +
        ` w-max py-4 px-6 rounded-4xl text-[--white] bg-[--black] transition-700 hover:text-[--black] hover:bg-[--secound]`
      }
    >
      {children}
    </button>
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
      aria-label="dealer white"
      onClick={onClick}
      className={
        `w-max py-2 px-6 border-black rounded-4xl ${
          value ? "bg-[--secound]" : "bg-transparent"
        } text-[--black] transition-700 hover:text-[--black] hover:bg-[--secound] ` +
        className
      }
    >
      {children}
    </button>
  );
};

export const CTAButton: React.FC<CTAButtonProps> = ({
  phoneNumber,
  children,
  className = "",
}) => {
  return (
    <Link
      aria-label="CTA btn gray"
      to={`tel:${phoneNumber}`} // Using "tel:" scheme for phone call
      className={
        className +
        ` w-max py-4 px-4 border-2 rounded-4xl bg-gray-500 bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100`
      }
    >
      {children}
    </Link>
  );
};
export const CTAButton2: React.FC<CTAButtonProps2> = ({
  phoneNumber,
  children,
  className = "",
}) => {
  return (
    <Link
      aria-label="CTA btn black"
      to={`tel:${phoneNumber}`} // Using "tel:" scheme for phone call
      className={
        className +
        `w-max py-4 px-4 rounded-4xl text-[--white] bg-[--black] transition-700 hover:text-[--black] hover:bg-[--secound]`
      }
    >
      {children}
    </Link>
  );
};
export const CTAButton3: React.FC<CTAButtonProps3> = ({
  phoneNumber,
  children,
  className = "",
}) => {
  return (
    <Link
      aria-label="CTA btn white"
      to={`tel:${phoneNumber}`} // Using "tel:" scheme for phone call
      className={
        className +
        `py-[15px] px-4 text-[--black] font-bold bg-white text-[9px] md:text-xs rounded-4xl transition-700 cursor-pointer border border-white hover:bg-[--black] hover:text-[--secound] whitespace-nowrap`
      }
    >
      {children}
    </Link>
  );
};
