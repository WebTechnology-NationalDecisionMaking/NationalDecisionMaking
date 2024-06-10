import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        default: "0.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inset-light-green-button":
          "inset 0px 0px 8px rgba(192, 192, 192, 0.4)",
      },
      colors: {
        "light-bg": "#F9F9F9",
        "border-gray": "#E1E3E3",
        "light-green-button": "#E4EAE9",
        "light-green-button-hover": "#D4E0DE",
        "light-green-button-active": "#C4D2D0",
        "border-light-button": "#A4B6B4",
        primary: "#55BEA7",
        "primary-hover": "#3F9E8B",
        "primary-active": "#2F7E6F",
        "semiLight-green-bg": "#EEF0EF",
        "light-section-bg": "#EFF0F0",
        "light-section-bg-hover": "#E2E2E2",
        "light-section-bg-active": "#D4D4D4",
        "border-light-section": "#E2E2E2",
        "text-gray": "#5C5C5C",
        "text-gray-dark": "#3A3A3A",
        "text-gray-light": "#757575",
        "border-gray-light": "#F3F3F3",
      },
      height: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem'   // 640px
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(black|white|light-bg|border-gray|light-green-button|light-green-button-hover|light-green-button-active|border-light-button|primary|primary-hover|primary-active|semiLight-green-bg|light-section-bg|light-section-bg-hover|light-section-bg-active|border-light-section|text-gray|text-gray-dark|text-gray-light|border-gray-light)/,
      variants: ["hover", "active", "focus", "disabled"],
    },
    {
      pattern: /(inset-light-green-button)/,
    },
    {
      pattern: /(rounded-default)/,
    },
  ],
};
export default config;
