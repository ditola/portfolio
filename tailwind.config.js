/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        charcoal: '#333333',
        darkgray: '#666666',
        gold: '#FFD700',
        emerald: '#00FFA3',
        softwhite: '#F5F5F5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

