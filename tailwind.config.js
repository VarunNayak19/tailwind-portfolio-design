/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "hero": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Dm: ['DM Sans', 'sans - serif'],
      },
      colors: {
        'orange': '#F6683C',
        'footer': 'rgb(18, 43, 65)'
      },
    },
  },
  plugins: [],
}

