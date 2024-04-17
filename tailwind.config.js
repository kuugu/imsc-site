/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lgpurple-800': '#3c033d', 
        'lgpurple-700': '#500451', 
        'lgpurple-600': '#720674', 
        'lgpurple-500': '#920794', 
        'lgpurple-400': '#af2bb9', 
        'lgpurple-300': '#c560cd', 
        'lgpurple-200': '#db9ee0', 
        'lgpurple-100': '#f4e2f5', 
      }
    },
  },
  plugins: [],
}