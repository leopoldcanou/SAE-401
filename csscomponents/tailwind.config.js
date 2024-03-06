/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#D87B00',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },

  },
  plugins: [],
}