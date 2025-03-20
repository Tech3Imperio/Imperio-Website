/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        phone: "480px",
        tablet: "768px",
        laptop: "1024px",
      },
      width: {
        phone: "480px",
        tablet: "768px",
        laptop: "1024px",
      },
      colors: {
        "--white": " #ffffff",
        "--black": "#292929",
        "--grey": "#8b939c",
        "--first": "#f1efe7",
        "--secound": "#fad000",
        "--third": "#03247b",
      },
      borderRadius: {
        "4xl": "30px",
      },
      boxShadow: {
        navbar: "0px 3px 10px 0px rgba(245,206,2,1)",
        navmobile: "0px 9px 11px -5px rgba(245,206,2,1)",
        shadow: "0px 0px 12px 4px rgba(0, 0, 0, 1)",
        small: "0px 0px 7px 0px rgb(0,0,0)",
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [aspectRatio, "tailwind-scrollbar-hide"],
};
