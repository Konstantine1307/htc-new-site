/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prima': "#FF5CAF",
      },
      fontFamily: {
        'heading': ["Meriweather", "serif"],
        'headText': [ 'Anek Latin', 'sans-serif']
      },
      rotate: {
        '17': '17deg',
      },
      animation: {
        'bounce-slow': 'bounce 1s infinite', 
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
      }
    }
  },
  plugins: [],
};
