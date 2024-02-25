/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#250D87",
        secondary: "#8466fe",
        title: "#1F2937",
        description: "#4B5563",
      },
      fontFamily: {
        Jost: ["var(--font-jost)"],
        Popins: ["var(--font-popins)"],
      },
      screens: {
        xs: "425px",
        "2xl": "1440px",
        "3xl": "1620px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
