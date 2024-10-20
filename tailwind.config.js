import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navblue: "#003399",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      screens: {
        md1: "955px",
        md3: "1180px",
        mdx: "1175px",
        md2: "700px",
        mdh: "1070px",
        xl1: "1483px",
        xl2: "1300px",
        "2xl": "1400px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
