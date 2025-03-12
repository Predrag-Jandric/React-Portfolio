/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // solid colors
        pureWhite: "#ffffff",
        pureBlack: "#000000",

        // variables
        white: "#f1f1f1",
        grayText: "#575b60",
        dark: "#2d3142",

        bgGradientOne: "#2F4575",
        bgGradientTwo: "#344D83",

        // primary colors
        primary: "#ffc654",
        primaryHover: "#FFD685",
      },
      // Nunito
      // "Comic Sans MS" for testing
      fontFamily: {
        headings: ["Work Sans", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      fontSize: {
        headings: "1.5rem",
        body: "1.05rem",
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
      xxl: "1536px",
    },
    backgroundSize: {
      bigzoom: '200%', 
      normalzoom: '150%' 
    }
  },
  plugins: [],
};
