import { ReactNode } from "react";

export type ButtonProps = {
  className?: string;
  path?: string;
  children: ReactNode;
};
export type WhiteButtonProps = {
  className?: string;
  value?: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
