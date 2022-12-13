/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary colors
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228,39%,23%)",
        //secondary colors
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: " hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
