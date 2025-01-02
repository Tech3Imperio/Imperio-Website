import { ReactNode } from "react";

export type ButtonProps = {
  className?: string;
  path?: string;
  children: ReactNode;
};

export type Button2Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export type WhiteButtonProps = {
  className?: string;
  value?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type QuoteButtonProps = {
  className?: string;
};
export type DealershipButtonProps = {
  className?: string;
};

export type CTAButtonProps = {
  phoneNumber: string; // Prop to receive the phone number
  children: React.ReactNode;
  className?: string;
};
// export type CTAButtonProps2 = {
//   phoneNumber: string; // Prop to receive the phone number
//   children: React.ReactNode;
//   className?: string;
// };
export type CTAButtonProps3 = {
  phoneNumber: string; // Prop to receive the phone number
  children: React.ReactNode;
  className?: string;
};
