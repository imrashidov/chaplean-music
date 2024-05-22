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
        secondaryGray: "#EEEEEE",
        headerColor: "#272C46",
        bodyColor: "141526",
        bluePrimary: "#1D9BF0",
        blueSecondary: "#141526",
      },
    },
  },
  plugins: [],
};
