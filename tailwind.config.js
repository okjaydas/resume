/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    experimental: {
      colorMode: 'srgb', // Force sRGB instead of OKLCH
    },
    theme: {
      extend: {},
      colors: require("tailwindcss/colors"), // Force RGB colors instead of OKLCH
    },
    plugins: [],
  }