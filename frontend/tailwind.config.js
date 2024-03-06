/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-blue": "#503185",
        "custom-text": "#dcd0f5",
      }
    },
  },
  plugins: [],
}

