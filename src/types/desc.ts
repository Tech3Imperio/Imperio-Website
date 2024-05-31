import { ReactNode } from "react";

export type DescProps = {
  yellowText?: string | ReactNode;
  mainHeader: string | ReactNode;
  text?: string | ReactNode;
  black?: boolean;
  children?: ReactNode;
};
