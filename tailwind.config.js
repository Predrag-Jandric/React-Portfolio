/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // solid colors
        pureWhite: "#ffffff",
        pureBlack: "#000000",

        // solid color variables
        white: "#f1f1f1",
        lightGrayText: "#d3d3d3",
        grayText: "#575b60",
        grayBorder: "#a7a7a7",
        dark: "#2d3142",

        // primary colors
        primary: "#ffc654",
        primaryHover: "#f7b42d",
      },
      fontFamily: {
        primary: ['"PT Sans Caption"', "sans-serif"],
        secondary: ['"Poppins"', "sans-serif"],
      },

      animation: {
        ripple: "ripple 0.6s linear",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      borderRadius: {
        custom: "5px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
