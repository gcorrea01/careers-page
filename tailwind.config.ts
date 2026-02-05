import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SunnyHUB BrandBook 2025 Official Palette
        "sunny-main": "#ff5a00", // Laranja Sunny - Primary
        "sunny-intense": "#eb4c1d", // Laranja Intenso - Highlights
        "sunny-yellow": "#f4ec2b", // Amarelo Solar - Details
        "sunny-medium": "#ffa800", // Laranja Médio
        "sunny-grey": "#EEEEEE", // Backgrounds
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
