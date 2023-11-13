/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.1rem',
      sm: '0.3rem',
      base: '0.5rem',
      xl: '0.8rem',
      '2xl': '1.rem',
      '3xl': '1.2rem',
      '4xl': '1.4rem',
      '5xl': '1.6rem',
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR'],
      },
    },
  },
  plugins: [],
});

