/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'firstBlue': '#485DD9',
        'secondBlue': '#5068F2',
        'thirdBlue': '#5274D9',
        'green': '#02590F',
        'blackColor': '#1e1e1e',
        'whiteColor': '#f2f2f2'
      }
    },
    fontFamily: {
      'roboto': ['roboto', 'sans-serif']
    }
  },
  plugins: [],
}