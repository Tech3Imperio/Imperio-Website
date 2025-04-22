import type { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CustomButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-bold rounded-none transition-all duration-300 flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-[var(--yellow-500)] hover:bg-[var(--yellow-600)] text-black shadow-md hover:shadow-lg",
    secondary:
      "bg-gray-800 hover:bg-gray-900 text-white shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900",
  };

  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
