import daisyui from "daisyui";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const defaultThemes = require("daisyui/src/theming/themes");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...defaultThemes.light,
          primary: "#6366f1",
          secondary: "#8b5cf6",
          accent: "#06b6d4",
          neutral: "#334155",
        },
      },
      {
        dark: {
          ...defaultThemes.dark,
          primary: "#818cf8",
          secondary: "#a78bfa",
          accent: "#22d3ee",
          neutral: "#475569",
        },
      },
      {
        cupcake: {
          ...defaultThemes.cupcake,
          primary: "#ec4899",
          secondary: "#f472b6",
          accent: "#fbbf24",
          neutral: "#78716c",
        },
      },
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      {
        dracula: {
          ...defaultThemes.dracula,
          primary: "#bd93f9",
          secondary: "#ff79c6",
          accent: "#50fa7b",
          neutral: "#6272a4",
        },
      },
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      {
        coffee: {
          ...defaultThemes.coffee,
          primary: "#d4a574",
          secondary: "#a67c52",
          accent: "#e8b86d",
          neutral: "#3d2914",
        },
      },
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        ocean: {
          "color-scheme": "dark",
          primary: "#0ea5e9",
          secondary: "#06b6d4",
          accent: "#f59e0b",
          neutral: "#1e293b",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#e2e8f0",
        },
      },
      {
        rose: {
          "color-scheme": "light",
          primary: "#f43f5e",
          secondary: "#fb7185",
          accent: "#a78bfa",
          neutral: "#4b5563",
          "base-100": "#fdf2f8",
          "base-200": "#fce7f3",
          "base-300": "#fbcfe8",
        },
      },
    ],
  },
};
