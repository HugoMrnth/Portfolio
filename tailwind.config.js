/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F29',
        card: '#FAF3E3'
      },
      height: {
        '2/full': '50vh',
        '80': '80vh'
      }, 
      minWidth: {
        '1/2': '50%',
        '48': '48%'
      },
      rotate: {
        'm12': '-12deg',
      },
      width: {
        '30': '30%'
      }
    },
    

  },
  plugins: [],
}
