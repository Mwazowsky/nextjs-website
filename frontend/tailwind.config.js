/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'staatliches': ['Staatliches', 'cursive']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
