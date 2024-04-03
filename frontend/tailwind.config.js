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
          background: '#171717',
          yellow: '#D87B00',
          black: '#000000',
          white: '#FFFFFF',
          gray: '#9C9C9C',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },

  },
  plugins: [],
}