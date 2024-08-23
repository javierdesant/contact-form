/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
      colors: {
        'primary-lighter-green': 'hsl(148, 38%, 91%)',
        'primary-medium-green': 'hsl(169, 82%, 27%)',
        'primary-red': 'hsl(0, 66%, 54%)',
        'neutral-medium-grey': 'hsl(186, 15%, 59%)',
        'neutral-darker-grey': 'hsl(187, 24%, 22%)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

