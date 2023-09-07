/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9EC2AD'
      },
      fontFamily: {
        display: ['Satisfy', 'sans-serif']
      }
    },
  },
  plugins: [],
}

