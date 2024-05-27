import { ReactNode } from "react";

export interface DescProps {
  yellowText?: string | ReactNode;
  mainHeader: string | ReactNode;
  text?: string | ReactNode;
  children?: ReactNode;
}
