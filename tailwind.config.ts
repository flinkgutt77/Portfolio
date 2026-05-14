import type { Config } from "tailwindcss";

// NOTE: This project uses Tailwind CSS v4.
// In Tailwind v4, design tokens are configured via CSS @theme in globals.css,
// not via this file. This file is kept as a reference for the design tokens.
// The active configuration lives in app/globals.css under the @theme directive.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        gold: {
          DEFAULT: "#c9a96e",
          hover: "#dfc08a",
        },
        text: {
          primary: "#f5f0e8",
          muted: "#888888",
        },
        border: "#222222",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
