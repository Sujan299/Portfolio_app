/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-black-50': 'rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'primary_dark': '#0d1b2a',
        'medium_dark': "#1b263b",
        "light_dark": '#415a77',
        "light_white": '#778da9',
        'primary_white': '#e0e1dd'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
}