/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // solid colors
        pureWhite: '#ffffff', 
        pureBlack: '#000000', 

        // solid color variables
        white: '#f1f1f1',
        lightGrayText: '#d3d3d3',
        grayText: '#4d5055',
        grayBorder: '#a7a7a7',
        dark: '#2d3142',

        // primary colors
        primary: '#ffc654',
        primaryHover: '#f7b42d',

        // special hover color effect
        linkColor: '#2e72b2',
        linkHoverGradient1: '#2e72b2',
        linkHoverGradient2: '#3c87cd',
        linkHoverGradient3: '#d8ad48',
        linkHoverGradient4: '#f7b42d',
      },
      boxShadow: {
        standard: '0px 5px 25px rgba(0, 0, 0, 0.1)', // defined shadow for elements
      },
      borderRadius: {
        standard: '5px', // border radius for most containers
      },
      fontFamily: {
        headers: ['"PT Sans Caption"', 'sans-serif'], // fonts for headers
        text: ['"Poppins"', 'sans-serif'], // fonts for text
      },
    },
  },
  plugins: [],
};

