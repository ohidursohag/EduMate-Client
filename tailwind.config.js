/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'primary': '#2C5F2D',
      'secondary': '#97BC62',
      'title': '#1F2937',
      'description': '#4B5563',
      'black': '#000',
      'white': '#fff'
    }
  },
  plugins: [],
};
