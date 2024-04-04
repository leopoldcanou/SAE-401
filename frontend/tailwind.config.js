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
          background: "hsl(var(--color-background) /<alpha-value>)",
          yellow: "hsl(var(--color-yellow) /<alpha-value>)",
          gray: "hsl(var(--color-gray) /<alpha-value>)",
          lightgray: "hsl(var(--color-light-gray) /<alpha-value>)",
          foreground: "hsl(var(--color-white) /<alpha-value>)",
          black: "hsl(var(--color-black) /<alpha-value>)",
          green: "hsl(var(--color-green) /<alpha-value>)",
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },

  },
  plugins: [],
}