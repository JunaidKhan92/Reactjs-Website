/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Varela Round', 'sans-serif'],
        Kanit:['Kanit', 'sans-serif']

      }
    },
  },
  plugins: [],
}

