/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Cararra': '#F0EFE9',
        'Dune': '#211F1D',
        'Pomegranate': '#EF4824',
        'Zorba': '#A39792',
        'ShuttleGray': '#5A6167',
        'Silver': '#cccccc',
      },
    },
  },
  plugins: [],
}