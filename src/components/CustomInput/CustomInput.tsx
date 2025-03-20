"use client";

import { type InputHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
          <input
            ref={ref}
            className={`w-full px-4 py-2.5 rounded-md border ${
              error ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[var(--yellow-500)] focus:border-transparent transition-all duration-200 ${className}`}
            {...props}
          />
        </motion.div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
