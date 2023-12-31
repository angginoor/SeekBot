/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#041817",
        secondary: "#032B34",
        aqua: "#81D2DD",
        oldGreen: "#12393E",
        dull: "B7B3B3",
        gray: "#CFCFCF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGreen: "rgba(129, 210, 221, 1)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      // backgroundImage: {
      //   bgImg: `url(${imgUrl})`
      // }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};