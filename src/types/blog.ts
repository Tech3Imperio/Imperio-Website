import { ReactNode } from "react";

export type BlogType = {
  id?: string;
  imgSrc: string;
  alt?: string;
  header: string;
  description: string;
  details?: string;
  tags: string[];
  socialMedia: string;
  socialMediaLink: string;
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
