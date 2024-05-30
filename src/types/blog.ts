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

export type SlidingPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  blog: BlogType;
};
