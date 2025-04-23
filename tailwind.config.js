/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asap: ['"Asap Condensed"', 'sans-serif'],
      },
    },
    // colors:{
    //   salman:'#e8cccc'
    // }
  },
  plugins: [],
}