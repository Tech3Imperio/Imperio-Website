import { ReactNode } from "react";

export type BlogType = {
  imgSrc: string;
  alt?: string;
  header: string;
  description: string;
  details?: string;
  tags: string[];
  socialMedia: string;
};

export type BlogCardProps = {
  blog: BlogType;
  className?: string;
  onClick?: () => void;
};

export type BlogPanelProps = {
  BlogData: BlogType[];
  Socials: string[];
  children?: ReactNode;
  className?: string;
};
