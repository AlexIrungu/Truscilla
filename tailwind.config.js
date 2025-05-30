/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#233329',
        'taupe-gray': '#8F8389',
        'sage': '#B6C197',
        'fulvous': '#E57C04',
        'misty-rose': '#FFD9DA',
        'blood-red': '#710000',
        'pakistan-green': '#03440C',
        'raw-umber': '#8B5D33',
      }
    },
  },
  plugins: [],
}