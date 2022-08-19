const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'londrina-solid': ['"Londrina Solid"', 'cursive'],
        'sans': ['"Londrina Solid"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
