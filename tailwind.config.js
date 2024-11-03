/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(149, 56, 226, 1)',
        text1: 'rgba(9, 8, 15, 1)',
        text2: 'rgba(9, 8, 15, 0.6)',
        fullBg: 'rgba(9, 8, 15, 0.05)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

