/** @type {import('tailwindcss').Config} */
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
        "--secound": "#f5ce02",
        "--third": "#03247b",
      },
      borderRadius: {
        "4xl": "30px",
      },
      boxShadow: {
        shadow: "0px 0px 12px 4px rgba(0, 0, 0, 1)",
        small: "0px 0px 7px 0px rgb(0,0,0)",
      },
    },
  },
  plugins: [],
};
