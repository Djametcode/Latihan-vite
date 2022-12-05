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
      },
      animation: {
        scrolls: 'scrolls 2s linear'
      },
      keyframes: {
        scrolls: {
          '50%': {transform: 'translateX(-80%)'}
        }
      }
    },
  },
  plugins: [],
}
