/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "--white": " #ffffff",
        "--black": "#292929",
        "--grey": "#8b939c",
        "--first": "#f1efe7",
        "--secound": "#f5ce02",
        "--third": "#03247b",
      },
    },
  },
  plugins: [],
};
