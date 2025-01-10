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
        primaryHover: "#FFD685",
      },

      // "Comic Sans MS" for testing
      fontFamily: {
        headings: ["Work Sans", "serif"],
        body: ["Nunito", "serif"],
      },
      // fontWeight: {
      //   regular: 400,
      //   bold: 700,
      //   extrabold: 900,
      // },
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
