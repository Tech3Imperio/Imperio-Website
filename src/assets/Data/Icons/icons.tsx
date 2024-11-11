import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import { GiArrowsShield } from "react-icons/gi";
const IconBase = ({
  size = 24,
  children,
}: {
  size?: number;
  color?: string;
  children: React.ReactNode;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export const icon01 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21C13.6569 21 15 19.6569 15 18C15 16.3431 13.6569 15 12 15C10.3431 15 9 16.3431 9 18C9 19.6569 10.3431 21 12 21Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9V10C6 10.5304 6.21071 11.0391 6.58579 11.4142C6.96086 11.7893 7.46957 12 8 12H12M12 12H16C16.5304 12 17.0391 11.7893 17.4142 11.4142C17.7893 11.0391 18 10.5304 18 10V9M12 12V15"
      stroke={color || "#000000"}
      strokeWidth="2"
    />
  </IconBase>
);
export const icon02 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M7 10C7.39397 10 7.78407 9.9224 8.14805 9.77164C8.51203 9.62087 8.84274 9.3999 9.12132 9.12132C9.3999 8.84274 9.62087 8.51203 9.77164 8.14805C9.9224 7.78407 10 7.39397 10 7C10 6.60603 9.9224 6.21593 9.77164 5.85195C9.62087 5.48797 9.3999 5.15726 9.12132 4.87868C8.84274 4.6001 8.51203 4.37913 8.14805 4.22836C7.78407 4.0776 7.39397 4 7 4C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7C4 7.79565 4.31607 8.55871 4.87868 9.12132C5.44129 9.68393 6.20435 10 7 10ZM7 10V20M7 10C7 12.333 8.4 17 14 17"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon03 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M5.29201 6C3.81337 7.64839 2.99695 9.7856 3.00001 12C3.00001 12.687 3.07701 13.357 3.22301 14M5.29201 6C6.39319 4.76984 7.81143 3.86618 9.39165 3.38783C10.9719 2.90949 12.6532 2.87489 14.2517 3.28782C15.8503 3.70075 17.3045 4.54531 18.4554 5.72912C19.6062 6.91294 20.4094 8.39043 20.777 10M5.29201 6H12M3.22301 14H13M3.22301 14C3.56151 15.4875 4.2736 16.8642 5.29201 18M20.777 10C21.2211 11.9456 21.0059 13.9836 20.1654 15.7935C19.3249 17.6035 17.9066 19.0827 16.1336 19.9987C14.3606 20.9147 12.3335 21.2154 10.371 20.8536C8.40843 20.4918 6.6218 19.488 5.29201 18M20.777 10H15M5.29201 18H11M12 10H10"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon04 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M9 12C9 10.3431 10.3431 9 12 9V9C13.6569 9 15 10.3431 15 12V12C15 13.6569 13.6569 15 12 15V15C10.3431 15 9 13.6569 9 12V12Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon05 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <g clipPath="url(#clip0_1220_43136)">
      <path
        d="M9.17144 17.6569L11.9999 14.8284M11.9999 14.8284L14.8283 17.6569M11.9999 14.8284V23.3137M14.8283 6.34315L11.9999 9.17157M11.9999 9.17157L9.17144 6.34315M11.9999 9.17157V0.686293"
        stroke={color || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1220_43136">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </IconBase>
);
export const icon06 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M12 8V12M12 12V16M12 12H17C17.5304 12 18.0391 12.2107 18.4142 12.5858C18.7893 12.9609 19 13.4696 19 14V16M12 12H7C6.46957 12 5.96086 12.2107 5.58579 12.5858C5.21071 12.9609 5 13.4696 5 14V16M10 4H14V8H10V4ZM10 16H14V20H10V16ZM3 16H7V20H3V16ZM17 16H21V20H17V16Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon07 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M7.05005 16.95C9.39305 19.293 13.2631 19.223 15.6931 16.793C18.7931 13.693 19.1831 8.92399 19.1561 6.48399C19.1561 6.04904 18.9833 5.6319 18.6757 5.32434C18.3681 5.01678 17.951 4.84399 17.5161 4.84399C15.0761 4.81799 10.3081 5.20699 7.20705 8.30699C4.77705 10.737 4.70705 14.607 7.05005 16.95ZM7.05005 16.95L4.93005 19.07M7.05005 16.95L12.7071 11.293M14.8281 9.17199L12.7081 11.292L14.8281 12M12.7081 11.293L12.0001 9.17199M12.0001 14.828L10.8271 14.438C10.5325 14.3398 10.2648 14.1744 10.0452 13.9548C9.82566 13.7353 9.66024 13.4676 9.56205 13.173L9.17205 12"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon08 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M3 15L3.872 15.697C4.31957 16.055 4.88339 16.2355 5.45566 16.2039C6.02793 16.1724 6.56849 15.931 6.974 15.526C7.38903 15.1108 7.94548 14.8676 8.53209 14.845C9.1187 14.8224 9.69223 15.022 10.138 15.404L10.318 15.558C11.286 16.388 12.714 16.388 13.682 15.558L13.862 15.404C14.3076 15.0219 14.8811 14.8221 15.4677 14.8445C16.0543 14.8669 16.6108 15.11 17.026 15.525C17.4314 15.9302 17.9719 16.1717 18.5441 16.2035C19.1164 16.2352 19.6803 16.0549 20.128 15.697L21 15M20.5 19L20.058 19.442C19.198 20.302 17.803 20.302 16.942 19.442C16.5495 19.0501 16.0236 18.8206 15.4693 18.7995C14.9151 18.7784 14.3732 18.9671 13.952 19.328L13.682 19.558C12.714 20.388 11.286 20.388 10.318 19.558L10.048 19.328C9.62679 18.9671 9.08495 18.7784 8.53068 18.7995C7.9764 18.8206 7.4505 19.0501 7.058 19.442C6.198 20.302 4.803 20.302 3.942 19.442L3.5 19M15 8.824C15 11.455 13 12 12 12C11 12 9 11.455 9 8.824C9 6.192 12 3 12 3C12 3 15 6.192 15 8.824Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon09 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M4 5H20M4 19H20"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10H9C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14H15C16.1046 14 17 13.1046 17 12C17 10.8954 16.1046 10 15 10Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon10 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M5 12H19"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon11 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 10C20.1046 10 21 9.10457 21 8C21 6.89543 20.1046 6 19 6C17.8954 6 17 6.89543 17 8C17 9.10457 17.8954 10 19 10Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 10C6.10457 10 7 9.10457 7 8C7 6.89543 6.10457 6 5 6C3.89543 6 3 6.89543 3 8C3 9.10457 3.89543 10 5 10Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 18C6.10457 18 7 17.1046 7 16C7 14.8954 6.10457 14 5 14C3.89543 14 3 14.8954 3 16C3 17.1046 3.89543 18 5 18Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 18C20.1046 18 21 17.1046 21 16C21 14.8954 20.1046 14 19 14C17.8954 14 17 14.8954 17 16C17 17.1046 17.8954 18 19 18Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 22L12 12L16 22"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon12 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M21 8C21 6.343 17.866 5 14 5C10.134 5 7 6.343 7 8M21 8V12C21 13.02 19.814 13.92 18 14.462C16.866 14.802 15.487 15 14 15C12.513 15 11.134 14.801 10 14.462C8.187 13.92 7 13.02 7 12V8M21 8C21 9.02 19.814 9.92 18 10.462C16.866 10.802 15.487 11 14 11C12.513 11 11.134 10.801 10 10.462C8.187 9.92 7 9.02 7 8"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12V16C3 17.02 4.187 17.92 6 18.462C7.134 18.802 8.513 19 10 19C11.487 19 12.866 18.801 14 18.462C15.813 17.92 17 17.02 17 16V15M3 12C3 10.803 4.635 9.77 7 9.289M3 12C3 13.02 4.187 13.92 6 14.462C7.134 14.802 8.513 15 10 15C10.695 15 11.366 14.957 12 14.876"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon13 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M3 4H21"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9L6 18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 9V14C14 15.1046 14.8954 16 16 16C17.1046 16 18 15.1046 18 14V9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon14 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M21 12H22M18.5 5.5L19.5 4.5M12 3V2M5.5 5.5L4.5 4.5M3 12H2M10 22H14M17 12C16.9997 11.0986 16.7558 10.2141 16.294 9.43993C15.8323 8.66581 15.1698 8.03092 14.3768 7.60245C13.5837 7.17397 12.6896 6.96784 11.789 7.00588C10.8884 7.04391 10.0149 7.3247 9.26079 7.81851C8.50671 8.31233 7.90014 9.00082 7.50527 9.81112C7.11041 10.6214 6.94194 11.5234 7.01769 12.4216C7.09343 13.3198 7.41058 14.1808 7.93557 14.9135C8.46056 15.6463 9.17386 16.2234 10 16.584V19H14V16.584C14.8918 16.1946 15.6507 15.5536 16.1835 14.7393C16.7164 13.9251 17.0001 12.9731 17 12Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon15 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12C22.0019 13.3765 21.7186 14.7384 21.168 16M12 22C13.3135 22.0018 14.6144 21.744 15.8279 21.2414C17.0414 20.7387 18.1436 20.0011 19.071 19.071M2.00001 12C1.99817 10.6865 2.256 9.38562 2.75866 8.17212C3.26133 6.95862 3.99891 5.85646 4.92901 4.929M12 2C10.6235 1.99812 9.26158 2.28141 8.00001 2.832M8.00001 21.168C5.68811 20.1574 3.84256 18.3119 2.83201 16M15.832 3C18.1439 4.01056 19.9895 5.85611 21 8.168"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon16 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M3 11H5M5 11V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V11M5 11H19M21.5 11H19"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 16H14"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon17 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M9.87898 5.636L10.586 4.929C11.7143 3.81892 13.2355 3.19966 14.8184 3.2061C16.4012 3.21255 17.9173 3.84418 19.0366 4.96341C20.1558 6.08265 20.7874 7.5988 20.7939 9.18162C20.8003 10.7644 20.1811 12.2857 19.071 13.414L16.95 15.536M7.75698 7.757L5.63598 9.88M3.51498 12L2.80798 12.707M14.828 17.657L13.414 19.071M12.707 14.121L12 14.828M9.87898 16.95L7.75698 19.07M9.87898 11.292L3.51498 17.656"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4138 10.5862C14.1948 11.3673 15.4612 11.3673 16.2422 10.5862C17.0233 9.80516 17.0233 8.53883 16.2422 7.75778C15.4612 6.97673 14.1948 6.97673 13.4138 7.75778C12.6327 8.53883 12.6327 9.80516 13.4138 10.5862Z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon18 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <path
      d="M22.7 5.3c.4-.4.4-1 0-1.4l-2.6-2.6c-.4-.4-1-.4-1.4 0l-2.8 2.8a5.002 5.002 0 0 0-6.5 6.5l-8.3 8.3a3 3 0 1 0 4.2 4.2l8.3-8.3a5.002 5.002 0 0 0 6.5-6.5l2.6-2.6zm-7.9 9.9L7.5 22a1 1 0 0 1-1.4 0L3 18.9a1 1 0 0 1 0-1.4l7.2-7.2a3 3 0 1 1 4.2 4.2z"
      stroke={color || "#000000"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon19 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <FaBalanceScale
      size={24}
      stroke={color || "#000000"}
      style={{ color: "#03247b" }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
export const icon20 = ({ size, color }: { size?: number; color?: string }) => (
  <IconBase size={size}>
    <GiArrowsShield
      size={24}
      stroke={color || "#000000"}
      style={{ color: "#03247b" }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
