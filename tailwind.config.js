/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3457D5',
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        PT: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
