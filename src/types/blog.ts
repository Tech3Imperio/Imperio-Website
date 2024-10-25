import { ReactNode } from "react";

export type BlogType = {
  id?: string;
  img: string;
  alt?: string;
  header: string;
  description: string;
  details?: string;
  tags: string | string[];
  socialMedia: string;
  socialMediaLink: string;
  sectionTags: string;
  section1: string;
  section2: string;
  section3: string;
  section4: string;
};

export type AllBlogType = [
  {
    id: string;
    header: string;
    img: string;
    alt: string;
    description: string;
    details: string;
    section1: string;
    section2: string;
    section3: string;
    section4: string;
    sectionTags: string;
    socialMedia: string;
    socialMediaLink: string;
    tags: string;
  }
];

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
