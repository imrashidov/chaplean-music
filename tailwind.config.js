/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      colors: {
        whitePrimary: "#E8F1F2",
        grayPrimary: "#EEEEEE",
        graySecondary: "#BBBBBB",
        bluePrimary: "#1D9BF0",
        blueSecondary: "#141526",
        headerColor: "#272C46",
        bodyColor: "#141526",
      },
    },
  },
  plugins: [],
};
