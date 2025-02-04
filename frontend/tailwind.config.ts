import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primaryDark: '#213555', // Dark Mode Background
        secondaryDark: '#3E5879', // Dark Mode Secondary
        primaryLight: '#F5EFE7', // Light Mode Background
        secondaryLight: '#D8C4B6', // Light Mode Secondary
      },
    },
  },
  plugins: [],
} satisfies Config;
