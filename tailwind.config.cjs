/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'sand': ['Quicksand', 'sans-serif']
      },
      Image: {
        'books': "url('src/assets/Jepretan Layar 2565-10-05 pukul 15.10.11.png')"
      }
    },
  },
  plugins: [],
}
