import { ReactNode } from "react";

export type HeroProps = {
  img: string;
  altText?: string;
  header: string | ReactNode;
  subHeader: string;
  height?: number;
  curve?: boolean;
  shadow?: boolean;
  children?: ReactNode;
};
