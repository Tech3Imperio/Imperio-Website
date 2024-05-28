import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  path?: string;
  children: ReactNode;
}
export interface WhiteButtonProps {
  className?: string;
  value?: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
