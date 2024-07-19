const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      circle: 'circle',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        'midenight-blue': '#000040',
        navy: {
          blue1: '#01005F',
          blue2: '#00005D'
        },
      }
    },
  },
  plugins: [],
});
