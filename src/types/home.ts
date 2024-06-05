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
export type ScrollData = {
  id: number;
  img: string;
  alt: string;
  header: string;
  subheader: string;
};

export type FuturePanelProps = {
  scroller: ScrollData[];
  mainHeader?: string | ReactNode;
  yellowHeader?: string | ReactNode;
  text?: string | ReactNode;
};

export interface VerticalCarouselProps {
  children: React.ReactNode;
  className?: string;
  direction?: boolean;
}
