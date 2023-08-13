/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#327373",
        primaryContent: "#012623",
        primarySubcontent: "#becacd",
        primaryBase: "#F3F7F6",
        primaryAccent: "#02403A",
        primaryBg: "#F2E3D5",
      }
    },
  },
  plugins: [],
}

