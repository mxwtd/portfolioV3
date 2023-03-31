/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    maxHeight: {
      'custom': '75vh',
    },
    height: {
      'custom': '68vh',
    },
    width: {
      'custom': '12vw',
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')],
}
